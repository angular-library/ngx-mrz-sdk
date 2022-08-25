import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LabelRecognizer } from 'dynamsoft-label-recognizer';
import { OverlayManager } from '../overlay';

@Component({
  selector: 'ngx-mrz-reader',
  templateUrl: './ngx-mrz-reader.component.html',
  styleUrls: ['./ngx-mrz-reader.component.css']
})
export class NgxMrzReaderComponent implements OnInit {

  isLoaded = false;
  overlay: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | undefined;
  reader: LabelRecognizer | undefined;
  overlayManager: OverlayManager;

  @Output() result = new EventEmitter<string>();

  constructor() {
    this.overlayManager = new OverlayManager();
   }

  ngOnInit(): void {
    this.overlayManager.initOverlay(document.getElementById('overlay') as HTMLCanvasElement);
    (async () => {
      this.reader = await LabelRecognizer.createInstance();
      await this.reader.updateRuntimeSettingsFromString("MRZ");
      LabelRecognizer.onResourcesLoaded = (resourcePath) => {
        this.isLoaded = true;
      };
      
    })();
  }

  onChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      let file = fileList.item(0) as any;
      if (file) {
        let fr = new FileReader();
        fr.onload = (event: any) => {
          let image = document.getElementById('image') as HTMLImageElement;
          if (image) {
            image.src = event.target.result;
            const img = new Image();

            img.onload = (event: any) => {
              this.overlayManager.updateOverlay(img.width, img.height);
              if (this.reader) {
                this.reader.recognize(file).then((results: any) => {
                  console.log(results);
                  let txts: any = [];
                  try {
                    if (results.length > 0) {
                      for (let result of results) {
                        for (let line of result.lineResults) {
                            txts.push(line.text);
                            this.overlayManager.drawOverlay(line.location.points, line.text);
                        }
                      }

                      this.result.emit(txts.join('\n'));
                    } else {
                      this.result.emit(txts.join(''));
                    }
                  } catch (e) {
                    alert(e);
                  }
                });
              }
            };
            img.src = event.target.result;
          }
        };
        fr.readAsDataURL(file);
      }
    }
  }

}
