import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SonglistComponent } from './view/songlist/songlist.component';
const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'songlist', component: SonglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
