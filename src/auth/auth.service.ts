import { ClientProxyCRM } from './../common/proxy/client-proxy';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserMSG } from 'src/common/constants';
import { UserLoginDTO } from 'src/user/dto/user.login.dto';
import { map } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientProxy: ClientProxyCRM,
    private readonly jwtService: JwtService,
  ) { }

  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  async validateUser(username: string, password: string): Promise<any> {

    const user = this._clientProxyUser
      .send(UserMSG.VALID_USER, {
        username,
        password,
      });
    console.log(user);
    if (user) return user;

    throw new UnauthorizedException('Invalid credentials');
  }

  async signIn(userLogin: UserLoginDTO): Promise<any> {
    return from(this._clientProxyUser.send(UserMSG.VALID_USER, userLogin).pipe(
      map(user => { return { access_token: this.jwtService.sign(user) } })
    ));
  }

  async signUp(userDTO: UserDTO) {
    return this._clientProxyUser
      .send(UserMSG.CREATE, userDTO);
  }
}
