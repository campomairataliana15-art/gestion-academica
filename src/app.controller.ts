import { Controller, Get } from '@nestjs/common';
import { conexion } from './bd';

@Controller()
export class AppController {

  @Get()
  async obtenerDatosDocentes() {
    try {
      const resultado = await conexion.query('SELECT * FROM Docentes');

      return resultado[0];
    } catch (error) {
      return { mensaje: 'Error al consultar la base de datos', error };
    }
  }
}