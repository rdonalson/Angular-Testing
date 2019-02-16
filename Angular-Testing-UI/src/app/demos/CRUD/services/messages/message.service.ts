import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    public messages: string[] = [];
    public isDisplayed = false;

    addMessage(message: string): void {
        const currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
}
