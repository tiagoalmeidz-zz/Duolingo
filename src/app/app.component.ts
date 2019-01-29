import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendendo Inglês';

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
