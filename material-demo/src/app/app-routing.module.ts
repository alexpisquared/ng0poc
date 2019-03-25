import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';

const routes: Routes = [{ path: 'subcomponent', component: SubcomponentComponent }];

@NgModule({
  // From https://about-azure.com/2018/07/03/angular-6-application-hosted-on-azure-storage-static-website/
  // Note that we use the HashLocationStrategy oppsed to the default PathLocationStrategy because the later will result in 404 errors.
  // This is because we can’t define a rewrite URL for our static website and Azure will try to resolve the specified resource – e.g.:
  // https://spastore.z6.web.core.windows.net/subcomponent
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
