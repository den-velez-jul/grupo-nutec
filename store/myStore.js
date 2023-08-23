import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('counter', {
  state: () => ({locale:'es'}),
  getters: {
    getLocale: (state) => state.locale,
  },
  actions: {
    setLocale(newValue) {
      this.locale = newValue
    },
  },
})