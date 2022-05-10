import React from 'react'

export const GifGrildItem = ({img}) => {
  return (

      <div className="col-md-3 col-sm-6">
          <div className='card'>
              <img src={img.url} className='card-img-top' alt={img.title} height='150px'/>
              <div className='card-body'>
                  <h5 className='card-title'>{img.title}</h5>
              </div>
          </div>
      </div>

  )
}
