import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/List/list.component';



@NgModule({
  declarations: [
    MainDbzComponent,
    ListDbzComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainDbzComponent
  ]
})
export class DbzModule { }
