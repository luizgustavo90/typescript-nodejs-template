import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string
  @Column()
  name: string
  @Column()
  age: number
  @Column()
  email: string

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
