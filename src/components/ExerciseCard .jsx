import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={exercise.gif} alt={exercise.name} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{exercise.name}</div>
          <ul className="mt-2 text-gray-500">
            <li><span className="font-bold">نوع:</span> {exercise.type}</li>
            <li><span className="font-bold">عضله هدف:</span> {exercise.muscle}</li>
            <li><span className="font-bold">تجهیزات:</span> {exercise.equipment}</li>
            <li><span className="font-bold">سطح:</span> {exercise.difficulty}</li>
          </ul>
          <p className="mt-4 text-gray-700 text-justify">{exercise.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
