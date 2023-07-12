import React from 'react';
import ImgSubtask from '../../../assets/images/Subtask.svg';
import ImgEstimate from '../../../assets/images/Estimate.svg';
import ImgflagRed from '../../../assets/images/flag-red.svg';
import ImgflagOrange from '../../../assets/images/flag-orange.svg';
import ImgflagBlue from '../../../assets/images/flag-blue.svg';
import ImgflagOutline from '../../../assets/images/flag-outline.svg';
import ImgthreeDots from '../../../assets/images/three-dots.svg';
import ImgAddIcon from '../../../assets/images/add-btn.svg';
import Imgmenu from '../../../assets/images/menu.svg';
import ImgCheck from '../../../assets/images/check-01.svg';
import ImgStar from '../../../assets/images/star-01.svg';


// icons 
import {CheckImg, StarIcon} from '../../../components/structure/SideNav/svgIcons'

const ProjectCards = () => {
return (
<>
<div className='project-cards'>
   <div className='sct-top'>
   <div className='project-cards-head spc'>
      <div className='project-card-name-area'>
         <div className='project-card-project-info d-flex'>
            <ul className='project-card-nav'>
               <li>Proposal design</li>
               <li>Sprint 6</li>
            </ul>
            <div className='project-card-team-info ms-auto'>
               <div className='project-avathar round-color-1 d-flex align-items-center justify-content-center'>
                  <div className='on-off online'></div>
                  <span className='project-avathar-name'>FD</span>
               </div>
            </div>
         </div>
         <div className='project-name-head'>
            <div className='project-task-name'>Dashboard <span className='menu'> <img src={Imgmenu} alt='icon' /></span> </div>
         </div>
      </div>
   </div>
   <div className='project-task-view-area spc'>
      <div className='info-items d-flex'>
         <div className="info d-flex align-items-center justify-content-center subtask">
            <div className="icon-info "><img src={ImgSubtask} alt='Subtask' /></div>
            <span>4</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className='icon-info'><img src={ImgflagRed} alt='flag' /></div>
            <span>16 Feb</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className="icon-info"><img src={ImgEstimate} alt='icon' /></div>
            <span>4h</span>
         </div>
      </div>

     
   </div>
   <div className='card-ftr info d-flex align-items-center '>
      <div className="lft">
         <button className='star'>
         <StarIcon/>
         </button>
      </div>
      <div className="rgt ms-auto d-flex">
         <button className='ok'>
         {/* <img src={Check} alt='icon' /> */}
             <CheckImg/>
         </button>
         <div className='drop_down_menu'>
            <div class="dropdown ">
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
   </div>


<div className='add-btn-cover'>


   <button className="add-item">
     <div className='hvr'>
      <img src={ImgAddIcon} alt='icon' className='btn-icon' />
      ADD SUBTASK
      </div> 
      </button>

  
   </div>
   
 

</div>
<div className='project-cards'>
   <div className='sct-top'>
   <div className='project-cards-head spc'>
      <div className='project-card-name-area'>
         <div className='project-card-project-info d-flex'>
            <ul className='project-card-nav'>
               <li>Proposal design</li>
               <li>Sprint 6</li>
            </ul>
            <div className='project-card-team-info ms-auto'>
               <div className='project-avathar round-color-1 d-flex align-items-center justify-content-center'>
                  <div className='on-off online'></div>
                  <span className='project-avathar-name'>FD</span>
               </div>
            </div>
         </div>
         <div className='project-name-head'>
            <div className='project-task-name'>Dashboard <span className='menu'> <img src={Imgmenu} alt='icon' /></span> </div>
         </div>
      </div>
   </div>
   <div className='project-task-view-area spc'>
      <div className='info-items d-flex'>
         <div className="info d-flex align-items-center justify-content-center subtask">
            <div className="icon-info "><img src={ImgSubtask} alt='Subtask' /></div>
            <span>4</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className='icon-info'><img src={ImgflagRed} alt='flag' /></div>
            <span>16 Feb</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className="icon-info"><img src={ImgEstimate} alt='icon' /></div>
            <span>4h</span>
         </div>
      </div>

     
   </div>
   <div className='card-ftr info d-flex align-items-center '>
      <div className="lft">
         <button className='star'>
                <StarIcon/>
         </button>
      </div>
      <div className="rgt ms-auto d-flex">
         <button className='ok'>
         {/* <img src={Check} alt='icon' /> */}
             <CheckImg/>
         </button>
         <div className='drop_down_menu'>
            <div class="dropdown ">
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
   </div>


<div className='add-btn-cover'>


   <button className="add-item">
     <div className='hvr'>
      <img src={ImgAddIcon} alt='icon' className='btn-icon' />
      ADD SUBTASK
      </div> 
      </button>

  
   </div>
   
 

</div>

<div className='project-cards'>
   <div className='sct-top'>
   <div className='project-cards-head spc'>
      <div className='project-card-name-area'>
         <div className='project-card-project-info d-flex'>
            <ul className='project-card-nav'>
               <li>Proposal design</li>
               <li>Sprint 6</li>
            </ul>
            <div className='project-card-team-info ms-auto'>
               <div className='project-avathar round-color-2 d-flex align-items-center justify-content-center'>
                  <div className='on-off offline'></div>
                  <span className='project-avathar-name'>FD</span>
               </div>
            </div>
         </div>
         <div className='project-name-head'>
            <div className='project-task-name'>Dashboard <span className='menu'> <img src={Imgmenu} alt='icon' /></span> </div>
         </div>
      </div>
   </div>
   <div className='project-task-view-area spc'>
      <div className='info-items d-flex'>
         <div className="info d-flex align-items-center justify-content-center subtask">
            <div className="icon-info "><img src={ImgSubtask} alt='Subtask' /></div>
            <span>4</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className='icon-info'><img src={ImgflagRed} alt='flag' /></div>
            <span>16 Feb</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className="icon-info"><img src={ImgEstimate} alt='icon' /></div>
            <span>4h</span>
         </div>
      </div>

     
   </div>
   <div className='card-ftr info d-flex align-items-center '>
      <div className="lft">
         <button className='star'>
         <StarIcon/>
         </button>
      </div>
      <div className="rgt ms-auto d-flex">
         <button className='ok'>
         <img src={ImgCheck} alt='icon' />
         </button>
         <div className='drop_down_menu'>
            <div class="dropdown ">
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
   </div>


<div className='add-btn-cover'>


   <button className="add-item">
     <div className='hvr'>
      <img src={ImgAddIcon} alt='icon' className='btn-icon' />
      ADD SUBTASK
      </div> 
      </button>

  
   </div>
   
 

</div>
<div className='project-cards'>
   <div className='sct-top'>
   <div className='project-cards-head spc'>
      <div className='project-card-name-area'>
         <div className='project-card-project-info d-flex'>
            <ul className='project-card-nav'>
               <li>Proposal design</li>
               <li>Sprint 6</li>
            </ul>
            <div className='project-card-team-info ms-auto'>
               <div className='project-avathar round-color-3 d-flex align-items-center justify-content-center'>
                  <div className='on-off online'></div>
                  <span className='project-avathar-name'>FD</span>
               </div>
            </div>
         </div>
         <div className='project-name-head'>
            <div className='project-task-name'>Dashboard <span className='menu'> <img src={Imgmenu} alt='icon' /></span> </div>
         </div>
      </div>
   </div>
   <div className='project-task-view-area spc'>
      <div className='info-items d-flex'>
         <div className="info d-flex align-items-center justify-content-center subtask">
            <div className="icon-info "><img src={ImgSubtask} alt='Subtask' /></div>
            <span>4</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className='icon-info'><img src={ImgflagRed} alt='flag' /></div>
            <span>16 Feb</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className="icon-info"><img src={ImgEstimate} alt='icon' /></div>
            <span>4h</span>
         </div>
      </div>

     
   </div>
   <div className='card-ftr info d-flex align-items-center '>
      <div className="lft">
         <button className='star'>
           <StarIcon/>
         </button>
      </div>
      <div className="rgt ms-auto d-flex">
         <button className='ok'>
         <img src={ImgCheck} alt='icon' />
         </button>
         <div className='drop_down_menu'>
            <div class="dropdown ">
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
   </div>


<div className='add-btn-cover'>


   <button className="add-item">
     <div className='hvr'>
      <img src={ImgAddIcon} alt='icon' className='btn-icon' />
      ADD SUBTASK
      </div> 
      </button>

  
   </div>
   
 

</div>
<div className='project-cards'>
   <div className='sct-top'>
   <div className='project-cards-head spc'>
      <div className='project-card-name-area'>
         <div className='project-card-project-info d-flex'>
            <ul className='project-card-nav'>
               <li>Proposal design</li>
               <li>Sprint 6</li>
            </ul>
            <div className='project-card-team-info ms-auto'>
               <div className='project-avathar round-color-4 d-flex align-items-center justify-content-center'>
                  <div className='on-off online'></div>
                  <span className='project-avathar-name'>FD</span>
               </div>
            </div>
         </div>
         <div className='project-name-head'>
            <div className='project-task-name'>Dashboard <span className='menu'> <img src={Imgmenu} alt='icon' /></span> </div>
         </div>
      </div>
   </div>
   <div className='project-task-view-area spc'>
      <div className='info-items d-flex'>
         <div className="info d-flex align-items-center justify-content-center subtask">
            <div className="icon-info "><img src={ImgSubtask} alt='Subtask' /></div>
            <span>4</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className='icon-info'><img src={ImgflagRed} alt='flag' /></div>
            <span>16 Feb</span>
         </div>
         <div className='info d-flex align-items-center justify-content-center'>
            <div className="icon-info"><img src={ImgEstimate} alt='icon' /></div>
            <span>4h</span>
         </div>
      </div>

     
   </div>
   <div className='card-ftr info d-flex align-items-center '>
      <div className="lft">
         <button className='star'>
           <StarIcon/>
         </button>
      </div>
      <div className="rgt ms-auto d-flex">
         <button className='ok'>
         <img src={ImgCheck} alt='icon' />
         </button>
         <div className='drop_down_menu'>
            <div class="dropdown ">
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
   </div>


<div className='add-btn-cover'>


   <button className="add-item">
     <div className='hvr'>
      <img src={ImgAddIcon} alt='icon' className='btn-icon' />
      ADD SUBTASK
      </div> 
      </button>

  
   </div>
   
 

</div>
</>
)
};
export default ProjectCards;