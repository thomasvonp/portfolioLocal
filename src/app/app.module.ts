import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
import { FrontComponent } from './front/front.component';
import { PortfComponent } from './portf/portf.component';
import { ExpComponent } from './exp/exp.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { projectDialogComponent } from './portf/projectDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FrontComponent,
    PortfComponent,
    ExpComponent,
	projectDialogComponent,
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	DemoMaterialModule,
	FlexLayoutModule,
	HttpClientModule,
	ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent,
  SidebarComponent,
  FrontComponent,
  PortfComponent,
  ExpComponent
  ],
  entryComponents: [
  // ServerDialogComponent,
  projectDialogComponent
  ]
})
export class AppModule { }