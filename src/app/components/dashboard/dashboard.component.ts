import { Component, OnInit } from "@angular/core";

import { IAssistanceDetail } from "../../models/assistance.interface"
import { AssistanceDetail } from "../../models/assistance.model"

import { AssistanceService } from "../../services/assistance.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
    assistanceDetails: IAssistanceDetail[];
    error: any;
    constructor(private assistanceService: AssistanceService) { }

    ngOnInit() {        
        this.getassistanceDetails();
    }

    private getassistanceDetails() {
        this.assistanceService.getAssistanceRequest().subscribe((response: any) => {
            this.assistanceDetails = response;
        });
    }
}