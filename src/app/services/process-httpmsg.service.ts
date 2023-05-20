import { Injectable } from '@angular/core';
import { throwError, TimeoutError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

interface errorMsg {
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse) {
    let errMsg: errorMsg = { status: -1, message: "" }; // Default values
    
    if (error && error.error && (error.error.message && error.error.status)) {
      errMsg.status = error.error.status;
      errMsg.message = error.error.message;
    } else if (error.error instanceof ErrorEvent) {
      errMsg.status = 50;
      errMsg.message = error.error.message;
    } else if (error instanceof TimeoutError) {
      errMsg.status = 60;
      errMsg.message = "Timeout exceeded!";
    } else {
      errMsg.status = error.status;
      errMsg.message = error.message;
    }

    return throwError(() => errMsg);
  }

}
