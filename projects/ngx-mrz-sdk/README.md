# NgxMrzSdk

Angular MRZ recognition library based on [Dynamsoft Label Recognizer](https://www.dynamsoft.com/label-recognition/overview/).

## Usage
Install the Angular library:

```bash
npm install ngx-mrz-sdk --save
``` 

Import the module in your project's main module `app.module.ts`:

```typescript
import { NgxMrzSdkModule } from 'ngx-mrz-sdk';

@NgModule({
  ...
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMrzSdkModule.forRoot({ 
      licenseKey: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==", 
      dceResourcePath: "assets/dynamsoft-camera-enhancer", 
      dlrResourcePath: "assets/dynamsoft-label-recognizer"}),
  ],
  ...
})
```

- `licenseKey`: get the license key from [Dynamsoft customer portal](https://www.dynamsoft.com/customer/license/trialLicense?product=dbr)
- `dceResourcePath` and `dlrResourcePath`: configure the static resources in `angular.json`, and set the output path:

    ```json
    "build": {
        "builder": "@angular-devkit/build-angular:browser",
        ...
        "assets": [
            "src/favicon.ico",
            "src/assets",
            {
              "glob": "**/*",
              "input": "./node_modules/dynamsoft-label-recognizer/dist",
              "output": "assets/dynamsoft-label-recognizer"
            },
            {
              "glob": "**/*",
              "input": "./node_modules/dynamsoft-camera-enhancer/dist",
              "output": "assets/dynamsoft-camera-enhancer"
            }
          ],
        ...
    }
    ```

After generating a new component, inject the `NgxMrzSdkService`:

```bash
ng generate component foo
```

```typescript
import { Component, OnInit } from '@angular/core';
import { NgxMrzSdkService } from 'ngx-mrz-sdk';

@Component({
  selector: 'app-mrz-reader',
  templateUrl: './mrz-reader.component.html',
})
export class MrzReaderComponent implements OnInit {
  constructor(private mrzSdkService: NgxMrzSdkService) {
  }

  ngOnInit(): void {
  }
}

```


## API
- `<ngx-mrz-reader(result)="onResultReady($event)"></ngx-mrz-reader>`: a component to scan MRZ from image files.
    - `result`: called when MRZ is recognized

- `<ngx-mrz-scanner(result)="onResultReady($event)"></ngx-mrz-scanner>`: a component to scan MRZ from video stream.
    - `result`: called when MRZ is recognized
    