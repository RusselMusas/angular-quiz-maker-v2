"use strict";
(self["webpackChunkquiz_maker"] = self["webpackChunkquiz_maker"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'quiz-maker';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app-routing.module */ 4578);
/* harmony import */ var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/process-httpmsg.service */ 9899);
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/quiz.service */ 4993);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz-results/quiz-results.component */ 758);
/* harmony import */ var _components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/quiz-questions/quiz-questions.component */ 9103);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 1828);
/* harmony import */ var _pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/decode-html.pipe */ 7604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_1__.ProcessHttpmsgService, _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__.QuizService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _components_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_4__.QuizResultsComponent, _components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_5__.QuizQuestionsComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_7__.DecodeHtml],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1828:
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NotFoundComponent {}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 8,
  vars: 0,
  consts: [[1, "container-fluid", "text-secondary", "text-center"], [1, "m-4"], ["src", "assets/images/404-page-not-found-error.jpg", "alt", "Sorry, page not found", "width", "60%", 1, "img-fluid", "rounded"], [1, "text-large"], ["routerLink", "/questions", "role", "button", 1, "text-info"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Return to quiz questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9103:
/*!***********************************************************************!*\
  !*** ./src/app/components/quiz-questions/quiz-questions.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizQuestionsComponent": () => (/* binding */ QuizQuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/quiz.service */ 4993);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/decode-html.pipe */ 7604);







function QuizQuestionsComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
  }
}
function QuizQuestionsComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r8, " ");
  }
}
function QuizQuestionsComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", element_r9)("id", "q1" + j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "q1" + j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, element_r9));
  }
}
function QuizQuestionsComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const j_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", element_r11)("id", "q2" + j_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "q2" + j_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, element_r11));
  }
}
function QuizQuestionsComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const j_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", element_r13)("id", "q3" + j_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "q3" + j_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, element_r13));
  }
}
function QuizQuestionsComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const j_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", element_r15)("id", "q4" + j_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "q4" + j_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, element_r15));
  }
}
function QuizQuestionsComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const j_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", element_r17)("id", "q5" + j_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "q5" + j_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, element_r17));
  }
}
class QuizQuestionsComponent {
  constructor(quizService, router) {
    this.quizService = quizService;
    this.router = router;
    this.difficulties = ["Easy", "Medium", "Hard"];
    this.quizAmount = 5;
    this.quizType = "multiple";
    this.formCreateQuiz = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      categorySelect: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      difficultySelect: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
    this.formSubmitQuiz = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      inputResponse1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      inputResponse2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      inputResponse3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      inputResponse4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      inputResponse5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
    this.isSubmitted01 = false;
  }
  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.quizService.getCategories().subscribe({
      next: response => {
        this.categories = response;
      },
      error: error => {
        console.log("Error occurred: ", error);
      },
      complete: () => {
        console.log("getCategories completed.");
      }
    });
  }
  createQuiz() {
    // console.log(this.formCreateQuiz.value);
    this.isSubmitted01 = true;
    this.resetChoices();
    let catId = this.formCreateQuiz.value.categorySelect ? parseInt(this.formCreateQuiz.value.categorySelect) : 0;
    let difficulty = this.formCreateQuiz.value.difficultySelect ? this.formCreateQuiz.value.difficultySelect.toLowerCase() : "";
    this.quizService.getQuizQuestions(this.quizAmount, catId, difficulty, this.quizType).subscribe({
      next: response => {
        response = this.setAllAnswers(response);
        console.log("QuizQuestions response: ", response);
        this.questions = response;
        this.question1 = this.questions.results[0];
        this.question2 = this.questions.results[1];
        this.question3 = this.questions.results[2];
        this.question4 = this.questions.results[3];
        this.question5 = this.questions.results[4];
        this.isSubmitted01 = false;
      },
      error: error => {
        console.log("Error occurred: ", error);
      },
      complete: () => {
        console.log("getQuizQuestions completed.");
      }
    });
  }
  setAllAnswers(quizQuestions) {
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
    const navigationExtras = {
      state: {
        dataR: this.formSubmitQuiz.value,
        dataQ: this.questions
      }
    };
    this.router.navigate(['/results'], navigationExtras);
  }
}
QuizQuestionsComponent.ɵfac = function QuizQuestionsComponent_Factory(t) {
  return new (t || QuizQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
QuizQuestionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: QuizQuestionsComponent,
  selectors: [["app-quiz-questions"]],
  decls: 68,
  vars: 30,
  consts: [[1, "container-fluid"], [1, "row"], [1, "col-8", "mx-auto", "pt-2"], [1, "text-center", "text-uppercase", "mb-4", "mt-2", "font-weight-bold"], [1, "form-inline", "row", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-2", "col-5"], ["for", "categorySelect", 1, "sr-only"], ["id", "categorySelect", "formControlName", "categorySelect", 1, "form-control", "form-control-sm", "w-100"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "difficultySelect", 1, "sr-only"], ["id", "difficultySelect", "formControlName", "difficultySelect", 1, "form-control", "form-control-sm", "w-100"], [1, "form-group", "mb-2", "col-2", "justify-content-end"], ["type", "submit", "id", "createBtn", 1, "btn", "btn-light", "border-secondary", "btn-sm", "w-100", 3, "disabled"], ["role", "status", 1, "spinner-border", "text-secondary", "ml-2", 3, "hidden"], [1, "sr-only"], [1, "form-inline", "row", "px-4", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4", "col-12"], [1, "form-group", "question"], [1, "text-small"], [1, "form-group", "radios"], [4, "ngFor", "ngForOf"], [1, "form-group", "mb-2", "col-12"], [1, "d-none"], [1, "form-group", "button", "mb-2", "mt-4", "col-12", "justify-content-center"], ["name", "submitBtn", 1, "btn", "btn-sm", "w-75", "btn-secondary", 3, "hidden"], [3, "value"], ["type", "radio", "name", "inputResponse1", "formControlName", "inputResponse1", 3, "value", "id"], [1, "radio", "btn", "btn-sm", 3, "for"], ["type", "radio", "name", "inputResponse2", "formControlName", "inputResponse2", 3, "value", "id"], ["type", "radio", "name", "inputResponse3", "formControlName", "inputResponse3", 3, "value", "id"], ["type", "radio", "name", "inputResponse4", "formControlName", "inputResponse4", 3, "value", "id"], ["type", "radio", "name", "inputResponse5", "formControlName", "inputResponse5", 3, "value", "id"]],
  template: function QuizQuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Quiz Maker");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function QuizQuestionsComponent_Template_form_ngSubmit_5_listener() {
        return ctx.createQuiz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "select", 7)(10, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Select a category");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QuizQuestionsComponent_option_12_Template, 2, 2, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Difficulty");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "select", 11)(17, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Select difficulty");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, QuizQuestionsComponent_option_19_Template, 2, 2, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Processing...");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "form", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function QuizQuestionsComponent_Template_form_ngSubmit_26_listener() {
        return ctx.submitQuiz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, QuizQuestionsComponent_ng_container_33_Template, 5, 6, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "div", 18)(36, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, QuizQuestionsComponent_ng_container_40_Template, 5, 6, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22)(42, "div", 18)(43, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, QuizQuestionsComponent_ng_container_47_Template, 5, 6, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 22)(49, "div", 18)(50, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, QuizQuestionsComponent_ng_container_54_Template, 5, 6, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 22)(56, "div", 18)(57, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, QuizQuestionsComponent_ng_container_61_Template, 5, 6, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 24)(66, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formCreateQuiz);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories == null ? null : ctx.categories.trivia_categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.difficulties);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formCreateQuiz.invalid || ctx.isSubmitted01);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.isSubmitted01);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formSubmitQuiz);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 18, ctx.question1 == null ? null : ctx.question1.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.question1 == null ? null : ctx.question1.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 20, ctx.question2 == null ? null : ctx.question2.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.question2 == null ? null : ctx.question2.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 22, ctx.question3 == null ? null : ctx.question3.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.question3 == null ? null : ctx.question3.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 24, ctx.question4 == null ? null : ctx.question4.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.question4 == null ? null : ctx.question4.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 26, ctx.question5 == null ? null : ctx.question5.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.question5 == null ? null : ctx.question5.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 28, ctx.formSubmitQuiz.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.formSubmitQuiz.invalid || !ctx.questions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe, _pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_1__.DecodeHtml],
  styles: [".radios[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    border-color: #15b957;\r\n    color: #15b957;\r\n    display: inline-block;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    margin: 3px;\r\n    font-size: small;\r\n    white-space: nowrap;\r\n}\r\n\r\n.radios[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]:hover {\r\n    background-color: #15b957;\r\n    border-color: #15b957;\r\n    color: #ffffff;\r\n}\r\n\r\n.radios[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.radios[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio[_ngcontent-%COMP%] {\r\n    background-color: #15b957;\r\n    border-color: #15b957;\r\n    color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6LXF1ZXN0aW9ucy9xdWl6LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW9zIC5yYWRpbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTViOTU3O1xyXG4gICAgY29sb3I6ICMxNWI5NTc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucmFkaW9zIC5yYWRpbzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTViOTU3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTViOTU3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5yYWRpb3MgaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJhZGlvcyBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkKy5yYWRpbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTViOTU3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTViOTU3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 758:
/*!*******************************************************************!*\
  !*** ./src/app/components/quiz-results/quiz-results.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizResultsComponent": () => (/* binding */ QuizResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/decode-html.pipe */ 7604);




const _c0 = function (a0, a1, a2) {
  return {
    "btn-outline-success": a0,
    "btn-success": a1,
    "btn-danger": a2
  };
};
function QuizResultsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const j_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r0.isIndifferent(element_r5, ctx_r0.question1 == null ? null : ctx_r0.question1.correct_answer, ctx_r0.quizResponse == null ? null : ctx_r0.quizResponse.inputResponse1), ctx_r0.isCorrectAnswer(element_r5, ctx_r0.question1 == null ? null : ctx_r0.question1.correct_answer), ctx_r0.isIncorrectAnswer(element_r5, ctx_r0.question1 == null ? null : ctx_r0.question1.correct_answer, ctx_r0.quizResponse == null ? null : ctx_r0.quizResponse.inputResponse1)))("value", element_r5)("id", "q1" + j_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r5));
  }
}
function QuizResultsComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const j_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r1.isIndifferent(element_r7, ctx_r1.question2 == null ? null : ctx_r1.question2.correct_answer, ctx_r1.quizResponse == null ? null : ctx_r1.quizResponse.inputResponse2), ctx_r1.isCorrectAnswer(element_r7, ctx_r1.question2 == null ? null : ctx_r1.question2.correct_answer), ctx_r1.isIncorrectAnswer(element_r7, ctx_r1.question2 == null ? null : ctx_r1.question2.correct_answer, ctx_r1.quizResponse == null ? null : ctx_r1.quizResponse.inputResponse2)))("value", element_r7)("id", "q2" + j_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r7));
  }
}
function QuizResultsComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r2.isIndifferent(element_r9, ctx_r2.question3 == null ? null : ctx_r2.question3.correct_answer, ctx_r2.quizResponse == null ? null : ctx_r2.quizResponse.inputResponse3), ctx_r2.isCorrectAnswer(element_r9, ctx_r2.question3 == null ? null : ctx_r2.question3.correct_answer), ctx_r2.isIncorrectAnswer(element_r9, ctx_r2.question3 == null ? null : ctx_r2.question3.correct_answer, ctx_r2.quizResponse == null ? null : ctx_r2.quizResponse.inputResponse3)))("value", element_r9)("id", "q3" + j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r9));
  }
}
function QuizResultsComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const j_r12 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r3.isIndifferent(element_r11, ctx_r3.question4 == null ? null : ctx_r3.question4.correct_answer, ctx_r3.quizResponse == null ? null : ctx_r3.quizResponse.inputResponse4), ctx_r3.isCorrectAnswer(element_r11, ctx_r3.question4 == null ? null : ctx_r3.question4.correct_answer), ctx_r3.isIncorrectAnswer(element_r11, ctx_r3.question4 == null ? null : ctx_r3.question4.correct_answer, ctx_r3.quizResponse == null ? null : ctx_r3.quizResponse.inputResponse4)))("value", element_r11)("id", "q4" + j_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r11));
  }
}
function QuizResultsComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const j_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r4.isIndifferent(element_r13, ctx_r4.question5 == null ? null : ctx_r4.question5.correct_answer, ctx_r4.quizResponse == null ? null : ctx_r4.quizResponse.inputResponse5), ctx_r4.isCorrectAnswer(element_r13, ctx_r4.question5 == null ? null : ctx_r4.question5.correct_answer), ctx_r4.isIncorrectAnswer(element_r13, ctx_r4.question5 == null ? null : ctx_r4.question5.correct_answer, ctx_r4.quizResponse == null ? null : ctx_r4.quizResponse.inputResponse5)))("value", element_r13)("id", "q5" + j_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r13));
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "bg-danger": a0,
    "bg-warning": a1,
    "bg-success": a2
  };
};
class QuizResultsComponent {
  constructor() {
    this.quizScore = 0;
    this.totalQuiz = 0;
  }
  ngOnInit() {
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
    this.totalQuiz = this.quizQuestion?.results ? this.quizQuestion.results.length : 0;
  }
  isIndifferent(element, correct_answer, inputResponse) {
    return element !== correct_answer && element !== inputResponse;
  }
  isCorrectAnswer(element, correct_answer) {
    return element === correct_answer;
  }
  isIncorrectAnswer(element, correct_answer, inputResponse) {
    return element !== correct_answer && element === inputResponse;
  }
  computeScore(quizResponse) {
    let score = 0;
    if (!quizResponse) {
      return score;
    }
    this.quizQuestion?.results.forEach(function (arrayItem, index) {
      if (index === 0 && arrayItem.correct_answer === quizResponse.inputResponse1) {
        score += 1;
      }
      if (index === 1 && arrayItem.correct_answer === quizResponse.inputResponse2) {
        score += 1;
      }
      if (index === 2 && arrayItem.correct_answer === quizResponse.inputResponse3) {
        score += 1;
      }
      if (index === 3 && arrayItem.correct_answer === quizResponse.inputResponse4) {
        score += 1;
      }
      if (index === 4 && arrayItem.correct_answer === quizResponse.inputResponse5) {
        score += 1;
      }
    });
    return score;
  }
}
QuizResultsComponent.ɵfac = function QuizResultsComponent_Factory(t) {
  return new (t || QuizResultsComponent)();
};
QuizResultsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuizResultsComponent,
  selectors: [["app-quiz-results"]],
  decls: 47,
  vars: 26,
  consts: [[1, "container-fluid"], [1, "row"], [1, "col-8", "mx-auto", "pt-2"], [1, "text-center", "text-uppercase", "mb-4", "mt-2", "font-weight-bold"], [1, "form-inline", "row", "px-4"], [1, "form-group", "mb-4", "col-12"], [1, "form-group", "question"], [1, "text-small"], [1, "form-group", "radios"], [4, "ngFor", "ngForOf"], [1, "form-group", "mb-2", "col-12"], [1, "form-group", "button", "mb-2", "mt-4", "col-12", "justify-content-center"], [1, "my-2", "px-3", 3, "ngClass"], ["type", "button", "routerLink", "/questions", 1, "btn", "btn-sm", "w-75", "btn-secondary"], ["name", "inputResponse1", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse2", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse3", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse4", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse5", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"]],
  template: function QuizResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Results");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, QuizResultsComponent_ng_container_12_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "div", 6)(15, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, QuizResultsComponent_ng_container_19_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10)(21, "div", 6)(22, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, QuizResultsComponent_ng_container_26_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10)(28, "div", 6)(29, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, QuizResultsComponent_ng_container_33_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10)(35, "div", 6)(36, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, QuizResultsComponent_ng_container_40_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11)(42, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11)(45, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Create a new quiz");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, ctx.question1 == null ? null : ctx.question1.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question1 == null ? null : ctx.question1.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, ctx.question2 == null ? null : ctx.question2.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question2 == null ? null : ctx.question2.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 16, ctx.question3 == null ? null : ctx.question3.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question3 == null ? null : ctx.question3.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 18, ctx.question4 == null ? null : ctx.question4.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question4 == null ? null : ctx.question4.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 20, ctx.question5 == null ? null : ctx.question5.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question5 == null ? null : ctx.question5.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](22, _c1, ctx.quizScore <= 1, ctx.quizScore > 1 && ctx.quizScore <= 3, ctx.quizScore > 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("You scored " + ctx.quizScore + " out of " + ctx.totalQuiz);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_0__.DecodeHtml],
  styles: ["button.btn-outline-success[_ngcontent-%COMP%], button.btn-success[_ngcontent-%COMP%], button.btn-danger[_ngcontent-%COMP%] {\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    font-size: small;\r\n}\r\n\r\n.btn-outline-success[_ngcontent-%COMP%]:hover {\r\n    color: #28a745;\r\n    background-color: #fff;\r\n    border-color: #28a745;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6LXJlc3VsdHMvcXVpei1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uYnRuLW91dGxpbmUtc3VjY2VzcyxcclxuYnV0dG9uLmJ0bi1zdWNjZXNzLFxyXG5idXR0b24uYnRuLWRhbmdlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4578:
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/quiz-questions/quiz-questions.component */ 9103);
/* harmony import */ var _components_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/quiz-results/quiz-results.component */ 758);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/not-found/not-found.component */ 1828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  redirectTo: '/questions',
  pathMatch: 'full'
}, {
  path: 'questions',
  component: _components_quiz_questions_quiz_questions_component__WEBPACK_IMPORTED_MODULE_0__.QuizQuestionsComponent
}, {
  path: 'results',
  component: _components_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_1__.QuizResultsComponent
}, {
  path: 'not-found',
  component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent
}, {
  path: '**',
  redirectTo: '/not-found'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7604:
/*!*******************************************!*\
  !*** ./src/app/pipes/decode-html.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecodeHtml": () => (/* binding */ DecodeHtml)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DecodeHtml {
  transform(value) {
    if (!value) return "";
    const tempElement = document.createElement("div");
    tempElement.innerHTML = value;
    return tempElement.innerText;
  }
}
DecodeHtml.ɵfac = function DecodeHtml_Factory(t) {
  return new (t || DecodeHtml)();
};
DecodeHtml.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "decodeHtml",
  type: DecodeHtml,
  pure: true
});

/***/ }),

/***/ 9899:
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessHttpmsgService": () => (/* binding */ ProcessHttpmsgService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);


class ProcessHttpmsgService {
  constructor() {}
  handleError(error) {
    let errMsg = {
      status: -1,
      message: ""
    }; // Default values
    if (error && error.error && error.error.message && error.error.status) {
      errMsg.status = error.error.status;
      errMsg.message = error.error.message;
    } else if (error.error instanceof ErrorEvent) {
      errMsg.status = 50;
      errMsg.message = error.error.message;
    } else if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.TimeoutError) {
      errMsg.status = 60;
      errMsg.message = "Timeout exceeded!";
    } else {
      errMsg.status = error.status;
      errMsg.message = error.message;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => errMsg);
  }
}
ProcessHttpmsgService.ɵfac = function ProcessHttpmsgService_Factory(t) {
  return new (t || ProcessHttpmsgService)();
};
ProcessHttpmsgService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProcessHttpmsgService,
  factory: ProcessHttpmsgService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4993:
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizService": () => (/* binding */ QuizService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process-httpmsg.service */ 9899);






class QuizService {
  constructor(http, processHttpMsg) {
    this.http = http;
    this.processHttpMsg = processHttpMsg;
    this.apiBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.timeOut = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.httpTimeOut;
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.headers = this.headers.set('Accept', 'application/json; charset=utf-8');
  }
  getCategories() {
    // console.log("API Url: ", this.apiBaseUrl);
    console.log(this.apiBaseUrl + '/api_category.php');
    return this.http.get(this.apiBaseUrl + '/api_category.php', {
      headers: this.headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timeout)(this.timeOut)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.retry)(3)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.processHttpMsg.handleError));
  }
  getQuizQuestions(amount, catId, difficulty, type) {
    // console.log("API Url: ", this.apiBaseUrl);
    let reqParameters = `amount=${amount}&category=${catId}&difficulty=${difficulty}&type=${type}`;
    console.log(this.apiBaseUrl + `/api.php?${reqParameters}`);
    return this.http.get(this.apiBaseUrl + `/api.php?${reqParameters}`, {
      headers: this.headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timeout)(this.timeOut)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.retry)(3)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.processHttpMsg.handleError));
  }
}
QuizService.ɵfac = function QuizService_Factory(t) {
  return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_1__.ProcessHttpmsgService));
};
QuizService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: QuizService,
  factory: QuizService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  apiUrl: 'https://opentdb.com',
  httpTimeOut: 30000
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.fdf37285b5b2f0e1.js.map