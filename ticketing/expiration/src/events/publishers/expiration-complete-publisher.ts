import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sknn/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
