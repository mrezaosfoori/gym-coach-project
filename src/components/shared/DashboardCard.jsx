import arrowDown from "../../assets/images/downArrow.svg";

export default function DashboardCard({ card }) {
  return (
    <div className="col-span-1 relative bg-white shadow-lg rounded-2xl  pt-16 cursor-pointer hover:shadow-2xl transition ">
      {/* تصویر */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[92px] h-20 object-cover rounded-md shadow-md bg-main flex justify-center items-center">
        <img src={card.icon} alt="" className="w-10 h-10  invert m-auto" />
      </div>

      {/* عنوان */}
      <div className="flex justify-between border-b-2 px-6 py-4">
        <h2 className="text-center text-[14px] font-bold mb-4">{card.title}</h2>
        <img src={arrowDown} alt="" className="h-6 w-6 rotate-90" />
      </div>
      <div className="flex justify-between border-b-2 px-6  py-4 items-center">
        <h2 className="text-center text-[18px] font-bold mb-4">
          {card.users.length}
        </h2>
        <div className="flex gap-2 max-w-[70%] overflow-hidden">
          {card.users.map((item) => {
            return (
              <div className="bg-slate-200 rounded-full p-2 ">{item.name}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
