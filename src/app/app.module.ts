import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { appRoutes } from './appRoutes';
import { RouterModule } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from './services/quote.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    QuoteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSliderModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
