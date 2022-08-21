import { createParamDecorator, ExecutionContext, SetMetadata } from "@nestjs/common";


export const AuthRole = (role: string) => {
    console.log('object');
    return (target: Function) => {
        console.log(role);
        console.log(target);
        return;
    }
}