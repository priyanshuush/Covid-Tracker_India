import React,{ useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

const Totalcaseschart = () => {
    const [data,setData] = useState({});

    const isLaptop = useMediaQuery( {query: '(min-width: 1024px)'} )
    const isTablet = useMediaQuery( {query: '(min-width: 768px)'} )
    let Style = {
        margin: '0 auto'
    };
    if(isTablet){
        Style = {
            ...Style,
            'width': '70%'
        }
    }
    else if(isLaptop){
        Style = {
            ...Style,
            'width': '50%',
        }
    }

    
    const chart = () => {
        fetch('https://api.covid19api.com/country/india')
        .then(res => res.json())
        .then(result => {
            console.log(result)
            const recData ={};
            result.map(values => {
                const val = values.Date.slice(0,5)+values.Date.slice(5,7);
                recData[val] = parseInt(values.Confirmed); 
            })
            setData({
                labels: Object.keys(recData),
                datasets: [
                    {
                        label: 'Confirmed Cases',
                        data: Object.values(recData),
                        fill: false,
                        borderColor: 'red'
                    }, 
                ]
                
            })
            
        })
    };
    
    useEffect(() => {
        chart();
        
    },[])

      return(
        <div style={Style} >
            <Line 
            data={data}
            options={{
                responsive: true,
                maintainAspectRatio: true
            }}/>
        </div>
      );

}


export default Totalcaseschart;



