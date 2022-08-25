export interface Product {
  id: string;
  name: string;
  description: string;
}

export const products = [
  {
    id: 'reader',
    name: 'MRZ Reader',
    description: 'Scan MRZ from image files',
  },
  {
    id: 'scanner',
    name: 'MRZ Scanner',
    description: 'Scan MRZ from camera stream',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
