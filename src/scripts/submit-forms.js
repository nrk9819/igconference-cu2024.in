async function submitForms(formData) {
  const apiUrl = "https://api.iigconference-cu2024.in";

  try {
    // Create the request object
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    return await response.text();
  } catch (error) {
    return error.message; // Return the error message
  }
}

export default submitForms;
