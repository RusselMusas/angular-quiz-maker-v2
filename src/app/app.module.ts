import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { QuizService } from './services/quiz.service';

import { AppComponent } from './app.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DecodeHtml } from './pipes/decode-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuizResultsComponent,
    QuizQuestionsComponent,
    NotFoundComponent,
    DecodeHtml
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProcessHttpmsgService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
