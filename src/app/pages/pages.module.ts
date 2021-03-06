import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
