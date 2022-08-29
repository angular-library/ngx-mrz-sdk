import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelRecognizer } from 'dynamsoft-label-recognizer';
import { CameraEnhancer, DrawingItem } from 'dynamsoft-camera-enhancer';
import { OverlayManager } from '../overlay';
import { MrzParser } from '../parser';

@Component({
  selector: 'ngx-mrz-scanner',
  templateUrl: './ngx-mrz-scanner.component.html',
  styleUrls: ['./ngx-mrz-scanner.component.css']
})
export class NgxMrzScannerComponent implements OnInit {
  @Input() showOverlay: boolean;
  isLoaded = false;
  overlay: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | undefined;
  cameraEnhancer: CameraEnhancer | undefined;
  scanner: LabelRecognizer | undefined;
  cameraInfo: any = {};
  videoSelect: HTMLSelectElement | undefined;
  overlayManager: OverlayManager;

  @Output() result = new EventEmitter<any>();

  constructor() {
    this.overlayManager = new OverlayManager();
    this.showOverlay = true;
  }

  ngOnInit(): void {
    this.videoSelect = document.querySelector('select#videoSource') as HTMLSelectElement;
    this.videoSelect.onchange = async () => {
      await this.openCamera();
    }
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
    LabelRecognizer.onResourcesLoaded = (resourcePath) => {
      this.isLoaded = true;
    };
    this.scanner = await LabelRecognizer.createInstance();
    await this.scanner.updateRuntimeSettingsFromString("MRZ");

    this.cameraEnhancer = await CameraEnhancer.createInstance();
    let uiElement = document.getElementById('videoContainer');
    if (uiElement) {
      await this.cameraEnhancer.setUIElement(uiElement);
    }

    if (this.showOverlay) await this.scanner.setImageSource(this.cameraEnhancer, { resultsHighlightBaseShapes: DrawingItem });
    await this.scanner.updateRuntimeSettingsFromString("MRZ");

    let cameras = await this.cameraEnhancer.getAllCameras();
    this.listCameras(cameras);
    await this.openCamera();

    this.scanner.onImageRead = (results: any) => {
      this.overlayManager.clearOverlay();
      console.log(results);
      let txts: any = [];
      try {
        if (results.length > 0) {
          for (let result of results) {
            for (let line of result.lineResults) {
              txts.push(line.text);
              if (this.showOverlay) this.overlayManager.drawOverlay(line.location.points, line.text);
            }
          }

          let parsedResults = "";
          if (txts.length == 2) {
            parsedResults = MrzParser.parseTwoLines(txts[0], txts[1]);
          }
          else if (txts.length == 3) {
            parsedResults = MrzParser.parseThreeLines(txts[0], txts[1], txts[2]);
          }
          this.result.emit([txts.join('\n'), parsedResults]);
        } else {
          this.result.emit(txts.join(''));
        }
      } catch (e) {
        alert(e);
      }
    };
    this.cameraEnhancer.on("played", (playCallBackInfo: any) => {
      this.updateResolution();
    });
    await this.scanner.startScanning(true);
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
