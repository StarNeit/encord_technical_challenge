import { ImageManagerContext } from "./useImageManager";
import { useImageManagerInit } from "./useImageManagerInit";

export const ImageManagerProvider: FCC = ({ children }) => {
  const value = useImageManagerInit();

  return (
    <ImageManagerContext.Provider value={value}>
      {children}
    </ImageManagerContext.Provider>
  );
};
