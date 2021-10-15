import React from 'react';
import styles from './styles.scss';

export default class App extends React.Component {
  componentDidMount(){
    this.props.dashboardActions.fetchCovidData()
  }
  render() {
    const {statistics} = this.props.dashboard;
    return (
      <div className={`${styles.body}`}>
      {
        (statistics.length > 0) ? <div className="row m-auto justify-content-center">
        {
          statistics.map((s,sIdx)=>{
            return <div key={`c-${sIdx}`} className="card col-md-5 m-2">
                <div className="card-header">{s.state_name || 'India (All States)'}</div>
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
          })
        }
        </div> : <div >
          <p>Loading...</p>
        </div>
      }
      
    </div>);
  }
}
