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


  export const excercises = [
    {
      "name": "شنا",
      "type": "strength",
      "muscle": "سینه",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "دستان خود را به عرض شانه باز کنید، بدن را صاف نگه داشته، با خم کردن آرنج‌ها بدن را پایین آورده و سپس بالا ببرید.",
      "gif": "https://media.giphy.com/media/push-up/giphy.gif"
    },
    {
      "name": "اسکوات",
      "type": "strength",
      "muscle": "پا",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "پاها را به عرض شانه باز کنید، باسن را به عقب برده و خم شوید تا ران‌ها موازی زمین شوند، سپس به وضعیت شروع برگردید.",
      "gif": "https://media.giphy.com/media/squat/giphy.gif"
    },
    {
      "name": "بارپی",
      "type": "cardio",
      "muscle": "تمام بدن",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "از حالت ایستاده به پلانک رفته، یک شنا انجام دهید، سپس جهش کرده و دست‌ها را بالای سر بیاورید.",
      "gif": "https://media.giphy.com/media/burpee/giphy.gif"
    },
    {
      "name": "ددلیفت",
      "type": "strength",
      "muscle": "پشت و پا",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "با هالتر مقابل خود، زانوها را کمی خم کرده، پشت را صاف نگه دارید و هالتر را تا بالای ران بکشید.",
      "gif": "https://media.giphy.com/media/deadlift/giphy.gif"
    },
    {
      "name": "پلانک",
      "type": "strength",
      "muscle": "هسته",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "در وضعیت شنا سوئدی قرار گرفته، ساعدها را روی زمین گذاشته و بدن را در یک خط صاف نگه دارید.",
      "gif": "https://media.giphy.com/media/plank/giphy.gif"
    },
    {
      "name": "کوهنورد",
      "type": "cardio",
      "muscle": "هسته و پا",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "از وضعیت پلانک شروع کنید، زانوها را یکی یکی به سینه نزدیک کنید و حرکت را با سرعت ادامه دهید.",
      "gif": "https://media.giphy.com/media/mountain-climber/giphy.gif"
    },
    {
      "name": "لانج",
      "type": "strength",
      "muscle": "پا و گلوت",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "یک قدم به جلو بردارید، زانوی عقب را به سمت زمین پایین آورده و دوباره به حالت ایستاده برگردید.",
      "gif": "https://media.giphy.com/media/lunge/giphy.gif"
    },
    {
      "name": "پرس سینه خوابیده",
      "type": "strength",
      "muscle": "سینه",
      "equipment": "barbell+bench",
      "difficulty": "intermediate",
      "instructions": "روی نیمکت خوابیده، هالتر را از رک برداشته، به سمت پایین سینه آورده و دوباره بالا ببرید.",
      "gif": "https://media.giphy.com/media/bench-press/giphy.gif"
    },
    {
      "name": "پرس شانه دمبل",
      "type": "strength",
      "muscle": "شانه",
      "equipment": "dumbbells",
      "difficulty": "intermediate",
      "instructions": "دمبل‌ها را روی شانه نگه داشته، با فشار به بالا ببرید و سپس آرام پایین بیاورید.",
      "gif": "https://media.giphy.com/media/dumbbell-shoulder-press/giphy.gif"
    },
    {
      "name": "دیپ",
      "type": "strength",
      "muscle": "سینه و پشت بازو",
      "equipment": "dip bar",
      "difficulty": "intermediate",
      "instructions": "دستان خود را روی میله دیپ قرار داده، بدن را پایین برده و سپس بالا بیاورید.",
      "gif": "https://media.giphy.com/media/dip/giphy.gif"
    },
    {
      "name": "بارفیکس",
      "type": "strength",
      "muscle": "پشت و بازو",
      "equipment": "pull-up bar",
      "difficulty": "advanced",
      "instructions": "با دست‌گیره باز، بدن را تا رسیدن چانه به میله بالا بیاورید.",
      "gif": "https://media.giphy.com/media/pull-up/giphy.gif"
    },
    {
      "name": "چین‌آپ",
      "type": "strength",
      "muscle": "پشت و بازو",
      "equipment": "pull-up bar",
      "difficulty": "intermediate",
      "instructions": "مانند بارفیکس اما با دست‌گیره بسته، بدن را بالا بکشید.",
      "gif": "https://media.giphy.com/media/chin-up/giphy.gif"
    },
    {
      "name": "ددلیفت رومانیایی",
      "type": "strength",
      "muscle": "پشت و همسترینگ",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "هالتر را نزدیک بدن نگه داشته، با حفظ انحنا جزئی زانو، به جلو خم شوید و سپس بالا بیایید.",
      "gif": "https://media.giphy.com/media/romanian-deadlift/giphy.gif"
    },
    {
      "name": "جلو بازو دمبل",
      "type": "strength",
      "muscle": "بازو",
      "equipment": "dumbbells",
      "difficulty": "beginner",
      "instructions": "دمبل‌ها را در دست گرفته، آرنج‌ها را ثابت نگه داشته و دمبل‌ها را به سمت شانه بالا بیاورید.",
      "gif": "https://media.giphy.com/media/dumbbell-biceps-curl/giphy.gif"
    },
    {
      "name": "پشت بازو دمبل",
      "type": "strength",
      "muscle": "پشت بازو",
      "equipment": "dumbbell",
      "difficulty": "intermediate",
      "instructions": "دمبل را بالای سر برده، آرنج را خم کرده و بازو را پایین ببرید.",
      "gif": "https://media.giphy.com/media/dumbbell-triceps-extension/giphy.gif"
    },
    {
      "name": "پلانک جانبی",
      "type": "strength",
      "muscle": "هسته و پهلو",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "روی یک پهلو دراز کشیده، با ساعد بالا بیایید و بدن را صاف نگه دارید.",
      "gif": "https://media.giphy.com/media/side-plank/giphy.gif"
    },
    {
      "name": "چرخش روسی",
      "type": "strength",
      "muscle": "هسته",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "روی زمین نشسته، زانوها را خم کرده و تنه را با نگه داشتن وزنه یا بدون وزنه از طرفی به طرف دیگر بچرخانید.",
      "gif": "https://media.giphy.com/media/russian-twist/giphy.gif"
    },
    {
      "name": "کرانچ دوچرخه",
      "type": "strength",
      "muscle": "هسته",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "روی زمین دراز کشیده، آرنج مخالف را به زانوی نزدیک شده برسانید و پاها را مانند پدال دوچرخه حرکت دهید.",
      "gif": "https://media.giphy.com/media/bicycle-crunch/giphy.gif"
    },
    {
      "name": "بالا بردن پا",
      "type": "strength",
      "muscle": "هسته پایینی",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "روی زمین دراز کشیده، پاها را صاف بالا برده و سپس پایین بیاورید بدون آنکه زمین را لمس کنند.",
      "gif": "https://media.giphy.com/media/leg-raise/giphy.gif"
    },
    {
      "name": "پل باسن",
      "type": "strength",
      "muscle": "گلوت",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "روی زمین دراز کشیده، زانوها خم، باسن را بالا برده تا بدن در یک خط مستقیم قرار گیرد.",
      "gif": "https://media.giphy.com/media/hip-thrust/giphy.gif"
    },
    {
      "name": "پل گلوت",
      "type": "strength",
      "muscle": "گلوت",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "در وضعیت مشابه پل باسن، باسن را بالا و پایین ببرید.",
      "gif": "https://media.giphy.com/media/glute-bridge/giphy.gif"
    },
    {
      "name": "کشش ساق پا",
      "type": "strength",
      "muscle": "ساق پا",
      "equipment": "step",
      "difficulty": "beginner",
      "instructions": "پاشنه‌ها را آویزان کرده، سپس با فشار روی پنجه‌ها بالا بیایید.",
      "gif": "https://media.giphy.com/media/calf-raise/giphy.gif"
    },
    {
      "name": "پارویی نشسته",
      "type": "strength",
      "muscle": "پشت",
      "equipment": "seated row machine",
      "difficulty": "intermediate",
      "instructions": "روی دستگاه نشسته، دسته‌ها را به سمت خود بکشید تا آرنج‌ها از پهلو عبور کنند.",
      "gif": "https://media.giphy.com/media/seated-row/giphy.gif"
    },
    {
      "name": "پارویی خمیده",
      "type": "strength",
      "muscle": "پشت",
      "equipment": "barbell or dumbbell",
      "difficulty": "intermediate",
      "instructions": "با زانوهای کمی خم، به جلو خم شده، هالتر یا دمبل را تا شکم بکشید.",
      "gif": "https://media.giphy.com/media/bent-over-row/giphy.gif"
    },
    {
      "name": "نشر جانب دمبل",
      "type": "strength",
      "muscle": "شانه",
      "equipment": "dumbbells",
      "difficulty": "beginner",
      "instructions": "دمبل‌ها را کنار بدن نگه داشته، بازوها را تا ارتفاع شانه بالا ببرید.",
      "gif": "https://media.giphy.com/media/lateral-raise/giphy.gif"
    },
    {
      "name": "نشر جلو دمبل",
      "type": "strength",
      "muscle": "شانه",
      "equipment": "dumbbells",
      "difficulty": "beginner",
      "instructions": "دمبل‌ها را مقابل ران نگه داشته، دست را صاف تا ارتفاع شانه بالا ببرید.",
      "gif": "https://media.giphy.com/media/front-raise/giphy.gif"
    },
    {
      "name": "کشیدن طناب به صورت",
      "type": "strength",
      "muscle": "شانه و پشت",
      "equipment": "cable + rope",
      "difficulty": "intermediate",
      "instructions": "با دسته طناب، آرنج‌ها را به طرفین باز کرده و طناب را تا نزدیکی صورت بکشید.",
      "gif": "https://media.giphy.com/media/face-pull/giphy.gif"
    },
    {
      "name": "شنا الماسی",
      "type": "strength",
      "muscle": "سینه و پشت بازو",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "دستان خود را به شکل الماس زیر سینه قرار دهید و مانند شنا معمولی بدن را بالا و پایین ببرید.",
      "gif": "https://media.giphy.com/media/diamond-push-up/giphy.gif"
    },
    {
      "name": "شنا شیبدار نزولی",
      "type": "strength",
      "muscle": "سینه بالا",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "پاها را روی سطح بالاتر گذاشته و شنا انجام دهید تا تمرکز روی قسمت بالایی سینه باشد.",
      "gif": "https://media.giphy.com/media/decline-push-up/giphy.gif"
    },
    {
      "name": "شنا شیبدار صعودی",
      "type": "strength",
      "muscle": "سینه پایین",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "دست‌ها را روی سطح بالاتر گذاشته و شنا انجام دهید تا تمرکز روی قسمت پایین سینه باشد.",
      "gif": "https://media.giphy.com/media/incline-push-up/giphy.gif"
    },
    {
      "name": "فلترکیک",
      "type": "strength",
      "muscle": "هسته",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "روی زمین دراز کشیده، پاها را نزدیک زمین بالا و پایین ببرید بدون تماس آن‌ها با زمین.",
      "gif": "https://media.giphy.com/media/flutter-kick/giphy.gif"
    },
    {
      "name": "سوپرمَن",
      "type": "strength",
      "muscle": "کمر و پشت",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "روی شکم دراز کشیده، دست‌ها و پاها را همزمان از زمین بالا برده و نگه دارید.",
      "gif": "https://media.giphy.com/media/superman/giphy.gif"
    },
    {
      "name": "فلای معکوس",
      "type": "strength",
      "muscle": "شانه عقب",
      "equipment": "dumbbells + incline bench",
      "difficulty": "intermediate",
      "instructions": "روی نیمکت شیبدار رو به پایین دراز کشیده، دمبل‌ها را در دست گرفته و دست‌ها را کنار بدن باز کنید.",
      "gif": "https://media.giphy.com/media/reverse-fly/giphy.gif"
    },
    {
      "name": "ددلیفت تک پا",
      "type": "balance",
      "muscle": "پا و تعادل",
      "equipment": "dumbbell or barbell",
      "difficulty": "advanced",
      "instructions": "یکی از پاها را پشت بدن نگه دارید، با پای دیگر به جلو خم شوید و وزنه را بالا ببرید.",
      "gif": "https://media.giphy.com/media/single-leg-deadlift/giphy.gif"
    },
    {
      "name": "تاب کتل‌بل",
      "type": "strength",
      "muscle": "تمام بدن",
      "equipment": "kettlebell",
      "difficulty": "intermediate",
      "instructions": "با دو دست کتل‌بل را بین پاها تاب دهید و تا ارتفاع شانه بالا بیاورید.",
      "gif": "https://media.giphy.com/media/kettlebell-swing/giphy.gif"
    },
    {
      "name": "پارویی تی‌آرایکس",
      "type": "strength",
      "muscle": "پشت و بازو",
      "equipment": "TRX",
      "difficulty": "intermediate",
      "instructions": "دسته‌های TRX را گرفته، بدنتان را به سمت عقب برده و با کشیدن دست‌ها بدن را بالا بیاورید.",
      "gif": "https://media.giphy.com/media/trx-row/giphy.gif"
    },
    {
      "name": "ضربه طناب نبرد",
      "type": "cardio",
      "muscle": "شانه و هسته",
      "equipment": "battle ropes",
      "difficulty": "intermediate",
      "instructions": "با دو دست طناب را بالا و پایین برده و موج ایجاد کنید.",
      "gif": "https://media.giphy.com/media/battle-rope-slam/giphy.gif"
    },
    {
      "name": "پریدن روی جعبه",
      "type": "plyometric",
      "muscle": "پا و توان انفجاری",
      "equipment": "box",
      "difficulty": "intermediate",
      "instructions": "نزدیک جعبه ایستاده، با خم کردن زانوها پایین رفته و با قدرت روی جعبه بپرید.",
      "gif": "https://media.giphy.com/media/box-jump/giphy.gif"
    },
    {
      "name": "اسکوات پرشی",
      "type": "plyometric",
      "muscle": "پا و توان انفجاری",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "پس از انجام اسکوات، با قدرت پرش کنید و فرود بیایید.",
      "gif": "https://media.giphy.com/media/jump-squat/giphy.gif"
    },
    {
      "name": "کلین و پرس کتل‌بل",
      "type": "strength",
      "muscle": "تمام بدن",
      "equipment": "kettlebell",
      "difficulty": "advanced",
      "instructions": "کتل‌بل را از زمین تا شانه کلین کرده، سپس آن را بالای سر پرس کنید.",
      "gif": "https://media.giphy.com/media/kettlebell-clean-and-press/giphy.gif"
    },
    {
      "name": "اسنچ کتل‌بل",
      "type": "strength",
      "muscle": "تمام بدن",
      "equipment": "kettlebell",
      "difficulty": "advanced",
      "instructions": "کتل‌بل را از زمین با یک حرکت سریع تا بالای سر ببرید.",
      "gif": "https://media.giphy.com/media/kettlebell-snatch/giphy.gif"
    },
    {
      "name": "قدم زدن با وزنه",
      "type": "strength",
      "muscle": "تمام بدن",
      "equipment": "dumbbells or kettlebells",
      "difficulty": "intermediate",
      "instructions": "در حالی که دو وزنه در دست دارید، قدم بزنید و پشتتان را صاف نگه دارید.",
      "gif": "https://media.giphy.com/media/farmers-walk/giphy.gif"
    },
    {
      "name": "زانوی بلند",
      "type": "cardio",
      "muscle": "پا و هسته",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "درجا بدوید و زانوها را تا سینه بالا بیاورید.",
      "gif": "https://media.giphy.com/media/high-knees/giphy.gif"
    },
    {
      "name": "جامپینگ جک",
      "type": "cardio",
      "muscle": "تمام بدن",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "پاها را باز و بسته کنید و دست‌ها را بالای سر ببرید.",
      "gif": "https://media.giphy.com/media/jumping-jacks/giphy.gif"
    },
    {
      "name": "طناب زدن",
      "type": "cardio",
      "muscle": "تمام بدن",
      "equipment": "jump rope",
      "difficulty": "beginner",
      "instructions": "با طناب بپرید و ریتم ثابت را حفظ کنید.",
      "gif": "https://media.giphy.com/media/jump-rope/giphy.gif"
    },
    {
      "name": "موج طناب نبرد",
      "type": "cardio-strength",
      "muscle": "شانه و هسته",
      "equipment": "battle ropes",
      "difficulty": "intermediate",
      "instructions": "دست‌ها را با سرعت بالا و پایین ببرید تا موج ایجاد شود.",
      "gif": "https://media.giphy.com/media/battle-rope-waves/giphy.gif"
    },
    {
      "name": "دیوار نشینی",
      "type": "strength",
      "muscle": "پا",
      "equipment": "wall",
      "difficulty": "beginner",
      "instructions": "با تکیه به دیوار در حالت نشستن فرضی پایین بروید و نگه دارید.",
      "gif": "https://media.giphy.com/media/wall-sit/giphy.gif"
    },
    {
      "name": "هالوهولد",
      "type": "strength",
      "muscle": "هسته",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "روی زمین دراز کشیده، تنه و پاها را از زمین کمی بلند کرده و نگه دارید.",
      "gif": "https://media.giphy.com/media/hollow-hold/giphy.gif"
    },
    {
      "name": "لمس انگشتان پا",
      "type": "flexibility",
      "muscle": "کمر و همسترینگ",
      "equipment": "bodyweight",
      "difficulty": "beginner",
      "instructions": "پاها را صاف قرار داده، از کمر خم شده و دست‌ها را به انگشتان پا برسانید.",
      "gif": "https://media.giphy.com/media/toe-touch/giphy.gif"
    },
    {
      "name": "خزیدن خرسی",
      "type": "mobility-strength",
      "muscle": "تمام بدن",
      "equipment": "bodyweight",
      "difficulty": "intermediate",
      "instructions": "چهار دست و پا حرکت کرده، زانوها را بالا نگه داشته و بدن را نزدیک زمین نگه دارید.",
      "gif": "https://media.giphy.com/media/bear-crawl/giphy.gif"
    }
  ]
  
  