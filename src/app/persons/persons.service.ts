import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService {
  public persons = ['Max', 'Manuel', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
  }
}
