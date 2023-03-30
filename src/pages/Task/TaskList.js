import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Layout/Breadcrumb'
import Alert from '../../components/Alert';

const TaskList = (props) => {
  document.title = 'React | Task Listing';
  return (
    <>
      <Breadcrumb heading="Task List" breadcrumb="Task"/>
      <section className="content">
        <Alert alert={props.alert}/>
        <div className='row'>
          <div className='col-md-12'>
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <Link to={"/task/create"} className="btn btn-success"><i className='far fa-square-plus mr-2'></i>Add New Task</Link>
                </div>                
              </div>
              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}      
    </>
  )
}

export default TaskList