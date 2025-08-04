import { Link, Outlet } from 'react-router-dom'
import css from './index.module.scss'
import { getAllIdeasRoute } from '../../lib/routes'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
