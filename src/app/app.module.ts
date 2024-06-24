import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './shared/banner/banner.component';
import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { CardComponent } from './shared/card/card.component';
import { CardDepoimentoComponent } from './shared/depoimentos/card-depoimento/card-depoimento.component';
import { ContainerComponent } from './shared/container/container.component';
import { DepoimentosComponent } from './shared/depoimentos/depoimentos.component';
import { DropdownUfComponent } from './shared/form-busca/dropdown-uf/dropdown-uf.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalComponent } from './shared/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorPassageiroComponent } from './shared/selector-passageiro/selector-passageiro.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BotaoControleComponent,
    CardBuscaComponent,
    CardComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DepoimentosComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBuscaComponent,
    HeaderComponent,
    HomeComponent,
    ModalComponent,
    SelectorPassageiroComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
