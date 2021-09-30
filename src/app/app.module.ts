import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderComponent } from './order/order.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrderComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
