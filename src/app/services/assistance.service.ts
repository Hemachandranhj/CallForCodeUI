import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs"

import { IAssistanceDetail } from "../models/assistance.interface";
import { AssistanceDetail } from "../models/assistance.model";
import { environment } from "../../environments/environment";
import { DatePipe } from '@angular/common';

@Injectable()
export class AssistanceService {

    pipe = new DatePipe('en-US');

    apiUrl = environment.apiBaseUrl + "/assistance/";;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200'
        })
    };

    constructor(private http: HttpClient) { }

    // method for getting assistance request
    getAssistanceRequest(): any {
        return this.http.get(this.apiUrl, this.httpOptions).pipe(map(response => {
            return this.mapAssistanceRequest(response);
        }),
            catchError((error: any): any => {
                return error;
            }));
    }

    // method for updating the actioned request
    post(assistanceDetail: AssistanceDetail): Observable<any> {
        var body = JSON.stringify(assistanceDetail);
        return this.http.post(this.apiUrl + "/acceptRequest", body, this.httpOptions).pipe(map((response: any) => {
            return "Accepted the request";
        }),
            catchError((error: any): any => {
                throw error.error;
            }));

    }

    // method to map the assistance request results
    private mapAssistanceRequest(response: any): AssistanceDetail[] {
        const assistanceDetail = [];
        response.result.forEach((item: any) => {
            assistanceDetail.push(this.mapAssistanceDetail(item));
        });
        return assistanceDetail;
    }

    // method to map the assistance detail
    private mapAssistanceDetail(data: any): AssistanceDetail {
        var assistanceDetail = new AssistanceDetail();
        assistanceDetail.id = data._id;
        assistanceDetail.isActioned = data.isActioned;
        assistanceDetail.date = this.pipe.transform(data.date, 'short');
        assistanceDetail.name = data.name;
        assistanceDetail.phone = data.phone;
        assistanceDetail.itemRequested = data.itemRequested;
        assistanceDetail.tag = data.tag;
        assistanceDetail.address = data.address;
        return assistanceDetail;
    }
}