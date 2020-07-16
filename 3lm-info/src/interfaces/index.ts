export interface IEmployee {
  _id: 1;
  name: string;
  lastName: string;
  officeId: IOffice;
  dateOfBirth: string;
  salary: number;
}

export interface IOffice {
  _id: string;
  description: string;
}

export interface IStore {
  employees: IEmployee[];
  loading: boolean;
  error: boolean;
}

export interface IEmployeeInput {
  name: string;
  lastName: string;
  officeId: string;
  dateOfBirth: string;
  salary: string;
}
