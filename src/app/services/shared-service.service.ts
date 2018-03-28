import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  isButtonClicked: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }
}
