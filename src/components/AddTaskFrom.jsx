import React from 'react';

const AddTaskFrom = ({newTask, setNewTask, AddTask}) => {

  
    return(
        <>
        {/* Add Task */}
        <div className = "row">
            <div className = "col">
                <input value = {newTask} onChange={(e) => setNewTask(e.target.value)} className="form-control form-control-lg"/>
            </div>
              <div className = "col-auto">
                <button onClick={AddTask} className="btn btn-lg btn-success">Add Task</button>
              </div>
        </div>
       <br/>
      </>
    );
}

export default AddTaskFrom;