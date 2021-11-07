import { TOGGLE_SHOW_NAME_ACTION } from "./constants";

const initialState = {
    showName: true,
    name: "Michael",
};
export const profileReducer = (store = initialState, action) => {
    console.log(store, action);
    switch (action.type) {
        
        case TOGGLE_SHOW_NAME_ACTION:
            return {
                ...store,
                showName: !store.showName,
            };
        default: {
            return store;
        }
    }
};