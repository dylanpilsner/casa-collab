import Cookies from "universal-cookie";

export const cookie = new Cookies();

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

export function signOut() {
  return cookie.remove("auth_token");
}
