function createFormData(forms, type = "young_geographers_award") {
  const allForms = {};
  const combinedFormData = new FormData();

  forms.forEach((form) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // If the form has file inputs, append them to combinedFormData
    const fileInputs = form.querySelectorAll('input[type="file"]');
    if (fileInputs.length > 0) {
      fileInputs.forEach((fileInput) => {
        const fieldName = `${fileInput.name}_${data.email}`;
        const files = fileInput.files;

        if (files.length > 0) {
          // Append each file separately
          for (let i = 0; i < files.length; i++) {
            combinedFormData.append(fieldName, files[i]);
          }
        }
      });
    }

    if (form.id === "abstract_form") {
      for (let key in data) {
        if (key.startsWith("tmp_")) delete data[key];
      }
    }

    // change value of certificate and age_proof
    if (data.hasOwnProperty("certificate"))
      data.certificate = `certificate_${data.email}`;
    if (data.hasOwnProperty("age_proof"))
      data.age_proof = `age_proof_${data.email}`;

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

  if (type === "young_geographers_award")
    allForms["abstract_form"]["abstract_for"] = "young geographers award";
  if (type === "technical_session")
    allForms["abstract_form"]["abstract_for"] = "technical session";

  // Append allForms to combinedFormData
  combinedFormData.append("allForms", JSON.stringify(allForms));

  return combinedFormData;
}

export default createFormData;
