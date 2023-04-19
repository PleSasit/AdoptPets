import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pet } from '../../assets/data/petstructor';
import { ContactStructure } from '../../assets/data/contact'
import { AdoptFormStructure } from '../../assets/data/adoptForm'
import { DonateStructure } from '../../assets/data/donate'


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
  getOne(
    obj: {
      path: string
      id: string
    },
    queryKey: [] = [],
    queryValue: [] = []
  ): Observable<any> {
    return this.httpClient.get<any>(`${this.REST_API}/${obj.path}/${obj.id}`)
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

  createContact(contact:object):Observable<ContactStructure> {
    console.log(contact);
    const headers = { 'contact-type': 'application/json'}
    return this.httpClient.post<ContactStructure>(this.REST_API+'/contact',{...contact}, { headers: headers});

  }
  createAdoptionForm(AdoptionForm:object):Observable<AdoptFormStructure> {
    console.log(AdoptionForm);
    const headers = { 'AdoptionForm-type': 'application/json'}
    return this.httpClient.post<AdoptFormStructure>(this.REST_API+'/AdoptionForm',{...AdoptionForm}, { headers: headers});
  }
  createDonate(donate:object):Observable<DonateStructure> {
    console.log(donate);
    const headers = { 'donate-type': 'application/json'}
    return this.httpClient.post<DonateStructure>(this.REST_API+'/donate',{...donate}, { headers: headers});
  }
}
