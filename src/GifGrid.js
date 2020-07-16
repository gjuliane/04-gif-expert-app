import React, {useState, useEffect} from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/getGifs';

export const GifGrid = ( {category} ) => {
    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);
    

    // useEffect( () => {
    //     getGifs(category)
    //         .then( setImages );
    //     // .then(imgs => setImages(imgs))
    // }, [ category ]);

    

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Cargando...</p> }
            <div className='card-grid'>
                    {
                        images.map( (item) => (
                            <GifGridItem 
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
            </div>
        </>
    )
}
