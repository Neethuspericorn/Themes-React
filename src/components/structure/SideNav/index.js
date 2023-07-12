import React from 'react';
import '../../../design/custom/structure/sidenav.scss';
import logoDark from '../../../assets/images/logo-dark.svg';

import 'bootstrap/dist/js/bootstrap.min.js'

// icons 
import {DashboardIco, SettingsIco, SearchIco, ArrowRightIco, AddIco, DocsIco, FolderIco, LogoIco, NotifyIco, PortfolioIco, ProjManageIco, ProjectsIco,ReportsIco, ProposalIco,ThreeDotIco,InviteUserIco } from './svgIcons'

const sideNav = () => {
  return (
    <>
      {/* // add class collapsed for collapsing sidemenu */}
      <div className="sidenav collapsed">
        <div className="sidenavHead d-flex align-items-center">
          <div className="logoWrp">
              <img src={logoDark} alt="logo" className='logo'/>
 
          </div>
           {/* // add class menuCollapsed for changing button style */}
          <button className="btn btn-hamburg">
              <span></span>
              <span></span>
              <span></span>
          </button>
        </div>

        <div className="sidenavWrap">
        <div className="sidenavSearch">
          <div className="searchOuter">
            <div className="ico">
                <SearchIco/>
            </div>
            <input type="text" placeholder='search' className='form-control'/>
          </div>
        </div>

        <div className="sidenavMenuWrap">
          <ul className="sidenavMenu">
            <li>
              {/* link start  */}
                <div className='menuItem  d-flex align-items-center'>
                  <div className="linksActions">
                  <a href="/dashboard" className='menuLink d-flex align-items-center'>
                    <span className="icon"> 
                      <DashboardIco/>
                    </span>
                    <span className="txt">Dashboard</span>
                  </a>
                  </div>
                   
                </div>
                  {/* link end  */}

                {/* <Link to="/dashboard">
                  <span className="icon"> </span>
                  <span className="txt">Dashboard</span>
                  <span className="dropdown"></span>
                </Link> */}
            </li>

            <li>
                {/* link start */}
                <div className='menuItem  d-flex align-items-center'>
                  <div className="linksActions">
               
                  <a href="/dashboard" className='menuLink d-flex align-items-center'>
                    <span className="icon">
                      <ProjectsIco/>  
                    </span>
                    <span className="txt">Projects</span>
                  </a>
                  <span className="actions d-flex">
                    <span className="search">
                       <SearchIco/>
                    </span>

                    <span className="dropdown"  type="button" data-bs-toggle="collapse" data-bs-target="#projectsMenu" aria-expanded="false" aria-controls="projectsMenu">
                        <ArrowRightIco/>
                    </span>
                  </span>
                  </div>
                  <div className="submenu collapse" id="projectsMenu">
                    <div className="submenuLevel1">
                      {/* submenu level1 list  */}
                      <ul>
                        {/* submenu level1 item */}
                        <li>
                          {/* submenu Level1  */}
                          <div className='sub1_menuLink d-flex align-items-center'>
                            <span className="icon">
                              <ProjManageIco/>
                            </span>
                            <span className="txt"  type="button" data-bs-toggle="collapse" data-bs-target="#projManagement" aria-expanded="false" aria-controls="projManagement">Project Management</span>
                            <span className="dropdIcon"></span>
                            
                            {/* submenu Level2  */}
                            <div className="submenu2 collapse" id='projManagement'>
                              <div className="sub2">

                                {/* submenu Level2 items */}

                                  <div className='sub2_item  d-flex align-items-center'>
                                      <a href="#" className='sub2_menuLink'>
                                        <span className='icon'> <FolderIco/> </span>
                                        <span className="txt">Scrum Management</span>
                                      </a>
                                      <span className="actions">
                                        <button className="btn btn-option">
                                          <ThreeDotIco/>
                                        </button>
                                        <button className="btn btn-add">
                                          <AddIco/>
                                        </button>
                                      </span>
                                  </div>

                                  <div className='sub2_item  d-flex align-items-center'>
                                      <a href="#" className='sub2_menuLink' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <span className='icon'> <FolderIco/> </span>
                                        <span className="txt">Intake</span>
                                      </a>
                                      <span className="actions">
                                        <button className="btn btn-option">
                                          <ThreeDotIco/>
                                        </button>
                                        <button className="btn btn-add">
                                          <AddIco/>
                                        </button>
                                      </span>

                                      {/* submenu Level3  */}
                                      <div className='sub3_item collapse'  id="collapseExample">
                                          <ul>
                                            <li className='d-flex align-items-center'>
                                              <span className="txt">Enhancement Requests</span>
                                              <span className="count">3</span>
                                            </li>

                                            <li className='d-flex align-items-center'>
                                              <span className="txt">Bugs</span>
                                              <span className="count">24</span>
                                            </li>
                                          </ul>
                                      </div>

                                  </div>

                                  <div className='sub2_item  d-flex align-items-center'>
                                      <a href="#" className='sub2_menuLink'>
                                        <span className='icon'> <FolderIco/> </span>
                                        <span className="txt">Epics</span>
                                      </a>
                                      <span className="actions">
                                        <button className="btn btn-option">
                                          <ThreeDotIco/>
                                        </button>
                                        <button className="btn btn-add">
                                          <AddIco/>
                                        </button>
                                      </span>
                                  </div>

                                  <div className='sub2_item  d-flex align-items-center'>
                                      <a href="#" className='sub2_menuLink'>
                                        <span className='icon'> <FolderIco/> </span>
                                        <span className="txt">Outbound</span>
                                      </a>
                                      <span className="actions">
                                        <button className="btn btn-option">
                                          <ThreeDotIco/>
                                        </button>
                                        <button className="btn btn-add">
                                          <AddIco/>
                                        </button>
                                      </span>
                                  </div>
                              </div>
                            </div>  
                          </div>

                        </li>

                        {/* submenu level1 item */}
                        <li>
                          <div className='sub1_menuLink d-flex align-items-center'>
                            <span className="icon">
                              <PortfolioIco/>
                            </span>
                            <span className="txt">Portfolio Management</span>  
                            <span className="dropdIcon"></span>
                          </div>
                        </li>

                        {/* submenu level1 item */}
                        <li>
                          <div className='sub1_menuLink d-flex align-items-center'>
                            <span className="icon">
                              <ProposalIco/>
                            </span>
                            <span className="txt">Proposal Web</span>  
                            <span className="dropdIcon"></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* link end  */}
            </li>

            <li>
               {/* link start */}
              <div href="/project" className='menuItem d-flex align-items-center'>
              <div className="linksActions">
                <a href="/dashboard" className='menuLink d-flex align-items-center'>
                  <span className="icon"> 
                    <ReportsIco/>  
                  </span>
                  <span className="txt">Reports</span>
                </a>
                  <span className="actions d-flex">
                    <span className="dropdown">
                         <ArrowRightIco/>
                    </span>
                  </span>
                </div>
                  
              </div>
              {/* link end  */}
            </li>

            <li>
               {/* link start */}
              <div href="/project" className='menuItem d-flex align-items-center'>
                <div className="linksActions">
                <a href="/dashboard" className='menuLink d-flex align-items-center'>
                  <span className="icon">
                    <DocsIco/>
                  </span>
                  <span className="txt">Docs</span>
                </a>
                  <span className="actions d-flex">
                    <span className="dropdown">
                      <ArrowRightIco/>
                    </span>
                  </span>
                </div>
              </div>
              {/* link end  */}
            </li>

            <li>
               {/* link start */}
              <div href="/project" className='menuItem d-flex align-items-center'>
                <div className="linksActions">
                  <a href="/dashboard" className='menuLink d-flex align-items-center'>
                  <span className="icon"> 
                    <NotifyIco/>
                  </span>
                  <span className="txt">Notifications</span>
                  </a>
                  <span className="actions d-flex">
                    <span className="dropdown">
                      <ArrowRightIco/>
                    </span>
                  </span>
                </div>
              </div>
              {/* link end  */}
            </li>

          </ul>
        </div>

         <div className="sidenavBottom d-flex align-items-center">
            <div className="userSelect">
                <div className="userIco">
                    DG
                </div>
                <button className='btn btn-userSelect'>
                   
                </button>
            </div>    

            <div className="inviteUser">
              <a href="" className='invLink'>
                <InviteUserIco/>
              </a>
            </div>
        </div>  
        </div>

        


      </div>
    </>
  )
};

export default sideNav;
