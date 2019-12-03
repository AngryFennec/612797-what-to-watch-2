import {combineReducers} from "redux";
import {dataReducer as data} from "./data/data-reducer.js";
import NameSpace from "./name-spaces";

const reducer = combineReducers({
  [NameSpace.DATA]: data,
});
export default reducer;
