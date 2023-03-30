import React from 'react'
import Breadcrumb from '../../components/Layout/Breadcrumb';
import Alert from '../../components/Alert';

const TaskCreate = (props) => {
  document.title = 'React | Task Create Page';
  return (
    <>
      <Breadcrumb heading="Create New Task" breadcrumb="Task > Create" />
      {/* <Breadcrumb heading="Create New Task" breadcrumb={[{link:"/task",title:"Task"},{link:false,title:"Create"}]}/> */}
      <section className="content">
        <Alert alert={props.alert}/>
        <div className='row'>
          <div className='col-md-6'>
            <div className="card">
              {/* /.card-header */}
              <div className="card-body">

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

export default TaskCreate;