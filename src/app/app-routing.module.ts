import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shopping', component:ShoppingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component:OrderComponent  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {



 }
