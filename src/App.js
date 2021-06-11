import Page from './Page';
import './App.css';

//utilizing save states from react
import { useState } from "react";
import Axios from 'axios'

import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Tooltip } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//this app is made by using react hooks
function App() {

  //states are for storing information to send to database
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [height,setHeight] = useState(0);
  const [employeeList,setEmployeeList] = useState([]);
  const [tabName,setTab] = useState("");
  const [source,setSource] = useState(1);
  const [tabCounter,setCounter] = useState(2)
  const [id, setId] = useState(0);
 


  //console display to ensure data is saved, needs a button to trigger
//const displayInfo = () => {
 // console.log(name + age + height);
//};
//<button onClick = {displayInfo}>display info</button>  <-- this belongs in the following section for use




  return (

    <TabComponent id='defaultTab'>
         
         <div className="e-tab-header">
            <div> Form </div>
            <div> Instructions </div>
            <div> Contact Information </div>
        </div>
        <div className="e-content">
            <div>
            <Page labelName="enter name"></Page>
            </div>
            <div>
          <h1>Instructions</h1>
          <p> This is a standard CRUD application that enables the user to create "person" entries with fields consisting of name, age 
            and height. To create a "person" entry to be added to the database, simply enter information for all the required fields at the top of the page and 
            press the "Add Persom" button. Currently there are a few restriction on the "person" entry: the name cannot contain a number and the age/height
            cannot be less than or equal to zero. The application will alert you if any of these restrictions are violated and the person will not be added to the
            database unless the violations are fixed. Clicking the "Toggle Table View" button will display all of the "person" entries
            in a table if they are hidden or hide the person entries if they are currently being displayed. When the table is visible, 
            the user will be able to access the utility functions associated with each row alongside viewing all entries within the database. These utilities consist of
            an updating name field/button, an updating age field/button, an updating height field/button, and a "delete row" button. 
            Each update utility allows the user to update the corresponding row with the new value/attribute, but the same restrictions
            as creating a person still applies and the user will be notified when the restriction is violated. The delete row button will
            delete the associated entry when clicked. As an additional note, all operations, will alert the user when completed successfully 
            and the table will be visually updated automatically after clicking "ok" on the alert. 
          </p>
            </div>
           <div> 
             <h1>Contact information goes here</h1>
             <p>
               Created by Uchenna Nworgu II. Email: uchennworgu@gmail.com . Thank you for taking the time to interact with my project!
             </p>
          </div> 
        </div>
      </TabComponent>

   
  );


};

export default App;
