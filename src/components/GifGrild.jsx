import React from 'react'
import { useFetchGif } from '../hooks/useFetchGifs'
import { GifGrildItem } from './GifGrildItem';

const GifGrild = ({ category }) => {
    const { data: images, loading } = useFetchGif(category);


    return (
        <div className='container'>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="row mt-3">
                {
                    images.map(img =>
                        <GifGrildItem
                            key={img.id}
                            img={img}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default GifGrild