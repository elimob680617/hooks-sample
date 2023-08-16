import React, { useState } from "react";
import { StyleUploadInputPreview } from "./style";
import Typography from "../../../layout/typography";
import Image from "../../../layout/image";
import useLoadImage from "./useLoadImage";

const UploadInputPreview = ({ file, fileSrc, ...props }) => {
  const [isClicked, setIsClicked] = useState(false);

  // handle read file
  const image = useLoadImage(file);

  // handle click image
  const handleClickImage = () => setIsClicked((prev) => !prev);

  if (image)
    return (
      <StyleUploadInputPreview
        onClick={handleClickImage}
        isClicked={isClicked}
        className="w-full h-full flex justify-center items-center"
        {...props}
      >
        {typeof file === "string" ? (
          <Image address={image} alt="boe" className="w-full h-full" />
        ) : file.type !== "application/pdf" ? (
          <img src={image} alt="boe" className="w-full h-full" />
        ) : (
          <Typography
            as="h6"
            color="textQuaternary"
            fontSize="6xl"
            fontWeight="bold"
            mgBottom="2"
          >
            PDF
          </Typography>
        )}
      </StyleUploadInputPreview>
    );
  else return <></>;
};

export default UploadInputPreview;
