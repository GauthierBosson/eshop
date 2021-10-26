import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'

import prisma from '@/prisma/prismaClient'
import { SignupRequestBody } from '@/types/Signup'

const handler = nc<Omit<NextApiRequest, 'body'> & SignupRequestBody, NextApiResponse>()
  .post(async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      const newUser = await prisma.user.create({
        data: {
          name: req.body.name,
          password: hashedPassword,
          email: req.body.email,
        }
      })
  
      res.json(newUser)
    } catch(e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {

      } else {
        throw e
      }
    }
  })

export default handler
