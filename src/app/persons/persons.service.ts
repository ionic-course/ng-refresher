import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService {
  public persons = ['Max', 'Manuel', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    console.log(this.persons);
  }
}
