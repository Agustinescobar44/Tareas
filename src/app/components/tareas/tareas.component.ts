import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = "";

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea():void{
    if(this.nombreTarea.length === 0) return

    const nuevaTarea = new Tarea(this.nombreTarea,false);
    
    this.listaTareas.push(nuevaTarea);

    this.nombreTarea = ""
  }
  cambiarEstado(tarea:Tarea){
    tarea.estado = !tarea.estado;
  }
  eliminarTarea(indice:number){
    // this.listaTareas=this.listaTareas.filter(tarea=>this.listaTareas.indexOf(tarea) !== indice);
    this.listaTareas.splice(indice,1)
  }


}
