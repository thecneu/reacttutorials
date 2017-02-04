// console.log(routines);
let routines = [];

routine.phases.forEach((phase, p) => {
	let obj = {phase: p};
	phase.weeks.forEach((week, w) => {
		obj = Object.assign({}, obj, {week: w});
		obj.workouts = [];
		routines.push(obj);
		week.workouts.forEach((workout, wi) => {			
			if (workout.title) {
				obj.workouts[workout.title] = workout.exercises;
			}			
		})
	});	
});

console.log(routines);