import React from "react";
import { useImageManagerInit } from "./useImageManagerInit";

export type ImageManagerContextProps = ReturnType<typeof useImageManagerInit>;

export const ImageManagerContext =
  React.createContext<ImageManagerContextProps | null>(null);

const useImageManager = () =>
  React.useContext(ImageManagerContext) as ImageManagerContextProps;

export default useImageManager;
