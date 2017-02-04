var cardio = [
	'Running - Treadmill',
	'Running - Elliptical',
	// 'Running - Outside',
	'Stair Master',
	// 'Cycling - Stand Up',
	// 'Cycling - Sit Down',
	// 'Cycling - Outside'
];

var routine = {
	phases: [{		
		title: 'Phase 1',
		weeks: [{			
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Incline Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/BBInclineBenchPress.gif',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/DBInclineFly.gif',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Cable Crossover',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/CBStandingFly.gif',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Lying Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/BBLyingTricepsExtension.gif',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Cable Overhead Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBOverheadTricepsExtRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '25-30'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '25-30'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Standing Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBStraightArmPullDown.gif',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Straight Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Incline Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'One-Arm High Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/CBSeatedCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 4,
					reps: '20-30'
				},
				{
					name: 'Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 4,
					reps: '20-30'
				},
				{
					name: 'Oblique Crunch',
					image: 'http://www.exrx.net/AnimatedEx/Obliques/BWTwistingCrunchHead.gif',
					type: 'abs',
					sets: 4,
					reps: '20-30'
				}]
			},
			{},
			{			
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidLateral/DBLateralRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'One-Arm Cable Front Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/CBFrontRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'High Cable Rear Delt Fly',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidPosterior/CBStandingRearDeltFly.gif',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Shrug',
					image: 'http://www.exrx.net/AnimatedEx/TrapeziusUpper/DBShrug.gif',
					type: 'traps',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '25-30'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '25-30'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Plank',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/FrontPlank.jpg',
					type: 'abs',
					sets: 3,
					reps: '1min'
				}]
			}]	
		},
		{
			workouts: [{ 
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Incline Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/BBInclineBenchPress.gif',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/DBInclineFly.gif',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Cable Crossover',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/CBStandingFly.gif',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Lying Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/BBLyingTricepsExtension.gif',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Cable Overhead Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBOverheadTricepsExtRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Standing Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBStraightArmPullDown.gif',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Straight Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Incline Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'One-Arm High Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/CBSeatedCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Hanging Leg Raise',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Weighted Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Dumbbell Side Bend',
					image: '',
					type: 'abs',
					sets: 4,
					reps: '15-19'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidLateral/DBLateralRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'One-Arm Cable Front Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/CBFrontRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'High Cable Rear Delt Fly',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidPosterior/CBStandingRearDeltFly.gif',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Shrug',
					image: 'http://www.exrx.net/AnimatedEx/TrapeziusUpper/DBShrug.gif',
					type: 'traps',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Hanging Leg Raise',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Plank',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/FrontPlank.jpg',
					type: 'abs',
					sets: 3,
					reps: '1min'
				}]
			}]	
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Incline Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/BBInclineBenchPress.gif',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/DBInclineFly.gif',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Cable Crossover',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/CBStandingFly.gif',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Lying Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/BBLyingTricepsExtension.gif',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Cable Overhead Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBOverheadTricepsExtRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '10-14'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '10-14'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Standing Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBStraightArmPullDown.gif',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Straight Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Incline Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'One-Arm High Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/CBSeatedCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Weighted Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Oblique Crunch',
					image: 'http://www.exrx.net/AnimatedEx/Obliques/BWTwistingCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidLateral/DBLateralRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'One-Arm Cable Front Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/CBFrontRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'High Cable Rear Delt Fly',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidPosterior/CBStandingRearDeltFly.gif',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Shrug',
					image: 'http://www.exrx.net/AnimatedEx/TrapeziusUpper/DBShrug.gif',
					type: 'traps',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '10-14'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '10-14'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Weighted Hip Thrust',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Woodchopper',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				}]
			}]	
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Incline Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/BBInclineBenchPress.gif',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: 'http://www.exrx.net/AnimatedEx/PectoralClavicular/DBInclineFly.gif',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Cable Crossover',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/CBStandingFly.gif',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Lying Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/BBLyingTricepsExtension.gif',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Cable Overhead Triceps Extension',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBOverheadTricepsExtRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '6-9'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '6-9'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Standing Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBStraightArmPullDown.gif',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Straight Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Incline Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'One-Arm High Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/CBSeatedCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Smith Machine Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Machine Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Band Roundhouse Elbow',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidLateral/DBLateralRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'One-Arm Cable Front Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/CBFrontRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'High Cable Rear Delt Fly',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidPosterior/CBStandingRearDeltFly.gif',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Shrug',
					image: 'http://www.exrx.net/AnimatedEx/TrapeziusUpper/DBShrug.gif',
					type: 'traps',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '6-9'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '6-9'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Smith Machine Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Machine Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Plank',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/FrontPlank.jpg',
					type: 'abs',
					sets: 3,
					reps: '75sec'
				}]
			}]	
		}],
	},
	{
		title: 'Phase 2',
		weeks: [{			
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Incline Cable Cable Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Overhead Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Cable Lying Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '25-30'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '25-30'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Behind-Neck Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Seated Cable Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/CBSeatedRow.gif',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Reverse-Grip Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Preacher Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Behind-Back Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/CBSeatedCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Oblique Crunch',
					image: 'http://www.exrx.net/AnimatedEx/Obliques/BWTwistingCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				}]
			},
			{},
			{ 
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Smith Machine Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'One-Arm Cable Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Barbell Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '25-30'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '25-30'
				}]
			},
			{ 
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Front Squat',
					image: '',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Seated Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Plank',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/FrontPlank.jpg',
					type: 'abs',
					sets: 3,
					reps: '75sec'
				}]
			}]	
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Incline Cable Cable Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Overhead Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Cable Lying Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Behind-Neck Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Seated Cable Row',
					image: '',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Reverse-Grip Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Barbell Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Preacher Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Behind-Back Cable Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Hanging Leg Raise',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Weighted Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Dumbbell Side Bend',
					image: '',
					type: 'abs',
					sets: 4,
					reps: '15-19'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Smith Machine Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'One-Arm Cable Front Raise',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/CBFrontRaise.gif',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Barbell Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Front Squat',
					image: '',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Seated Leg Curl',
					image: '',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Hanging Leg Raise',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Weighted Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Side Plank',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '75sec'
				}]
			}]	
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Incline Cable Cable Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Overhead Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Cable Lying Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '10-14'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '10-14'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Behind-Neck Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Seated Cable Row',
					image: '',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Reverse-Grip Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Preacher Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Behind-Back Cable Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Weighted Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Oblique Crunch',
					image: 'http://www.exrx.net/AnimatedEx/Obliques/BWTwistingCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Smith Machine Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'One-Arm Cable Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Barbell Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '10-14'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '10-14'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Front Squat',
					image: '',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Seated Leg Curl',
					image: '',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Weighted Hip Thrust',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Woodchopper',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				}]
			}]	
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Incline Cable Cable Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Overhead Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Cable Lying Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '6-9'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '6-9'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Behind-Neck Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Seated Cable Row',
					image: '',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Reverse-Grip Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Preacher Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Behind-Back Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/CBSeatedCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Smith Machine Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Machine Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Band Roundhouse Elbow',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Smith Machine Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'One-Arm Cable Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Barbell Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '6-9'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '6-9'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Front Squat',
					image: '',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Seated Leg Curl',
					image: '',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Smith Machine Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Machine Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Plank',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/FrontPlank.jpg',
					type: 'abs',
					sets: 3,
					reps: '90sec'
				}]
			}]	
		}],
	},
	{
		title: 'Phase 3',
		weeks: [{			
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Reverse-Grip Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Cable Crossovers',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'One-Arm Overhead Cable Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Close-Grip Bench Press',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '25-30'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '25-30'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Straight-Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Seated Cable Row',
					image: '',
					type: 'back',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Incline Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Concentration Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Oblique Crunch',
					image: 'http://www.exrx.net/AnimatedEx/Obliques/BWTwistingCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Dumbbell Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'One-Arm Smith Machine Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '25-30'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '25-30'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '12-15'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '12-15'
				},
				{
					name: 'Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '20-30'
				},
				{
					name: 'Plank',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/FrontPlank.jpg',
					type: 'abs',
					sets: 3,
					reps: '75sec'
				}]
			}]	
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Reverse-Grip Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Cable Crossovers',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'One-Arm Overhead Cable Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Close-Grip Bench Press',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Straight-Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Seated Cable Row',
					image: '',
					type: 'back',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Incline Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Concentration Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Hanging Leg Raise',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Weighted Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Dumbbell Side Bend',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Dumbbell Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'One-Arm Smith Machine Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '9-11'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '9-11'
				},
				{
					name: 'Hanging Leg Raise',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Weighted Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '15-19'
				},
				{
					name: 'Side Plank',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '90sec'
				}]
			}]
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Reverse-Grip Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Cable Crossovers',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'One-Arm Overhead Cable Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Close-Grip Bench Press',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Straight-Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Seated Cable Row',
					image: '',
					type: 'back',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Incline Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Concentration Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Weighted Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Oblique Crunch',
					image: 'http://www.exrx.net/AnimatedEx/Obliques/BWTwistingCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Dumbbell Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'One-Arm Smith Machine Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '10-14'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '10-14'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '6-8'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '6-8'
				},
				{
					name: 'Weighted Hip Thrust',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWLyingLegHipRaise.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				},
				{
					name: 'Cable Woodchopper',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '10-14'
				}]
			}],
		},
		{
			workouts: [{
				title: 'Chest, Triceps, Calves',
				exercises: [
				{
					name: 'Bench Press',
					image: 'http://www.exrx.net/AnimatedEx/PectoralSternal/BBBenchPress.gif',
					type: 'chest',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Reverse-Grip Incline Dumbbell Press',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Incline Dumbbell Flys',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Cable Crossovers',
					image: '',
					type: 'chest',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Triceps Pressdown',
					image: 'http://www.exrx.net/AnimatedEx/Triceps/CBPushdownRope.gif',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'One-Arm Overhead Cable Triceps Extension',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Close-Grip Bench Press',
					image: '',
					type: 'triceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Standing Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LVStandingCalfRaise.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'triceps',
					sets: 4,
					reps: '15-20'
				}]
			},
			{
				title: 'Back, Biceps, Abs',
				exercises: [
				{
					name: 'Dumbbell Bent-Over Row',
					image: 'http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif',
					type: 'back',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Wide-Grip Pulldown',
					image: 'http://www.exrx.net/AnimatedEx/LatissimusDorsi/CBFrontPulldownProBar.gif',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Straight-Arm Pulldown',
					image: '',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Seated Cable Row',
					image: '',
					type: 'back',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Barbell curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/BBCurl.gif',
					type: 'biceps',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Incline Cable Curl',
					image: 'http://www.exrx.net/AnimatedEx/Biceps/DBInclineCurl.gif',
					type: 'biceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Concentration Curl',
					image: '',
					type: 'biceps',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Smith Machine Hip Thrust',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Machine Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Band Roundhouse Elbow',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				}]
			},
			{},
			{
				title: 'Shoulders, Traps, Calves',
				exercises: [
				{
					name: 'Dumbbell Shoulder Press',
					image: 'http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBShoulderPress.gif',
					type: 'shoulders',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Dumbbell Upright Row',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Bent-Over Lateral Raise',
					image: '',
					type: 'shoulders',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'One-Arm Smith Machine Shrug',
					image: '',
					type: 'traps',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Seated Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Soleus/LVSeatedCalfRaiseH.gif',
					type: 'calves',
					sets: 4,
					reps: '6-9'
				},
				{
					name: 'Leg Press Calf Raise',
					image: 'http://www.exrx.net/AnimatedEx/Gastrocnemius/LV45DegCalfPress.gif',
					type: 'calves',
					sets: 4,
					reps: '6-9'
				}]
			},
			{
				title: 'Legs and Abs',
				exercises: [
				{
					name: 'Barbell Squat',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif',
					type: 'legs',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Leg Press',
					image: 'http://www.exrx.net/AnimatedEx/Quadriceps/SL45DegLegPressQuad.gif',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Leg Extension',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVSeatedLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Romanian Deadlift',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/BBStraightBackStraightLegDeadlift.gif',
					type: 'legs',
					sets: 4,
					reps: '3-5'
				},
				{
					name: 'Lying Leg Curl',
					image: 'http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurlH.gif',
					type: 'legs',
					sets: 3,
					reps: '3-5'
				},
				{
					name: 'Smith Machine Hip Thrust',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Machine Crunch',
					image: 'http://www.exrx.net/AnimatedEx/RectusAbdominis/BWCrunchHead.gif',
					type: 'abs',
					sets: 3,
					reps: '6-9'
				},
				{
					name: 'Plank',
					image: '',
					type: 'abs',
					sets: 3,
					reps: '105sec'
				}]
			}]
		}]
	}]
};

var abs = "Crunches, Leg Raises, Alternating Leg Crunches";
var back = 'Bent-Over Barbell Row, Barbell Shrug, Lat Pulldowns, Dumbbell Shrug, Lat Pulldowns, Hanging Row, Seated Cable Rows, Trap Bar Shrugs, Reverse Grip Lat Pulldowns'; 
var biceps = 'Hammer Curls, Standing Two-Armed Cable Curls, Cross Body One-Armed Cable Curls, Dumbbell Curl, Incline Dumbbell Curl, Concentration Curls, Cross Body Dumbbell Hammer Curl, EZ-Bar Bicep Curl, Close Grip Chin Up, Resistance Band Barbell Curls, Standing Dumbbell Curls'; 
var chest = 'Barbell Bench Press, Incline Barbell Bench Press, Dumbbell Pullover, Dumbbell Fly, Dumbbell Chest Press, Incline Dumbbell Chest Press, Incline Dumbbell Flies, Low Cross Cable Raise, Incline Push Up, Push Ups, Pec Deck Machine, Cable Crossovers, Dips'; 
var shoulders = 'Bent-Over Barbell Row, Barbell Shrug, Lat Pulldowns, Dumbbell Shrug, Lat Pulldowns, Hanging Row, Seated Cable Rows, Seated Rear Lateral Dumbbell Raises, Trap Bar Shrugs, Reverse Grip Lat Pulldowns'; 
var triceps = 'Close Grip Bench Press, Overhead Dumbbell Extensions, Tricep Dips, Seated One-Arm Dumbbell Tricep Extensions, Skull Crushers, Close Grip Dumbbell Press, Reverse Grip Cable Press Down, Overhead Cable Tricep Extensions, Lying Dumbbell French Press, Close Grip Push Up';