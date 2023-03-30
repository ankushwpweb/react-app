import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {  
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{props.heading}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                <li className="breadcrumb-item active">{props.breadcrumb}</li>
                {/* {props.breadcrumb &&
                  props.breadcrumb.map((data) => {
                  if(data.link == false){
                    <li className="breadcrumb-item active">{data.title}</li>
                  }else{
                    <li className="breadcrumb-item"><Link to={data.link}>{data.title}</Link></li>
                  }
                })} */}
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
    </>    
  )
}

export default Breadcrumb