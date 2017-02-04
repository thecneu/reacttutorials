// routine.phases[].weeks[].workouts[].exercises[]
var exercises = [];
function processExercises( data, phase, week, group) {
    if( Object.keys(data).length === 0 ) return;
    data = data.exercises;
    for( var i = 0; i < data.length; i++ ) {
        data[i].phase = phase;
        data[i].week = week;
        data[i].group = group;
        data[i].type = "exercise";
        data[i].weight = 0;
        exercises.push( data[i] );
    }
}
function processPhases(data) {
    var title = data.title;
    data = data.phases;
    for( var i = 0; i < data.length; i++ ) {
        processWeeks( data[i], i );
    }
}
function processWeeks(data, phase) {
    var title = data.title;
    data = data.weeks;
    for( var i = 0; i < data.length; i++ ) {
        // console.log(data[i], phase);
        processWorkouts(data[i], phase, i);
    }    
}
function processWorkouts(data, phase, week) {
    var title = data.title;
    data = data.workouts;
    for( var i = 0; i < data.length; i++ ) {
        // console.log(data[i], phase, week);
        processExercises(data[i], phase, week, i);
    }    
}

//var e = routine.phases[0].weeks[0].data[0].exercises;
//processExercises( e, 0, 0, 0 );
console.log(routine);
processPhases( routine );
// for (var i = 0; i < exercises.length; i++) {
//     document.write(JSON.stringify(exercises[i]));    
// }