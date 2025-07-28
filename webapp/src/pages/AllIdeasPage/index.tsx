import { trpc } from '../../lib/trpc'
export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка: {error.message}</div>

  return (
    <div>
      <h1>All Ideas</h1>
      <ul>
        {data?.ideas.map((idea) => (
          <li key={idea.nick}>
            {idea.name} {idea.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
