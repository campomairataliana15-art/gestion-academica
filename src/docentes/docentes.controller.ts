import { Controller, Get, Post, Body } from '@nestjs/common';
import { conexion } from '../bd';
@Controller('docentes')
export class DocentesController {

  @Get()
  async obtenerDocentes() {
    const resultado = await conexion.query('SELECT * FROM docentes');
    return resultado[0];
  }

  @Post()
  async registrarDocente(@Body() dato: any) {
    console.log(dato);

    const consulta = 'INSERT INTO docentes (nombre, apellido, correo, especialidad) VALUES (?, ?, ?, ?)';
    await conexion.query(consulta, [dato.nombre, dato.apellido, dato.correo, dato.especialidad]);

    return {
      "mensaje": "Docente registrado con éxito",
      "datos_recibidos": dato
    };
  }
}
