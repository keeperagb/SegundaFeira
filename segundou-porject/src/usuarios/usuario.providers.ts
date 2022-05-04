
import { Usuario } from './usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection) => connection.getRepository(Usuario),
    inject: ['DATABASE_CONNECTION'],
  },
];