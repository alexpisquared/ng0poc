import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule]
})
export class MyOwnCustomMaterialModuleModule {}
