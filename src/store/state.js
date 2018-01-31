import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'

const state = {
  singer: {},
  playing: false, // 播放暂停
  fullScreen: false, // 展开收起
  playlist: [], // 播放列表
  sequenceList: [], // 播放顺序
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放的歌曲索引
  disc: {},
  topList: {},
  searchHistory: loadSearch()
}

export default state
