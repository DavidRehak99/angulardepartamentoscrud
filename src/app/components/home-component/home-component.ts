import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{
  public departamentos!: Array<departamento>

  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef
   ) {}

   async deleteDepartamentos(id:number): Promise<void>{
    let response = await this._service.deleteDepartamentosAsync(id);
    await this.loadDepartamentos();
   }
  

  async loadDepartamentos(): Promise<void> {
    this.departamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.loadDepartamentos();
  }

}
