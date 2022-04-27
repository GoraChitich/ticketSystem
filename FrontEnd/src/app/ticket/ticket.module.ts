import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { TicketNewComponent } from './ticket-new/ticket-new.component';
import { AnswerComponent } from './answer/answer.component';



@NgModule({
  declarations: [
    TicketComponent,
    TicketNewComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketModule { }
