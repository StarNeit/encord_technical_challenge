export interface PredictionItem {
  bbox: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  label: string;
  score: number;
}

export interface PredictionResponse {
  description: string;
  predictions: PredictionItem[];
}

export interface Prediction {
  title: string;
  description: string;
  predictDate: Date;
  response: PredictionResponse;
  image: UploadedImage;
}

export interface UploadedImage {
  name: string;
  size: number;
  uploadDate: Date;
  imageData: string;
}
