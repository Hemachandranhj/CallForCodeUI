import { Component, Input } from '@angular/core';
import { IAssistanceDetail } from '../../models/assistance.interface';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent{

  @Input() assistanceDetails: IAssistanceDetail[];

  constructor() { }

  accepted(assistanceDetail: IAssistanceDetail): void {
    assistanceDetail.isActioned = true;
  }

  reject(assistanceDetail: IAssistanceDetail): void {
    assistanceDetail.isActioned = false;
  }
}