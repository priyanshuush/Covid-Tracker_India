import React,{ useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '../Button';

const useStyles = makeStyles({
  table: {
    width: '50%',
    margin: '0 auto'
  },
});

const StyledChart = {
    'width': '80%',
    'height': '300px',
    'margin': '0 auto'
}

function createData(district, cases) {
  return { district, cases };
}

const Mah = (props) => {

    const [title,setTitle] = useState(props.title);
    const [data,setData] = useState({});
    const [rowData,setRowData] = useState([]);
    
const DataByDistrict = () => {
    fetch('https://api.covidindiatracker.com/state_data.json')
    .then(res => res.json())
    .then(data => {
        const Values = [];
         data.map(data => {
            if(data.state === title){
            data.districtData.map(values => {
                if(values.id === 'Other-States'){
                    values.id = 'Others'
                }
                Values.push({
                    id: values.id,
                    confirmed: values.confirmed
                })
            })
        }
         })
         setRowData(Values);
         const districts = Values.map(item => item.id)
         const cases = Values.map(item => item.confirmed)
         

         console.log()
         setData({
            labels: districts,
            datasets: [
                {
                    label: `Cases in ${title}`,
                    data: cases,
                    borderColor: 'red',
                    hoverBorderColor: 'green',
                    fill: false,
                    backgroundColor: 'red'
                } 
            ]
            
        })
        
    })
};
useEffect(() => {
    DataByDistrict();
},[])

const rows = [];

  rowData.map(data => {
      const val = createData(data.id,data.confirmed)
      rows.push(val);
      console.log(val)
  })
const classes = useStyles();

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>District</TableCell>
                        <TableCell align="center">Confirmed Cases</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.district}>
                        <TableCell  >
                            {row.district}
                        </TableCell>
                        <TableCell align="center">{row.cases}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <div style={StyledChart}>
            <Bar 
            data={data} 
           
            options={{
                responsive:true,
                maintainAspectRatio: false
            }} />
            </div>
            <Button />
            
        </div>
    )
};

export default Mah;