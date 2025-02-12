import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { PlatListComponent } from './plat/plat-list/plat-list.component';
import { PlatItemComponent } from './plat/plat-item/plat-item.component';
import { PlatEditComponent } from './plat/plat-edit/plat-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuEditComponent,
    PlatListComponent,
    PlatItemComponent,
    PlatEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
