import React from 'react';
import '../../../design/custom/pages/counter.scss';
import TicketTypeProject from '../../../assets/images/project-icon.svg';
import TicketTypeTasks from '../../../assets/images/open-tasks-icon.svg';
import TicketTypeHoursCompleted from '../../../assets/images/hours-completed-icon.svg';
import TicketTypeProductive from '../../../assets/images/productive-icon.svg';
import TicketTypeQuality from '../../../assets/images/quality-icon.svg';
import TicketTypePerformance from '../../../assets/images/performance-icon.svg';

const Counter = () => {
  return (
    <>
        <div className='row h-100'>
          <div className='col-lg-6 col-xl-4 col-md-6 mb-4'>
            <div className='count-tickets d-flex align-items-center'>
              <div className='card-title-block'>
                <h2 className='card-title'>Number of Projects</h2>
                <p className='card-count'>78</p>
              </div>
              <div className='card-icon-block'>
                  <img src={TicketTypeProject} alt='project'/>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-4 col-md-6 mb-4'>
            <div className='count-tickets d-flex align-items-center'>
              <div className='card-title-block'>
                <h2 className='card-title'>Number of Open Tasks</h2>
                <p className='card-count'>65</p>
              </div>
              <div className='card-icon-block'>
                  <img src={TicketTypeTasks} alt='project'/>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-4 col-md-6 mb-4'>
            <div className='count-tickets d-flex align-items-center'>
              <div className='card-title-block'>
                <h2 className='card-title'>Productive Hours Completed</h2>
                <p className='card-count'>6h 30m</p>
              </div>
              <div className='card-icon-block'>
                  <img src={TicketTypeHoursCompleted} alt='project'/>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-4 col-md-6 mb-4'>
            <div className='count-tickets d-flex align-items-center'>
              <div className='card-title-block'>
                <h2 className='card-title'>Productive Hours Due</h2>
                <p className='card-count'>1h 30m</p>
              </div>
              <div className='card-icon-block'>
                  <img src={TicketTypeProductive} alt='project'/>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-4 col-md-6 mb-4'>
            <div className='count-tickets d-flex align-items-center'>
              <div className='card-title-block'>
                <h2 className='card-title'>Quality Index</h2>
                <p className='card-count'>47.18%</p>
              </div>
              <div className='card-icon-block'>
                  <img src={TicketTypeQuality} alt='project'/>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xl-4 col-md-6 mb-4'>
            <div className='count-tickets d-flex align-items-center'>
              <div className='card-title-block'>
                <h2 className='card-title'>Performance Index</h2>
                <p className='card-count'>56.39%</p>
              </div>
              <div className='card-icon-block'>
                  <img src={TicketTypePerformance} alt='project'/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
};

export default Counter;
