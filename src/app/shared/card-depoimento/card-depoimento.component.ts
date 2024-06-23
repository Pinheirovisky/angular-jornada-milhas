import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss'],
})
export class CardDepoimentoComponent {
  @Input() nome: string = 'Lauro Matos';
  @Input() text: string =
    'A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.';
  @Input() img: string = 'assets/imagens/avatar1.png';
}
