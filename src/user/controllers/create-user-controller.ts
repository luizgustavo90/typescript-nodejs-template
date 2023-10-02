import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { instanceToInstance } from 'class-transformer'
import { CreateUserUseCase } from '@user/main/usecases/create-user-usecase'

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase)
    const { name, email, age } = req.body
    const user = await createUserUseCase.execute({
      name,
      email,
      age,
    })
    return res.status(201).json(instanceToInstance(user))
  }
}
