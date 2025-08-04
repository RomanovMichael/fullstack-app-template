import { trpc } from '../../lib/trpc'
import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from '../../lib/routes'
import css from './index.module.scss'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка: {error.message}</div>

  return (
    <div>
      <h1>All Ideas</h1>
      <ul className={css.ideas}>
        {data?.ideas.map((idea) => (
          <li key={idea.nick} className={css.idea}>
            <div>
              <Link className={css.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                {idea.name}
              </Link>
              <p>{idea.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
