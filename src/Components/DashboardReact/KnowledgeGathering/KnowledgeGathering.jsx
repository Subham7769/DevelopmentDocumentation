import Accordian from "../../Common/Accordian/Accordian";
import Textbox from "../../Common/TextBox/Textbox";
import VarietyData from "../VarietyData/VarietyData";
import DocumentTesting from "../DocumentTesting/DocumentTesting";
import CertificatesLicense from "../CertificatesLicense/CertificatesLicense";
import EpcRcmc from "../EpcRcmc/EpcRcmc";
import ApplicationUsage from "../ApplicationUsage/ApplicationUsage";
import "./KnowledgeGathering.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateDescription, updateVariety, updateEPC_RCMC, updateEvaluationCriteria, updateCredentialCollection, updateApplicationUseCase } from "../../../Redux/Slices/ProductSlice"
const KnowledgeGathering = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice.products);
  const currentProductId = useSelector(state => state.ProductSlice.currentProductId);
  const product = products.find(product => product.productId === currentProductId);
  const [Description, setDescription] = useState(product.knowledgeBase.description);
  const [varieties, setVarieties] = useState(product.knowledgeBase.varieties);
  const [EPC, setEPC] = useState(product.knowledgeBase.EPC);
  const [RCMC, setRCMC] = useState(product.knowledgeBase.RCMC);
  const [evaluationCriteria, setEvaluationCriteria] = useState(product.knowledgeBase.evaluationCriteria);
  const [credentialCollection, setCredentialCollection] = useState(product.knowledgeBase.credentialCollection);
  const [applicationUsecase, setApplicationUseCase] = useState(product.knowledgeBase.applicationUsecase);

  // useEffect hook to update state when currentProductId changes
  useEffect(() => {
    setDescription(product.knowledgeBase.description);
    setVarieties(product.knowledgeBase.varieties);
    setEPC(product.knowledgeBase.EPC);
    setRCMC(product.knowledgeBase.RCMC);
    setEvaluationCriteria(product.knowledgeBase.evaluationCriteria);
    setCredentialCollection(product.knowledgeBase.credentialCollection);
    setApplicationUseCase(product.knowledgeBase.applicationUsecase);
  }, [currentProductId]);

  // create a new variety 
  function createVariety() {
    const vId = Math.floor(Math.random() * 10000000000);
    let newVariety = {
      varietyId:vId,
      name: "",
      code: "",
      priceRange: "",
      testing: "",
      specification: {
        Physical_Properties: [
          {
            name: "Physical_Properties",
            data: "data"
          },
        ],
        Chemical_Properties: [
          {
            name: "Chemical_Properties",
            data: "data"
          },
        ],
        Technical_Properties: [
          {
            name: "Technical_Properties",
            data: "data"
          },
        ],
        Other_Properties: [
          {
            name: "Other_Properties",
            data: "data"
          },
        ],
      },
      productionHub: [{
        state: "Enter State",
        city: "Enter City",
        townVillage: "Enter Town/Village",
        season: "Enter Season",
      },],
    };
    setVarieties((prevVarieties) => [...prevVarieties, newVariety])
  }

  return (
    <div className="KnowledgeGathering">
      <h3>Knowledge Gathering</h3>
      <Accordian
        label="Product Description"
        component={Textbox}
        saveFunction={() => {
          dispatch(updateDescription({ Description }))
        }}
        placeholder={"Enter description..."}
        value={Description}
        valueUpdater={(updatedValue) => { setDescription(updatedValue) }}
      />
      <Accordian
        label="Product Variety"
        component={VarietyData}
        saveFunction={() => {
          dispatch(updateVariety({ varieties }))
        }}
        varieties={varieties}
        setVarieties={setVarieties}
        createVariety={createVariety}
      />
      <Accordian
        label="Product Testing, Standard, Quality, Packing Standard Required"
        component={DocumentTesting}
        saveFunction={() => {
          dispatch(updateEvaluationCriteria({ evaluationCriteria }))
        }}
        evaluationCriteria={evaluationCriteria}
        setEvaluationCriteria={setEvaluationCriteria}
      />
      <Accordian
        label="Certificates, Licenses, Documents Required"
        component={CertificatesLicense}
        saveFunction={() => {
          dispatch(updateCredentialCollection({ credentialCollection }))
        }}
        credentialCollection={credentialCollection}
        setCredentialCollection={setCredentialCollection}
      />
      <Accordian
        label="EPC & RCMC Required"
        component={EpcRcmc}
        saveFunction={() => {
          dispatch(updateEPC_RCMC({ EPC, RCMC }))
        }}
        EPC={EPC}
        RCMC={RCMC}
        setEPC={setEPC}
        setRCMC={setRCMC}
      />
      <Accordian
        label="Application of Product Use (End Consumer of Goods/Services)"
        component={ApplicationUsage}
        saveFunction={() => {
          dispatch(updateApplicationUseCase({ applicationUsecase }))
        }}
        applicationUsecase={applicationUsecase}
        setApplicationUseCase={setApplicationUseCase}
      />
    </div>
  );
};
export default KnowledgeGathering;
