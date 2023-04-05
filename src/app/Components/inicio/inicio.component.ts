import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  content: any;
  mostrar!: boolean;
  constructor(private modalService: NgbModal) { }

 
  openModal() {
    this.modalService.open(this.content)
  };

  mostrarButtons() {
    this.mostrar = !this.mostrar;
  }
}

