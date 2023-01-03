import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WysiwygComponent } from './wysiwyg/wysiwyg.component';

const routes: Routes = [
  {
    path: 'wysiwyg',
    component: WysiwygComponent,
  },
  {
    path: '',
    redirectTo: '/wysiwyg',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
