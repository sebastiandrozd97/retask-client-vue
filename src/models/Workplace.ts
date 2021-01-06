import { Guid } from 'guid-typescript';

export class Workplace {
  id: Guid = Guid.create();
  name = '';
  isOpen = true;
  city = '';
  street = '';
  clientId: Guid = Guid.create();
  clientFirstName = '';
  clientLastName = '';
}
