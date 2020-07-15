export interface IEmployee {
  id: 1;
  name: string;
  lastName: string;
  officeId: number;
  dateOfBirth: string;
  salary: number;
}

export interface IStore {
  employees: IEmployee[];
  loading: boolean;
  error: boolean;
}

export interface IEmployeeInput {
  name: string;
  lastName: string;
  officeId: number;
  dateOfBirth: string;
  salary: number;
}
