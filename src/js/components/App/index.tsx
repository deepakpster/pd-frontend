import React, { useEffect } from 'react';
import Line from "./../Charts/Line";
import styles from './styles.scss';

export default function App(props) {
  const {statistics} = props.dashboard;

  useEffect(()=>{
    props.dashboardActions.fetchCovidData()
  },[])

  return (
    <div className={`${styles.body}`}>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Show pop up
      </button>
      <div className="row m-2">
        <div className="col-md-6">
          <Line/>
        </div>
        <div className="col-md-6">
          <Line/>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    {
      (statistics.length > 0) ? <div className="row">
      {
        statistics.map((s,sIdx)=>{
          return <div key={`c-${sIdx}`} className="col-md-4">
            <div className="card">
            <div className="card-header">{s.state_name || 'India (All States)'}</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Active(Total):{s.active}</li>
                <li className="list-group-item">Active(New):{s.new_active}</li>
                <li className="list-group-item">Positive(Total):{s.positive}</li>
                <li className="list-group-item">Positive(New):{s.new_positive}</li>
                <li className="list-group-item">Cured(Total):{s.cured}</li>
                <li className="list-group-item">Cured(New):{s.new_cured}</li>
                <li className="list-group-item">Death(Total):{s.death}</li>
                <li className="list-group-item">Death(New):{s.new_death}</li>
              </ul>
            </div>
            </div>
          </div>
        })
      }
      </div> : <div >
        <p>Loading...</p>
      </div>
    }
  </div>);
}
