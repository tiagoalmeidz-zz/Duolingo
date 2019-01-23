import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificarResposta(): void {
    if (this.rodadaFrase.FrasePT == this.resposta) {

      //trocar pergunta da  rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100/this.frases.length)

      //
      if(this.rodada === 4) {
        alert('Parabéns, Concluiu as traduções com sucesso!')
      }
      //atualiza o objeto da rodadaFrase
      this.atualizaRodada()

    } else {
      this.tentativas--
      //alert('A tradução está errada')
      
      if(this.tentativas === -1)
        alert('Você perdeu todas as tentativas')

    }
  }

  atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }

}
