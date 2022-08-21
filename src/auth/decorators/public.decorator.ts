import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC, true);

/* 
Esto se puede leer desde los guards 
SetMetadata carga datos en el contexto de la petición

constructor(private reflector: Reflector) { }
const isPublic = this.reflector.get(IS_PUBLIC, context.getHandler());
 */