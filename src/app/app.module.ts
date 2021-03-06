import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MdSidenavModule } from "@angular/material";

import { CoreModule } from "./components/core/core.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, MdSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
