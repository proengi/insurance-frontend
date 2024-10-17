import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faq } from '../models/faq.model';

@Injectable({
    providedIn: 'root'
})
export class FaqService {
    private apiUrl = 'http://localhost:8080/api/faqs';

    constructor(private http: HttpClient) { }

    getFaqs(): Observable<Faq[]> {
        return this.http.get<Faq[]>(this.apiUrl);
    }

    getFaqById(id: number): Observable<Faq> {
        return this.http.get<Faq>(`${this.apiUrl}/${id}`);
    }

    createFaq(faq: Faq): Observable<Faq> {
        return this.http.post<Faq>(this.apiUrl, faq);
    }

    updateFaq(faq: Faq): Observable<Faq> {
        return this.http.put<Faq>(`${this.apiUrl}/${faq.id}`, faq);
    }

    deleteFaq(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
