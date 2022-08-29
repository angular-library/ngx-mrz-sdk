# Angular Mrz Sdk

Ngx-mrz-sdk is an Angular MRZ recognition module built with [Dynamsoft Label Recognizer](https://www.npmjs.com/package/dynamsoft-label-recognizer) and [Dynamsoft Camera Enhancer](https://www.npmjs.com/package/dynamsoft-camera-enhancer).


## Usage
1. Install the Angular library:

  ```bash
  npm install ngx-mrz-sdk --save
  ``` 

2. Import the module in `app.module.ts`:

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

    - `licenseKey`: get the license key of Dynamsoft Label Recognizer from [Dynamsoft customer portal](https://www.dynamsoft.com/customer/license/trialLicense?product=dlr).
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

3. Generate a new component and inject the `NgxMrzSdkService` in *.ts file:

    ```bash
    ng generate component foo
    ```

    ```typescript
    import { Component, OnInit } from '@angular/core';
    import { NgxMrzSdkService } from 'ngx-mrz-sdk';

    @Component({
      selector: 'app-foo',
      templateUrl: './foo.component.html',
      styleUrls: ['./foo.component.css']  
    })
    export class FooComponent implements OnInit {
      constructor(private mrzSdkService: NgxMrzSdkService) {
      }

      ngOnInit(): void {
      }
    }

    ```

4. Include `ngx-mrz-reader` or `ngx-mrz-scanner` in HTML file:
    - `<ngx-mrz-reader>`: a component to scan MRZ from image files.
    - `<ngx-mrz-scanner>`: a component to scan MRZ from a video stream.

5. Set the **properties**:
    - result: an array including the recognized MRZ characters and the extracted information.
    - showOverlay: a boolean value indicating whether to show the overlay.
    
    For example:

    ```html
    <ngx-mrz-scanner (result)="onResultReady($event)" [showOverlay]="true"></ngx-mrz-scanner>
    ```
  

    

## Sample Code
[https://github.com/yushulx/ngx-mrz-sdk/tree/main/src/app](https://github.com/yushulx/ngx-mrz-sdk/tree/main/src/app)        

![Angular MRZ scanner](https://camo.githubusercontent.com/1a3c8b09077184eb67d8b0c2ae60ece67976e55f711fb76307249ddf899adc02/68747470733a2f2f7777772e64796e616d736f66742e636f6d2f636f6465706f6f6c2f696d672f323032322f30382f616e67756c61722d6d727a2d7363616e6e65722e706e67)