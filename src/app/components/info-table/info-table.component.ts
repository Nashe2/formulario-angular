import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import { FormBuilder, FormControl } from '@angular/forms';
import { PeriodicElement } from '../../models/periodicElement';
import { ELEMENT_DATA } from './test-data';

@Component({
  selector: 'app-info-table',
  standalone: true,
  imports: [MaterialComponentModule, CommonModule],
  templateUrl: './info-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  styleUrl: './info-table.component.scss',
})

export class InfoTableComponent implements OnInit, AfterViewInit {
  private fb: FormBuilder = inject(FormBuilder);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  filtroFc!: FormControl;
  lista = signal<PeriodicElement[]>(ELEMENT_DATA);
  columnsToDisplay: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'information',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() {
    this.filtroFc = this.fb.control(undefined);
  }

  ngOnInit(): void {
    console.log('');
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (filterValue && filterValue.length > 0) {
      const filterList = this.lista().filter(
        (item) =>
          item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          item.symbol.toLowerCase().includes(filterValue.toLowerCase())
      );
      this.dataSource.data = filterList;
    } else {
      this.dataSource.data = this.lista();
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
