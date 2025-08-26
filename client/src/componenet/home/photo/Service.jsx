import React from 'react'
import './Service.css'
function Service({ id, para, read }) {
  return (
    <div className="Explore-LodgeLink">
        <div className="my-home">
          <div className="div-id">
            <h1>{id}</h1>
          </div>
          <div className="div-para">
            <p>{para}</p>
          </div>
          <div className="div-read">
            <h2>{read}</h2>
          </div>
        </div>
    </div>
  );
}
export default Service
