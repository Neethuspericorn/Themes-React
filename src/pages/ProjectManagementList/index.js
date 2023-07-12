import React from 'react';
import '../../design/custom/components/TaskCard.scss';
import '../../design/custom/pages/management-list.scss';
import arroWCircle from '../../assets/images/arrow-circle-down.svg';
import infoIcon from '../../assets/images/info.svg';
import ImgSubtask from '../../assets/images/Subtask.svg';
import arrowRight from '../../assets/images/arrow_right.svg';
import taskNumAdd from '../../assets/images/num-plus.svg';
import tableMenuicon from '../../assets/images/menu-table.svg';
import taskTitleEdit from '../../assets/images/edit.svg';
import AssigneeDef from '../../assets/images/add_assignee.svg';
import addCalendar from '../../assets/images/calendar.svg';
import addPriority from '../../assets/images/flag-def.svg';
import addComments from '../../assets/images/comment.svg';
import flagWarning from '../../assets/images/flag-orange.svg';
import addAttachment from '../../assets/images/attachment.svg';
const ProjectManagementList = () => {
  return (
    <>
       <div className='managament-list-cover'>
        <div className='acc-list-cover'>
          <div className='acc-block'>
            <div className='acc-block-title'>
              Proposal Web Sprint
            </div>
          </div>


        <div className="accordion accordion-parent" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header accordion-header-main d-flex" id="headingOne">
                <button className="accordion-button accordion-toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img src={arroWCircle} alt="" />
                </button>
                <div className='acc-parent-title'>
                  Admin Module - Web Application 
                </div>
                <span className='acc-title-tooltip'>
                  <img src={infoIcon} alt="" />
                </span>
                <button className='acc-btn-def align-items-center'>+ NEW TASK</button>
                <button className='acc-btn-def align-items-center'>+ ADD DESCRIPTION</button>
                <button className='acc-btn-def align-items-center'>+ ADD COMMENT</button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {/* body */}
                  <div class="accordion accordion-sub" id="accordionInner">
                    <div class="accordion-item accordion-item-closed">
                      <h2 class="accordion-header d-flex accordion-header-sub" id="flush-headingOne">
                        <button class="accordion-button accordion-toggle-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <img src={arroWCircle} alt="" />
                        </button>
                        <span className='acc-title-status'>CLOSED</span>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionInner">
                        <div class="accordion-body">
                          <div className='acc-table-parent'>
                            <table className='table '>
                              <tbody>
                                <tr>
                                  <td className='toggle-td'>
                                    <div className='d-flex align-items-center'>
                                      <button className='table-toggle-btn'>
                                      <img src={arrowRight} alt='arrow down' />
                                      </button>
                                      <span className='task-row-status task-grn'></span>
                                    </div>
                                  </td>
                                  <td className='table-title-main'>
                                    <p className='sprint-md'>Sprint 1 (2/13 - 2/26)</p>
                                    <div className='task-main-block d-flex align-items-center'>
                                      <div className='task-title-md'>Employee Management - Add/Edit/List/Delete/View</div>
                                      <div className='task-num'><img src={ImgSubtask} alt='Subtask' /> <span className='num'>3</span> 
                                        <span className='add-num'><img src={taskNumAdd} alt='Add task num' /></span>
                                      </div>
                                      <button className='tab-menu-btn'>
                                        <img src={tableMenuicon} alt='table menu' />
                                      </button>
                                      <button className='task-title-edit-btn'>
                                        <img src={taskTitleEdit} alt='task Edit' />
                                      </button>
                                    </div>
                                  </td>
                                  <td>
                                    <button className='add-assignee-btn task-btn-def'>
                                      <img src={AssigneeDef} alt='Add Assignee' />
                                    </button>
                                  </td>
                                  <td>
                                    <button className='add-assignee-btn task-btn-def'>
                                      <img src={addCalendar} alt='Add Calendar' />
                                    </button>
                                  </td>
                                  <td>
                                    <button className='task-btn-def'>
                                      <img src={addPriority} alt='priority' />
                                    </button>
                                  </td>
                                  <td><span className='task-status closed'>Closed</span></td>
                                  <td>Jun 20</td>
                                  <td>Sprint 1</td>
                                  <td>#467457356</td>
                                  <td>
                                    <span className='assigne-ltr green align-items-center justify-content-center'>AS</span>
                                  </td>
                                  <td>
                                    <button className='task-btn-def'>
                                      <img src={addComments} alt='Comments' />
                                    </button>
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className='p-0' colSpan={12}>
                                    <div className='task-sub-table-cover'>
                                      <table className='table '>
                                        <tbody>
                                          <tr>
                                            <td className='toggle-td-sm'>
                                              <div className='d-flex align-items-center'>
                                                <span className='task-row-status task-grey'></span>
                                              </div>
                                            </td>
                                            <td className='table-title-main table-title-main-inner'>
                                              <p className='sprint-md'>Shared with me / Sprint 1 (2/13 - 2/26)</p>
                                              <div className='task-main-block d-flex align-items-center'>
                                                <div className='task-title-md'>Employee Management - Add/Edit/List/Delete/View</div>
                                              </div>
                                              <div className='task-tech d-flex align-items-center'>HTML</div>
                                            </td>
                                            <td>
                                              <span className='assigne-ltr green align-items-center justify-content-center'>AS</span>
                                            </td>
                                            <td>Today</td>
                                            <td><img src={flagWarning} alt='priority' /></td>
                                            <td><span className='task-status todo'>To do</span></td>
                                            <td>Jun 20</td>
                                            <td>Sprint 1</td>
                                            <td>#467457356</td>
                                            <td>
                                              <span className='assigne-ltr green align-items-center justify-content-center'>AS</span>
                                            </td>
                                            <td>
                                              <button className='task-btn-def'>
                                                <img src={addComments} alt='Comments' />
                                              </button>
                                            </td>
                                            <td></td>
                                          </tr>

                                          <tr>
                                            <td className='toggle-td-sm'>
                                              <div className='d-flex align-items-center'>
                                                <span className='task-row-status task-grn'></span>
                                              </div>
                                            </td>
                                            <td className='table-title-main table-title-main-inner'>
                                              <p className='sprint-md'>Shared with me / Sprint 1 (2/13 - 2/26)</p>
                                              <div className='task-main-block d-flex align-items-center'>
                                                <div className='task-title-md'>Employee Management - Add/Edit/List/Delete/View</div>
                                              </div>
                                              <div className='task-tech d-flex align-items-center'>HTML 
                                                <button className='task-btn-def'>
                                                  <img src={addAttachment} alt='Attachment' />
                                                </button>
                                              </div>
                                            </td>
                                            <td>
                                              <span className='assigne-ltr green align-items-center justify-content-center'>AS</span>
                                            </td>
                                            <td>Today</td>
                                            <td><img src={flagWarning} alt='priority' /></td>
                                            <td><span className='task-status todo'>To do</span></td>
                                            <td>Jun 20</td>
                                            <td>Sprint 1</td>
                                            <td>#467457356</td>
                                            <td>
                                              <span className='assigne-ltr green align-items-center justify-content-center'>AS</span>
                                            </td>
                                            <td>
                                              <button className='task-btn-def'>
                                                <img src={addComments} alt='Comments' />
                                              </button>
                                            </td>
                                            <td></td>
                                          </tr>

                                        </tbody>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Accordion Item #2
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionInner">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Accordion Item #3
                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionInner">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                    </div>
                  </div>
                  {/* body end */}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default ProjectManagementList;
