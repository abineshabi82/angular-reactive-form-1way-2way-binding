import { Directive, ViewContainerRef } from "@angular/core";
@Directive({
  selector: "[appDirectory]"
})
export class DirectoryDirective {
  constructor(public viewCR: ViewContainerRef) {}
}
