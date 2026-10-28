import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { departamento } from '../../models/departamento';

@Component({
  selector: 'app-details-component',
  standalone: false,
  styleUrl: './details-component.css',
  templateUrl: './details-component.html',
})
export class DetailsComponent {

  public departamento!: departamento;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef

  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id'])
      let nombre = params['nombre']
      let localidad = params['localidad']
      this.departamento = new departamento(id, nombre ,localidad)
      this._cdr.detectChanges();
      
    })
  }
}
