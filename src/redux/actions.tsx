import {CHANGE_PAGE} from "./actionTypes";

export const changePage = (id: string) => ({
    type: CHANGE_PAGE, id
});