export const state = () => ({
  drawer: false,
  navigation: {
    name: '',
    navigation: [],
  },
})

export const mutations = {
  setDrawer(state, value) {
    state.drawer = value
  },
  setNavigation(state, value) {
    state.navigation = value
  },
}

export const getters = {
  getDrawer(state) {
    return state.drawer
  },
  team(state) {
    return state.team
  },
  navigation(state) {
    return state.navigation
  },
}
