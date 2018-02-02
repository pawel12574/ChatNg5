import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChathistoryComponent} from "./components/chathistory/chathistory.component";

const routes: Routes = [

  {path: 'history/:username', component: ChathistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
