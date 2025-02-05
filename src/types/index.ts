import { FormDataState } from "./formsData";

export type WorkPlacesState = { workPlaces: string[]; error: null | string; loading: boolean, moadlShow: boolean };

export type MainState = FormDataState & WorkPlacesState