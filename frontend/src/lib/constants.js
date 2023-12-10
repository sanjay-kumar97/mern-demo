const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

const appEnv = {
  API_URL: isProd
    ? "https://mern-demo-backend.vercel.app/api"
    : "http://localhost:5000/api",
};

const genderList = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
  { label: "Prefer not to say", value: "prefer" },
];

export { isProd, isDev, appEnv, genderList };
