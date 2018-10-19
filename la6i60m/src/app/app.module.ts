import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';

// import { DataService } from './data.service';
// import { DataNesService } from './data-nes.service';
import { ApPocComponent } from './ap-poc/ap-poc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCoresComponent } from './user-cores/user-cores.component';
import { NymiBandsComponent } from './nymi-bands/nymi-bands.component';
import { UserCoreDetailsComponent } from './user-core-details/user-core-details.component';
import { NymiBandDetailsComponent } from './nymi-band-details/nymi-band-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    ApPocComponent,
    UserCoresComponent,
    NymiBandsComponent,
    UserCoreDetailsComponent,
    NymiBandDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [], // DataService], // ??
  bootstrap: [AppComponent]
})
export class AppModule { }
