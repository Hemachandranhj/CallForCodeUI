import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAssistanceDetail } from '../../models/assistance.interface';
import { AssistanceService } from "../../services/assistance.service";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent{

  @Input() assistanceDetails: IAssistanceDetail[];
  @Output() acceptedEmit = new EventEmitter<any>();

  constructor(private assistanceService: AssistanceService) { }

  accepted(assistanceDetail: IAssistanceDetail): void {
    this.assistanceService.post(assistanceDetail).subscribe((response) =>
    {
      this.acceptedEmit.emit();
    });
    //assistanceDetail.isActioned = true;
  }

  reject(assistanceDetail: IAssistanceDetail): void {
    window.alert("Already Accepted");
  }
}