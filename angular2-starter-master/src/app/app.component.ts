import { Component } from '@angular/core';
import {TestMaterialComponent} from './test-material/test-material.component';
import {ComputerDetailsComponent} from './computer-details/computer-details.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ComputerDetailsComponent]
})
export class AppComponent {
  title = 'app works!';
}
