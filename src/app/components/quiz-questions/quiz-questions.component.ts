import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { QuizQuestion, Result } from 'src/app/models/quiz-question.model';
import { QuizService } from 'src/app/services/quiz.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  difficulties: string[] = ["Easy", "Medium", "Hard"];
  categories: Category | undefined;
  questions: QuizQuestion | undefined;
  question1: Result | undefined;
  question2: Result | undefined;
  question3: Result | undefined;
  question4: Result | undefined;
  question5: Result | undefined;
  quizAmount: number = 5;
  quizType: string = "multiple";
  formCreateQuiz = new FormGroup({
    categorySelect: new FormControl('', Validators.required),
    difficultySelect: new FormControl('', Validators.required)
  });
  formSubmitQuiz = new FormGroup({
    inputResponse1: new FormControl('', Validators.required),
    inputResponse2: new FormControl('', Validators.required),
    inputResponse3: new FormControl('', Validators.required),
    inputResponse4: new FormControl('', Validators.required),
    inputResponse5: new FormControl('', Validators.required)
  });
  isSubmitted01: boolean = false;

  constructor(private quizService: QuizService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.quizService.getCategories()
      .subscribe({
        next: response => {
          this.categories = response
        },
        error: error => {
          console.log("Error occurred: ", error)
        },
        complete: () => {
          console.log("getCategories completed.")
        }
      });
  }

  createQuiz() {
    // console.log(this.formCreateQuiz.value);
    this.isSubmitted01 = true;
    this.resetChoices();
    let catId: number = this.formCreateQuiz.value.categorySelect ? parseInt(this.formCreateQuiz.value.categorySelect) : 0;
    let difficulty: string = this.formCreateQuiz.value.difficultySelect ? this.formCreateQuiz.value.difficultySelect.toLowerCase() : "";
    this.quizService.getQuizQuestions(this.quizAmount, catId, difficulty, this.quizType)
      .subscribe({
        next: response => {
          response = this.setAllAnswers(response);
          this.questions = response;
          this.question1 = this.questions.results[0];
          this.question2 = this.questions.results[1];
          this.question3 = this.questions.results[2];
          this.question4 = this.questions.results[3];
          this.question5 = this.questions.results[4];
          console.log("QuizQuestions: ", this.questions);
          this.isSubmitted01 = false;
        },
        error: error => {
          console.log("Error occurred: ", error)
        },
        complete: () => {
          console.log("getQuizQuestions completed.")
        }
      });
  }

  setAllAnswers(quizQuestions: QuizQuestion) {
    quizQuestions.results.forEach(function (arrayItem) {
      arrayItem.all_answers = [...arrayItem.incorrect_answers];
      arrayItem.all_answers.push(arrayItem.correct_answer);
      arrayItem.all_answers = [...arrayItem.all_answers.sort(() => Math.random() - 0.5)];
    });

    return quizQuestions;
  }

  resetChoices() {
    this.questions = undefined;
    this.question1 = undefined;
    this.question2 = undefined;
    this.question3 = undefined;
    this.question4 = undefined;
    this.question5 = undefined;
  }

  submitQuiz() {
    // console.log("Quiz response: ", this.formSubmitQuiz.value);
    const navigationExtras: NavigationExtras = {
      state: { dataR: this.formSubmitQuiz.value, dataQ: this.questions },
    };
    this.router.navigate(['/results'], navigationExtras);
  }

}
