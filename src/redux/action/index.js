import { BREAKFAST, LUNCH, SHAKES , ALL_MENU} from "../type";
export const getBreakfast = () => {
    return {
        type: BREAKFAST
    }
}
export const getLunch = () => {
    return {
        type: LUNCH
    }
}
export const getShakes = () => {
    return {
        type: SHAKES
    }
}
export const getAllMenu = () => {
    return {
        type: ALL_MENU
    }
}
