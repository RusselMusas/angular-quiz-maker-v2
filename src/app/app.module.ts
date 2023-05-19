import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { QuizService } from './services/quiz.service';

import { AppComponent } from './app.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizResultsComponent,
    QuizQuestionsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
