import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '84657780',
      logging: (q) => console.log(q),
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CaslModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
