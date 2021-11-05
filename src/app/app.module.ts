import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WithOnPushComponent } from './some-component/with-on-push-component.component';
import { WithoutOnPushComponent } from './other-component/without-on-push.component';

@NgModule({
  declarations: [
    AppComponent,
    WithOnPushComponent,
    WithoutOnPushComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
