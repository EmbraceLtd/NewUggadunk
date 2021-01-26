import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService, ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { AlltimesComponent } from './alltimes/alltimes.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { MooseComponent } from './moose/moose.component';
import { HitlistComponent } from './hitlist/hitlist.component';
import { UggabuggComponent } from './uggabugg/uggabugg.component';
import { MediaComponent } from './media/media.component';
import { MejnmenjuComponent } from './mejnmenju/mejnmenju.component';
import { KontaktComponent } from './kontakt/kontakt.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "/mejnmenju", pathMatch: "full" },
  { path: "mejnmenju", component: MejnmenjuComponent },
  { path: "moose", component: MooseComponent },
  { path: "hitlist", component: HitlistComponent},
  { path: "uggabugg", component: UggabuggComponent},
  { path: "media", component: MediaComponent},
  { path: "kontakt", component: KontaktComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    AlltimesComponent,
    ProfileComponent,
    SettingsComponent,
    FielderrorsComponent,
    MooseComponent,
    HitlistComponent,
    UggabuggComponent,
    MediaComponent,
    MejnmenjuComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule
  ],
  providers: [ ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
