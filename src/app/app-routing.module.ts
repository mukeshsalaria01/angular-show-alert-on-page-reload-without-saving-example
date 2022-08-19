import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './shared/components/can-deactivate/can-deactivate.guard';

const routes: Routes = [
   {
    path: '',
    component: AppComponent, children:[
      {
          path: 'contact',
          component: ContactComponent,
          canDeactivate: [CanDeactivateGuard]  
      }
    ]    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
