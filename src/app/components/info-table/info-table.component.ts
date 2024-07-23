import {OnInit,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 11,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 12,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 13,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 14,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 15,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 16,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 17,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 18,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 19,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 20,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
];

@Component({
  selector: 'app-info-table',
  standalone: true,
  imports: [
    MaterialComponentModule,
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatPaginator,
    MatSort
  ],
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
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columnsToDisplay: string[] = ['position', 'name', 'weight', 'symbol', 'information'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


/*   constructor() {
    // Create 100 periodic elements
    const elements = Array.from({ length: 100 }, (_, k) => createNewElement(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(elements);
  } */

  ngOnInit():void {
    console.log(Element);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    /* throw new Error('Method not implemented.'); */
  }
}

/* Builds and returns a new User.
function createNewElement(): PeriodicElement {
  const name = ELEMENT_DATA;
    ELEMENT_DATA[Math.round(Math.random() * (ELEMENT_DATA.length - 1))] +
    ' ' +
    ELEMENT_DATA[Math.round(Math.random() * (ELEMENT_DATA.length - 1))].charAt(0) +
    '.'; charAt(0)

  return {
    name: name,
    position: Math.round(Math.random() * 100),
    weight: Math.round(Math.random() * 100),
    symbol: Math.round(Math.random() * 100).toString(),
    description: Math.round(Math.random() * 100).toString(),
  }; : ELEMENT_DATA[Math.round(Math.random() * (ELEMENT_DATA.length - 1))],
}
*/
