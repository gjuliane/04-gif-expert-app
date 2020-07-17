import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = props => {
    const [categories, setCategories] = useState(['Naruto']);
    
    // const handleAdd = () => {
    //     setCategories((c) => {
    //         return [...categories, '321'];
    //     });
    //     ó
    //     setCategories( cats => [...categories, '321'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories} />
            <hr/>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <div>
                {
                    categories.map( category => {
                        return <GifGrid
                        key={ category }
                        category= { category }
                        />
                    })
                    
                }
            </div>

        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
