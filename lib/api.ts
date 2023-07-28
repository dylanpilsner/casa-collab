export async function sendForm(form: any) {
  const contact = new FormData(form);

  const response = await fetch("https://formspree.io/f/mbjwdeoz", {
    method: "post",
    body: contact,
    headers: { Accept: "application/json" },
  });

  return response;
}
