import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

export default function SearchBar({ onFind }) {

  function submitHandler(event) {
    event.preventDefault()
    const data = event.target.elements.search.value
    if (data.length === 0) {
      toast.error('Вкажіть що шукати!')
      return
    }
    onFind(event.target.elements.search.value)
    event.target.reset()
  }

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler}>
        <input
          className={css.headerinput}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Пошук зображень та фото..."
        />
        <button className={css.headerbutton} type="submit">Пошук</button>
      </form>
      <Toaster
        position="top-center"
        containerClassName={css.toast}
        toastOptions={
          { style: { color: 'white', backgroundColor: 'rgb(15, 106, 180)' } }
        }
      ></Toaster>
    </header>
  )
}