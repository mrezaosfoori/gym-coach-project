import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../components/custom/CustomInput";
import {  useSignInUser } from "../../../lib/queries/queriesAndMutations";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export default function SigninForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const queryClient = useQueryClient()

  const { mutateAsync: signIn, isPending } = useSignInUser();

  const processForm = async (data) => {
    const response = await signIn(data);
    if (response?.current) {
      toast.success("ورود موفقیت آمیز بود");
      
      queryClient.invalidateQueries({ queryKey: ['getAccount'] })


      navigate("/");
    }
  };

  return (
    <div className="flex flex-col gap-3 ">
      <p className="text-[#7f7f7f] text-[14px]  md:text-[22px] mb-8  font-bold">
        کاربر گرامی
        <br /> برای ورود اطلاعات زیر را وارد نمایید
      </p>

      <form
        onSubmit={handleSubmit(processForm)}
        className={`flex flex-col gap-8  `}
      >
        <CustomInput
          register={register}
          name={"email"}
          label={"ایمیل "}
          type={"text"}
          errors={errors.email}
        />

        <CustomInput
          register={register}
          name={"password"}
          label={"رمز عبور"}
          type={"text"}
          errors={errors.password}
        />
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-main text-white text-[22px] font-semibold px-3 py-2 rounded-lg disabled:bg-slate-500"
        >
          ورود
        </button>
      </form>
    </div>
  );
}




// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import CustomInput from "../../../components/custom/CustomInput";
// import {
//   useGetAccount,
//   useGetCurrentUser,
//   useSignInUser,
//   useSignOutUser,
// } from "../../../lib/queries/queriesAndMutations";
// import { getCurrentUser } from "../../../lib/appwrite/api";

// export default function SigninForm() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({});

//   const { mutateAsync: signIn, isPending } = useSignInUser();
//   const { mutateAsync: signOut } = useSignOutUser();
//   const { mutateAsync: getAccount } = useGetAccount();
//   const { mutateAsync: getCurrentUser } = useGetCurrentUser();

//   const handleGetAccount = async () => {
//     const response = await getAccount();
//     //Cookies.set('token', response.cookies.accessToken)
//     console.log({ response });
//   };
//   const handleGetCurrentUser = async () => {
//     const response = await getCurrentUser();
//     //Cookies.set('token', response.cookies.accessToken)
//     console.log({ response });
//   };
  // const handleSignOut = async () => {
  //   const response = await signOut();
  //   //Cookies.set('token', response.cookies.accessToken)
  //   console.log({ response });
  // };
//   const processForm = async (data) => {
//     const response = await signIn(data);
//     //Cookies.set('token', response.cookies.accessToken)
//     console.log({ response });
//   };

//   return (
//     <div className="flex flex-col gap-3 bg-red-500">
//       <p className="text-[#7f7f7f] text-[14px]  md:text-[22px] mb-8  font-bold">
//         کاربر گرامی
//         <br /> جهت ورود به وندا ولت اطلاعات زیر را وارد نمایید
//       </p>

//       <div className="flex flex-col gap-4 w-full flex-1 bg-white p-2 rounded-xl max-w-[684px] max-h-[800px] overflow-y-scroll vanda">
//         <form onSubmit={handleSubmit(processForm)} className={`space-y-4  `}>
//           <CustomInput
//             register={register}
//             name={"email"}
//             label={"نام حرکت"}
//             type={"text"}
//             errors={errors.mobile}
//           />

//           <CustomInput
//             register={register}
//             name={"password"}
//             label={"نام حرکت"}
//             type={"text"}
//             errors={errors.mobile}
//           />
//           <button type="submit">sumbit</button>
//         </form>
//       </div>
//       <button onClick={() => handleSignOut()}>sign out</button>
//       <button onClick={() => handleGetAccount()}>handleGetAccount</button>
//       <button onClick={() => handleGetCurrentUser()}>handleGetCurrentUser</button>
//     </div>
//   );
// }
