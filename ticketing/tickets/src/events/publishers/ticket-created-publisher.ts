import { Publisher, Subjects, TicketCreatedEvent } from '@sknn/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
