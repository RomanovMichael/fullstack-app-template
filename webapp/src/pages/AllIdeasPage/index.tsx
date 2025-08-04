import { trpc } from '../../lib/trpc'
import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from '../../lib/routes'
import { Segment } from '../../components/Segment'

import css from './index.module.scss'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка: {error.message}</div>

  return (
    <Segment title="All Ideas">
      <ul className={css.ideas}>
        {data?.ideas.map((idea) => (
          <li key={idea.nick} className={css.idea}>
            <Segment
              size={2}
              title={
                <Link className={css.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                  {idea.name}
                </Link>
              }
              description={idea.description}
            ></Segment>
          </li>
        ))}
      </ul>
    </Segment>
  )
}
