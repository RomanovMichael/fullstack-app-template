import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <p>Idea Nick</p>
      <ul>
        <li>
          <Link to="/">All Ideas</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
