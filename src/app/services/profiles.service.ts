import { Injectable } from '@angular/core';
import { Person } from '../models/profile';
import { PersonsMock } from '../mocks/profile-mock';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private readonly profiles = new Map<number, Person>(PersonsMock.map((e) => ([e.id, e])));

  getPerson(id: number): Person | null {
    return this.profiles.get(id) ?? null;
  }
}
