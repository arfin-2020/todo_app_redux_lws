import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { filterInitialState } from "./defaultState";

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case STATUSCHANGED: 
      return {
        ...state,
        status: action.payload,
      };
    

    case COLORCHANGED:
      const { changeType, color } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (isExistingColor) => isExistingColor !== color
            ),
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
