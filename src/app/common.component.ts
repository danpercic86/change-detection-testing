import {BehaviorSubject, of} from "rxjs";
import {delay, tap} from "rxjs/operators";
import {Directive, Input} from "@angular/core";

@Directive()
export class CommonComponent {
  @Input() valueFromInput: string = 'initial'
  setIntervalCounter = 0;
  value$ = new BehaviorSubject('initial value')
  observableDelay$ = of({}).pipe(delay(1000), tap(() => this.someValue = 'from subscribe'));

  constructor() {
    // this.observableDelay$.subscribe()
    setTimeout(() => {
      this.value$.next('from setTimeout')
      this.someValue = 'from setTimeout'
    }, 2000)
    setInterval(() => {
      // console.log('called set interval from ', this.constructor.name)
      this.setIntervalCounter += 1;
      this.value$.next('from setInterval ' + this.setIntervalCounter)
      this.someValue = 'from setInterval ' + this.setIntervalCounter;
    }, 3000)
  }

  someObject = {
    prop: "default prop value"
  }
  someValue = 'default value';

  changeValue() {
    this.someValue = 'true';
  }

  changeObject() {
    this.someObject.prop = 'true';
  }

  get isPropTrue() {
    console.log('is prop true called from ', this.constructor.name)
    return this.someObject.prop === 'true'
  }
}
