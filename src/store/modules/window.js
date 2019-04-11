const state = {
  // 活动窗口的uid
  activeUid: undefined,
  // 窗口数量
  count: 0
}
const mutations = {
  // 切换活动窗口
  toggleWindowActive (state, uid) {
    state.activeUid = uid
  },
  // 累计窗口数量
  incrementWindow (state) {
    state.count ++
  }
}
export default {
  state,
  mutations
}