import CV from "./components/cv/CV";
import Contact from "./pages/contact/Contact";
import HelloPage from "./pages/hello page/HelloPage";
import Template from "./pages/template/Template";

import { useSelector } from "react-redux";



function App() {
  const cartItems = useSelector(state => state.resume.data)
  console.log(cartItems)
  return (
    <div>
      {/* <HelloPage /> */}
      {/* <Template /> */}
      {/* <CV /> */}
      <Contact />
    </div>
  );
}

export default App;
