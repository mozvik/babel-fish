import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hu_HU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hu from '@angular/common/locales/hu';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


//registerLocaleData(hu);


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzTypographyModule,
    NzNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
