import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import { OnyxiaUi } from "./theme";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnyxiaUi>
      <h1>Hello World!</h1>
    </OnyxiaUi>
  </StrictMode>
);
