export const App = () => {
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
  return (
    <div>
      <h1>Ideas!</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>Description {idea.description}.</p>
          </div>
        )
      })}
    </div>
  )
}
