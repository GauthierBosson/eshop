import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/prisma/prismaClient'
import bcrypt from 'bcrypt'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Providers.Credentials({
      name: "credentials",
      authorize: async (credentials: { email: string, password: string, csrfToken: string, callbackUrl: string }) => {
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const passwordCorrect = await bcrypt.compare(credentials.password, user.password!)

          if (passwordCorrect) {
            return user
          } else {
            throw '/signin?error=true'
          }
        } else {
          // If you return null or false then the credentials will be rejected
          throw '/signin?error=true'
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      }
    })
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  }
})
