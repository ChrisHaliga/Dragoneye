import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  /**
   * Performs a GET request to the specified endpoint
   * @param endpoint The API endpoint (without /api prefix)
   * @returns Observable of the response
   */
  get<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    console.log('API GET request to:', url);
    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Performs a POST request to the specified endpoint
   * @param endpoint The API endpoint (without /api prefix)
   * @param data The data to send in the request body
   * @returns Observable of the response
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Performs a PUT request to the specified endpoint
   * @param endpoint The API endpoint (without /api prefix)
   * @param data The data to send in the request body
   * @returns Observable of the response
   */
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Performs a DELETE request to the specified endpoint
   * @param endpoint The API endpoint (without /api prefix)
   * @returns Observable of the response
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Handles HTTP errors in a consistent way
   * @param error The HTTP error response
   * @returns Observable error
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server Error ${error.status}: ${error.message}`;
      if (error.error && typeof error.error === 'string') {
        errorMessage += ` - ${error.error}`;
      }
    }

    console.error('API Error:', errorMessage, error);
    return throwError(() => errorMessage);
  }
}