import {create} from "zustand";

type UserStore = {
    kpmOrder: string[];
    setKpmOrder: () => void;
};

export const useUserStore = create<UserStore>((set)=>({
    kpmOrder: ["",""],
    setKpmOrder: ()=> {
        set({kpmOrder: []})
    },
}));