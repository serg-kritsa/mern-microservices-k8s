import { Publisher, Subjects, TicketUpdatedEvent } from '@sknn/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
