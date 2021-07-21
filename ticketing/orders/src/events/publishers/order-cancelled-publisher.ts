import { Subjects, Publisher, OrderCancelledEvent } from '@sknn/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
