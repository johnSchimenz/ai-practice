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

const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const exerciseContainer = document.getElementById('exercise-container');

startButton.addEventListener('click', startWorkout);
nextButton.addEventListener('click', nextExercise);

function startWorkout() {
    startButton.style.display = 'none';
    nextButton.style.display = 'block';
    showExercise();
}

function showExercise() {
    exerciseContainer.innerText = exercises[currentExerciseIndex];
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
    exerciseContainer.innerText = 'Congratulations! Workout completed.';
    nextButton.style.display = 'none';
}
