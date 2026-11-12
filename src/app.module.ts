import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocentesController } from './docentes/docentes.controller';
import { AsignaturasController } from './asignaturas/asignaturas.controller';

@Module({
  controllers: [AppController, DocentesController, AsignaturasController],
  providers: [AppService],
})
export class AppModule {}
