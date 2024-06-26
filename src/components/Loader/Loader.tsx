import React, { FC } from 'react';
import css from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

const Loader: FC = () => {
    return (
        <BallTriangle
            height={100}
            color="#8a2be2"
            ariaLabel="ball-triangle-loading"
            wrapperClass={css.loader}
        >
        </BallTriangle>
    );
}

export default Loader;