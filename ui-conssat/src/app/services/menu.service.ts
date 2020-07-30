import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  rolMenu = [
    {
      idRol: 'ROLE_ADMCONSSAT', menus: [
        { titulo: 'seguridad', url: '/panel/seguridad', icono: 'fingerprint' },
        { titulo: 'regiones', url: '/panel/regiones', icono: 'map' },
        { titulo: 'Consejeros', url: '/panel/consejeros', icono: 'accessibility' },
        { titulo: 'Plan de Trabajo', url: '/panel/planes-de-trabajo', icono: 'assignment_ind' },
        { titulo: 'Sesión de Trabajo', url: '/panel/sesiones-de-trabajo', icono: 'update' },
        { titulo: 'Seguimiento de Acuerdos', url: '/panel/seguimiento-de-acuerdos', icono: 'assignment_turned_in' },
        { titulo: 'Informes de Géstion', url: '/panel/informes-anuales', icono: 'find_in_page' },
        { titulo: 'Boletín', url: '/panel/boletines', icono: 'find_in_page' },
        { titulo: 'Calendario de Actividades', url: '/panel/calendarios', icono: 'find_in_page' },
      ]
    },
    {
      idRol: 'ROLE_ADMCORSSAT', menus: [
        { titulo: 'seguridad', url: '/panel/seguridad', icono: 'fingerprint' },
        { titulo: 'regiones', url: '/panel/regiones', icono: 'map' },
        { titulo: 'Consejeros', url: '/panel/consejeros', icono: 'accessibility' },
        { titulo: 'Plan de Trabajo', url: '/panel/planes-de-trabajo', icono: 'assignment_ind' },
        { titulo: 'Sesión de Trabajo', url: '/panel/sesiones-de-trabajo', icono: 'update' },
        { titulo: 'Seguimiento de Acuerdos', url: '/panel/seguimiento-de-acuerdos', icono: 'assignment_turned_in' },
        { titulo: 'Informes de Géstion', url: '/panel/informes-anuales', icono: 'find_in_page' },
        { titulo: 'Boletín', url: '/panel/boletines', icono: 'find_in_page' },
        { titulo: 'Calendario de Actividades', url: '/panel/calendarios', icono: 'find_in_page' },
      ]
    },
    {
      idRol: 'ROLE_CONSSAT', menus: [
        { titulo: 'Consejeros', url: '/panel/consejeros', icono: 'accessibility' },
        { titulo: 'Plan de Trabajo', url: '/panel/planes-de-trabajo', icono: 'assignment_ind' },
        { titulo: 'Sesión de Trabajo', url: '/panel/sesiones-de-trabajo', icono: 'update' },
        { titulo: 'Seguimiento de Acuerdos', url: '/panel/seguimiento-de-acuerdos', icono: 'assignment_turned_in' },
        { titulo: 'Informes de Géstion', url: '/panel/informes-anuales', icono: 'find_in_page' },
        { titulo: 'Boletín', url: '/panel/boletines', icono: 'find_in_page' },
        { titulo: 'Calendario de Actividades', url: '/panel/calendarios', icono: 'find_in_page' },

      ]
    },
    {
      idRol: 'ROLE_CORSSAT', menus: [
        { titulo: 'Consejeros', url: '/panel/consejeros', icono: 'accessibility' },
        { titulo: 'Plan de Trabajo', url: '/panel/planes-de-trabajo', icono: 'assignment_ind' },
        { titulo: 'Sesión de Trabajo', url: '/panel/sesiones-de-trabajo', icono: 'update' },
        { titulo: 'Seguimiento de Acuerdos', url: '/panel/seguimiento-de-acuerdos', icono: 'assignment_turned_in' },
        { titulo: 'Informes de Géstion', url: '/panel/informes-anuales', icono: 'find_in_page' },
        { titulo: 'Boletín', url: '/panel/boletines', icono: 'find_in_page' },
        { titulo: 'Calendario de Actividades', url: '/panel/calendarios', icono: 'find_in_page' },
      ]
    },
    {
      idRol: 'ROLE_OPECONSSAT', menus: [
        { titulo: 'Comisiones', url: '/panel/comisiones', icono: 'work' },
        { titulo: 'Consejeros', url: '/panel/consejeros', icono: 'accessibility' },
        { titulo: 'Plan de Trabajo', url: '/panel/planes-de-trabajo', icono: 'assignment_ind' },
        { titulo: 'Sesión de Trabajo', url: '/panel/sesiones-de-trabajo', icono: 'update' },
        { titulo: 'Seguimiento de Acuerdos', url: '/panel/seguimiento-de-acuerdos', icono: 'assignment_turned_in' },
        { titulo: 'Informes de Géstion', url: '/panel/informes-anuales', icono: 'find_in_page' },
        { titulo: 'Calendario de Actividades', url: '/panel/calendarios', icono: 'find_in_page' },
      ]
    },
    {
      idRol: 'ROLE_OPECORSSAT', menus: [
        { titulo: 'Comisiones', url: '/panel/comisiones', icono: 'work' },
        { titulo: 'Consejeros', url: '/panel/consejeros', icono: 'accessibility' },
        { titulo: 'Plan de Trabajo', url: '/panel/planes-de-trabajo', icono: 'assignment_ind' },
        { titulo: 'Sesión de Trabajo', url: '/panel/sesiones-de-trabajo', icono: 'update' },
        { titulo: 'Seguimiento de Acuerdos', url: '/panel/seguimiento-de-acuerdos', icono: 'assignment_turned_in' },
        { titulo: 'Informes de Géstion', url: '/panel/informes-anuales', icono: 'find_in_page' },
        { titulo: 'Calendario de Actividades', url: '/panel/calendarios', icono: 'find_in_page' },
      ]
    }
  ];

  constructor() {
  }

  public obtenerMenuPorRol(idRolInput: string): Observable<any[]> {
    let filtrado = this.rolMenu.filter(el => el.idRol === idRolInput);
    if (filtrado.length > 0) {
      return of(filtrado[0].menus);
    } else {
      return of([]);
    }

  }
}
