import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartdata: [],
    quantity: 0,
    lastUpdated: null,
  },
  reducers: {
    addTocart: (state, action) => {
      const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
      const checkcartdata = JSON.parse(JSON.stringify(state.cartdata));

      let { name, quantity, price, img, ...rest } = {
        ...action.payload.product,
      };

      // const isItemExist = checkcartdata.find(
      //     (i) => i?.id === action?.payload.product.id
      // )

      const isItemExist = findObjectFromArray(rest, checkcartdata);

      if (isItemExist) {
        // const existingcartdata = JSON.parse(JSON.stringify(state.cartdata));
        const existingdata = checkcartdata.map((s) =>
          s === isItemExist ? action.payload.product : s
        );
        state.cartdata = existingdata;
        state.lastUpdated = Date.now() + sevenDaysInMillis;
      } else {
        state.cartdata.push(action.payload.product);
        state.quantity += 1;
        state.lastUpdated = Date.now() + sevenDaysInMillis;
      }
    },

    removeTocart: (state, action) => {
      const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000;
      const removeitem = JSON.parse(JSON.stringify(state.cartdata));
      const filtereddata = removeitem.filter(
        (i) => JSON.stringify(i) !== JSON.stringify(action.payload.item)
      );
      state.cartdata = filtereddata;
      state.quantity -= 1;
      state.lastUpdated = Date.now() + sevenDaysInMillis;
    },

    resetCart: (state, action) => {
      state.cartdata = [];
      state.quantity = 0;
    },

    verifyCart: (state, action) => {
      let currentdate = Date.now();
      if (state.lastUpdated - currentdate < 0) {
        state.cartdata = [];
        state.quantity = 0;
      }
    },
    changePaymentMode: (state, action) => {
      const { index, item, paymentModeType } = action.payload;
      const cardData = JSON.parse(JSON.stringify(state.cartdata));
      // state.cartdata = [];
      // state.quantity = 0;

      if (paymentModeType === "Installment") {
        const { Installment, quantity } = cardData[index];

        let InstallmentPrice = Installment[0]?.Amount ?? 0;

        const myObj = {
          ...cardData[index],
          sellingType: paymentModeType,
          price: InstallmentPrice * quantity,
        };
        cardData.splice(index, 1, myObj);

        state.cartdata = cardData;
      }
      if (paymentModeType === "Normal") {
        const { OriginalPrice, quantity } = cardData[index];
        const myObj = {
          ...cardData[index],
          sellingType: paymentModeType,
          price: OriginalPrice * quantity,
        };
        cardData.splice(index, 1, myObj);
        state.cartdata = cardData;
      }

      console.log(
        "index:-",
        index,
        "item-",
        item,
        "paymentModeType:-",
        paymentModeType,
        "cartdata:-",
        cardData[index]
      );
    },
  },
});

//Function to check from array of objects
function findObjectFromArray(searchObj, arr) {
  // const result = [];
  for (let i = 0; i < arr.length; i++) {
    const currentObj = arr[i];
    let isMatch = true;

    for (const key of Object.keys(searchObj)) {
      if (searchObj[key] !== currentObj[key]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      return currentObj;
    }
  }
}

export const {
  addTocart,
  removeTocart,
  resetCart,
  verifyCart,
  changePaymentMode,
} = cartSlice.actions;

export default cartSlice.reducer;
