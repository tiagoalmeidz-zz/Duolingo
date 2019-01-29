import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendendo Inglês';

  public encerrarJogo(tipo: string): void {
    console.log(tipo)
  }
}
