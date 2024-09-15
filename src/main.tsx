import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import { OnyxiaUi } from "./theme";
import { MyComponent } from "./MyComponent";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnyxiaUi>
      <MyComponent />
    </OnyxiaUi>
  </StrictMode>
);
