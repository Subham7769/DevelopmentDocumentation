import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import ContextProvider from "./Context/ContextProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Body />
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  );
};

export default App;
