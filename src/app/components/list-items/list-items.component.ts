import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  Items: any = [];

  constructor(private crudService: CrudService) {
    this.crudService.GetItems().subscribe(res => {
      this.Items = res;
      this.Items = this.Items.payload
    });

  }

  ngOnInit(): void { }

}
