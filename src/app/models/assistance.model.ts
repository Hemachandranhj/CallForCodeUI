import { IAssistanceDetail } from "./assistance.interface";

export class AssistanceDetail implements IAssistanceDetail {
    id: string;
    isActioned: boolean;
    name: string;
    phone: string;
    itemRequested: string;
    address: string;
    date: string;
    tag: [];
}