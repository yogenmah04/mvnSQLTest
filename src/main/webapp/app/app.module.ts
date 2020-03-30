import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MvnSqlTestSharedModule } from 'app/shared/shared.module';
import { MvnSqlTestCoreModule } from 'app/core/core.module';
import { MvnSqlTestAppRoutingModule } from './app-routing.module';
import { MvnSqlTestHomeModule } from './home/home.module';
import { MvnSqlTestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MvnSqlTestSharedModule,
    MvnSqlTestCoreModule,
    MvnSqlTestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MvnSqlTestEntityModule,
    MvnSqlTestAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class MvnSqlTestAppModule {}
