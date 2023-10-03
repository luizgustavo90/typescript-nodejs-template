import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { instanceToInstance } from 'class-transformer'
import { ListUserUseCase } from '@user/main/usecases/list-user-usecase'

export class ListUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUserUseCase = container.resolve(ListUserUseCase)
    const page =
      req.query.page && Number(req.query.page) > 0 ? Number(req.query.page) : 1
    const limit =
      req.query.limit && Number(req.query.limit) > 0
        ? Number(req.query.limit)
        : 15
    const user = await listUserUseCase.execute({ page, limit })
    return res.status(201).json(instanceToInstance(user))
  }
}
