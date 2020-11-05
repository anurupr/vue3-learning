

const goalInput = document.querySelector('#goal');
const goalInputButton = document.querySelector('#addGoal');

const goalList = document.querySelector('.goals');


goalInputButton.addEventListener('click', function(ev) {
    const goal = goalInput.value;    
    if (typeof goal !== 'undefined' && goal !== "") {
        const goalListItem = document.createElement('li');
        goalListItem.textContent = goal;
        goalList.appendChild(goalListItem);
        goalInput.value = "";
    } else {
        alert("Goal can't be empty! Everyone should have goals");
    }
})