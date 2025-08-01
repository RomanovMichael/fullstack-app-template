import { trpc } from '../../lib/trpc'
import { useParams } from 'react-router-dom'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string }

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({ ideaNick })

  if (isLoading || isFetching) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка: {error.message}</div>
  if (!data?.idea) {
    return <span> Idea not found</span>
  }

  return (
    <div>
      <h1>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <p dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  )
}
