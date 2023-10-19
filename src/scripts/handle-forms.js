export default function handleForms(forms) {
  const allForms = {};
  forms.forEach((form) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (form.id === "abstract_form") {
      for (let key in data) {
        if (key.startsWith("tmp_")) delete data[key];
      }
    }

    allForms[form.id] = data;

    if (forms.length > 2 && form.id.match(/^co_author_form_\d+$/)) {
      let name = form.id.replace("_form", "");
      if (!allForms["abstract_form"]) allForms["abstract_form"] = {};
      allForms["abstract_form"][
        name
      ] = `${data.title} ${data.first_name} ${data.last_name}`;
      allForms["abstract_form"][`${name}_email`] = data.email;
    }
  });

  allForms["abstract_form"]["author"] =
    allForms["author_form"]["title"] +
    " " +
    allForms["author_form"]["first_name"] +
    " " +
    allForms["author_form"]["last_name"];
  allForms["abstract_form"]["author_email"] = allForms["author_form"]["email"];

  return allForms;
}
