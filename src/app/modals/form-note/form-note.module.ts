import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormNotePageRoutingModule } from './form-note-routing.module';

import { FormNotePage } from './form-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormNotePageRoutingModule
  ],
  declarations: [FormNotePage]
})
export class FormNotePageModule {}
