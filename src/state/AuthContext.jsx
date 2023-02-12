import { create } from "zustand";

export const useAuthContext = create((set) => ({
	username: null,
	isAuth: false,
	login: (username) => set((state) => ({ username, isAuth: true })),
	logout: () => set((state) => ({ username: null, isAuth: false }))
}));
