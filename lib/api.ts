import { cookie } from "@/utils";

export async function fetchApi(input: RequestInfo, options?: any) {
  const BASE_URL = process.env.HOST || "https://casa-collab-backend-whxk-dev.fl0.io";
  const url = BASE_URL + input;

  const token = cookie.get("auth_token");

  options = options || {};

  options.headers = {
    ...options.headers,
    "content-type": "application/json",
  };

  options.credentials = "include";

  if (token) {
    options.headers.authorization = `Bearer ${token}`;
  }

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  const res = await fetch(url, options);
  const data = await res.json();

  // console.log(data);
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
  return await fetchApi("/auth", { method: "post", body: { email } });
}

export async function sign({ email, code }: any) {
  const auth = await fetchApi("/auth/token", {
    method: "post",
    body: { email, code },
  });

  return auth;
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

export async function deleteFriend(friend_id: number) {
  await fetchApi("/friend", {
    method: "delete",
    body: { friend_id },
  });
}

export async function updateProfile(fields: {
  full_name?: string;
  age?: number;
  profile_img?: string;
}) {
  return await fetchApi("/me", { method: "put", body: fields });
}
