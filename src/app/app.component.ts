import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TemplateForm';

  email: string = '';
  @ViewChild('email') emailInput: any;
  onClick(event: any) {
    // console.log(event);
  }

  onSubmit(event: any) {
    // console.log(event);
    console.log(this.emailInput);
  }
}
