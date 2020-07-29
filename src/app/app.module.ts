import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AccountingIconComponent } from "./accounting-icon/accounting-icon.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AccountingIconComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
