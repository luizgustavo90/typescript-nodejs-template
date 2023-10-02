import { container } from 'tsyringe'
import { CreateUserController } from '@user/controllers/create-user-controller'
import { IUserRepository } from '@user/repositories/IUserRepository'
import { UserRepository } from '@user/repositories/UserRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton('CreateUserController', CreateUserController)
