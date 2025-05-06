import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import icons from "../../../lib/icons";
import CustomInput from "../../../components/custom/CustomInput";
import { useCreateNewUser } from "../../../lib/queries/queriesAndMutations";

export default function SignupForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({});

  const {mutateAsync:createNewUser,isPending}=useCreateNewUser()

  const processForm=async(data)=>{
    const response=await createNewUser(data) 
    console.log({response})
  }

  return (
    <div className="flex flex-col gap-3 bg-red-500">
      <p className="text-[#7f7f7f] text-[14px]  md:text-[22px] mb-8  font-bold">
        کاربر گرامی
        <br /> جهت ورود به وندا ولت اطلاعات زیر را وارد نمایید
      </p>

      <div className="flex flex-col gap-4 w-full flex-1 bg-white p-2 rounded-xl max-w-[684px] max-h-[800px] overflow-y-scroll vanda">
        <form
           onSubmit={handleSubmit(processForm)}
          className={`space-y-4  `}
        >
          <CustomInput
            register={register}
            name={"email"}
            label={"نام حرکت"}
            type={"text"}
            errors={errors.mobile}
          />

          <CustomInput
            register={register}
            name={"password"}
            label={"نام حرکت"}
            type={"text"}
            errors={errors.mobile}
          />
<button type="submit">sumbit</button>
       
        </form>
      </div>
    </div>
  );
}
