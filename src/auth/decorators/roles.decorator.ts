import { SetMetadata, createParamDecorator } from '@nestjs/common';
// import { Role } from '../enums/role.enum';

export enum Role {
    User = 'user',
    Admin = 'admin',
}


export const ROLES_KEY = 'roles';

export const Roles = (
    (...roles: Role[]) => {
        console.log(ROLES_KEY);
        console.log(roles);
        console.log(SetMetadata(ROLES_KEY, roles));
        return SetMetadata(ROLES_KEY, roles);
    });
