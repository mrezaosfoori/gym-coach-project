import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../components/custom/CustomInput";
import {  useSignInUser } from "../../../lib/queries/queriesAndMutations";
import { toast } from "react-toastify";

export default function ProfileForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { mutateAsync: signIn, isPending } = useSignInUser();

  const processForm = async (data) => {
    const response = await signIn(data);
    if (response?.current) {
      toast.success("ورود موفقیت آمیز بود");
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
          name={"name"}
          label={"نام"}
          type={"text"}
          errors={errors.name}
        />
        <CustomInput
          register={register}
          name={"email"}
          label={"ایمیل "}
          type={"text"}
          errors={errors.email}
        />
        <CustomInput
          register={register}
          name={"phone"}
          label={"ایمیل "}
          type={"text"}
          errors={errors.email}
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


