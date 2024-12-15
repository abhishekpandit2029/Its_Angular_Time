import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [{
    path: "user/:id",
    component: UserComponent,
    // for child routing use build structure like this
    // children: [
    //     {
    //         path: "user/:id",
    //         component: define component
    //     },
    // ]
}, {
    path: "profile",
    component: ProfileComponent
}, {
    path: "dashboard",
    component: DashboardComponent
},
    // {
    //     path: "**",
    //     component: create page for 404 n use here
    // }
];
