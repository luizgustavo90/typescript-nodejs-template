import { CreateUserController } from '@user/controllers/create-user-controller'
import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { container } from 'tsyringe'

const usersRoute = Router()
const createUserController = container.resolve(CreateUserController)

usersRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.number().required(),
      email: Joi.string().email().required(),
    }),
  }),
  (req, res) => {
    return createUserController.handle(req, res)
  },
)

export { usersRoute }
