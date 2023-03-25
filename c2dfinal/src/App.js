import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent2 from "./pages/frame-component2";
import FrameComponent1 from "./pages/frame-component1";
import FrameComponent3 from "./pages/frame-component3";
import FrameComponent from "./pages/frame-component";
import { useEffect } from "react";
import Pdf from "./pages/Pdf";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/frame-34":
        title = "";
        metaDescription = "";
        break;
      case "/frame-33":
        title = "";
        metaDescription = "";
        break;
      case "/pdf":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent2 />} />
      <Route path="/about" element={<FrameComponent1 />} />
      <Route path="/frame-34" element={<FrameComponent3 />} />
      <Route path="/frame-33" element={<FrameComponent />} />
      <Route path="/pdf" element={<Pdf/>}/>
    </Routes>
  );
}
export default App;
