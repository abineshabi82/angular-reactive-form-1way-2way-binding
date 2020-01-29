import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form: FormGroup;
  title = "directorys";
  validForm = false;
  imageUrl =
    "http://1.bp.blogspot.com/-_n932ZBz63c/UXA5nOsF8oI/AAAAAAAAALI/W9TeKEhx5Io/s1600/Animals.png";

  customers: any[] = [
    { name: "abinesh", accno: 101, acctype: "savings" },
    { name: "ramen", accno: 102, acctype: "current" },
    { name: "kumar", accno: 103, acctype: "savings" }
  ];

  enableForm() {
    this.validForm = !this.validForm;
  }

  show(event: FormGroup) {
    this.form = event;
    console.log("[");
    console.log(event);
    console.log("]");
  }

  onOptionsSelected(image: string) {
    if (image == "cat") {
      this.imageUrl =
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
    } else if (image == "dog") {
      this.imageUrl =
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_2788,w_4960,x_0,y_255/f_auto,q_auto,w_1100/v1554918537/shape/mentalfloss/istock-488657289.jpg";
    } else if (image == "mouse") {
      this.imageUrl =
        "https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3772%2C3342&q=45&auto=format&w=926&fit=clip";
    } else {
      this.imageUrl =
        "http://1.bp.blogspot.com/-_n932ZBz63c/UXA5nOsF8oI/AAAAAAAAALI/W9TeKEhx5Io/s1600/Animals.png";
    }
  }
}
