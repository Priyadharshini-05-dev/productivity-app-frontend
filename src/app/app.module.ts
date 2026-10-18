
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';

import { HeroBannerComponent } from './pages/hero-banner/hero-banner.component';
import { LevelCardComponent } from './pages/level-card/level-card.component';
import { StatCardsComponent } from './stat-cards/stat-cards.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { CompanionCardComponent } from './pages/companion-card/companion-card.component';
import { WeeklyProgressComponent } from './weekly-progress/weekly-progress.component';
import { AchievementListComponent } from './pages/achievement-list/achievement-list.component';
import { LevelUpModalComponent } from './pages/level-up-modal/level-up-modal.component';

import { TasksComponent } from './pages/tasks/tasks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthComponent } from './pages/auth/auth.component';

import {
  LucideAngularModule,
  Home,
  CheckSquare,
  Folder,
  CalendarDays,
  ChartNoAxesColumn,
  Trophy,
  Settings as SettingsIcon
} from 'lucide-angular';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainLayoutComponent,
    HeroBannerComponent,
    LevelCardComponent,
    StatCardsComponent,
    TaskListComponent,
    TaskItemComponent,
    CompanionCardComponent,
    WeeklyProgressComponent,
    AchievementListComponent,
    LevelUpModalComponent,
    TasksComponent,
    ProjectsComponent,
    CalendarComponent,
    StatsComponent,
    RewardsComponent,
    SettingsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LucideAngularModule.pick({
      Home,
      CheckSquare,
      Folder,
      CalendarDays,
      ChartNoAxesColumn,
      Trophy,
      Settings: SettingsIcon
    }),

    LottieModule.forRoot({
      player: playerFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
