export const state = () => ({
  games: [],
  kresby: [],
  users: [],
  levels:[]
})

export const getters = {
  getGames:(state) => {
    return state.games;
  },
  getKresby:(state) => {
    return state.kresby;
  },
  getUsers:(state) => {
    return state.users;
  },
  getLevels:(state) => {
    return state.levels;
  }
 
}

export const mutations = {
  setItems(state, items) {
    state.games = items.games;
    state.kresby = items.kresby;
    state.users = items.users;
    state.levels = items.levels;
  }
}

export const actions = {

  async fetchItems({commit}, params) {
    commit('setItems', {
      games: require('../static/games.json'),
      kresby: require('../static/kresby.json'),
      users: require('../static/users.json'),
      levels: require('../static/levels.json'),
    });
  }

}