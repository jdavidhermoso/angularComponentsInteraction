import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared-service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponent implements OnInit {
  isButtonClicked = false;

  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
  }

  toggleButtonClicked() {
    this.isButtonClicked = !this.isButtonClicked;
    console.log(`Child component - isButtonClicked: ${this.isButtonClicked}`);
    this._sharedService.isButtonClicked.next(this.isButtonClicked);
  }
}
