let oldtask = [];


function submitHandler() {
    event.preventDefault();

    let task = document.getElementById('newTask').value;

    oldtask.push(task);

    let taskListInString = JSON.stringify(oldtask);
    localStorage.setItem("tasking", taskListInString);



    renderTask();
}


function renderTask() {


    let getstring = localStorage.getItem("tasking");

    let stringtask = JSON.parse(getstring);

    oldtask = stringtask;

    let tasks = "";
    for (let i = 0; i < oldtask.length; i++) {
        let maintask = "<li>" + oldtask[i] + "</li>";
        tasks = tasks + maintask;

    }

    let ulTag = document.getElementById("taskLists");
    ulTag.innerHTML = tasks;



}

renderTask();