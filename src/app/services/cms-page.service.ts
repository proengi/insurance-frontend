import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CmsPage } from '../models/cms-page.model';

@Injectable({
    providedIn: 'root'
})
export class CmsPageService {
    private apiUrl = 'http://localhost:8080/api/cms-pages';

    constructor(private http: HttpClient) { }

    getPages(): Observable<CmsPage[]> {
        return this.http.get<CmsPage[]>(this.apiUrl);
    }

    getPageById(id: number): Observable<CmsPage> {
        return this.http.get<CmsPage>(`${this.apiUrl}/${id}`);
    }

    createPage(page: CmsPage): Observable<CmsPage> {
        return this.http.post<CmsPage>(this.apiUrl, page);
    }

    updatePage(page: CmsPage): Observable<CmsPage> {
        return this.http.put<CmsPage>(`${this.apiUrl}/${page.id}`, page);
    }

    deletePage(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
