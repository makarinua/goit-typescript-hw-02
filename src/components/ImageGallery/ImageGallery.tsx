import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery = (props) => {
   const { data, openModal } = props;

   return (
        <ul className={css.imgList}>
            {data.map(item => (
                <li key={item.id} className={css.imgItem}>
                    <ImageCard
                        url={item.urls.small}
                        name={item.alt_description}
                        fullInfo={item}
                        openModal={openModal}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;