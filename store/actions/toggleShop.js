export const toggleShop = () => {
    return (dispatch, getState) => {
        //async call
        const ind = getState().shop.shopIndex === -1 ? 3 : -1
        dispatch({
            type: 'TOGGLE_SHOP',
            payload: {
                ...getState().shop,
                shopIndex: ind,
            }
        })
    }
    
};
