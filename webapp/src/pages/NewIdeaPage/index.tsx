import css from './index.module.scss'

export const NewIdeaPage = () => {
  return (
    <div>
      <h1 className={css.title}>New Idea</h1>
      <div>
        <form className={css.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Text" />
          <button>Create</button>
        </form>
      </div>
    </div>
  )
}
