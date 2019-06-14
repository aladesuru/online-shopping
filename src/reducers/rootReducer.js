const initState = {
    data: [ {
        code: "p60216526",
        name: "Cotton Rich Knitted Polo",
        image:
          "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T30_2412M_F0_X_EC_90",
        price: "19.50"
      },
      {
        code: "p60176304",
        name: "Slim Fit Travel Chinos with Stretch",
        image:
          "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T17_6389M_Y0_X_EC_90",
        price: "45"
      },
      {
        code: "p60204884",
        name: "Pure Linen Checked Jacket",
        image:
          "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T19_7381_NU_X_EC_90",
        price: "99"
      },
      {
        code: "p60216412",
        name: "Linen Rich Tailored Fit Shirt",
        image:
          "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T11_4676X_Z0_X_EC_90",
        price: "45"
      },
      {
        code: "p60133992",
        name: "Pure Silk Spotted Tie",
        image:
          "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T12_7725P_F4_X_EC_0",
        price: "17.50"
      },
      {
        code: "p60216575",
        name: "Taxi Cufflinks",
        image:
          "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T09_5461M_Y4_X_EC_0",
        price: "15"
      }],

      basket: [
        {
          code: "p60216526",
          name: "Cotton Rich Knitted Polo",
          image:
            "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T30_2412M_F0_X_EC_90",
          price: "19.50",
          units: 1
        }
      ]
}

const rootReducer = (state = initState , actions) => {
  switch(actions.type) {
    case 'ADD_ITEM_TO-BASKET':
      const existingProduct = state.basket.filter(p => p.code === actions.payLoad.code);
      if (existingProduct.length > 0) {
        const withoutExistingProduct = state.basket.filter(
          p => p.code !== actions.payLoad.code
        );
        const updateUnitsProduct = {
          ...existingProduct[0],
          units: existingProduct[0].units + actions.payLoad.units
        };
        return{
          ...state,
          basket: [...withoutExistingProduct, updateUnitsProduct]
        }
      } else {
        return{
          ...state,
          basket: [...state.basket, actions.payLoad]
        }
      }

    case 'UPDATE_UNIT_PRICE':
      return {
        ...state,
        basket : state.basket.map((item , index) => {
          if(index === actions.index){
            return{
              ...item,
              units: item.units === 0 && actions.payload === -1 ? 0 : item.units + actions.payload
            }
          }
          return item 
        })
      }
  default:
  return state
  }
  
}

export default rootReducer;