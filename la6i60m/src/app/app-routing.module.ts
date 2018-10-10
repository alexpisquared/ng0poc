import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { ApPocComponent } from './ap-poc/ap-poc.component';
import { DetailsComponent } from './details/details.component';
import { UserCoresComponent } from './user-cores/user-cores.component';
import { NymiBandsComponent } from './nymi-bands/nymi-bands.component';
import { UserCoreDetailsComponent } from './user-core-details/user-core-details.component';

const routes: Routes = [
	{ path: '', component: UsersComponent },
	{ path: 'apPoc', component: ApPocComponent },
	{ path: 'ap-poc', component: ApPocComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'details/:id', component: DetailsComponent },
	{ path: 'user-cores', component: UserCoresComponent },
	{ path: 'user-core-details/:domain/:username', component: UserCoreDetailsComponent },
	{ path: 'user-core-details/:id', component: UserCoreDetailsComponent },
	{ path: 'nymi-bands', component: NymiBandsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
