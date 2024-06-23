import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./views/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./views/quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./views/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'users/details',
    loadChildren: () => import('./views/details/details.module').then( m => m.DetailsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
