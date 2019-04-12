const state = {
  // 活动窗口的uid
  activeUid: undefined,
  // 窗口数据
  uids: {},
  // 窗口数量
  count: 0
}
const mutations = {
  // 切换活动窗口
  toggleWindow (state, { uid, name } = {}) {
    state.activeUid = uid || (state.uids[name] && state.uids[name].uid) || undefined
  },
  // 累计窗口数量
  incrementWindow (state, { uid, name }) {
    state.count ++
    // 以下需要优化
    if (name && uid) {
      state.uids[name] = { uid }
    }
  }
}
export default {
  state,
  mutations
}