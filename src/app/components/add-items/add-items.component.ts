import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})

export class AddItemsComponent implements OnInit {

  itemForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.itemForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      contact_number: ['']
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddItems(this.itemForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/list-items'))
      }, (err) => {
        console.log(err);
      });
  }
}
