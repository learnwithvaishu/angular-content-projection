import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SingleSlotComponent } from './singleslot/singleslot.component';
import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './parent/parent.component';
import { MultiSlotComponent } from './multislot/multislot.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    ParentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
