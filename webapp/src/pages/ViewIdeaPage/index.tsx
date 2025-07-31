import { useParams } from 'react-router-dom'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string }

  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>description</p>
      <div>
        <p>paragraph 1</p>
        <p>paragraph 2</p>
        <p>paragraph 3</p>
      </div>
    </div>
  )
}
