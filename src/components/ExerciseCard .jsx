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
            className={"w-full bg-white text-black hover:bg-slate-200 border"}
          >
            ویرایش حرکت
          </Button>
        }
      >
        <ExerciseForm />
      </Modal>

      <div className="md:flex bg-white p-4 rounded-lg space-y-4 border">
        <ul className="mt-2 text-gray-500 space-y-2">
          <li className="font-bold text-slate-400">
            <span className="text-slate-900">نوع:</span> {exercise.type}
          </li>
          <li className="font-bold text-slate-400">
            <span className="text-slate-900">عضله هدف:</span> {exercise.muscle}
          </li>
          <li className="font-bold text-slate-400">
            <span className="text-slate-900">تجهیزات:</span>{" "}
            {exercise.equipment}
          </li>
          <li className="font-bold text-slate-400">
            <span className="text-slate-900">سطح:</span> {exercise.difficulty}
          </li>
        </ul>

        <div className="md:shrink-0  border ">
          <img
            className="w-fit max-h-48 mx-auto"
            src={exercise.gif}
            alt={exercise.name}
          />
        </div>
      </div>
      <div className="md:flex bg-white p-4 rounded-lg space-y-4 border">
        <p>دستور العمل ها</p>
        {exercise.instructions.map((item, index) => (
          <div className="flex items-center gap-2 border-b-2 p-2">
            <div className="bg-slate-200 text-slate-500 w-10 h-10 p-2 rounded-full flex justify-center items-center">
              {index + 1}
            </div>
            <p className="max-w-[80%] "> {item}</p>
          </div>
        ))}
      </div>
      <div className="md:flex bg-white p-4 rounded-lg space-y-4 border">
        <p>الصاق ویدیو</p>

        <div className="flex items-center gap-2 border-b-2 p-2">
          <div className="bg-slate-200 text-slate-500 w-10 h-10 p-2 rounded-full flex justify-center items-center">
            <img src={icons.camera} alt="" className="w-4 h-4" />
          </div>
          <p className="max-w-[80%] "> {exercise.youtube}</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
