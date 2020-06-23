import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
