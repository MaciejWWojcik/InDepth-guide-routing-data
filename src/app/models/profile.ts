export enum ProfileType {
  Person= 'Person',
  Company = 'Company',
  Group = 'Group',
}

export interface Profile {
  name: string;
  address: string;
  image: string;
  type: ProfileType;
}

export interface Person extends Profile {
  id: number;
  surname: string;
}

export interface Company extends Profile {
  ceo: string;
  employees: number;
}

export interface Group extends Profile {
  members: number;
}
