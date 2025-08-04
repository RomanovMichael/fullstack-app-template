import { trpc } from '../../lib/trpc'
import { useParams } from 'react-router-dom'
import { Segment } from '../../components/Segment'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string }

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({ ideaNick })

  if (isLoading || isFetching) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка: {error.message}</div>
  if (!data?.idea) {
    return <span> Idea not found</span>
  }

  return (
    <Segment title={data.idea.name} size={2} description={data.idea.description}>
      <div dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  )
}
