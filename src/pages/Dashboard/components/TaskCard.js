import React from 'react';
import '../../../design/custom/components/TaskCard.scss';
import ImgEstimate from '../../../assets/images/Estimate.svg';
import ImgSubtask from '../../../assets/images/Subtask.svg';
import ImgflagRed from '../../../assets/images/flag-red.svg';
import ImgflagOrange from '../../../assets/images/flag-orange.svg';
import ImgflagBlue from '../../../assets/images/flag-blue.svg';
import ImgflagOutline from '../../../assets/images/flag-outline.svg';
import ImgthreeDots from '../../../assets/images/three-dots.svg';


// icons 
// import {Check} from '../../../components/structure/SideNav/svgIcons'

function TaskCard({title})  { 
  return (
    
    <>
    
    <div className='card-box'>
   <div className='header-otr d-flex flex-wrap'>
      <div className='title-md'>{title}</div>
      <div className='rgt-sctn'>
         <div className='drop-down-menu'>
            <div class='dropdown'>
               <button class='drop-dwn-btn dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
               <img src={ImgthreeDots} alt='Three Dots'/>
               </button>
               <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                  <li><a class='dropdown-item' href='#'>Action</a></li>
                  <li><a class='dropdown-item' href='#'>Another action</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div className='content-tables '>
      <div className='table-responsive custom-scroll table-height'>
         <table className='table td-center'>
            <thead>
               <tr>
                  <th></th>
                  <th scope='col' className='left-txt ps-0 width-001'>
                     <div className='tbl-hd'>Task</div>
                  </th>
                  <th scope='col'>
                     <div className='tbl-hd'>Due Date</div>
                  </th>
                  <th scope='col'>
                     <div className='tbl-hd'>Priority</div>
                  </th>
                  <th scope='col'>
                     <div className='tbl-hd'>Status</div>
                  </th>
                  <th scope='col'>
                     <div className='tbl-hd'>Date Created</div>
                  </th>
                  <th scope='col'>
                     <div className='tbl-hd'>Time Estimate</div>
                  </th>
                  <th scope='col'>
                     <div className='tbl-hd'>Sprints</div>
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className='text-center'>
                     <div className='task-row-status todo-task'></div>
                  </td>
                  <td className='left-txt ps-0'>
                     <div className='tbl-cont short-text'>Spericorn Proposal</div>
                     <div className='tbl-cont-light d-flex align-items-center'>
                        <span className='short-text'>Dashboard </span>
                        <div className='subtasks-item d-flex align-items-center'>
                           <div className='icon-small d-flex'><img src={ImgSubtask} alt='Subtask' /> <span>3</span></div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className='tbl-cont'>Jun 20</div>
                  </td>
                  <td>
                     <div className='tbl-cont flag'>
                        <div className='flag-icon'>
                            <img src={ImgflagOutline} alt='flag' />
                            {/* <FlagOuLline/> */}
                             </div>
                     </div>
                  </td>
                  <td>
                     <div className='status-info'>
                        <div className='status todo'>TO DO</div>
                     </div>
                  </td>
                  <td className='tbl-cont'>
                     Jun 20
                  </td>
                  <td className='tbl-cont'>
                     <div className='d-flex justify-content-center'>
                        <div className='icon'>
                           <img src={ImgEstimate} alt='Estimate' />
                        </div>
                        <div className='conten'> 16h </div>
                     </div>
                  </td>
                  <td className='tbl-cont'>Sprint 1</td>
               </tr>
               <tr>
                  <td className='text-center'>
                     <div className='task-row-status inprgs-task'></div>
                  </td>
                  <td className='left-txt ps-0'>
                     <div className='tbl-cont short-text'>Smart Home</div>
                     <div className='tbl-cont-light d-flex align-items-center width-001'>
                        <span className='short-text'>Employee Management</span>
                        <div className='subtasks-item d-flex align-items-center'>
                           <div className='icon-small d-flex'><img src={ImgSubtask} alt='Subtask' /> <span>3</span></div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className='tbl-cont'>Jun 20</div>
                  </td>
                  <td>
                     <div className='tbl-cont flag'>
                        <div className='flag-icon'><img src={ImgflagRed} alt='flag' /> </div>
                     </div>
                  </td>
                  <td>
                     <div className='status-info'>
                        <div className='status inprgs'>IN PROGRESS</div>
                     </div>
                  </td>
                  <td className='tbl-cont'>
                     Jun 20
                  </td>
                  <td className='tbl-cont'>
                     <div className='d-flex justify-content-center'>
                        <div className='icon'>
                           <img src={ImgEstimate} alt='Estimate' />
                        </div>
                        <div className='conten'> 16h </div>
                     </div>
                  </td>
                  <td className='tbl-cont'>Sprint 1</td>
               </tr>
               <tr>
                  <td className='text-center'>
                     <div className='task-row-status inprgs-task'></div>
                  </td>
                  <td className='left-txt ps-0'>
                     <div className='tbl-cont short-text '>Spericorn Proposal</div>
                     <div className='tbl-cont-light d-flex align-items-center width-001'>
                        <span className='short-text'>Dashboard </span>
                        <div className='subtasks-item d-flex align-items-center'>
                           <div className='icon-small d-flex'><img src={ImgSubtask} alt='Subtask' /> <span>3</span></div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className='tbl-cont'>Jun 20</div>
                  </td>
                  <td>
                     <div className='tbl-cont flag'>
                        <div className='flag-icon'><img src={ImgflagBlue} alt='flag' /> </div>
                     </div>
                  </td>
                  <td>
                     <div className='status-info'>
                        <div className='status inprgs'>IN PROGRESS</div>
                     </div>
                  </td>
                  <td className='tbl-cont'>
                     Jun 20
                  </td>
                  <td className='tbl-cont'>
                     <div className='d-flex justify-content-center'>
                        <div className='icon'>
                           <img src={ImgEstimate} alt='Estimate' />
                        </div>
                        <div className='conten'> 16h </div>
                     </div>
                  </td>
                  <td className='tbl-cont'>Sprint 1</td>
               </tr>
               <tr>
                  <td className='text-center'>
                     <div className='task-row-status todo-task'></div>
                  </td>
                  <td className='left-txt ps-0'>
                     <div className='tbl-cont short-text'>Vision</div>
                     <div className='tbl-cont-light d-flex align-items-center width-001'>
                        <span className='short-text'>Dashboard </span>
                        <div className='subtasks-item d-flex align-items-center'>
                           <div className='icon-small d-flex'><img src={ImgSubtask} alt='Subtask' /> <span>3</span></div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className='tbl-cont'>Jun 20</div>
                  </td>
                  <td>
                     <div className='tbl-cont flag'>
                        <div className='flag-icon'><img src={ImgflagOrange} alt='flag' /> </div>
                     </div>
                  </td>
                  <td>
                     <div className='status-info'>
                        <div className='status todo'>TO DO</div>
                     </div>
                  </td>
                  <td className='tbl-cont'>
                     Jun 20
                  </td>
                  <td className='tbl-cont'>
                     <div className='d-flex justify-content-center'>
                        <div className='icon'>
                           <img src={ImgEstimate} alt='Estimate' />
                        </div>
                        <div className='conten'> 16h </div>
                     </div>
                  </td>
                  <td className='tbl-cont'>Sprint 1</td>
               </tr>
               <tr>
                  <td className='text-center'>
                     <div className='task-row-status inprgs-task'></div>
                  </td>
                  <td className='left-txt ps-0'>
                     <div className='tbl-cont short-text'>Smart Home</div>
                     <div className='tbl-cont-light d-flex align-items-center width-001'>
                        <span className='short-text'>Dashboard </span>
                        <div className='subtasks-item d-flex align-items-center'>
                           <div className='icon-small d-flex'><img src={ImgSubtask} alt='Subtask' /> <span>3</span></div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className='tbl-cont'>Jun 20</div>
                  </td>
                  <td>
                     <div className='tbl-cont flag'>
                        <div className='flag-icon'><img src={ImgflagBlue} alt='flag' /> </div>
                     </div>
                  </td>
                  <td>
                     <div className='status-info'>
                        <div className='status inprgs'>IN PROGRESS</div>
                     </div>
                  </td>
                  <td className='tbl-cont'>
                     Jun 20
                  </td>
                  <td className='tbl-cont'>
                     <div className='d-flex justify-content-center'>
                        <div className='icon'>
                           <img src={ImgEstimate} alt='Estimate' />
                        </div>
                        <div className='conten'> 16h </div>
                     </div>
                  </td>
                  <td className='tbl-cont'>Sprint 1</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</div>

    
    </>
  )
}

export default TaskCard