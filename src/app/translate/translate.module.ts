import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateComponent } from './translate.component';
import { TranslateRoutingModule } from './translate-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    TranslateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateRoutingModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzCheckboxModule,
    NzMessageModule
  ]
})
export class TranslateModule { }
