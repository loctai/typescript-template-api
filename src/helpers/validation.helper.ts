import { Joi, Modes, Segments, celebrate } from 'celebrate'

export const helloWorldSchema = celebrate(
  {
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().alphanum().min(2).max(30).required(),
    }),
  },
  { abortEarly: false },
  { mode: Modes.FULL }
)


export const allNFTsSchema = celebrate(
  {
    [Segments.QUERY]: Joi.object().keys({
      offset: Joi.number().default(0),
      limit: Joi.number().default(10),
      search: Joi.optional(),
    }),
  },
  { abortEarly: false },
  { mode: Modes.FULL }
)