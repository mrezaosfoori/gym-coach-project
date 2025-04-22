import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../custom/CustomInput";
import CustomSelect from "../custom/CustomSelect";
// import  DateInput  from "../custom/CustomInput";
import { useNavigate } from "react-router-dom";
import {
  equipmentOptions,
  exerciseTypes,
  otherMuscleOptions,
  primaryMuscleOptions,
} from "../../lib/constants";
import ImageFileUoload from "../custom/ImageFileUoload";
import TextArea from "../custom/TextArea";
import ExerciseFormUploader from "../custom/ExerciseFormUploader";

export default function ExerciseForm({ pageType, userData, userId, disabled }) {
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

  return (
    <div className="flex flex-col gap-4 w-full flex-1 bg-neutral-00 p-2 rounded-xl max-w-[684px]">
      <form
        // onSubmit={handleSubmit(processForm)}
        className={`space-y-4  `}
      >
        <ImageFileUoload
          emptyAvatar={true}
          pic_type={"USER_PROFILE"}
          acceptedFormats={[".png", ".jpeg", ".jpg", ".webp"]}
        />

        <CustomInput
          register={register}
          name={"mobile"}
          label={"نام حرکت"}
          type={"text"}
          errors={errors.mobile}
        />

        <CustomSelect
          register={register}
          name={"equipment"}
          label={"ابزار "}
          type={"text"}
          errors={errors.mobile}
          options={equipmentOptions}
        />
        <CustomSelect
          register={register}
          name={"primary-muscle"}
          label={"عضله اصلی "}
          type={"text"}
          errors={errors.mobile}
          options={primaryMuscleOptions}
        />
        <CustomSelect
          register={register}
          name={"primary-muscle"}
          label={"سایر عضله های دگیر"}
          type={"text"}
          errors={errors.mobile}
          options={otherMuscleOptions}
        />

        <TextArea
          register={register}
          name={"description"}
          placeholder={"شرح درخواست"}
          label={"شرح"}
          type={"text"}
          className={"col-span-2 xl:col-span-2"}
          disabled={disabled}
        />
         <ExerciseFormUploader
         label={"الحاق ویدیو"}
          emptyAvatar={true}
          pic_type={"USER_PROFILE"}
          acceptedFormats={[".png", ".jpeg", ".jpg", ".webp"]}
        />

        {/* <DateInput
          control={control}
          name={"birthdate"}
          label={"تاریخ تولد"}
          disabled={formIsDisable}
          maxDate={Date.now()}
          placeholder={"روز/ماه/سال"}
          type={"text"}
          errors={errors.birthdate}
          className={""}
          setValue={setValue}
        /> */}

        {/* <div className=" col-span-2 bg-white">
          <UplaodMenu
            setActiveUplaodMenu={setActiveUplaodMenu}
            type={"auth"}
            value={is_iranian}
          />
          {activeUplaodMenu.value === "profile_picture" && (
            <Controller
              control={control}
              name={"profile_picture"}
              render={({ field: { onChange, value } }) => (
                <FileUploader
                  emptyAvatar={true}
                  fieldChange={onChange}
                  pic_type={"USER_PROFILE"}
                  mediaUrl={value}
                  disabled={formIsDisable}
                  acceptedFormats={[".png", ".jpeg", ".jpg", ".webp"]}
                />
              )}
            />
          )}
          {activeUplaodMenu.value === "top_national_card_image" && (
            <Controller
              control={control}
              name={"top_national_card_image"}
              render={({ field: { onChange, value } }) => (
                <FileUploader
                  emptyAvatar={true}
                  pic_type={"TOP_NATIONAL_CARD"}
                  fieldChange={onChange}
                  mediaUrl={value}
                  disabled={formIsDisable}
                  acceptedFormats={[".png", ".jpeg", ".jpg", ".webp"]}
                />
              )}
            />
          )}
          {activeUplaodMenu.value === "first_birth_certificate_page_image" && (
            <Controller
              control={control}
              name={"first_birth_certificate_page_image"}
              render={({ field: { onChange, value } }) => (
                <FileUploader
                  pic_type={"FIRST_BIRTH_CERTIFICATE_PAGE"}
                  emptyAvatar={true}
                  fieldChange={onChange}
                  mediaUrl={value}
                  disabled={formIsDisable}
                  acceptedFormats={[".png", ".jpeg", ".jpg", ".webp"]}
                />
              )}
            />
          )}

          {activeUplaodMenu.value === "passport_image" && (
            <Controller
              control={control}
              name={"passport_image"}
              render={({ field: { onChange, value } }) => (
                <FileUploader
                  pic_type={"PASSPORT"}
                  emptyAvatar={true}
                  fieldChange={onChange}
                  disabled={formIsDisable}
                  mediaUrl={value}
                  acceptedFormats={[".png", ".jpeg", ".jpg", ".webp"]}
                />
              )}
            />
          )}
          {errors.top_national_card_image?.message && (
            <div className="text-red-500  text-sm my-2">
              {errors.top_national_card_image?.message}
            </div>
          )}
          {errors.first_birth_certificate_page_image?.message && (
            <div className="text-red-500  text-sm my-2">
              {errors.first_birth_certificate_page_image?.message}
            </div>
          )}
          {errors.passport_image?.message && (
            <div className="text-red-500  text-sm my-2">
              {errors.passport_image?.message}
            </div>
          )}
        </div>
        {!formIsDisable && (
          <div className="flex justify-end col-span-2 ">
            <button
              type="submit"
              className="btn-container text-[16px] disabled:bg-slate-400 disabled:cursor-not-allowed"
              disabled={isPendingUpdating || isPendingUpdating || isSubmitting}
            >
              {isPendingUpdating || isPendingUpdating || isSubmitting ? (
                <div className="flex gap-4 items-center">
                  <p className="text-xs">در حال ارسال</p>
                  <div className="flex-center gap-2 w-6 h-full ">
                    <Loader />
                  </div>
                </div>
              ) : pageType === "add" ? (
                "افزودن کاربر"
              ) : (
                "ذخیره تغییرات"
              )}
            </button>
          </div>
        )} */}
      </form>
    </div>
  );
}
