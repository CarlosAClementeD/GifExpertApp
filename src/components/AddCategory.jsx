import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => { //para props.algo

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = ( e ) =>{
    setInputValue(e.target.value);
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    if(inputValue.trim().length >2 ){
      setCategories(cate => [inputValue,...cate]);
      setInputValue('');
    }
    

  }

  return (
    <div className="container">
      <form onSubmit={handlesubmit}>
        <input
          className='form-control'
          type="text"
          placeholder='Buscar ...'
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>     
      
  )

}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}