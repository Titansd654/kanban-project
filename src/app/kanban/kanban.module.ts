import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban/kanban.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SidebarComponent} from './kanban/sidebar/sidebar.component';
import {MainContentComponent} from './kanban/main-content/main-content.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ColumnContentComponent } from './kanban/main-content/column-content/column-content.component';
import { CardContentComponent } from './kanban/main-content/column-content/card-content/card-content.component';



@NgModule({
  declarations: [
    KanbanComponent,
    SidebarComponent,
    MainContentComponent,
    ColumnContentComponent,
    CardContentComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ],
  exports: [KanbanComponent]
})
export class KanbanModule { }
