import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';

@Injectable({
    providedIn: 'root'
})
export class OfferService {
    private apiUrl = 'http://localhost:8080/api/offers';

    constructor(private http: HttpClient) { }

    getOffers(): Observable<Offer[]> {
        return this.http.get<Offer[]>(this.apiUrl);
    }

    getOfferById(id: number): Observable<Offer> {
        return this.http.get<Offer>(`${this.apiUrl}/${id}`);
    }

    createOffer(offer: Offer): Observable<Offer> {
        return this.http.post<Offer>(this.apiUrl, offer);
    }

    updateOffer(offer: Offer): Observable<Offer> {
        return this.http.put<Offer>(`${this.apiUrl}/${offer.id}`, offer);
    }

    deleteOffer(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
