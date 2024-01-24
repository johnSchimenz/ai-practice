const exercises = [
    'Jumping Jacks',
    'Push-ups',
    'Sit-ups',
    'Squats',
    'Plank',
    'Burpees',
    'Lunges',
    'Mountain Climbers',
    'High Knees',
    'Russian Twists'
];

let currentExerciseIndex = 0;
let weights = [];
let reps = [];

const recordButton = document.getElementById('recordButton');
const exerciseContainer = document.getElementById('exercise-container');
const weightInput = document.getElementById('weight');
const repsInput = document.getElementById('reps');

recordButton.addEventListener('click', recordStats);

showExercise();

function showExercise() {
    exerciseContainer.innerHTML = `<h2>${exercises[currentExerciseIndex]}</h2>`;
    weightInput.value = 0;
    repsInput.value = 0;
}

function recordStats() {
    const weight = parseInt(weightInput.value);
    const rep = parseInt(repsInput.value);

    if (!isNaN(weight) && !isNaN(rep)) {
        weights.push(weight);
        reps.push(rep);
        nextExercise();
    } else {
        alert("Please enter valid weight and rep values.");
    }
}

function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex < exercises.length) {
        showExercise();
    } else {
        endWorkout();
    }
}

function endWorkout() {
    // Display recorded stats
    displayStats();
}

function displayStats() {
    const statsContainer = document.createElement('div');
    statsContainer.innerHTML = '<h2>Workout Stats</h2>';
    for (let i = 0; i < exercises.length; i++) {
        const exerciseStats = document.createElement('p');
        exerciseStats.innerHTML = `<strong>${exercises[i]}:</strong> ${weights[i]} lbs, ${reps[i]} reps`;
        statsContainer.appendChild(exerciseStats);
    }
    document.body.appendChild(statsContainer);
}
