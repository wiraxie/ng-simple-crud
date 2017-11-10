import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { CustomFormsModule } from 'ng2-validation'

//outside
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { stockService } from './stock.service'; //sama2

@NgModule({
  //deklarasi komponen & directive masuk sini
  declarations: 
  [
    AppComponent,
	HighlightDirective,
  ],

  //module masuk sini
  imports: 
  [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    CustomFormsModule,
    AlertModule.forRoot(),
  ],
  providers: [stockService], //servis masuk sini
  bootstrap: [AppComponent]
})
export class AppModule { }
