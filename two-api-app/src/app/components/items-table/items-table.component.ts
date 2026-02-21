import { Component, OnDestroy, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../interfaces/item.interface';
import { ItemEditComponent } from '../item-edit/item-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ItemsFilterService } from '../../services/items-filter.service';

@Component({
  selector: 'app-items-table',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './items-table.component.html',
  styleUrl: './items-table.component.scss',
})
export class ItemsTableComponent implements OnDestroy, AfterViewInit {
  public displayedColumns = [
    'image',
    'name',
    'species',
    'status',
    'gender',
    'origin',
    'quote',
    'author',
    'actions',
  ];
  public dataSource = new MatTableDataSource<Item>([]);
  private destroy$ = new Subject<Item>();
  public selectedGender: string = '';
  public selectedSpecies: string = '';
  public selectedStatus: string = '';
  public searchText: string = '';
  private allItems: Item[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private itemsService: ItemsService,
    private filterService: ItemsFilterService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    this.itemsService
      .loadItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => {
        this.allItems = items;
        this.dataSource.data = items;
        this.dataSource.sort = this.sort;
      });
  }

  public delete(item: Item) {
    this.dataSource.data = this.dataSource.data.filter((x) => x.id !== item.id);
  }

  public openEdit(item: Item) {
    const dialogRef = this.dialog.open(ItemEditComponent, {
      width: '600px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((updated: Item) => {
      if (updated) {
        const items = this.dataSource.data.map((x) => (x.id === updated.id ? updated : x));
        this.dataSource.data = items;
      }
    });
  }

  public applyFilter(event?: Event) {
    if (event) {
      this.searchText = (event.target as HTMLInputElement).value;
    }

    const filtered = this.filterService.filterItems(
      this.allItems,
      this.searchText,
      this.selectedGender,
      this.selectedSpecies,
      this.selectedStatus,
    );

    this.dataSource.data = filtered;
  }

  public goToGame() {
    this.router.navigate(['/game']);
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe;
  }
}
