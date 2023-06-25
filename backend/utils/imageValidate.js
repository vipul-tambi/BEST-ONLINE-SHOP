const imageValidate = (images) => {
  let imageTable = [];
  if (Array.isArray(images)) {
    imageTable = images;
  } else {
    imageTable.push(images);
  }

  if (imageTable.length > 3) {
    return { error: "Send only 3 images at once" };
  }

  for (let image of imageTable) {
    if (image.size > 1048576) {
      return { error: "Size too large (above 1 MB)" };
    }

    const fileTypes = /jpg|jpeg|png/;

    const mimetype = fileTypes.test(image.mimetype);

    if (!mimetype) {
      return { error: "Incorrect mime type (should be jpg,jpeg or png)" };
    }
  }

  return { error: false };
};

module.exports = imageValidate;
