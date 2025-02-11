import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory/casl-ability.factory';

@Injectable()
export class TodoListGuard {
      constructor(
        @InjectModel(User) private userModel: typeof User,
        private caslAbilityFactory: CaslAbilityFactory
      ) {}
    
      ability = this.caslAbilityFactory.createForUser(new User)
}