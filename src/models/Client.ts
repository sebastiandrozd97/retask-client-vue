import { Guid } from 'guid-typescript';
import { Workplace } from './Workplace';

export class Client {
  id: Guid = Guid.create();
  firstName = '';
  lastName = '';
  phoneNumber?: string;
  workplaces?: Workplace[];
}
