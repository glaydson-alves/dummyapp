import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('../views/posts/posts.module').then(m => m.PostsPageModule)
      },
      {
        path: 'quotes',
        loadChildren: () => import('../views/quotes/quotes.module').then(m => m.QuotesPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../views/users/users.module').then(m => m.UsersPageModule)
      },
      {
        path: 'users/details/',
        loadChildren: () => import('../views/details/details.module').then(m => m.DetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/posts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
