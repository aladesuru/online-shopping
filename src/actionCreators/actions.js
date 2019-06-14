export const updatetUnitPriceAction = (index, payLoad) => {
    return{
        type: 'UPDATE_UNIT_PRICE',
        index,
        payLoad
    }
}

export const addItemToBasketAction = (payLoad) => {
    return{
        type: 'ADD_ITEM_TO-BASKET',
        payLoad
    }
}