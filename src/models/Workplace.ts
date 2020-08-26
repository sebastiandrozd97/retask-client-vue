export type Workplace = {
  id: number;
  name: string;
  address: {
    city: string;
    street: string;
  };
  client: string;
  isOpen: boolean;
  worktime: number;
};
