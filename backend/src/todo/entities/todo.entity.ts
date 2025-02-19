import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType } from "sequelize-typescript";

@Table({
    tableName: 'todolist',
    underscored: true,
})

export class Todo extends Model {
    
    @AllowNull(false)
    @Column
    title: string;

}
