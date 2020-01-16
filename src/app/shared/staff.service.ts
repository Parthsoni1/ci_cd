import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Data} from '../model/data.model';
import { Observable } from 'rxjs';
const hederOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  mockUrl = 'http://localhost:3000/';

  currentUser: Data = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: null,
    whoom: '',
    designtion: '',
    birthDate: '',
    password: ''

  };
  loginForm = {
    email: '',
    password: '',
  };
  constructor(private http: HttpClient) { }


  getAllData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.mockUrl}Employee`, hederOption);
  }
  delete1Data(id: number) {
    return this.http.delete(`${this.mockUrl}Users` + '/' + id , hederOption);
  }
  createEmployee(user: Data): Observable<Data[]>  {
    return this.http.post<Data[]>(`${this.mockUrl}Employee`, user, hederOption);
  }
  createUser(user: Data): Observable<Data[]>  {
    return this.http.post<Data[]>(`${this.mockUrl}Users`, user, hederOption);
  }
  updateUser(user) {
    return this.http.put<Data[]>(`${this.mockUrl}Users` + '/' + user.id, user, hederOption);
  }
}
