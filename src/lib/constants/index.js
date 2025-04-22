import icons from "../icons";

export const sidebar = [
  {
    id: 1,
    title: "داشبورد  ",
    path: "/",
    active: true,
    //   icon: profileIcon,
  },
  {
    id: 1,
    title: "شاگردان  ",
    path: "/clients",
    active: false,
    //   icon: profileIcon,
  },
  {
    id: 1,
    title: "برنامه ها  ",
    path: "/programs",
    active: false,
    //   icon: profileIcon,
  },
  {
    id: 1,
    title: " تمرین ها  ",
    path: "/excrcises",
    active: false,
    //   icon: profileIcon,
  },
  {
    id: 1,
    title: "  چت  ",
    path: "/chat",
    active: false,
    //   icon: profileIcon,
  },
];

export const clients = [
    {
      id: 1,
      name: "محمدرضا",
      email: "mohammadreza.osfuri@gmail.com",
      active: true,
      avatar: icons.logo,
      program: "برنامه ۱",
      status: "نمونه"
    },
    {
      id: 2,
      name: "محمدرضا",
      email: "mohammadreza.osfuri@gmail.com",
      active: true,
      avatar: icons.logo,
      program: "برنامه ۱",
      status: "نمونه"
    }
  ];


  const exerciseNames = [
    "شنا","اسکوات","بارپی","ددلیفت","پلانک","کوهنورد","لانج","جلو بازو دمبل",
    "پشت بازو دمبل","جلو بازو هالتر","بارفیکس","چین‌آپ","ددلیفت رومانیایی","پل باسن",
    "پل گلوت","کشش ساق پا","پارویی نشسته","پارویی خمیده","نشر جانب دمبل","نشر جلو دمبل",
    "کشیدن طناب به صورت","شنا الماسی","شنا شیبدار نزولی","شنا شیبدار صعودی","فلای معکوس",
    "ددلیفت تک پا","تاب کتل‌بل","پارویی تی‌آرایکس","ضربه طناب نبرد","پرش روی جعبه",
    "اسکوات پرشی","کلین و پرس کتل‌بل","اسنچ کتل‌بل","قدم زدن با وزنه","زانوی بلند",
    "جامپینگ جک","طناب زدن","موج طناب نبرد","دیوار نشینی","هالوهولد","لمس انگشتان پا",
    "خزیدن خرسی","فلترکیک","کرانچ دوچرخه","بالا بردن پا","فشار پا دستگاه","پشت بازو هالتر",
    "باز کردن پا","جمع کردن پا","زیربغل دمبل تک‌دست","زیربغل قایقی","زیربغل با کابل",
    "جلوبازو هالتر سیم‌کش","جلو بازو چکشی","لیفت همسترینگ دستگاه","لیفت همسترینگ دمبل",
    "الاکلنگ کتل‌بل","اسکوات بلغاری","لانگز معکوس","لانگز راه رفتنی","لانگز جانب",
    "پلانک جانب","پلانک با لیفت پا","برپی با پرش","برپی با شانه‌پرس","لیفت پهلوی کتل‌بل",
    "چرخش روسی","سیکلیک رانر","تمرین کششی همسترینگ","تمرین کششی چهارسر ران"
  ];
  
  // ۲. آرایه‌های نمونه برای ویژگی‌های چرخشی
  const types       = ["strength","cardio","mobility-strength","plyometric","flexibility","balance"];
  const muscles     = ["سینه","پا","پشت","شانه","بازو","هسته","همسترینگ","گلوت","کول","مولتی"];
  const equipments  = ["bodyweight","dumbbells","barbell","kettlebell","resistance band","bench","cable","machine"];
  const difficulties = ["beginner","intermediate","advanced"];
  
  // ۳. تولید آرایهٔ exercises با طول ۷۰
  export const exercises = exerciseNames.map((name, i) => ({
    name,
    type: types[i % types.length],
    muscle: muscles[i % muscles.length],
    equipment: equipments[i % equipments.length],
    difficulty: difficulties[i % difficulties.length],
    instructions: [
      `مرحله اول: آماده‌سازی حرکت ${name}.`,
      `مرحله دوم: اجرای صحیح ${name}.`
    ],
    image: "https://source.unsplash.com/featured/?push-up",     // Unsplash :contentReference[oaicite:9]{index=9}
    gif: "https://tenor.com/view/push-up-gif-12345678"   
  }));


  export const exerciseTypes = [
    { value: "", label: "همه", class: "" },
    {
      value: "cardio",
      label: "کاردیو",
      class: "text-blue-90 bg-blue-10 p-2 rounded-md",
    },
    {
      value: "strength",
      label: "تمرین قدرتی",
      class: "text-red-90 bg-red-10 p-2 rounded-md",
    },
    {
      value: "flexibility",
      label: "انعطاف‌پذیری",
      class: "text-green-90 bg-green-10 p-2 rounded-md",
    },
    {
      value: "balance",
      label: "تعادل",
      class: "text-purple-90 bg-purple-10 p-2 rounded-md",
    },
    {
      value: "endurance",
      label: "استقامت",
      class: "text-yellow-90 bg-yellow-10 p-2 rounded-md",
    },
    {
      value: "mobility",
      label: "تحرک",
      class: "text-teal-90 bg-teal-10 p-2 rounded-md",
    },
  ];

  export const equipmentOptions = [
    { value: "", label: "همه", class: "" },
    { value: "dumbbell", label: "دمبل", class: "" },
    { value: "barbell", label: "هالتر", class: "" },
    { value: "machine", label: "دستگاه", class: "" },
    { value: "bodyweight", label: "وزن بدن", class: "" },
    { value: "kettlebell", label: "کتل‌بل", class: "" },
    { value: "resistance_band", label: "کش تمرینی", class: "" },
    { value: "cable", label: "کابل", class: "" },
    { value: "medicine_ball", label: "مدیسن‌بال", class: "" },
  ];

  export const primaryMuscleOptions = [
    { value: "", label: "همه", class: "" },
    { value: "chest", label: "سینه", class: "" },
    { value: "back", label: "پشت", class: "" },
    { value: "shoulders", label: "سرشانه", class: "" },
    { value: "biceps", label: "بازو (جلو بازو)", class: "" },
    { value: "triceps", label: "پشت بازو", class: "" },
    { value: "legs", label: "پاها", class: "" },
    { value: "abs", label: "شکم", class: "" },
    { value: "glutes", label: "سرینی", class: "" },
    { value: "calves", label: "ساق پا", class: "" },
  ];


  export const otherMuscleOptions = [
    { value: "", label: "هیچ‌کدام", class: "" },
    { value: "forearms", label: "ساعد", class: "" },
    { value: "traps", label: "کول", class: "" },
    { value: "obliques", label: "پهلو", class: "" },
    { value: "hip_flexors", label: "فلکسور ران", class: "" },
    { value: "adductors", label: "کشاله ران", class: "" },
    { value: "hamstrings", label: "پشت ران", class: "" },
  ];
  
  