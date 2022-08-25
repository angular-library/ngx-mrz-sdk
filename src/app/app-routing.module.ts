import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MrzReaderComponent } from './mrz-reader/mrz-reader.component';
import { MrzScannerComponent } from './mrz-scanner/mrz-scanner.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
      { path: 'mrz-reader', component: MrzReaderComponent },
      { path: 'mrz-scanner', component: MrzScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
