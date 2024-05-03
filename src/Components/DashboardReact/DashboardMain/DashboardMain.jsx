import { Route, Routes } from 'react-router-dom';
import './DashboardMain.css';
import SWOTComponent from '../SWOTComponent/SWOTComponent.jsx'
import KnowledgeGathering from '../KnowledgeGathering/KnowledgeGathering.jsx';
import TestComponent from '../../TestComponent/TestComponent.jsx';
import AddNewProduct from '../AddNewProduct/AddNewProduct.jsx';
import MarketResearch from '../MarketResearch/MarketResearch.jsx'
import PriceCalculation from '../PriceCalculation/PriceCalculation.jsx'
import withProductCheck from '../WithProductCheck/WithProductCheck.jsx';
import OverlayComponent from '../OverlayComponent/OverlayComponent.jsx';

const DashboardMain = () => {

  const UpdatedSWOTComponent = withProductCheck(SWOTComponent, OverlayComponent);
  const UpdatedKnowledgeGathering = withProductCheck(KnowledgeGathering, OverlayComponent);
  const UpdatedMarketResearch = withProductCheck(MarketResearch, OverlayComponent);
  const UpdatedPriceCalculation = withProductCheck(PriceCalculation, OverlayComponent);
  const UpdatedTestComponent = withProductCheck(TestComponent, OverlayComponent);



  return (
    <div className="DashboardMain">
      <Routes>
        <Route path="/" element={<AddNewProduct />} />
        <Route path="swot" element={<UpdatedSWOTComponent />} />
        <Route path="knowledgeBase" element={<UpdatedKnowledgeGathering />} />
        <Route path="MarketResearch" element={<UpdatedMarketResearch />} />
        <Route path="PriceCalculation" element={<UpdatedPriceCalculation />} />
        <Route path="TestComponent" element={<UpdatedTestComponent />} />
      </Routes>
    </div>
  );
};

export default DashboardMain;
