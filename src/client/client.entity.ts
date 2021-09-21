import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'client', synchronize: false })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column()
  created_at: number;

  @Column()
  modified_at: number;

  @Column()
  last_login: number;
}
