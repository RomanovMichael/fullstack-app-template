import { initTRPC } from '@trpc/server'

const ideas = [
  {
    nick: 'idea-nick-1',
    name: 'Salam1',
    description: 'About what',
  },
  {
    nick: 'idea-nick-2',
    name: 'Salam2',
    description: 'About what',
  },
  {
    nick: 'idea-nick-3',
    name: 'Salam3',
    description: 'About what',
  },
  {
    nick: 'idea-nick-4',
    name: 'Salam4',
    description: 'About what',
  },
  {
    nick: 'idea-nick-5',
    name: 'Salam5',
    description: 'About what',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
