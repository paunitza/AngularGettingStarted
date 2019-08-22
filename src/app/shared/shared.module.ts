import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent],

  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [StarComponent, ConvertToSpacesPipe, FormsModule, BrowserModule]
})
export class SharedModule { }
