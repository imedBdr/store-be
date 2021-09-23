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
  email: string;

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

  constructor(partial: Partial<AdministratorEntity>) {
    if (partial) {
      Object.assign(this, partial);

      this.created_at = Date.now();
      this.modified_at = 0;
    }
  }
}
