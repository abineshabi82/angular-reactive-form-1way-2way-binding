import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { DirectoryDirective } from "./directory.directive";
import { HelloComponent } from "./hello/hello.component";
import { HiComponent } from "./hi/hi.component";
@Component({
  selector: "app-dynamic",
  templateUrl: "./dynamic.component.html",
  styleUrls: ["./dynamic.component.css"]
})
export class DynamicComponent implements OnInit {
  @ViewChild(DirectoryDirective, { static: true })
  directive: DirectoryDirective;
  components = [HelloComponent, HiComponent];
  constructor(private cFR: ComponentFactoryResolver) {}

  ngOnInit() {}
  load(id) {
    this.directive.viewCR.clear();
    const rFC = this.cFR.resolveComponentFactory(this.components[id]);
    this.directive.viewCR.createComponent(rFC);
  }
}
