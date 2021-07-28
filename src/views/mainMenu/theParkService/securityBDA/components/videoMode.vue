<template>
  <!-- 视频模式 -->
  <div class="videoMode">
    <ul class="videoMode_Box x_sb_rap">
      <li v-for="(item, i) in videoDatas" @click="lookVideo(item)" :key="i">
        <iframe
          v-if="item.url"
          :id="'iframeVideo' + i"
          :ref="'iframeVideo' + i"
          style="width: 100%; height: 100%"
          :src="item.url + '&protocol=FLV&iframe=yes'"
          allowfullscreen
          allow="autoplay; fullscreen"
        ></iframe>
        <span v-else>无信号</span>
        <!-- ws://47.119.172.151:10810/nvc/test/ws/flv/hls/stream_1.flv -->
      </li>
    </ul>
    <LookVideo :Visible="Visible" :title="dialogTitle" @off="openCloseDialog" />
  </div>
</template>

<script>
export default {
  name: 'videoMode',
  data () {
    return {
      Visible: false,
      dialogTitle: '',
      videoDatas: [
        {
          local: '16楼C区铭筑',
          url: 'http://172.21.71.225:10800/play.html?channel=5'
        },
        {
          local: '16楼C区铭筑',
          url: 'http://172.21.71.225:10800/play.html?channel=6'
        },
        {
          local: '16楼C区铭筑',
          url: 'http://172.21.71.225:10800/play.html?channel=7'
        },
        {
          local: '16楼C区铭筑',
          url: 'http://172.21.71.225:10800/play.html?channel=8'
        },
        {
          local: '16楼C区铭筑',
          url: 'http://172.21.71.225:10800/play.html?channel=9'
        },
        {
          local: '16楼C区铭筑',
          url: 'http://172.21.71.225:10800/play.html?channel=10'
        },
        {
          local: '16楼C区铭筑',
          url: 'http://172.21.71.225:10800/play.html?channel=11'
        },
        {
          local: '14楼B区机房外',
          url: 'http://172.21.71.225:10800/play.html?channel=12'
        },
        {
          local: '14楼C区中科展示',
          url: 'http://172.21.71.225:10800/play.html?channel=13'
        },
        {
          local: '14楼C区展示区',
          url: 'http://172.21.71.225:10800/play.html?channel=14'
        },
        {
          local: '14层A区大事记朝外',
          url: 'http://172.21.71.225:10800/play.html?channel=15'
        },
        {
          local: '14楼展厅入口',
          url: 'http://172.21.71.225:10800/play.html?channel=16'
        },
      ]
    }
  },
  components: {},
  mounted () {
    var IframeOnClick = {
      resolution: 200,
      iframes: [],
      interval: null,
      Iframe: function () {
        this.element = arguments[0];
        this.cb = arguments[1];
        this.hasTracked = false;
      },
      track: function (element, cb) {
        this.iframes.push(new this.Iframe(element, cb));
        if (!this.interval) {
          var _this = this
          this.interval = setInterval(function () { _this.checkClick(); }, this.resolution);
        }
      },
      checkClick: function () {
        if (document.activeElement) {
          var activeElement = document.activeElement;
          for (var i in this.iframes) {
            if (activeElement === this.iframes[i].element) {
              if (this.iframes[i].hasTracked == false) {
                this.iframes[i].cb.apply(window, []);
                this.iframes[i].hasTracked = true;
              }
            } else {
              this.iframes[i].hasTracked = false;
            }
          }
        }
      }
    };
    for (var i = 0; i < this.videoDatas.length; i++) {
      // IframeOnClick.track(document.getElementById("iframeVideo" + i), function (e) {
      //   console.log(e)
      // }, i);
      // IframeOnClick.track(document.getElementById("iframeVideo" + i), function (i) {
      //   this.lookVideo(this.videoDatas[i])
      // });
    }
  },
  methods: {
    openCloseDialog (val) {
      this.Visible = val
    },
    lookVideo (val) {
      console.log(val)
      this.dialogTitle = val.local
      this.openCloseDialog(true)
    }
  }
}
</script>

<style lang='less' scoped>
.videoMode_Box {
  width: 20.45rem /* 1636/80 */;
  height: 8.55rem /* 684/80 */;
  position: fixed;
  top: 2.125rem /* 170/80 */;
  left: 50%;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  z-index: 108;
  li {
    width: 5rem /* 400/80 */;
    height: 2.75rem /* 220/80 */;
    background: #111;
    border-radius: 0.0625rem /* 5/80 */;
    cursor: pointer;
  }
}
</style>
