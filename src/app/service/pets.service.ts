import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pet } from '../../assets/data/petstructor';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  REST_API: string = 'http://localhost:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient ) { }

  //add
  AddPet(data: Pet): Observable<any> {
    let API_URL = `${this.REST_API}/add-pets`;
    return this.httpClient.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
    )
  }

  //get all  objects
  GetCats(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.REST_API}/Cat`);
  }
  GetDogs(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.REST_API}/Dog`);
  }
  GetOthers(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.REST_API}/Other`);
  }

  //get single object
  GetPet(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-pet/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  // update
  updatePet(id: any, data:any): Observable<any>{
    let API_URL = `${this.REST_API}/update-pet/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this. httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }
  
  // Delete
  deletePet(id: any): Observable<any>{
    let API_URL = `${this.REST_API}/delete-pet/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
