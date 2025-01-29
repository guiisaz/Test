import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
      constructor(
        @InjectModel(User) private userModel: typeof User
      ) {}
    
      async getToken(token: string){
        const user = await this.userModel.findOne({where: { token }}) // Funçao pra pegar o Token e verificar se o Token existe ou n 
        if (user){
            return true
        } else if (!user){
            return false
        }
      }

    async canActivate( // Funcao que eu queria analisar o resultado do getToken e entao caso nao tivesse token (n fosse autenticado), retirasse as permissoes do usuário de mexer na todo-list, e caso tivesse token (caso fosse autenticado), pudesse mexer livremente na lista
        context: ExecutionContext,
    ): Promise<boolean | Observable<boolean>> {
        if (await this.getToken() === true) {
            return true
        } else {
            return false
        }
    }
}