import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { CustomerFormComponent } from './customer-details/customer-details.component';
import { AccordionModule } from 'primeng/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    HomePageComponent,
    HeaderComponent,
    CustomerFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ContextMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    PaginatorModule,
    TabViewModule,
    ReactiveFormsModule,
    AccordionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
