import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-persona',
  standalone: true, 
  imports: [CommonModule, IonicModule], 
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {
  persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    documento: '12345678',
    fechaNacimiento: '1990-01-01',
    direccion: 'Calle Falsa 123',
    telefono: '555-1234',
    correo: 'juan@example.com'
  };
  tipoUsuario = 'cliente';
}
