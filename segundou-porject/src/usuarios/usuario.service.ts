import { Injectable, Inject} from '@nestjs/common';
import { resultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastroDto } from './dto/usuario.cadastro.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastroDto): Promise<resultadoDto>{
    let usuario = new Usuario()
    usuario.email = data.email
    usuario.nome = data.nome
    usuario.senha = data.senha
    return this.usuarioRepository.save(usuario)
    .then((result) => {
      return <resultadoDto>{
        status: true,
        mensagem: 'Cadastro realizado com sucesso'
      }
    })
    .catch((error) => {
      return <resultadoDto>{
        status: false,
        mensagem: 'Houve um erro ao realizar o cadastro de usuario'
      }
    })
  }
 
  
}