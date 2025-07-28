import express from 'express'

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

const expressApp = express()

expressApp.get('/ping', (req, res) => {
  res.send('pong')
})

expressApp.get('/ideas', (req, res) => {
  res.send(ideas)
})

expressApp.listen(3000, () => {
  console.info('Listening')
})
