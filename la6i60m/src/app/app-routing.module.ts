import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { ApPocComponent } from './ap-poc/ap-poc.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
	{ path: '', component: UsersComponent },
	{ path: 'apPoc', component: ApPocComponent },
	{ path: 'ap-poc', component: ApPocComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'details/:id', component: DetailsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
