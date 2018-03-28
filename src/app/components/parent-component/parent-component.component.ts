import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared-service.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponent implements OnInit {
  isButtonClicked = false;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.isButtonClicked.subscribe((isButtonClicked: boolean) => {
      this.isButtonClicked = isButtonClicked;
      console.log(`Parent component - isButtonClicked: ${this.isButtonClicked}`);
    });
  }
}
