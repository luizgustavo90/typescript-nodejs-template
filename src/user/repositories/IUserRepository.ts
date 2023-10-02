import { User } from '../main/entities/ User'

export type CreateUserDTO = {
  name: string
  age: number
  email: string
}

export type PaginateParams = {
  page: number
  skip: number
  take: number
}

export type UsersPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: User[]
}

export interface IUserRepository {
  create({ name, email, age }: CreateUserDTO): Promise<User>
  save(user: User): Promise<User>
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginateProperties>
  findById(id: string): Promise<User | null>
  findByName(name: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  delete(user: User): Promise<void>
}
