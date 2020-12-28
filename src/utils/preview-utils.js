/**
 * Determines if Todo sumbission requirements have been met
 * @param {string} title 
 * @param {string} description 
 * @returns {object}
 */


function getPreviewMessage(title = "", description = "") {
  if (title === "" || description === "") {
    return {
      title: "",
      description: "",
      canSubmit: false,
    };
  }

  return {
      title,
      description,
      canSubmit: true
  };
}

export { getPreviewMessage };
