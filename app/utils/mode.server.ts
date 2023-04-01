import { createCookie } from "@remix-run/node";

const darkMode = createCookie("mode");
const darkModeCookie = async (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  return await darkMode.parse(cookieHeader);
};

export const getDarkMode = async (request: Request) => {
  return darkModeCookie(request);
};

export const setDarkMode = async (request: Request) => {
  const parsedDarkMode = await darkModeCookie(request);

  if (
    (request.method === "GET" && !parsedDarkMode) ||
    (request.method !== "GET" && parsedDarkMode === "light")
  ) {
    return {
      mode: "dark",
      headers: {
        "Set-Cookie": await darkMode.serialize("dark"),
      },
    };
  } else if (request.method !== "GET" && parsedDarkMode === "dark") {
    return {
      mode: "light",
      headers: {
        "Set-Cookie": await darkMode.serialize("light"),
      },
    };
  } else {
    return {
      mode: "",
      headers: {
        "Set-Cookie": "",
      },
    };
  }
};
