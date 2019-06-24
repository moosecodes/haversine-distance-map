import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapRoutingModule } from './google-map-routing.module';
import { GoogleMapComponent } from './google-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [GoogleMapComponent],
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLOHEF0Y58CoNnPE0q-_hnMnv_IV6Zw7I',
    }),
  ],
})
export class GoogleMapModule {}
