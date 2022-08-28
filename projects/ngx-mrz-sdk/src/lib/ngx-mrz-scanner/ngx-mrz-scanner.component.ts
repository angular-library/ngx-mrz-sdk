import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { LabelRecognizer } from 'dynamsoft-label-recognizer';
import { CameraEnhancer } from 'dynamsoft-camera-enhancer';
import { OverlayManager } from '../overlay';

@Component({
  selector: 'ngx-mrz-scanner',
  templateUrl: './ngx-mrz-scanner.component.html',
  styleUrls: ['./ngx-mrz-scanner.component.css']
})
export class NgxMrzScannerComponent implements OnInit {
  isLoaded = false;
  overlay: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | undefined;
  cameraEnhancer: CameraEnhancer | undefined;
  labelRecognizer: LabelRecognizer | undefined;
  cameraInfo: any = {};
  videoSelect: HTMLSelectElement | undefined;
  overlayManager: OverlayManager;
  
  @Output() result = new EventEmitter<string>();

  constructor() {
    this.overlayManager = new OverlayManager();
  }

  ngOnInit(): void {
    this.videoSelect = document.querySelector('select#videoSource') as HTMLSelectElement;
    this.overlayManager.initOverlay(document.getElementById('overlay') as HTMLCanvasElement);
    (async () => {
      await this.initCameraEnhancer();
    })();
  }

  updateResolution(): void {
    if (this.cameraEnhancer) {
      let resolution = this.cameraEnhancer.getResolution();
      this.overlayManager.updateOverlay(resolution[0], resolution[1]);
    }
  }

  async initCameraEnhancer(): Promise<void> {
    this.cameraEnhancer = await CameraEnhancer.createInstance();
    this.isLoaded = true;
  }

  async openCamera(): Promise<void> {
    this.overlayManager.clearOverlay();
    if (this.videoSelect) {
      let deviceId = this.videoSelect.value;
      if (this.cameraEnhancer) {
        await this.cameraEnhancer.selectCamera(this.cameraInfo[deviceId]);
      }
    }

  }

  listCameras(deviceInfos: any): void {
    for (var i = 0; i < deviceInfos.length; ++i) {
      var deviceInfo = deviceInfos[i];
      var option = document.createElement('option');
      option.value = deviceInfo.deviceId;
      option.text = deviceInfo.label;
      this.cameraInfo[deviceInfo.deviceId] = deviceInfo;
      if (this.videoSelect) this.videoSelect.appendChild(option);
    }
  }
}
