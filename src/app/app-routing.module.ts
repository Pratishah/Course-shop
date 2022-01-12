import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { WishComponent } from './components/wish/wish.component'

const routes: Routes = [
  { path: '', redirectTo: '/allCourses', pathMatch: 'full' },
  { path: 'allCourses', component: ShoppingCartComponent },
  { path: 'wishlist', component: WishComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
