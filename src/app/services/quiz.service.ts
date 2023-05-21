import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, timeout } from 'rxjs';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { QuizQuestion } from '../models/quiz-question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  apiBaseUrl: string = environment.apiUrl;
  timeOut: number = environment.httpTimeOut;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient,
              private processHttpMsg: ProcessHttpmsgService) {
    this.headers = this.headers.set('Accept', 'application/json; charset=utf-8');
  }

  getCategories(): Observable<Category> {
    // console.log("API Url: ", this.apiBaseUrl);
    console.log(this.apiBaseUrl + '/api_category.php');
    return this.http.get<Category>(this.apiBaseUrl + '/api_category.php', { headers: this.headers })
      .pipe(timeout(this.timeOut))
      .pipe(retry(3))
      .pipe(catchError(this.processHttpMsg.handleError));
  }

  getQuizQuestions(amount: number, catId: number, difficulty: string, type: string): Observable<QuizQuestion> {
    // console.log("API Url: ", this.apiBaseUrl);
    let reqParameters = `amount=${amount}&category=${catId}&difficulty=${difficulty}&type=${type}`;
    console.log(this.apiBaseUrl + `/api.php?${reqParameters}`);
    return this.http.get<QuizQuestion>(this.apiBaseUrl + `/api.php?${reqParameters}`, { headers: this.headers })
      .pipe(timeout(this.timeOut))
      .pipe(retry(3))
      .pipe(catchError(this.processHttpMsg.handleError));
  }

}
