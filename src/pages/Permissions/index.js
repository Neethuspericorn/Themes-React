import React,{ useState, useEffect } from 'react';
import '../../design/custom/pages/permissions.scss';
import ToggleSwitch from './components/ToggleSwitch';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Collapse } from 'bootstrap';
function Permissions() {
    var [toggle, setToggle] = useState(false);
    useEffect(() => {
        var myCollapse = document.getElementById('collapseTarget')
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

  return (
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Settings Modal</button>
    <div className="modal fade" id="staticBackdrop" 
         data-bs-backdrop="static" 
         data-bs-keyboard="false" 
         tabIndex="-1" 
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered fullmodal">
            <div className="modal-content fullheight">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <h5 className='title-role'>Edit Designation and Permission</h5>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <input type="email" class="form-control theme" id="manager" placeholder="Manager"></input>
                    </div>
                    <div className="col-md-6 mb-4">
                        <input type="email" class="form-control theme" id="project-lead" placeholder="Project Lead"></input>
                    </div>
                </div>
                <div className="collapse-container">
                    <a className="collapse-wrap align-items-center btn theme d-flex" onClick={() => setToggle(toggle => !toggle)}>
                    <span>DASHBOARD</span>
                    <ToggleSwitch/>
                    </a>
                    <div className="collapse" id="collapseTarget">
                        <div className="collapse-inner">
                          <div className="row">
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Counter Project</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Counter Employee</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Counter Client</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Counter Ticket</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Project Summary</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Upcoming Holidays</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Today Leave List</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="radius-card d-flex align-items-center justify-content-between">
                                  <span>Joke of the Day</span>
                                  <ToggleSwitch/>
                                </div>
                              </div>
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
}

export default Permissions