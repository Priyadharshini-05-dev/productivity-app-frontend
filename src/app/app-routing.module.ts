import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'tasks',component:TasksComponent},
       { path: 'projects', component: ProjectsComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'rewards', component: RewardsComponent },
      { path: 'settings', component: SettingsComponent }
    ]

  },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
