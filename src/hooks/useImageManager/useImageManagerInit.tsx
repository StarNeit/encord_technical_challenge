import { useCallback, useState } from "react";
import { Prediction, UploadedImage } from "src/models/prediction";

export const useImageManagerInit = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  const addPrediction = useCallback(
    (prediction: Prediction) => {
      setPredictions([...predictions, prediction]);
    },
    [predictions]
  );

  const addUploadedImage = useCallback(
    (image: File) => {
      setImages([
        ...images,
        {
          name: image.name,
          size: image.size,
          uploadDate: new Date(),
          imageData: URL.createObjectURL(image),
        },
      ]);
    },
    [images]
  );

  return {
    images,
    addUploadedImage,
    predictions,
    addPrediction,
  };
};
