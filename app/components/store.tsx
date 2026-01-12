import {create} from "zustand";

type UserPreferenceStore = {
    kpmOrder: number;
};

export const useUserStore = create<UserPreferenceStore>((set)=>({
    kpmOrder: 1,
}));