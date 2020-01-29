import {
  Component,
  OnInit,
  DoCheck,
  OnDestroy,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit, DoCheck, OnDestroy {
  @Output()
  outData = new EventEmitter();
  form: FormGroup;
  emailPattern =
    "[a-zA-Z0-9_.+-,;]+@(?:(?:[a-zA-Z0-9-]+.,;)?[a-zA-Z]+.,;)?(virtusa).com";
  countryState: any;
  selectedCountry: any;
  stateFilter: string[];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [
        "",
        [
          Validators.minLength(3),
          Validators.pattern("^[a-zA-Z ]*$"),
          Validators.required
        ]
      ],
      lastName: [
        "",
        [
          Validators.minLength(3),
          Validators.pattern("^[a-zA-Z ]*$"),
          Validators.required
        ]
      ],
      email: [
        "",
        [Validators.pattern(/\w+\@virtusa\.com$/), Validators.required]
      ],
      password: ["", [Validators.minLength(8), Validators.required]],
      confirmPassword: ["", [Validators.minLength(8), Validators.required]],
      dob: ["", Validators.required],
      phoneNumber: [
        "",
        [
          Validators.pattern(/\d{10}/),
          Validators.maxLength(10),
          Validators.required
        ]
      ],
      gender: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required]
    });
  }

  ngDoCheck(): void {
    this.stateFilter = this.countryState
      .filter(x => x.countryName === this.selectedCountry)
      .map(x => x.countryStates);
    console.log("doCheck LifeCycle initialized");
  }
  onSubmit() {
    this.outData.emit(this.form);
    console.log(this.form);
  }
  setCountry(str) {
    this.selectedCountry = str;
    console.log(this.selectedCountry);
  }

  ngOnInit() {
    this.countryState = [
      {
        countryName: "india",
        countryStates: [
          "tamilnadu",
          "delhi",
          "kerala",
          "goa",
          "kerala",
          "bihar"
        ]
      },
      {
        countryName: "america",
        countryStates: [
          "Alabama",
          "Alaska",
          "American Samoa",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut"
        ]
      },
      {
        countryName: "china",
        countryStates: ["Beijing", "Tianjin", "Shanghai", "Chongqing"]
      }
    ];
    console.log("onInit LifeCycle initialized");
  }
  ngOnDestroy(): void {
    console.log("onDestroy: component destroyed");
  }
}
