import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonComponent} from "../common.component";

@Component({
  selector: 'app-without-on-push-component',
  templateUrl: '../common-template.html',
})
export class WithoutOnPushComponent extends CommonComponent {
}
