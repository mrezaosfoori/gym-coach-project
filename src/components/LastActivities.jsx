import { clients } from "../lib/constants";
import icons from "../lib/icons";

const LastActivities = () => {
 
  return (
    <>
      <div className="w-full p-2 h-full flex flex-col gap-4 bg-white shadow-md  rounded-md shadow-slate-400">
        <div className="flex flex-col md:flex-row justify-between w-full gap-2 border-b-2 p-2">
          <p className="text-[20px] font-bold">فعالیت های اخیر</p>
          <button className="  text-blue-600 font-bold" > مشاهده همه</button>
        </div>
        {clients.map((client, index) => (
          <div key={index} className="border-b-2 bg-white  hover:bg-slate-50 flex gap-2 items-center">
            <img src={icons.avatar} alt="" className="w-8 h-8 rounded-full bg-main p-2 " />

            <div className="flex flex-col  gap-1 ">
              <p> {client.name}</p>
              <p className=" py-2">به تازگی جوین شده است.</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LastActivities;
