import {MatTableDataSource} from '@angular/material/table';
import {Component} from '@angular/core';

export interface ElectricEquipment {
  id: string;
  name: string;
  description: string;
}
const ELECTRIC_EQUIPMENTS: ElectricEquipment[] = [
  {id: '1', name: 'Light', description: 'Light 1'},
  {id: '2', name: 'Fan', description: 'Fan 1'},
  {id: '3', name: 'TV', description: 'TV 1'},
  {id: '4', name: 'Fridge', description: 'Fridge 1'},
  {id: '5', name: 'Washing Machine', description: 'Washing Machine 1'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns = [
    { 
      columnDef: 'position',
      header: 'ID',
      cell: (element: ElectricEquipment) => `${element.id}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: ElectricEquipment) => `${element.name}`
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: ElectricEquipment) => `${element.description}`
    },
  ];
  dataSource1 = ELECTRIC_EQUIPMENTS;
  displayedColumns = this.columns.map(c => c.columnDef);
  // dataSource = new MatTableDataSource(ELECTRIC_EQUIPMENTS);
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  title = 'HomeWork_FE_Week7';

}
