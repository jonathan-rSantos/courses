import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule
  ],
})
export class AppMaterialModule { }
