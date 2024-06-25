import { FC } from 'react'
import css from './LoadMoreBtn.module.css'
import { LoadMoreBtnProps } from './LoadMoreBtn.types'

 const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {

    return (
        <button onClick={onLoadMore} className={css.btn} >Завантажити ще...</button>
    )
}

export default LoadMoreBtn