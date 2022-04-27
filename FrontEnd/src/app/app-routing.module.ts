import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketNewComponent } from './ticket/ticket-new/ticket-new.component';
import { TicketComponent } from './ticket/ticket/ticket.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {path: '/', component:DashboardComponent},
  // {path: '/admin', component:DashboardComponent},
  // {path: '/settings', component:SettingsComponent},
  // {path: '/ticket', component:TicketComponent},
  // {path: '/tickets', component:TicketListComponent},
  // {path: '/user', component:UserComponent},
  // {path: '/users', component:UserListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
