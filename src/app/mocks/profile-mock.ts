import { Person, ProfileType } from '../models/profile';

export const PersonMock: Person = {
  name: 'Michael',
  surname: 'Scott',
  address: '1725 Slough Avenue in Scranton, PA',
  type: ProfileType.Person,
  image: 'assets/avatar.png'
}
