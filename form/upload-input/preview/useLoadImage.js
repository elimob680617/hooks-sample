import { useState, useEffect } from "react";

const useLoadImage = (file) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (typeof file === "string") setImage(file);
    else {
      // declare new file reader
      const reader = new FileReader();
      // read file as data url
      reader.readAsDataURL(file);
      // when reader is reading (loading) do something
      reader.onload = () => setImage(reader.result);
    }
  }, [file]);

  return image;
};

export default useLoadImage;
