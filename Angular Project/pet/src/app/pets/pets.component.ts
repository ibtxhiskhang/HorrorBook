import { Component, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { Pets } from '../../Pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
    mypets: Pets = {
    age: 1,
    name: 'Nova',
    animal: "Dog",
    Pounds: 10,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
