import configurable from '../components/configurable/index.js' // 可动态配置all组件
import IOCLeft from '../components/IOCLeft.vue'
import IOCRight from '../components/IOCRight.vue'
import LeftRight from '../components/leftRightPart.vue'
import DropDown from '../components/widget/dropDown.vue'
import CenterDatas from '../components/widget/centerDatas.vue' // 中间数据
import SearchBox from '../components/widget/searchBox.vue' // 搜索框
import TipBox from '../components/widget/tipBox.vue' // 提示框

const global = {
  ...configurable,
  IOCLeft,
  IOCRight,
  LeftRight,
  DropDown,
  CenterDatas,
  SearchBox,
  TipBox
}
export default global