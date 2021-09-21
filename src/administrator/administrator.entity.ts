import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'administrator', synchronize: false })
export class AdministratorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  last_login: number;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;
}
