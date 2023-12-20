import { Component } from '@angular/core';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareDribbble } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finadvisor-project';
  faFacebook=faSquareFacebook
  faInstagram=faSquareInstagram
  faTwitter=faSquareTwitter
  faDribble=faSquareDribbble
}
