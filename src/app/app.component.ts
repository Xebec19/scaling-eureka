import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { record } from '../app/record.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  @ViewChild(MatSort) sort: MatSort;
  title = 'assignment1';
  displayedColumns: string[] = [
    'street',
    'city',
    'zip',
    'state',
    'beds',
    'baths',
    'sq__ft',
    'type',
    'sale_date',
    'price',
    'latitude',
    'longitude',
  ];
  dataSource = new MatTableDataSource(record);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}