import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [{
    productId: 13456,
    productName: "DemoName",
    hsCode: "DemoCode",
    selectionReason: [
      { status: false, name: "Availability", color:"var(--green)" },
      { status: false, name: "Interest", color:"var(--red)" },
      { status: false, name: "Demand", color:"var(--blue)" },
      { status: false, name: "Knowledge", color:"var(--yellow)" },
    ],
    swot: {
      strength: ["strength"],
      weakness: ["weakness"],
      opportunity: ["opportunity"],
      threat: ["threat"],
    },
    knowledgeBase: {
      description: "description",
      varieties: [
        {
          name: "Variety Name",
          code: "Variety Code",
          priceRange: "100-120",
          testing: "Paper Tensile strength",
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
          productionHub: [
            {
              state: "Enter State",
              city: "Enter City",
              townVillage: "Enter Town/Village",
              season: "Enter Season",
            },
          ],
        },
      ],
      evaluationCriteria: {
        Testing: ["Testing"],
        Standards: ["Standards"],
        Quality: ["Quality"],
        Packing: ["Packing"],
      },
      CredentialCollection: {
        Certificates: ["Certificates"],
        Licenses: ["Licenses"],
        Documents: ["Documents"],
      },
      EPC: "EPC",
      RCMC: "RCMC",
      ApplicationUsecase: {
        Applications: ["Applications"],
      },
    },
  }],
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: initialState,
  reducers: {
    setCurrentProduct(state, action) {
      state.currentProductId = action.payload;
    },
    createNewProduct(state, action) {
      const { productName, hsCode, Reasons } = action.payload;
      // Generate a unique ID for the new product
      const id = Math.floor(Math.random() * 10000000000);
      // Create the new product object
      const newProduct = {
        productId: id,
        productName: productName,
        hsCode: hsCode,
        selectionReason: Reasons,
        swot: {
          strength: ["strength"],
          weakness: ["weakness"],
          opportunity: ["opportunity"],
          threat: ["threat"],
        },
        knowledgeBase: {
          description: "",
          varieties: [
            {
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
              productionHub: [
                {
                  state: "Enter State",
                  city: "Enter City",
                  townVillage: "Enter Town/Village",
                  season: "Enter Season",
                },
              ],
            },
          ],
          evaluationCriteria: {
            Testing: [],
            Standards: [],
            Quality: [],
            Packing: [],
          },
          CredentialCollection: {
            Certificates: [],
            Licenses: [],
            Documents: [],
          },
          EPC: "",
          RCMC: "",
          ApplicationUsecase: {
            Applications: [],
          },
        },
      };
      state.currentProductId = id;
      // Add the new product to the state
      state.products.push(newProduct);
    },
    updateSwot(state, action) {
      const { swot } = action.payload;
      const Index = state.products.findIndex(
        (product) => product.productId === state.currentProductId
      );
      const product = state.products.find(
        (product) => product.productId === state.currentProductId
      );
      if (Index !== -1) {
        product.swot = { ...product.swot, ...swot };
        const allProducts = [...state.products];
        allProducts[Index] = product;
        state.products = [...allProducts];
        alert("Swot updated successfully");
      }
    },
    updateDescription(state,action){
      const { Description } = action.payload;
      const product = state.products.find(product => product.productId === state.currentProductId)
      const Index = state.products.findIndex(product => product.productId === state.currentProductId)
      product.knowledgeBase.description = Description;
      const allProducts = [...state.products];
      allProducts[Index] = product;
      state.products = [...allProducts];
      alert("Description updated successfully");
    },
    updateVariety(state,action){
      const { varieties } = action.payload;
      const product = state.products.find(product => product.productId === state.currentProductId)
      const Index = state.products.findIndex(product => product.productId === state.currentProductId)
      product.knowledgeBase.description = varieties;
      const allProducts = [...state.products];
      allProducts[Index] = product;
      state.products = [...allProducts];
      alert("Variety updated successfully");
    },
    updateEPC_RCMC(state,action){
      const {EPC,RCMC} = action.payload;
      const product = state.products.find(product => product.productId === state.currentProductId)
      const Index = state.products.findIndex(product => product.productId === state.currentProductId)
      product.knowledgeBase.EPC = EPC;
      product.knowledgeBase.RCMC = RCMC;
      const allProducts = [...state.products];
      allProducts[Index] = product;
      state.products = [...allProducts];
      alert("EPC & RCMC updated successfully");
    },
  },
});

export const { setCurrentProduct, createNewProduct,updateSwot,updateDescription,updateVariety, updateEPC_RCMC} = ProductSlice.actions;
export default ProductSlice.reducer;
