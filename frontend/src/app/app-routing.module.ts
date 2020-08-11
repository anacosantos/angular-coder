import { NewUsersComponent } from './components/users/new-users/new-users.component';
import { UserComponent } from './views/user/user.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component'
import { from } from 'rxjs';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path:"products",
  component: ProductCrudComponent
},{
  path: "products/create",
  component: ProductCreateComponent
},{
  path: "user",
  component: UserComponent
},{
  path: "new-users",
  component : NewUsersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}