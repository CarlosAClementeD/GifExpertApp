import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrild from './components/GifGrild';

const GifExpertApp = () => {
 const [categories, setCategories] = useState(['Death Note'])
//  const handleAdd = () => {
//    const newCat = 'Digimon';
//    setCategories([...categories,newCat]);//... operador para agregar a arreglos
//  }
  return (
    <>
        <nav className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
            <div className='navbar-brand' >GifExpertApp</div>
            <AddCategory setCategories={setCategories}/>        
          </div>
        </nav>       
       
       
        <ul>
            {
            categories.map(category =>
               (<GifGrild 
                key={category}
                category={category}
                />)
            )
            }
        </ul>
    </>
  )
}

export default GifExpertApp;