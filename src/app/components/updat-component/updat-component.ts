import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-updat-component',
  standalone: false,
  styleUrl: './updat-component.css',
  templateUrl: './updat-component.html',
})
export class UpdatComponent implements OnInit{

  public departamento!: departamento;
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
   ){}
  
  async ngOnInit(): Promise<void> {
    this._activeRoute.params.subscribe(async (params: Params) => {
      let id = parseInt(params['id']);
      this.departamento = await this._service.findDepartamentosAsync(id);
      this._cdr.detectChanges();
    })
    
    
  }

  async updateDepartamento(): Promise<void>{
      let id = parseInt(this.cajaId.nativeElement.value);
      let nombre = this.cajaNombre.nativeElement.value;
      let localidad = this.cajaLocalidad.nativeElement.value;
      let dept = this.departamento = new departamento(id,nombre,localidad);
      let response = await this._service.updateDepartamentosAsync(dept);
      this._router.navigate(['/details', dept.numero, dept.nombre, dept.localidad])

    }

}
