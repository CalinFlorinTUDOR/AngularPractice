import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigations/home/home.component';
import { RegisterComponent } from './navigations/register/register.component';
import { LoginComponent } from './navigations/login/login.component';
import { ShiftsComponent } from './navigations/home/shifts/shifts.component';
import { EditProfileComponent } from './navigations/home/edit-profile/edit-profile.component';
import { AdminComponent } from './navigations/admin/admin.component';
import { NotfoundComponent } from './navigations/notfound/notfound.component';



const routes: Routes = [

{
    path:'', redirectTo:'/home', pathMatch:'full'
}, 
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home', 
  component: HomeComponent,
  children: [

    {
    path: 'editprofile', component: EditProfileComponent
    },
    {
    path: 'shifts', component: ShiftsComponent
    }
  ]
},
{
  path: 'admin', component: AdminComponent
},
{
  path: '**', component: NotfoundComponent
}


]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
