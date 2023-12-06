import React from 'react'
import Addtofav from './Addtofav'

const Gridview = ({title, description, src, url, img}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={src ? src : img}  style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description ? description : null}</p>
      <div className="buttons">
              <a href={url} className="btn btn-dark">
                Read More
              </a>
              <div>
                <Addtofav
                  title={title}
                  description={description}
                  src={src}
                  url={url}
                  img={img}
                />
              </div>
            </div>
    </div>
  </div>
  )
}

export default Gridview