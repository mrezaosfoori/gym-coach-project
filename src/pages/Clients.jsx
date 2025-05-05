import { useNavigate } from "react-router-dom";
import { clients } from "../lib/constants";
import ClientCard from "../components/ClientCard"; // Remove if unused
import images from "../lib/images";
import icons from "../lib/icons";

const BankAccountList = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full p-2 h-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between w-full gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] font-bold">مشتری‌ها</p>
            <p className="text-[16px] font-semibold text-slate-800 ">
              مشتری‌هاتو اینجا اضافه کن تا بتونی مدیریتشون کنی
            </p>
          </div>
          <div className="flex gap-4  max-h-[60px]">
            <div className="relative">
              <img
                src={icons.search}
                alt=""
                className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3"
              />
              <input
                type="text"
                placeholder="..."
                className="bg-white rounded-md md:min-w-[200px] h-full px-8 py-2"
              />
            </div>
            <div className="bg-main text-white px-1 md:px-4 rounded-lg py-1 md:py-2 flex gap-2 items-center cursor-pointer">
              <img src={icons.plus} alt="" className="w-4 h-4 invert" />
              <button>افزودن مشتری</button>
            </div>
          </div>
        </div>
    

        <div className="w-full p-1">
          {clients.length ? (
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-right">
              <thead className="bg-slate-300 border">
                <tr>
                  <th className="px-4 py-2">نام مشتری</th>
                  <th className="px-4 py-2"> برنامه</th>
                  <th className="px-4 py-2"> 7 روز اخیر</th>
                  <th className="px-4 py-2">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr
                    key={index}
                    className="border bg-white  hover:bg-slate-50"
                  >
                    <td className="px-4 py-2">
                      <div className="flex gap-1 items-center">
                        <img src={icons.avatar} alt="" className="w-4 h-4 " />
                        <p> {client.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">{client.program}</td>
                    <td className="px-4 py-2">{client.program}</td>
                    <td className="px-4 py-2">{client.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>آیتمی وجود ندارد ...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BankAccountList;
