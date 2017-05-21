angular.module("Services", [])
    .factory("myFactory", myFactory);

function myFactory(){
    var tasks = [
        {
            content: "Task 1",
            state: false
        },
        {
            content: "Task 2",
            state: true
        },
        {
            content: "Task 3",
            state: true
        },
        {
            content: "Task 4",
            state: false
        },
        {
            content: "Task 5",
            state: false
        }
    ];
    
    function addNewTask(newTask){
        if(newTask === undefined || newTask.length === 0){
            return;
        } else {
            tasks.push({
                content: newTask,
                state: false
               });
        }
        return tasks;
    };
    
    function deleteTask(index){
      tasks.splice(index, 1);
        return tasks;
    };
    
    return {
      tasks: tasks,
        addNewTask: addNewTask,
        deleteTask: deleteTask
    };
};