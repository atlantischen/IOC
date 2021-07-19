import IOCLeft from '../components/IOCLeft.vue'
import IOCRight from '../components/IOCRight.vue'
import Tips from '../components/tips.vue' //提示组件
import NumCounter from '../components/numCounter.vue' //数字累加组件
import LicensePlateSearch from '../components/licensePlateSearch.vue' //数字累加组件
import configurable from '../components/configurable/index.js' // 可动态配置all组件
import LeftRight from '../components/leftRightPart.vue'
import Allcom from '../components/allcom.vue' // 左右侧动态组件
import DropDown from '../components/widget/dropDown.vue'
import CenterDatas from '../components/widget/centerDatas.vue' // 中间数据
import SearchBox from '../components/widget/searchBox.vue' // 搜索框
import TipBox from '../components/widget/tipBox.vue' // 提示框
import RightAlert from '../components/widget/rightAlert.vue' // 右侧警告框
import NoT from '../components/widget/noneTing.vue' // noneTing
import LookVideo from '../components/widget/lookVideo.vue' // 查看视频
import MoveDialog from '../components/widget/moveDialog.vue'
import Dialog from '../components/dialog.vue' //监控
import VideoPlayback from '../components/videoPlayback.vue' //视频回放
import Video from '../components/video.vue' //视频
import AddScene from '../components/addScene.vue' //视频
import SvgIcon from '../components/widget/svgIcon.vue' // svg 图标

const global = {
  ...configurable,
  IOCLeft,
  IOCRight,
  Tips,
  NumCounter,
  LicensePlateSearch,
  Dialog,
  VideoPlayback,
  Video,
  AddScene,
  LeftRight,
  Allcom,
  DropDown,
  CenterDatas,
  SearchBox,
  TipBox,
  RightAlert,
  NoT,
  LookVideo,
  MoveDialog,
  SvgIcon
}
export default global