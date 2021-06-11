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
 

  const [list, setList] =useState([]);
  const SimpleList = () =>{
  <ul>
    {list.map(content0 => {
      return <li key={id}>{content0}</li>;
    })}
  </ul>
};
 
  

  const tabCreated = () => {
    
    setCounter(tabCounter + 1);
    // const tooltip = new Tooltip({
    //     content: 'Add Tab'
    // });
    // tooltip.appendTo('.e-ileft.e-icon');
    //document.getElementById('btn-add').onclick = (e) => {
        
        //const content = document.getElementById('tab-content').value;
        //const ele = document.createElement("defaultTab");
     
       // 
        // tslint:disable-next-line: ban-types
        const item = { header: { text: tabName }, content: contentTemplate2};
       // const totalItems = document.querySelectorAll('#element .e-toolbar-item').length;
       // console.log(document.querySelectorAll('#element .e-toolbar-item').length);
        document.getElementById('defaultTab').ej2_instances[0].addTab([item], 0);
        //document.getElementById('defaultTab').ej2_instances[0].showCloseButton= true;
       
    //};
    console.log("attempt made");
}


const tabRemoved = () => {
  const tooltip = new Tooltip({
      content: 'Remove Tab'
  });
  tooltip.appendTo('.e-ileft.e-icon');
  //document.getElementById('btn-add').onclick = (e) => {
      
      //const content = document.getElementById('tab-content').value;
      //const ele = document.createElement("defaultTab");
     // ele.innerHTML = content.replace(/\n/g, "<br>\n");
      // tslint:disable-next-line: ban-types
      //const item = { header: { text: tabName }, content: ele.outerHTML };
     // const totalItems = document.querySelectorAll('#element .e-toolbar-item').length;
     // console.log(document.querySelectorAll('#element .e-toolbar-item').length);

     console.log(tabCounter);
    console.log(source);

     
     if (tabCounter > 0){
       if (source < (tabCounter+1) && source > 0){
      document.getElementById('defaultTab').ej2_instances[0].removeTab((source - 1));
      setCounter(tabCounter-1);
       }
    }
     
  //};
  console.log("attempt made");
}


 


  //console display to ensure data is saved, needs a button to trigger
//const displayInfo = () => {
 // console.log(name + age + height);
//};
//<button onClick = {displayInfo}>display info</button>  <-- this belongs in the following section for use




  return (

    <TabComponent id='defaultTab'>
         
         <div className="e-tab-header">
            <div> Default One </div>
            <div> Default Two </div>
            <div> Add Tab </div>
            <div> Delete Tab </div>
        </div>
        <div className="e-content">
            <div>
            <Page labelName="not the 2nd"></Page>
            </div>
            <div>
            <Page labelName="enter name"></Page>
            </div>
           <div> 
              <label> Tab name</label>
              <input type="text" onChange={(event) => {setTab (event.target.value);} } />
              <label> Source</label>
              <input type="number"onChange={(event) => {setSource (event.target.value);} }/>
              <button onClick={tabCreated} >Add tab </button> 
          </div> 
          <div> 
              <label> Tab index (leftmost tab is index 1 / indices reset upon deletion)</label>
              <input type="number" onChange={(event) => {setSource (event.target.value);} } />
              <button onClick={tabRemoved} >Remove tab </button> 
          </div>
        </div>
      </TabComponent>

   
  );


  function contentTemplate2() {
    return <Page labelName="enter name" id="yo"></Page>
}

};

export default App;
