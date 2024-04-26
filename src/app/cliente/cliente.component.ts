import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  clienteFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.clienteFormGroup = formBuilder.group({
      id:[''],
      nome:[''],
      descricao:['']
    });
  }

  save() {
    this.clientes.push(this.clienteFormGroup.value);
  }

  edit(index: number) {
    // Implemente a lógica para editar o item na posição 'index'
  }

  delete(index: number) {
    this.clientes.splice(index, 1);
  }
}


