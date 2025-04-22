import React from "react";
import Modal from "./shared/Modal";
import Button from "./ui/button";
import icons from "../lib/icons";
import ExerciseForm from "./forms/ExerciseForm";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="space-y-6">
        <div className="uppercase tracking-wide text-xl text-slate-90 font-bold">
            {exercise.name}
          </div>
        <Modal
          button={
            <Button
            
              className={"w-full bg-white text-black hover:bg-slate-200"}
            >
              ویرایش حرکت 
            </Button>
          }
        >
          <ExerciseForm />
        </Modal>

      <div className="md:flex bg-white p-4 rounded-lg space-y-4">
      
        <div className="">
        
          <ul className="mt-2 text-gray-500">
            <li>
              <span className="font-bold">نوع:</span> {exercise.type}
            </li>
            <li>
              <span className="font-bold">عضله هدف:</span> {exercise.muscle}
            </li>
            <li>
              <span className="font-bold">تجهیزات:</span> {exercise.equipment}
            </li>
            <li>
              <span className="font-bold">سطح:</span> {exercise.difficulty}
            </li>
          </ul>
        
        </div>
        <div className="md:shrink-0  border ">
          <img
            className="w-fit max-h-48 mx-auto"
            src={exercise.gif}
            alt={exercise.name}
          />
        </div>

      </div>
      <p className="mt-4 text-gray-700 text-justify">
            {exercise.instructions}
          </p>
    </div>
  );
};

export default ExerciseCard;
