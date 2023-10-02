import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-container';

  members: { title: string, content: string, url: string , link:string , color:string }[] = [
    {
      title: 'Angular',
      content: 'Registration Page',
      link:"/angular",
      url: '../assets/icons/angular-fill.svg',
      color:"#bd0e2d"
    },
    {
      title: 'React',
      content: 'Login Page',
      link:"/react",
      url: '../assets/icons/react-fill.svg',
      color:"#5ed3f3"
    },

  ];
}


