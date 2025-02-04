import { Injectable } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodoListGuard {
      constructor(
        @InjectModel(User) private userModel: typeof User
      ) {}
    
      async getToken(email?: string) {
        const user = await this.userModel.findOne({where: { email }}) // Funçao pra pegar o Token e verificar se o Token existe ou n 
        if (user?.token){
            return true
        } else if (!user?.token){
            return false
        }
        console.log(user)
      }

    async isPermissionGranted(){
        if (await this.getToken() === true) {
            console.log("User authenthicated, permissions granted.") // Funcao que eu queria analisar o resultado do getToken e entao caso nao tivesse token (n fosse autenticado), retirasse as permissoes do usuário de mexer na todo-list, e caso tivesse token (caso fosse autenticado), pudesse mexer livremente na lista
        } else {
            console.log("User not authenthicated, permissions not granted.")
        }
    }
}