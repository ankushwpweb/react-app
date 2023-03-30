import React from 'react';
import Breadcrumb from '../components/Layout/Breadcrumb';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';

const Home = (props) => {
  document.title = 'React | Home Page';
  return (
    <>
      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      <Breadcrumb heading="Dashboard" breadcrumb="Dashboard"/>      
      {/* <Breadcrumb heading="Dashboard" breadcrumb={{link:false,title:"Dashboard"}}/>       */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <Alert alert={props.alert}/>
          <div className="card">
            <div className="card-header"><b>Apps</b></div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 col-sm-3 col-4 text-center p-2">
                  <Link to={"/textutil"}>
                    <i className="fa-duotone fa-keyboard fa-2x text-info"></i>
                    <h6 className='mt-2 mb-0 text-info'><b>Text Utils</b></h6>
                  </Link>
                </div>
                <div className="col-md-2 col-sm-3 col-4 text-center p-2">
                  <Link to={"/task"}>
                    <i className="fa-duotone fa-list-check fa-2x text-info"></i>
                    <h6 className='mt-2 mb-0 text-info'><b>Tasks</b></h6>
                  </Link>
                </div>
                <div className="col-md-2 col-sm-3 col-4 text-center p-2">
                  <Link to={"/news"}>
                    <i className="fa-duotone fa-newspaper fa-2x text-info"></i>
                    <h6 className='mt-2 mb-0 text-info'><b>News</b></h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>          
          {/* /.row */}            
        </div>{/* /.container-fluid */}
      </section>
      {/* /.content */}      
    </>
  );
}

export default Home;