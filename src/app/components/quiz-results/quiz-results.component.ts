import { Component, OnInit } from '@angular/core';
import { FormResponse, QuizQuestion, Result } from 'src/app/models/quiz-question.model';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {

  quizResponse: FormResponse | undefined;
  quizQuestion: QuizQuestion | undefined;
  question1: Result | undefined;
  question2: Result | undefined;
  question3: Result | undefined;
  question4: Result | undefined;
  question5: Result | undefined;
  quizScore: number = 0;
  totalQuiz: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.quizResponse = window.history.state['dataR'];
    this.quizQuestion = window.history.state['dataQ'];
    this.question1 = this.quizQuestion?.results[0];
    this.question2 = this.quizQuestion?.results[1];
    this.question3 = this.quizQuestion?.results[2];
    this.question4 = this.quizQuestion?.results[3];
    this.question5 = this.quizQuestion?.results[4];
    // console.log(this.quizQuestion);
    // console.log(this.quizResponse);
    this.quizScore = this.computeScore(this.quizResponse ? this.quizResponse : undefined);
    this.totalQuiz = this.quizQuestion?.results? this.quizQuestion.results.length : 0;
  }

  isIndifferent(element: string, correct_answer: string | undefined, inputResponse: string | undefined) {
    return element !== correct_answer && element !== inputResponse;
  }

  isCorrectAnswer(element: string, correct_answer: string | undefined) {
    return element === correct_answer;
  }

  isIncorrectAnswer(element: string, correct_answer: string | undefined, inputResponse: string | undefined) {
    return element !== correct_answer && element === inputResponse;
  }

  computeScore(quizResponse: FormResponse | undefined): number {
    let score: number = 0;
    if(!quizResponse) {
      return score;
    }

    this.quizQuestion?.results.forEach(function (arrayItem, index) {
      if(index === 0 && arrayItem.correct_answer === quizResponse.inputResponse1) {
        score += 1;
      }
      if(index === 1 && arrayItem.correct_answer === quizResponse.inputResponse2) {
        score += 1;
      }
      if(index === 2 && arrayItem.correct_answer === quizResponse.inputResponse3) {
        score += 1;
      }
      if(index === 3 && arrayItem.correct_answer === quizResponse.inputResponse4) {
        score += 1;
      }
      if(index === 4 && arrayItem.correct_answer === quizResponse.inputResponse5) {
        score += 1;
      }
    });

    return score;
  }

}
