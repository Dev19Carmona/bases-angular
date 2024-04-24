import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/List/list.component';
import { FormAddDbzComponent } from './components/form-add-dbz/form-add-dbz.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainDbzComponent,
    ListDbzComponent,
    FormAddDbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainDbzComponent
  ]
})
export class DbzModule {
}
