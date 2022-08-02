import React, { useState } from "react";
import { Button, Table } from "src/components";
import ImageWithPrediction from "src/components/ImageWithPrediction";
import { useImageManager } from "src/hooks/useImageManager";
import { Prediction } from "src/models/prediction";

const PredictionList = () => {
  const { predictions } = useImageManager();

  const [currentPredictionView, setCurrentPredictionView] =
    useState<Prediction>();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Predict date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {predictions.map((prediction) => (
            <tr key={prediction.predictDate.toISOString()}>
              <td>{prediction.title}</td>
              <td>{prediction.description}</td>
              <td>{prediction.predictDate.toISOString()}</td>
              <td>
                <Button onClick={() => setCurrentPredictionView(prediction)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {currentPredictionView && (
        <div className="mt-6">
          <ImageWithPrediction prediction={currentPredictionView} />
        </div>
      )}
    </div>
  );
};

export default PredictionList;
