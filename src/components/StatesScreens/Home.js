import React, { useState, useEffect } from 'react';
import '../../App.css';
import SimpleCard from '../Card';
import TotalCasesChart from '../Chart';
import RecoveredChart from '../RecoveredChart';
import DeathChart from '../DeathChart';
import Table from '../Table';
import logo from '../../logo.svg';


const CasesStyle = {
    height:'90%',
    width:'90vw',
    margin: '0 auto',
    marginTop: '100px'
  }

const Home = () => {

    const[data,setData] = useState([]);
    const cases = () => {
        fetch('https://api.covidindiatracker.com/total.json')
        .then((res) => res.json())
        .then((result) => {
          setData(result)
        })
      }
        useEffect(() => {
          cases();
        },[])
        
        return (
          <div>
            <div style={{display: 'flex',justifyContent:'center'}}>
            <img src={logo} alt="logo"  style={{width: '50%',padding: '50px'}} />
            </div>
            <div className="App" style={{display: 'flex',marginRight: '0',flexWrap:'wrap'}}>
                <SimpleCard val={data.confirmed} cc={data.cChanges} plus='+' title='Confirmed Cases'/>
                <SimpleCard val={data.active}  title='Active Cases'/>
                <SimpleCard val={data.deaths} cc={data.dChanges}  plus='+' title='Deaths'/>
                <SimpleCard val={data.recovered} cc={data.rChanges}  plus='+' title='Recovered'/>
            </div>
          <div style={CasesStyle}>
            <TotalCasesChart />
            <RecoveredChart />
            <DeathChart/>   
          </div>
            <Table/>
          </div>
        );
};

export default Home;
