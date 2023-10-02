import { User } from '@user/main/entities/User'
import { AppError } from '@shared/errors/AppError'
import { IUserRepository } from '@user/repositories/IUserRepository'
import { inject, injectable } from 'tsyringe'

type CreateUserDTO = {
  name: string
  email: string
  age: number
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUserRepository,
  ) {}

  async execute({ name, email, age }: CreateUserDTO): Promise<User> {
    console.log('esta entrando no usecase')
    const emailExists = await this.usersRepository.findByEmail(email)
    if (emailExists) {
      throw new AppError('Email address already exists!')
    }

    const user = await this.usersRepository.create({
      name,
      email,
      age,
    })

    return user
  }
}
