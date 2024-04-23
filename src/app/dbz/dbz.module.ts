import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainDbzComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainDbzComponent
  ]
})
export class DbzModule { }
