import React from "react";
import { useFetchProjectById } from "@app/hooks";
import { Home } from "@pages/Home/containers";

function App() {
  useFetchProjectById("li1j3u92004108jpbmtzd0e5-3821167421558942");
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
