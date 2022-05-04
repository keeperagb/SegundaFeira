import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usuarioModule } from './usuarios/usuario.module';

@Module({
  imports: [usuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
