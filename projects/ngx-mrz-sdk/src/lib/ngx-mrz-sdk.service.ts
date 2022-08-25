import { Injectable, Optional } from '@angular/core';
import { LabelRecognizer } from 'dynamsoft-label-recognizer';
import { CameraEnhancer } from 'dynamsoft-camera-enhancer';

export class MrzSdkServiceConfig {
  licenseKey = '';
  dceResourcePath = '';
  dlrResourcePath = '';
}

@Injectable({
  providedIn: 'root'
})

export class NgxMrzSdkService {

  constructor(@Optional() config?: MrzSdkServiceConfig) { 
    if (config) { 
      LabelRecognizer.license = config.licenseKey;
      LabelRecognizer.engineResourcePath = config.dlrResourcePath;
      CameraEnhancer.engineResourcePath = config.dceResourcePath;
    }
  }
}
