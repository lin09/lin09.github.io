const state = {
  // 是否显示登录窗口
  visibility: false
}

const mutations = {
  toggleLogin (state, visibility) {
    state.visibility = visibility
  }
}

export default {
  state,
  mutations
}
