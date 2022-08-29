# AngularMrzScanner

This project demonstrates how to build an Angular MRZ library with [Dynamsoft Label Recognizer](https://www.dynamsoft.com/label-recognition/overview/).

## Development Environment

```bash
ng --version

Angular CLI: 13.3.7
Node: 16.13.1
Package Manager: npm 8.1.2
OS: win32 x64

Angular: 13.3.10
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.7
@angular-devkit/build-angular   13.3.7
@angular-devkit/core            13.3.7
@angular-devkit/schematics      13.3.7
@angular/cli                    13.3.7
@schematics/angular             13.3.7
ng-packagr                      13.3.1
rxjs                            7.5.5
typescript                      4.6.4

```


## Dev and Debug the Angular Library Project
1. Install the dependencies:
    
    ```bash
    npm install
    ```
2. The `ngx-mrz-sdk` is located in `projects/ngx-mrz-sdk`. Add the `--watch` flag to run incremental build as a background process:

    ```bash
    ng build ngx-mrz-sdk --watch
    ```

3. Apply for a [30-day free trial license](https://www.dynamsoft.com/customer/license/trialLicense?product=dlr) and update the license key in `app.module.ts` file:
    
    ```typescript
    NgxMrzSdkModule.forRoot({ 
      licenseKey: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==", 
      dceResourcePath: "assets/dynamsoft-camera-enhancer", 
      dlrResourcePath: "assets/dynamsoft-label-recognizer"}),
    ```

4 `HTTPS` is required for web camera access. Run the Angular application as follows:
    
    ```bash
    ng serve --ssl
    ```

  ![Angular MRZ scanner](https://www.dynamsoft.com/codepool/img/2022/08/angular-mrz-scanner.png)

## Publish the Angular Library Project

```bash
ng build ngx-mrz-sdk
cd dist/ngx-mrz-sdk
npm publish
```


