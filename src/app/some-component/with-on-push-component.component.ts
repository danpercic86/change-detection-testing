import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonComponent} from "../common.component";

@Component({
  selector: 'app-with-on-push-component',
  templateUrl: '../common-template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithOnPushComponent extends CommonComponent {
}
