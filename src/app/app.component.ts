import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Sultan_the_Barbary_Lion.jpg",
      description: "Leão"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lioness_Etosha_NP.jpg",
      description: "Leoa"
    }
  ]

}
