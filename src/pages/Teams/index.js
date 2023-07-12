import React from 'react';
import '../../design/custom/pages/teams.scss';
import closeIcon from '../../assets/images/close.svg';
import {TimerIco, CloseIco} from '../../components/structure/SideNav/svgIcons'
const Authentication = () => {
  return (
    <>
      <div className='teams-cover'>
			<div className='p-3 d-flex justify-content-end'>
				<div className="add-dropdown-block">
					  <div class="dropdown">
							<button class="dropdown-toggle-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Add
							</button>
							<ul class="dropdown-menu border-0 dropdown-menu-lg dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
								<button className="dropdown-close-btn" type="button">
									<CloseIco/>
								</button>
								<div className="dropdown-form-cover">
									<h2>Add Team</h2>
									<div className="dropdown-form-block">
										<div className="row inp-row">
											<div className="col-sm-5">
												<label className="inp-label" htmlFor="">Department</label>
											</div>
											<div className="col-sm-7">
												<select className="inp-item" name="" id="">
													<option disabled value="">Select Department</option>
													<option value="">UI</option>
													<option value="">UX</option>
													<option value="">QA</option>
												</select>
											</div>
										</div>
										<div className="row inp-row">
											<div className="col-sm-5">
												<label className="inp-label" htmlFor="">Project Role</label>
											</div>
											<div className="col-sm-7">
												<select className="inp-item" name="" id="">
													<option disabled value="">Select Role</option>
													<option value="">UI</option>
													<option value="">UX</option>
													<option value="">QA</option>
												</select>
											</div>
										</div>
										<div className="row inp-row">
											<div className="col-sm-5">
												<label className="inp-label" htmlFor="">Select Members</label>
											</div>
											<div className="col-sm-7">
												<select className="inp-item" name="" id="">
													<option disabled value="">Select</option>
													<option value="">UI</option>
													<option value="">UX</option>
													<option value="">QA</option>
												</select>
											</div>
										</div>
										<div className="row inp-row">
											<div className="col-sm-5">
												<label className="inp-label" htmlFor="">Allocation Hrs/day</label>
											</div>
											<div className="col-sm-7">
												<input type="text" className="inp-item" placeholder="" />												
											</div>
										</div>
									</div>
								</div>
							</ul>
					  </div>
				</div>
			</div>
			<div className='table-responsive table-min-h custom-scroll'>
				<table className='table custom-table'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Role</th>
							<th>Hours</th>
							<th>Last Worked On</th>
							<th>Tickets Taken</th>
							<th>Tickets Completed</th>
							<th>Tickets ToDo</th>
							<th>Tickets In-progress</th>
							<th>Tickets Under Review</th>
							<th>Tickets First Approved</th>							
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className='name-block align-items-center d-flex'>
									<span className='name-ltr'>AH</span>
									<span className='name'>Alan Henderson</span>
								</div>
							</td>
							<td>Frontend Developer</td>
							<td>
								<div className='align-items-center d-flex'>
									<span className="timer"><TimerIco/></span> 23
								</div>
							</td>
							<td>14 Jun, 12:03 PM</td>
							<td>12</td>
							<td>12</td>
							<td>23</td>
							<td>8</td>
							<td>3</td>
							<td>3</td>
						</tr>

						<tr>
							<td>
								<div className='name-block align-items-center d-flex'>
									<span className='name-ltr bg-2'>JS</span>
									<span className='name'>Jose Reyes</span>
								</div>
							</td>
							<td>Frontend Developer</td>
							<td>
								<div className='align-items-center d-flex'>
									<span className="timer"><TimerIco/></span> 23
								</div>
							</td>
							<td>14 Jun, 12:03 PM</td>
							<td>12</td>
							<td>12</td>
							<td>23</td>
							<td>8</td>
							<td>3</td>
							<td>3</td>
						</tr>

						<tr>
							<td>
								<div className='name-block align-items-center d-flex'>
									<span className='name-ltr bg-4'>AF</span>
									<span className='name'>Aaron Fuller</span>
								</div>
							</td>
							<td>Frontend Developer</td>
							<td>
								<div className='align-items-center d-flex'>
									<span className="timer"><TimerIco/></span> 23
								</div>
							</td>
							<td>14 Jun, 12:03 PM</td>
							<td>12</td>
							<td>12</td>
							<td>23</td>
							<td>8</td>
							<td>3</td>
							<td>3</td>
						</tr>

						<tr>
							<td>
								<div className='name-block align-items-center d-flex'>
									<span className='name-ltr bg-5'>EY</span>
									<span className='name'>Eugene Young</span>
								</div>
							</td>
							<td>Frontend Developer</td>
							<td>
								<div className='align-items-center d-flex'>
									<span className="timer"><TimerIco/></span> 23
								</div>
							</td>
							<td>14 Jun, 12:03 PM</td>
							<td>12</td>
							<td>12</td>
							<td>23</td>
							<td>8</td>
							<td>3</td>
							<td>3</td>
						</tr>

						<tr>
							<td>
								<div className='name-block align-items-center d-flex'>
									<span className='name-ltr bg-6'>AF</span>
									<span className='name'>Aaron Fuller</span>
								</div>
							</td>
							<td>Frontend Developer</td>
							<td>
								<div className='align-items-center d-flex'>
									<span className="timer"><TimerIco/></span> 23
								</div>
							</td>
							<td>14 Jun, 12:03 PM</td>
							<td>12</td>
							<td>12</td>
							<td>23</td>
							<td>8</td>
							<td>3</td>
							<td>3</td>
						</tr>

						<tr>
							<td>
								<div className='name-block align-items-center d-flex'>
									<span className='name-ltr bg-7'>AF</span>
									<span className='name'>Aaron Fuller</span>
								</div>
							</td>
							<td>Frontend Developer</td>
							<td>
								<div className='align-items-center d-flex'>
									<span className="timer"><TimerIco/></span> 23
								</div>
							</td>
							<td>14 Jun, 12:03 PM</td>
							<td>12</td>
							<td>12</td>
							<td>23</td>
							<td>8</td>
							<td>3</td>
							<td>3</td>
						</tr>

					</tbody>
				</table>
			</div>
			<div className="table-pagination-cover d-flex align-items-center">
				<div className="pagination-entries">
					SHOWING 1 TO 6 ENTRIES
				</div>
				<div className="pagination-nav-block">
						<nav className="pagination-nav" aria-label="Page navigation">
							<ul class="pagination">
								<li class="page-item"><a class="page-link-btn prev" href="#">Prev</a></li>
								<li class="page-item"><a class="page-link" href="#">1</a></li>
								<li class="page-item"><a class="page-link active" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item"><a class="page-link-btn next" href="#">Next</a></li>
							</ul>
						</nav>
				</div>
			</div>
      </div>
    </>
  );
};

export default Authentication;
