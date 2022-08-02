import React, { FormEvent, useRef, useState } from "react";
import { Button } from "src/components";
import { useImageManager } from "src/hooks/useImageManager";

const ImageManager = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const { addUploadedImage } = useImageManager();
  const formRef = useRef<HTMLFormElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    setSelectedImage(files[0]);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || !selectedImage) return;

    addUploadedImage(selectedImage);

    formRef.current.reset();
    setSelectedImage(undefined);
  };

  return (
    <div className="mt-5">
      <form onSubmit={onSubmit} ref={formRef}>
        <input type="file" onChange={onFileChange} />

        <div className="mt-2">
          <Button disabled={!Boolean(selectedImage)}>Upload Image</Button>
        </div>
      </form>
    </div>
  );
};

export default ImageManager;
