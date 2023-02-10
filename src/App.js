import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTaskForm from './components/AddTaskFrom';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';




import './App.css';

function App() {
//Tasks to-do list state
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", status: false},
    {id: 2, title: "Task 2", status: false}
  ]);

  //Temp state
  const [newTask , setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

    //Add task
    const AddTask = () => {
      if(newTask){
        let num = toDo.length + 1;
        let newEntry = {id: num, title: newTask, status: false}
        setToDo([...toDo, newEntry])
        setNewTask('');
      }
    }

  //Delete task
  const DeleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  //Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if(task.id === id){
        return({...task, status: !task.status})
      } 
      return task;
    }) 
    setToDo(newTask);
  }

  //Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }

  //Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //Update task 
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject);
    setUpdateData('');
  }


  return (
    <div className="container App">
      <br/> <br/>
      <h2>To do list App (React)</h2>
      <br/> <br/>

    {/* Update Task */}
    {updateData && updateData ? (
      <UpdateForm
      updateData ={updateData}
      changeTask = {changeTask} 
      updateTask = {updateTask} 
      cancelUpdate = {cancelUpdate}
      />
    ): (
     <AddTaskForm
     newTask = {newTask}
     setNewTask ={setNewTask}
      AddTask = {AddTask}
     />
    )}
  

     
     
     {/* Display ToDos */}
     {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
    toDo = {toDo}
    markDone = {markDone}
    setUpdateData = {setUpdateData}
    DeleteTask = {DeleteTask}
    />
      
    </div>
  );
}

export default App;
