import React from 'react';
import '../../design/custom/pages/projectmanagement-board.scss';
import '../../design/custom/structure/sidenav.scss'

import Sidenav from '../../components/structure/SideNav/index'
import Header from '../../components/structure/Header/index'
import Cards from './components/Cards';

const ProjectManagementBoard = () => {
  return (
    <>
    <div className="page-wrap">
            <Sidenav/>
     <div className="page-container overflow-hidden">
               <Header/>
     <div className="container-fluid">
      <div className='row'>
        <div className='col-md-12'>
            <div className='project-tile-area d-flex'>
                <div className='project-process'>
                    <div className="project-process-head to-do">
                        <h3 className="project-process-name">TO DO</h3>
                        <span className="poject-process-count">47</span>
                    </div>
                    <div className='project-process-card custom-scroll'>
                        <Cards/>
                    </div>
                </div>
                <div className='project-process'>
                    <div className="project-process-head in-progress">
                        <h3 className="project-process-name">IN PROGRESS</h3>
                        <span className="poject-process-count">1</span>
                    </div>
                    <div className='project-process-card custom-scroll'>
                        <Cards/>
                    </div>
                </div>
                <div className='project-process'>
                    <div className="project-process-head ready-for-qa">
                        <h3 className="project-process-name">READY FOR QA</h3>
                        <span className="poject-process-count">15</span>
                    </div>
                    <div className='project-process-card custom-scroll'>
                        <Cards/>
                    </div>
                </div>
                <div className='project-process'>
                    <div className="project-process-head complete">
                        <h3 className="project-process-name">COMPLETED</h3>
                        <span className="poject-process-count">7</span>
                    </div>
                    <div className='project-process-card custom-scroll'>
                        <Cards/>
                    </div>
                </div>
                <div className='project-process'>
                    <div className="project-process-head in-review">
                        <h3 className="project-process-name">IN REVIEW</h3>
                        <span className="poject-process-count">1</span>
                    </div>
                    <div className='project-process-card custom-scroll'>
                        <Cards/>
                    </div>
                </div>
                <div className='project-process'>
                    <div className="project-process-head closed">
                        <h3 className="project-process-name">CLOSED</h3>
                        <span className="poject-process-count">0</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
};

export default ProjectManagementBoard;