import { Component, OnInit  } from '@angular/core';
// import { faCoffee} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'shamunesh';
  ImagePath: string;
  // faCoffee =faCoffee;
  
  constructor() {
    
    this.ImagePath = '/assets/images/landerpage.jpg'
  }
  
  ngOnInit() {
  }
  
}