import { NgModule } from '@angular/core';
import { MatSidenavModule } from'@angular/material/sidenav';
import { MatTabsModule } from'@angular/material/tabs';
import { MatToolbarModule } from'@angular/material/toolbar';
import { MatMenuModule } from'@angular/material/menu';
import { MatIconModule } from'@angular/material/icon';
import { MatButtonModule } from'@angular/material/button';
import { MatListModule } from'@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';


@NgModule
(
  {
    imports: 
    [
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatMenuModule,
      MatTabsModule,
      MatSliderModule
  
      

    ],
  exports:
    [
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatMenuModule,
      MatTabsModule,
      MatSliderModule

      

    ]
  }
)

export class MaterialModule{ }
