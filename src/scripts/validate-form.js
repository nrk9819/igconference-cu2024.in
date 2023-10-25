export default function validateForm(form) {
  const inputs = form.querySelectorAll("input[required]");
  const errors = [];

  for (const input of inputs) {
    const fieldType = input.getAttribute("type");
    const value = input.value.trim();

    // check for email field
    if (fieldType === "email" && !validateEmail(value)) {
      errors.push(`Invalid email in field '${input.name}'.`);
    }

    if (value.length === 0) {
      errors.push(`Field '${input.name}' is required.`);
    }
  }

  if (errors.length > 0) {
    return `The form "${form.name}" have the following errors :\n${errors.join(
      "\n",
    )}`;
  }

  return true;
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
