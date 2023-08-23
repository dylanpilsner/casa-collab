import Cookies from "js-cookie";

function setStorageData(key: string, value: Object) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getSavedToken() {
  return localStorage.getItem("auth_token");
}
export async function fetchApi(input: RequestInfo, options?: any) {
  const BASE_URL = "http://localhost:3000";
  const url = BASE_URL + input;

  options.headers = {
    ...options.headers,
    authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MjIyMjk4OX0.HcfiZAJGeZ25VJveeb5o1PimfgmD_fxr4SPMX5J2R_M",
    "content-type": "application/json",
  };

  options.credentials = "include";

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  const res = await fetch(url, options);
  const data = await res.json();

  console.log(data);
  return data;
}

export async function sendForm(form: any) {
  const contact = new FormData(form);

  const response = await fetch("https://formspree.io/f/mbjwdeoz", {
    method: "post",
    body: contact,
    headers: { Accept: "application/json" },
  });

  return response;
}

export async function getCode(email: string) {
  // const res=  await fetch("http://localhost:3001/")

  return await fetchApi("/auth", { method: "post", body: { email } });
}

export async function sign({ email, code }: any) {
  const auth = await fetchApi("/auth/token", {
    method: "post",
    body: { email, code },
  });

  return auth;
}

export async function getProfile() {
  const profile = await fetchApi("/me");

  return profile;
}
