const state = {
  // 活动窗口的uid
  activeUid: undefined,
  // 窗口数据
  windows: {},
  // 窗口数量
  count: 0
}
const mutations = {
  // 切换活动窗口
  toggleWindow (state, { uid, name } = {}) {
    let list = Object.values(state.windows)
    uid = uid || (list.find(item => item.name === name) || {}).uid
    if (state.activeUid !== uid) {
      // 活动窗口的uid
      state.activeUid = uid

      // 活动窗口放在顶层
      if (state.activeUid && state.windows[state.activeUid].zIndex !== undefined) {
        state.windows[state.activeUid].zIndex = state.count
      }

      // 排序其他窗口；把zIndex作为key把Array转为Object再转回Array，新Array的下标为排序序号
      let listObject = {}
      list = list.filter(item => item.zIndex >= 0 && item.uid !== state.activeUid)
      list.forEach(item => {
        listObject[item.zIndex] = item
      })
      list = Object.values(listObject)
      list.forEach((item, index) => {
        item.zIndex = index
      })
    }
    // 触发
    state.windows = { ...state.windows }
  },
  // 累计窗口数量（注意：打开窗口时才可触发此mutation，因为要根据显示顺序来定位窗口的位置）
  incrementWindow (state, uid) {
    if (state.windows[uid].zIndex === undefined) {
      state.count ++
      state.windows[uid].zIndex = state.windows[uid].zIndex || state.count
    }
  },
  // 新增窗口
  addWindow (state, { uid, name } = {}) {
    state.windows[uid] = { ...state.windows[uid], uid, name }
  }
}
export default {
  state,
  mutations
}