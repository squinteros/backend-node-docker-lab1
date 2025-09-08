import { Module } from '@nestjs/common';
import { OperacionesController } from './operaciones/operaciones.controller';
import { OperacionesService } from './operaciones/operaciones.service';

@Module({
  controllers: [OperacionesController],
  providers: [OperacionesService],
})
export class TareasModule {}
