import example from '../../api/example'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  all: [], // goods list
  loading: false
}

// getters
const getters = {
  loadingStatus: state => state.loading,
  allProducts: state => state.all
}

// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.added]
  //   commit(types.CHECKOUT_REQUEST)
  //   example.buyProducts(
  //     products,
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  //   )
  // }
  getAllProducts ({ commit, state }, payload) {
    console.log(payload)
    commit(types.GET_ALL_PRODUCTS_REQUEST)
    try {
      example.getProducts(
        (products) => commit(types.GET_ALL_PRODUCTS_SUCCESS, products)
      )
    } catch (e) {
      commit(types.GET_ALL_PRODUCTS_FAILURE)
    }
  }
}

// mutations
const mutations = {
  // [types.ADD_TO_CART] (state, { id }) {
  //   state.checkoutStatus = null
  //   const record = state.added.find(p => p.id === id)
  //   if (!record) {
  //     state.added.push({
  //       id,
  //       quantity: 1
  //     })
  //   } else {
  //     record.quantity++
  //   }
  // },

  [types.GET_ALL_PRODUCTS_REQUEST] (state) {
    state.loading = true
  },
  [types.GET_ALL_PRODUCTS_SUCCESS] (state, payload) {
    console.log(payload)
    state.all = payload
    state.loading = false
  },
  [types.GET_ALL_PRODUCTS_FAILURE] (state) {
    state.loading = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
