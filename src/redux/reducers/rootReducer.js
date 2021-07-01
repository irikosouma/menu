import { combineReducers } from "redux";
import { BREAKFAST, LUNCH, SHAKES , ALL_MENU} from "../type";
import  menu  from '../../data/menu'
const initialState = {
    listMenu: menu

}

const rootReducer = combineReducers({
    menuList
})
function menuList (state = initialState, action) {
    const {type} = action
    switch(type){
        case ALL_MENU:
            return {
                listMenu: menu
            }
        case BREAKFAST:
            return {
                listMenu: menu.filter((item) => item.id === "1" || item.id === "4" || item.id === "7" ? item : "")
            }
        case LUNCH:
            return {
                listMenu: menu.filter((item) => item.id === "2" || item.id === "5" || item.id === "8" ? item : "")
            }
        case SHAKES:
            return {
                listMenu: menu.filter((item) => item.id === "3" || item.id === "6" || item.id === "9" ? item : "")
            }
        default: 
        return state
    }
}
export default rootReducer