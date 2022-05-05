import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { resultadoDto } from "src/dto/resultado.dto";
import { UsuarioCadastroDto } from "./dto/usuario.cadastro.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";


@Controller('usuario')
export class UsuarioController{
        constructor(private readonly usuarioService: UsuarioService){}

        @Get('listar')
        async listar(): Promise<Usuario[]>{
            return this.usuarioService.listar()
        }

        @Post('cadastrar')
        async cadastrar (@Body() data: UsuarioCadastroDto): Promise<resultadoDto>{
            return this.usuarioService.cadastrar(data)
        }

        
  }
