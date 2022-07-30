import { Person, ProfileType } from '../models/profile';

export const PersonMock: Person = {
  name: 'Michael',
  surname: 'Scott',
  address: '1725 Slough Avenue in Scranton, PA',
  type: ProfileType.Person,
  image: 'assets/avatar.png',
  id: 0,
}

export const PersonsMock: Person[] = [
  {
    name: 'Michael',
    surname: 'Scott',
    address: '1725 Slough Avenue in Scranton, PA',
    type: ProfileType.Person,
    image: 'assets/avatar.png',
    id: 1,
  },
  {
    name: 'Dwight',
    surname: 'Schrute',
    address: '1725 Slough Avenue in Scranton, PA',
    type: ProfileType.Person,
    image: 'assets/avatar2.png',
    id: 2,
  },
  {
    name: 'Jim',
    surname: 'Helpert',
    address: '1725 Slough Avenue in Scranton, PA',
    type: ProfileType.Person,
    image: 'assets/avatar3.png',
    id: 3,
  }
]
