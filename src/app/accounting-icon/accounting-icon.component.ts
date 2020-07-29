import { Component, Input } from "@angular/core";

@Component({
  selector: "accounting-icon",
  templateUrl: "./accounting-icon.component.html",
  styleUrls: []
})
export class AccountingIconComponent {
  static defaultValues = {
    color: "#000000",
    height: "30px",
    width: "30px"
  };
  @Input()
  color: string = AccountingIconComponent.defaultValues.color;
  @Input()
  height: string = AccountingIconComponent.defaultValues.height;
  @Input()
  width: string = AccountingIconComponent.defaultValues.width;
}
