import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {  throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private APIRoot = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get(this.APIRoot)
    .pipe(
      map((data: any[]) => {
         data.forEach(element => {
            element.id = element.id + 1000;
          });
         return data;
        }
    ),
    catchError( (error: Response) => {
      return throwError( error);
   })
    ); // pipe
    }
}
