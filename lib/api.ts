function setStorageData(key: string, value: Object) {
  localStorage.setItem(key, JSON.stringify(value));
}

export async function fetchApi(input: RequestInfo, options?: any) {
  const BASE_URL = process.env.HOST || "https://casa-collab-backend.vercel.app/";
  const url = BASE_URL + input;

  options = options || {};

  options.headers = {
    ...options.headers,
    "content-type": "application/json",
  };

  options.credentials = "include";

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  const res = await fetch(url, options);
  const data = await res.json();

  console.log(data);
  if (res.status >= 200 && res.status < 300) {
    return data;
  } else {
    // window.location.href = "/";
    return { status: res.status, error: data };
  }
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

export function signOut() {
  return fetchApi("/auth", { method: "delete" });
}

export async function sendFriendRequest(email: string) {
  await fetchApi("/friend", { method: "post", body: { email } });
}

export async function addFriend(email: string) {
  await fetchApi("/friend/add", { method: "post", body: { email } });
}
export async function declineFriend(notification_id: number) {
  await fetchApi("/friend/delete", {
    method: "delete",
    body: { notification_id },
  });
}

export function formatDate(date: Date) {
  const day = date.getDate();
  const monthNames = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}. ${year}`;
}
