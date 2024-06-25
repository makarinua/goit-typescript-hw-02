import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FC, FormEvent } from 'react';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: FC<SearchBarProps> = ({ onFind }) => {
    
    function submitHandler(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const input = form.elements.namedItem('search') as HTMLInputElement
        const data = input.value
        if (data.length === 0) {
          toast.error('Вкажіть що шукати!')
            return
        }
        onFind(data)
        form.reset()
    }
 
    return (
        <header className={css.header}>
  <form onSubmit={submitHandler}>
    <input
      type="text"
      autoComplete="off"
      name="search"
      autoFocus
      placeholder="Пошук зображень та фото..."
    />
    <button type="submit">Пошук</button>
        </form>
        <Toaster
          position="top-center"
          containerClassName={css.toast}
          toastOptions={
            {style: {color: 'white', backgroundColor: 'rgb(15, 106, 180)' } }
          }
        ></Toaster>
</header>
    )
}

export default SearchBar