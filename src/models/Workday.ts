import { Worker } from './Worker';
import { Workplace } from './Workplace';

export type Workday = {
  id: string;
  date: string;
  workingFrom: string;
  workingTo: string;
  worktime: number;
  task: string;
  additionalInfo: string;
  workplace: Workplace;
  worker: Worker;
};
