import React from 'react';

import '../../design/custom/pages/dashboard.scss'
import '../../design/custom/structure/pageContents.scss'
import '../../design/custom/structure/sidenav.scss'

import Sidenav from '../../components/structure/SideNav/index'
import Header from '../../components/structure/Header/index'

import ProfileCard from '../Dashboard/components/ProfileCard'
import Counter from '../Dashboard/components/Counter'
import GraphCard from '../Dashboard/components/GraphCard'
import TaskCard from '../Dashboard/components/TaskCard'

const DashBoard = () => {
  return(
    <>
        <div className="page-wrap">
            <Sidenav/>
            <div className="page-container">
               <Header/>
                <div className="page-contents">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4 mb-4">
                      <ProfileCard/>
                    </div>
                    <div className="col-lg-8">
                      <Counter/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <GraphCard/>
                    </div>

                    <div className="col-md-6">
                      <GraphCard/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                    <TaskCard title="Assigned Tasks For Today"/> 
                    </div>
                    <div className="col-md-6"> 
                       <TaskCard title="Queued Tasks"/> 
                       
                    </div>

                  </div>
                </div>
                </div>
            </div>
        </div>
    
    </>
  )
};

export default DashBoard;
