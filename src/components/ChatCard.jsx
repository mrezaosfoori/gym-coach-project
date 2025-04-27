import icons from "../lib/icons";

const ChatCard = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl shadow-md border hover:shadow-lg transition-all bg-white">
      <div className="flex items-center gap-4">
        {/* وضعیت آنلاین */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <img
            src={icons.avatar}
            alt=""
            className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          />
          {user.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 bg-green animate-pulse" />
          )}
        </div>

        {/* اطلاعات کاربر */}
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{user.username}</span>
          <span className="text-sm text-gray-700">
            {user.messages[0].from === "me" ? "شما: " : "او: "}
            {user.messages[0].text}
          </span>
        </div>
      </div>

      {/* آخرین پیام و زمان */}
      <div className="flex flex-col text-right">
        <span className="text-xs text-gray-400 mt-1">
          آخرین بروزرسانی:{" "}
          {new Date(user.lastUpdated).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
};

export default ChatCard;
