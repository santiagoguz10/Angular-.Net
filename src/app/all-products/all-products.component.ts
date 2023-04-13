import { Component, OnInit } from '@angular/core';
import {Product} from '../interface/product'
import {ProductsService} from '../services/products.service'
import {DeleteDialogProductComponent} from '../delete-dialog-product/delete-dialog-product.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  allProductsSource: Product[] = [];
  displayedColumns: string[] = [
    'Id',
    'NombreProducto',
    'actions'
  ];

  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.productService.get().subscribe((data) => {
      this.allProductsSource = data;
    });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogProductComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allProductsSource = this.allProductsSource.filter(
          (_) => _.Id !== id
        );
      }
    });
  }
}
