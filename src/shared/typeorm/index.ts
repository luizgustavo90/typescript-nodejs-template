import { DataSource } from 'typeorm'
import 'dotenv/config'
import { CreateUserTable1696269110479 } from './migrations/1696269110479-CreateUserTable'
import { User } from '@user/main/entities/User'

export const dataSource = new DataSource({
  type: 'mysql',
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  migrations: [CreateUserTable1696269110479],
})
