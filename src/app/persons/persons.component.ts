import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component ({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  isFetching = false;
  //private personService: PersonsService;
  private personListSubs: Subscription;

  constructor(private personService: PersonsService) {
    //this.personService = prsService;
  }

  ngOnInit() {
    //this.personList = this.personService.persons;
    this.personListSubs = this.personService.personsChanged.subscribe(persons=>{
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personService.fetchPersons();
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }

  onRemovePerson(personName: string){
    this.personService.removePerson(personName);
  }
}
