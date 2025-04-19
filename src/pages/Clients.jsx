import { useNavigate } from "react-router-dom";
import { clients } from "../lib/constants";
import ClientCard from "../components/ClientCard"; // Remove if unused
import images from "../lib/images";
import icons from "../lib/icons";

const BankAccountList = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full p-2 h-full flex flex-col">
        <div className="flex justify-between p-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold">مشتری‌ها</p>
            <p className="text-[16px] font-semibold text-slate-600">
              مشتری‌هاتو اینجا اضافه کن تا بتونی مدیریتشون کنی
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <img
                src={icons.search}
                alt=""
                className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3"
              />
              <input
                type="text"
                placeholder="..."
                className="bg-slate-100 rounded-md min-w-[300px] h-full px-8 py-2"
              />
            </div>
            <div className="bg-red-900 text-white px-4 rounded-lg py-2 flex gap-2 items-center cursor-pointer">
              <img src={icons.plus} alt="" className="w-4 h-4 invert" />
              <button>افزودن مشتری</button>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          {clients.length ? (
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-right">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2">ردیف</th>
                  <th className="px-4 py-2">نام مشتری</th>
                  <th className="px-4 py-2">کد ملی</th>
                  <th className="px-4 py-2">شماره تماس</th>
                  <th className="px-4 py-2">ایمیل</th>
                  <th className="px-4 py-2">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr key={index} className="border bg-white  hover:bg-slate-50">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{client.name}</td>
                    <td className="px-4 py-2">{client.nationalId}</td>
                    <td className="px-4 py-2">{client.phone}</td>
                    <td className="px-4 py-2">{client.email}</td>
                    <td className="px-4 py-2">
                      {/* Example action */}
                      <button className="text-blue-600 hover:underline">مشاهده</button>
                    </td>
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
