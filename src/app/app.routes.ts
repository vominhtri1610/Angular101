import { Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ListProductComponent,
  },
  {
    path: 'product/:id',
    component: DetailProductComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
