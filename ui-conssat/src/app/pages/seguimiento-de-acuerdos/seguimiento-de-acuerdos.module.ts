import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { CustomMaterialModule } from '../../core/material.module';
import { SeguimientoActaComponent } from './seguimiento-acta/seguimiento-acta.component';
import { DatosDeSesionComponent } from './componentes/datos-de-sesion/datos-de-sesion.component';
import { AccionRealizadaComponent } from './componentes/accion-realizada/accion-realizada.component';
import { SeguimientoAcuerdosPorActaComponent } from './seguimiento-acuerdos-por-acta/seguimiento-acuerdos-por-acta.component';
import { SharedModule } from 'src/app/core/shared.module';
import { SeguimientoDeAcuerdosRoutingModule } from './seguimiento-de-acuerdos-routing.module';
import { SHARED_SERVICE } from 'src/app/services';


@NgModule({
  declarations: [
    SeguimientoComponent,
    SeguimientoActaComponent,
    DatosDeSesionComponent,
    AccionRealizadaComponent,
    SeguimientoAcuerdosPorActaComponent
  ],
  imports: [
    CommonModule,
    SeguimientoDeAcuerdosRoutingModule,
    SharedModule,
    CustomMaterialModule,
  ],
  providers: [
    // ...SHARED_SERVICE
  ]
})
export class SeguimientoDeAcuerdosModule {
}
