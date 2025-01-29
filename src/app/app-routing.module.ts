import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'tech-stack',
    loadChildren: () => import('./components/tech-stack/tech-stack.module')
      .then(m => m.TechStackModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
