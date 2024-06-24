import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao/promocao.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private servicoPromocao: PromocaoService) {}

  promocoes!: Promocao[];

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe((resposta) => {
      this.promocoes = resposta;
    });
  }
}
