let readline = require('readline-sync');


let taskList = [];

function addTask () {

    const task = readline.question('Task:');
    const description = readline.question('Task description:');

    const newTask = {
        id: taskList.length + 1,
        task: task,
        description: description,
        taskCompleted: false, 
    }; 

    taskList.push(newTask);

    console.log('New task added successfully.');
    console.log(taskList);
}

function deleteTask () {
    
    console.log('Which of your tasks do you want to delete?');
    console.log(taskList);

    const taskId = readline.question('Please, type the index of the task you want to delete:');
    const taskIndex = taskList.findIndex((task) => task.id === parseInt(taskId));

    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        console.log('Task deleted successfully.');
        console.log(taskList);
    }
    else {
        console.log('Invalid index');
    }
}

function taskCompleted () {
    console.log('Which of your tasks do you want to mark completed?');
    console.log(taskList);

    const taskId = readline.question('Please, type the index of the task you want to mark completed:');

    const taskIndex = taskList.findIndex((task) => task.id === parseInt(taskId));

    if (taskIndex !== -1) {
        taskList[taskIndex].taskCompleted = true; 
        console.log('Task mark completed successfully');
        console.log(taskList);
    }
    else {
        console.log('Invalid index')
    }
}

while (true) {
    console.log('\n Welcome to your task manager, please choose an option:');
    console.log('1. Add a new task');
    console.log('2. Delete a task');
    console.log('3. Mark as a completed task')
    console.log('4. Exit');

    const option = readline.question('Please, choose an option:');

    switch(option) {
        case "1":
            addTask();
            break;
        case "2":
            deleteTask();
            break;
        case "3":
            taskCompleted();
            break;
        case "4":
            console.log('Thanks for your time, have a good day!');
            return;
        default: 
        console.log('Invalid Option.');
        break;
    }
}