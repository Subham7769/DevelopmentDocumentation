import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header/Header";
import DashboardReact from "./Components/DashboardReact/DashboardReact";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import LandingPage from "./Components/LandingPage/LandingPage";

const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/React" element={<DashboardReact />} >
                {/* Nested Routes */}
                <Route path="NewProduct" element={<DashboardReact.DashboardMain />} />
                <Route path="swot" element={<DashboardReact.DashboardMain />} />
                <Route path="knowledgeBase" element={<DashboardReact.DashboardMain />} />
                <Route path="MarketResearch" element={<DashboardReact.DashboardMain />} />
                <Route path="PriceCalculation" element={<DashboardReact.DashboardMain />} />
                <Route path="TestComponent" element={<DashboardReact.DashboardMain />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
    </Provider>
  );
};

export default App;
