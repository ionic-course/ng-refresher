import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  public persons = ['Max', 'Manuel', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    console.log(this.persons);
    this.personsChanged.next(this.persons);
  }
}
