module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "2160px",
      },
      fontFamily: {
        estedad: ["estedad", "sans-serif"],
      },

      colors: {

        "neutral-00": "#FFF", //white
        "neutral-10": "#F5F5F5",
        "neutral-20": "#E6E6E6",
        "neutral-30": "#CCC",
        "neutral-40": "#999",
        "neutral-50": "#808080",
        "neutral-60": "#6C6C6C",
        "neutral-65": "#4D4D4D",
        "neutral-70": "#333",
        "neutral-75": "#262626",
        "neutral-80": "#1A1A1A",
        "neutral-90": "#101010",
        "neutral-100": "#000", // black

        // secondary colors

        "secondary-10": "#E7E9EC",
        "secondary-20": "#CED3D9",
        "secondary-30": "#B6BDC6",
        "secondary-40": "#9DA7B3",
        "secondary-50": "#8591A0",
        "secondary-60": "#6C7B8D",
        "secondary-70": "#54657A",
        "secondary-80": "#3B4F67",
        "secondary-90": "#273D58",
        "secondary-100": "#0A2341", //main
        "secondary-110": "#081C34",
        "secondary-120": "#07192E",
        "secondary-130": "#061527",
        "secondary-140": "#051221",
        "secondary-150": "#040E1A",
        "secondary-160": "#030B14",
        "secondary-170": "#02070D",
        "secondary-180": "#010407",

        // primary colors

        "primary-10": "#F8FDFC",
        "primary-20": "#F0F9F7",
        "primary-30": "#E1F4F0",
        "primary-40": "#D1EFE8",
        "primary-50": "#C2EAE1",
        "primary-55": "#B3E5D8",
        "primary-60": "#A4E0D1",
        "primary-65": "#95DBCA",
        "primary-70": "#85D5C3",
        "primary-75": "#76D0BB",
        "primary-80": "#67CBB4",
        "primary-85": "#58C6AC",
        "primary-90": "#49C1A5",
        "primary-95": "#3EB69A",
        "primary-100": " #39A78E", //main
        "primary-110": " #349881",
        "primary-120": " #2F8974",
        "primary-130": " #2A7A67",
        "primary-140": " #246A5A",
        "primary-150": " #1F5B4B",
        "primary-160": " #1A4C40",
        "primary-170": " #153D32",
        "primary-180": " #102E26",
        "primary-190": " #0B1E19",
        "primary-200": " #060F0C",

        // error colors

        "error-100": "#A92626",
        "error-90": "#D33030", //main
        "error-80": "#DC5959",
        "error-70": "#E06E6E",
        "error-60": "#E58383",
        "error-50": "#E99898",
        "error-40": "#EDACAC",
        "error-30": "#F2C1C1",
        "error-20": "#F6D6D6",
        "error-10": "#FBEAEA",

        // warning colors

        "warning-100": "#CC8F14",
        "warning-90": "#FFB319", //main
        "warning-80": "#FFC247",
        "warning-70": "#FFCA5E",
        "warning-60": "#FFD175",
        "warning-50": "#FFD98C",
        "warning-40": "#FFE1A3",
        "warning-30": "#FFE8BA",
        "warning-20": "#FFF0D1",
        "warning-10": "#FFF7E8",

        // success colors

        "success-100": "#052E16",
        "success-90": "#14532D",
        "success-80": "#166534",
        "success-70": "#15803D",
        "success-60": "#16A34A", // main 60
        "success-50": "#22C55E",
        "success-40": "#4ADE80",
        "success-30": "#86EFAC",
        "success-20": "#BBF7D0",
        "success-10": "#DCFCE7",

        //gradiant

        green: "#16A085",
        dark: "#0A2341",
      },
  
      minWidth: {
        128: "16rem",
      },
      animation: {
        fade: "fadeOut .5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { height: 10 },
          "100%": { height: 20 },
        },
      }),
    },
  },
  plugins: [],
};
