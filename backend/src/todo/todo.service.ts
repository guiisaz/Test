import { Injectable, Param, UnauthorizedException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './entities/todo.entity';
import { User } from 'src/users/entities/user.entity';
import { DeleteTodoDto } from './dto/delete-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo,
  @InjectModel(User) private userModel: typeof User ) {}


  async create(dto: CreateTodoDto) {
    const todo = await this.todoModel.create({
      title: dto.title
    })

    return todo
  }
  async findAll() {
    const todo = await this.todoModel.findAll()

    return todo;
  }

  async findOne(id: number) {
    const todo = await this.todoModel.findOne({where: {
      id
    }})

    return todo;
  }

  async update(@Param("id") id: number, dto: UpdateTodoDto) {
    const todo = await this.todoModel.update({ title: dto.title }, { 
      where: {
        id 
      }
    })
    return todo
  }

  async remove(@Param("id") id: number) {
    const todo = await this.todoModel.destroy({ where: { id } })

    return todo
  }
}
