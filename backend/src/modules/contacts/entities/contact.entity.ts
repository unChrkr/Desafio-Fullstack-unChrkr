import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  createdAt: Date;
  phoneNumber: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
