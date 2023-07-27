import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column
  lastname: string;

  @Column
  phone: string;

  @Column({ unique: true })
  email: string;
}
