import React from 'react';
import { Route, Switch } from 'react-router-dom';
import States from '../components/StatesScreens/States';
import Home from '../components/StatesScreens/Home';
import Notfound from '../components/StatesScreens/PageNotFound';

const Routers = () => {

    return(
    <Switch>
      <Route exact path="/Covid-Tracker_India/" component={Home} />
      <Route path="/Maharashtra">
        <States title='Maharashtra'/>
      </Route>
      <Route path="/Tamil Nadu">
        <States title='Tamil Nadu'/>
      </Route>
      <Route path="/Andhra Pradesh">
        <States title='Andhra Pradesh'/>
      </Route>
      <Route path="/Karnataka">
        <States title='Karnataka'/>
      </Route>
      <Route path="/Delhi">
        <States title='Delhi'/>
      </Route>
      <Route path="/Uttar Pradesh">
        <States title='Uttar Pradesh'/>
      </Route>
      <Route path="/West Bengal">
        <States title='West Bengal'/>
      </Route>
      <Route path="/Bihar">
        <States title='Bihar'/>
      </Route>
      <Route path="/Telangana">
        <States title='Telangana'/>
      </Route>
      <Route path="/Gujarat">
        <States title='Gujarat'/>
      </Route>
      <Route path="/Assam">
        <States title='Assam'/>
      </Route>
      <Route path="/Rajasthan">
        <States title='Rajasthan'/>
      </Route>
      <Route path="/Odisha">
        <States title='Odisha'/>
      </Route>
      <Route path="/Haryana">
        <States title='Haryana'/>
      </Route>
      <Route path="/Madhya Pradesh">
        <States title='Madhya Pradesh'/>
      </Route>
      <Route path="/Kerala">
        <States title='Kerala'/>
      </Route>
      <Route path="/Jammu and Kashmir">
        <States title='Jammu and Kashmir'/>
      </Route>
      <Route path="/Punjab">
        <States title='Punjab'/>
      </Route>
      <Route path="/Jharkhand">
        <States title='Jharkhand'/>
      </Route>
      <Route path="/Chhattisgarh">
        <States title='Chhattisgarh'/>
      </Route>
      <Route path="/Uttarakhand">
        <States title='Uttarakhand'/>
      </Route>
      <Route path="/Goa">
        <States title='Goa'/>
      </Route>
      <Route path="/Tripura">
        <States title='Tripura'/>
      </Route>
      <Route path="/Puducherry">
        <States title='Puducherry'/>
      </Route>
      <Route path="/Manipur">
        <States title='Manipur'/>
      </Route>
      <Route path="/Himachal Pradesh">
        <States title='Himachal Pradesh'/>
      </Route>
      <Route path="/Nagaland">
        <States title='Nagaland'/>
      </Route>
      <Route path="/Arunachal Pradesh">
        <States title='Arunachal Pradesh'/>
      </Route>
      <Route path="/Ladakh">
        <States title='Ladakh'/>
      </Route>
      <Route path="/Andaman and Nicobar Islands">
        <States title='Andaman and Nicobar Islands'/>
      </Route>
      <Route path="/Chandigarh">
        <States title='Chandigarh'/>
      </Route>
      <Route path="/Meghalaya">
        <States title='Meghalaya'/>
      </Route>
      <Route path="/Sikkim">
        <States title='Sikkim'/>
      </Route>
      <Route path="/Daman and Diu">
        <States title='Daman and Diu'/>
      </Route>
      <Route path="/Dadra and Nagar Haveli">
        <States title='Dadra and Nagar Haveli'/>
      </Route>
      <Route path="/Mizoram">
        <States title='Mizoram'/>
      </Route>
    </Switch>
    )
  }


  export default Routers;