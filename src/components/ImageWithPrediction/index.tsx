import { Prediction } from "src/models/prediction";
import domtoimage from "dom-to-image";
import { useRef, useState } from "react";

interface ImageWithPredictionProps {
  prediction: Prediction;
}

const ImageWithPrediction = ({ prediction }: ImageWithPredictionProps) => {
  const wrapperRef = useRef(null);
  const [responsiveJpgData, setResponsiveJpgData] = useState("");

  const renderResponsiveImage = async () => {
    if (!wrapperRef.current) return;

    const data = await domtoimage.toJpeg(wrapperRef.current);
    setResponsiveJpgData(data);
  };

  return (
    <>
      {!responsiveJpgData && (
        <div ref={wrapperRef}>
          <div className="overflow-hidden relative">
            <img
              src={prediction.image.imageData}
              alt={prediction.image.name}
              className="max-w-none"
              onLoad={() => {
                renderResponsiveImage();
              }}
            />

            {prediction.response.predictions.map(({ bbox, label, score }) => (
              <div
                className="absolute border border-red-500 bg-[#00004432]"
                style={{
                  top: bbox.y1,
                  left: bbox.x1,
                  width: Math.abs(bbox.x2 - bbox.x1),
                  height: Math.abs(bbox.y2 - bbox.y1),
                }}
              >
                <span className="absolute bottom-0 text-white text-3xl">
                  {label} ({Math.round(score * 100)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Real responsive image */}

      {responsiveJpgData && (
        <div className="mx-auto max-w-[800px]">
          <img src={responsiveJpgData} alt={prediction.image.name} />
        </div>
      )}
    </>
  );
};

export default ImageWithPrediction;
