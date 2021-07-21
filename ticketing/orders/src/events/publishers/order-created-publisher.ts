import { Publisher, OrderCreatedEvent, Subjects } from '@sknn/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
