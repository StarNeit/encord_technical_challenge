import React, { useState } from "react";
import "./App.css";
import { Tabs, Header, Tab } from "./components";
import { ImageManager } from "./containers";
import ImageList from "./containers/ImageManager/ImageList";
import PredictionList from "./containers/Prediction/PredictionList";
import { ImageManagerProvider } from "./hooks/useImageManager/ImageManagerProvider";

function App() {
  type Tabs = "images" | "prediction";

  const [activeTab, setActiveTab] = useState<Tabs>("images" as Tabs);

  return (
    <>
      <Header />
      <div className="container mt-10">
        <Tabs>
          <Tab onClick={() => setActiveTab("images")}>Images</Tab>
          <Tab onClick={() => setActiveTab("prediction")}>Prediction</Tab>
        </Tabs>

        <ImageManagerProvider>
          {activeTab === "images" ? (
            <div>
              <ImageManager />
              <ImageList />
            </div>
          ) : (
            <PredictionList />
          )}
        </ImageManagerProvider>
      </div>
    </>
  );
}

export default App;
