import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { DirectoryDirective } from "./dynamic/directory.directive";
import { HiComponent } from "./dynamic/hi/hi.component";
import { HelloComponent } from "./dynamic/hello/hello.component";

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    RegistrationFormComponent,
    DynamicComponent,
    DirectoryDirective,
    HiComponent,
    HelloComponent,
    DirectoryDirective
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  entryComponents: [HiComponent, HelloComponent, DynamicComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
