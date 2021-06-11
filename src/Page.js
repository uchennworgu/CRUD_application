import './App.css';
import './table.css';
//utilizing save states from react
import {/*useRowSelect,*/useTable, /*useGlobalFilter*/} from 'react-table'
import  {useEffect, /*useMemo,*/ useState} from 'react'
import Axios from 'axios'
import uniqueId from 'lodash/uniqueId'
import * as React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);






const Page = ({labelName }) => {

  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [height,setHeight] = useState(0);
  const [employeeList,setEmployeeList] = useState([]);
  //const [newAge, setNewAge] = useState(0);
  //const [newName, setNewName] = useState(0);
  //const [newHeight, setNewHeight] = useState(0);
  const [show,setShow] = useState(false);
  const [setup,setSetup] = useState(false);
  //const [id,setId] = useState(0);
  const regex = /\d/;

     //const data2 = useMemo(() => employeeList, [])
     //const columns = useMemo(() => COLUMNS, [])
      console.log(employeeList);
   

  const addPerson = () => {
    const doesItHaveNumber = regex.test(name);
    console.log(doesItHaveNumber);
     if (name === "" || doesItHaveNumber === true || age <= 0 || height<=0){
      alert("Invalid, Form constraints: Name cannot contain a number or be blank. Age and Height must be greater than 0!");
     }
     else{
    //axios is a library that needs to be installed by 'npm install axios'
    //allows request to be made to an api, axios is used in making a request
    Axios.post('http://localhost:3001/create',{
      name: name, 
      age: age, 
      height: height,}).then(() => {
       // console.log("success"); <-- check is push occured correctly
       GetEmployees();
       setName("");
       setAge(0);
       setHeight(0);
       document.getElementById("nameInput").value = '';
       document.getElementById("ageInput").value = '';
       document.getElementById("heightInput").value = '';
       alert("Person has been added to database. ");
      });
    }
  };

  // rename this to person
  const GetEmployees = () => {
  
    Axios.get('http://localhost:3001/employees').then((response) => {
        //console.log(response);  <-- checks if response is correct
        setEmployeeList(response.data);
      })
     
  };

  const toggleList = () => {
    if (setup === false){
    GetEmployees();
    setSetup(true);
  }
    setShow(!show);
     
  };
  
  const UpdatePersonAge = (id,formId) => {
    console.log(formId);
    var age1 = document.getElementById(formId).value;
    console.log(age1);
    //setNewAge(age1);
    //console.log(newAge);
    if (age1 <= 0){
      alert("invalid age, must be grater than 0!");
    }
    else{
    Axios.put('http://localhost:3001/updateAge', {age: age1, id: id}).then((response) => {
    alert("updated age");
    GetEmployees();
    //setNewAge(0);
    });
    console.log(formId);
    document.getElementById(formId).value = '';
    }
  };

  const UpdatePersonName = (id,formId) => {
    var name1 = document.getElementById(formId).value;
    console.log(name1);
   const doesItHaveNumber = regex.test(name1);
   console.log(doesItHaveNumber);
    if (name1 === "" || doesItHaveNumber === true){
      alert("Name cannot be blank or contain a number, try again!");
    }
    else {
    Axios.put('http://localhost:3001/updateName', {name: name1, id: id}).then((response) => {
    alert("updated name");
    GetEmployees();
    //setNewName("");
    });
    document.getElementById(formId).value= '';
  }  
  };

  const UpdatePersonHeight = (id,formId) => {
    var height1 = document.getElementById(formId).value;
    //console.log(newHeight);
    if (height1 <= 0){
      alert("invalid height, must be grater than 0!");
    }
    else{
    Axios.put('http://localhost:3001/updateHeight', {height: height1, id: id}).then((response) => {
    alert("updated height");
    GetEmployees();
    //setNewHeight(0);
    });
    document.getElementById(formId).value= '';
  }
    
  };

  const deletePerson = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      alert("deleted");
    GetEmployees();
    });
  };




 return <div
      className="App">
      <div className="information">
      <label> {labelName}</label>
       <input type="text"  id = "nameInput" placeholder="Enter name here" onChange={(event) => {setName (event.target.value);} } />
       <label> Age</label>
       <input type="number" id = "ageInput" placeholder="Enter age here" onChange={(event) => {setAge (event.target.value);} }/>
       <label> Height</label>
       <input type="number"   id = "heightInput"placeholder="Enter height here" onChange={(event) => {setHeight (event.target.value);} }/>
       <button  onClick={addPerson}>Add Person</button>
       <button onClick={toggleList}>toggle table View</button>
       </div>
       {
       show?<table id = "table">
        <tr>
        <th>id</th>
       <th>Username</th>
       <th>Age</th>
       <th>Height</th>
       <th>Update/ Delete Functions</th>
       </tr>

       {employeeList.map((val,key) => {
         var id1  = uniqueId('nameInput-');
         var id2  = uniqueId('ageInput-');
         var id3  = uniqueId('heightInput-');
         return <tr key = {val.id} >
           <td>{val.id} </td>
           <td>{val.name} </td>
           <td>{val.age} </td>
           <td>{val.height} </td>
           <td>
             <div className="functions">  
               <input type="text" placeholder="Enter new name here" id = {id1} />
               <button onClick={()=> UpdatePersonName(val.id,id1)}> {" "} Update </button>
               <input type="number" placeholder="Enter new age here" id = {id2}/>
               <button onClick={()=> UpdatePersonAge(val.id,id2)}> {" "} Update </button>
               <input type="number" placeholder="Enter new height here" id = {id3} />
               <button onClick={()=> UpdatePersonHeight(val.id,id3)}> {" "} Update </button>
               <button onClick={()=> deletePerson(val.id)}> {" "} Delete Row </button>
             </div>
           </td>
           </tr>
       })}
        </table>
        : null}
    </div>//;
}
  
  export default Page;