import { Controller, Get, Post, Body } from '@nestjs/common';
import { conexion } from '../bd'; 
@Controller('asignaturas')
export class AsignaturasController {

  @Get()
  async obtenerAsignaturas() {
    const resultado = await conexion.query('SELECT * FROM asignaturas');
    return resultado[0];
  }

  @Post()
  async registrarAsignatura(@Body() dato: any) {
    console.log(dato);

    const consulta = 'INSERT INTO asignaturas (nombre, descripcion, creditos, id_docente) VALUES (?, ?, ?, ?)';
    await conexion.query(consulta, [dato.nombre, dato.descripcion, dato.creditos, dato.id_docente]);

    return {
      "mensaje": "Asignatura registrada con éxito",
      "datos_recibidos": dato
    };
  }
}
