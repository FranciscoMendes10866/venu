import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(devtools(set => ({
    token: '',
    username: '',
    currentUserId: '',
    setToken: (token) => set({ token }),
    setUsername: (username) => set({ username }),
    setCurrentUserId: (currentUserId) => set({ currentUserId }),
})))
