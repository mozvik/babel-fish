import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzGridModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }
