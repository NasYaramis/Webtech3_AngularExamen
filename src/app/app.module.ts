import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OvertredingenComponent } from './components/overtredingen/overtredingen.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ZoekOvertredingenComponent } from './components/zoek-overtredingen/zoek-overtredingen.component';
@NgModule({
  declarations: [
    AppComponent,
    OvertredingenComponent,
    ZoekOvertredingenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forChild([
      {path: '', component: ZoekOvertredingenComponent},
      {path: 'list', component: OvertredingenComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
