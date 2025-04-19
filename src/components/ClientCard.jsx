


const ClientCard = ({ client }) => {
 
  return (
    <div className="bg-primary-10 py-1 px-4 rounded-[16px] flex flex-col gap-1  items-center shadow-lg border  ">
      <div className="flex justify-between items-center w-full">
        <div className=" flex-center items-top gap-1  text-dark  ">
          <img width={20} height={20} src={"/images/bankcard.svg "} alt="*" />
          <p className="max-w-[200px] truncate text-[22px]  font-semibold">
            {client.name ? client.name : "-"}
          </p>
        </div>
      </div>

      <div className="mt-2  flex flex-col gap-1 items-center w-full">
        <div className="flex flex-col text-dark gap-1  w-full rounded-[16px] text-title-sm-regular">
          <div className="flex justify-between items-center gap-2 w-full">
            <label className="text-[12px]" htmlFor="">
              مالک حساب
            </label>

            {client.owners ? client.owners : "-"}
          </div>

          <div className="flex justify-between items-center gap-2 w-full">
            <label className="text-[12px]" htmlFor="">
              بانک مبدا:
            </label>
            {client.bank_name ? client.bank_name : "-"}
          </div>
          <div className="flex justify-between items-center gap-2 w-full">
            <label className="text-[12px]" htmlFor="">
              شماره شبا:
            </label>
            {client.system_client
              ? "ونداولت"
              : client.iban
              ? client.iban
              : "-"}
          </div>
          
        </div>
      </div>
      <hr className="bg-neutral-20 h-[2px] text-neutral-20 w-full" />
     
    </div>
  );
};

export default ClientCard;
