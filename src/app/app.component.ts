import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TemplateForm';

  email: string = '';

  onClick(event: any) {
    console.log(event);
  }

  onSubmit(event: any) {
    console.log(event);
  }
}
