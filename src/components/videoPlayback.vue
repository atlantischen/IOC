<template>
  <div class="container">
    <div class="warper">
      <el-dialog
        center
        :title="title"
        v-model="dialogVideoVisible"
        :destroy-on-close="true"
        @close="closeDialog"
      >
        <div class="btn_box">
          <div class="tpis">请点击轿厢摄像头完成选择</div>
          <ul class="list">
            <li
              @click="clickSelect(item)"
              :class="activeIndex == item ? 'active' : ''"
              v-for="(item, index) in 24"
              :key="index"
            >
              {{ item }}号梯
            </li>
          </ul>
        </div>
        <div class="date_box">
          <div class="tpis">请选择查询的日期和时间段</div>
          <div class="date">
            <span>日期:</span>
            <div class="box">
              <el-date-picker
                v-model="FormData.startDate"
                value-format="YYYY/MM/DD"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
              <el-date-picker
                v-model="FormData.endDate"
                value-format="YYYY/MM/DD"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="time">
            <span>时间:</span>
            <div class="box">
              <el-time-select
                placeholder="起始时间"
                v-model="FormData.startTime"
                start="08:30"
                step="00:15"
                end="18:30"
              >
              </el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="FormData.endTime"
                start="08:30"
                step="00:15"
                end="18:30"
                :minTime="FormData.startTime"
              >
              </el-time-select>
            </div>
          </div>
        </div>
        <button class="btn" @click="clickQuery()">查询</button>
      </el-dialog>
    </div>
    <Video :videoShow="videoShow" :videoTitle='videoTitle' @videoShowChange="videoShowChange"></Video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoShow:false,
      videoTitle:'视频回放_1号梯轿厢_2020年12月18日',
      dialogVideoVisible: this.backShow,
      activeIndex: 0,
      FormData: {
        floor: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
      },
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    backShow: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    backShow(val) {
      this.dialogVideoVisible = val;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("videoShowChange", false);
    },
    videoShowChange(val){
      this.videoShow=val
    },
    //选择楼层
    clickSelect(i) {
      this.activeIndex = i;
      this.FormData.floor = i;
    },
    // 查询
    clickQuery() {
      const { floor, startDate, endDate, startTime, endTime } = this.FormData;
      if (this.FormData) {
        if (floor == "" || floor == null) {
          this.$message({ message: "请选择楼层", type: "error" });
          return;
        } else if (startDate == null || startDate == "") {
          this.$message({ message: "请选择开始日期", type: "error" });

          return;
        } else if (endDate == null || endDate == "") {
          this.$message({ message: "请选择结束日期", type: "error" });

          return;
        } else if (startTime == null || startTime == "") {
          this.$message({ message: "请选择开始时间", type: "error" });

          return;
        } else if (endTime == null || endTime == "") {
          this.$message({ message: "请选择结束时间", type: "error" });
          return;
        } else {
            this.videoShowChange(true)
           this.closeDialog()
        }
      }
     
        //  this.$emit("videoShowChange", false);

      // this.$message({ message: "weeeeee", type: "success" });
    },
  },

  created() {},
};
</script>

<style lang="less" scoped>
.container {
  :deep(.warper) {
    .el-dialog {
      width: 15.6875rem /* 1255/80 */ /* 1331/80 */ /* 1744/80 */ /* 1392/80 */ !important;
      height: 8.8875rem /* 711/80 */ /* 724/80 */ /* 920/80 */ /* 750/80 */
        /* 772/80 */ !important;
      margin-top: 15vh !important;
      background-image: url("../assets/img/dtjk_pic.png");
            background-size: 100% 100%;

      background-repeat: no-repeat;
      background-color: transparent;
    }
    .el-overlay {
      overflow: hidden;
    }
    .el-dialog__body {
      padding-top: 0.125rem /* 10/80 */;
    }
    .el-dialog__headerbtn .el-dialog__close {
      font-size: 0.375rem /* 30/80 */ /* 20/80 */;
      color: #fff;
    }
    .el-dialog__title {
      color: #fff;
      font-size: 0.3rem /* 24/80 */;
    }
    .el-dialog__header {
      padding: 0.266667rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .btn_box {
      width: 8.4rem /* 672/80 */;
      height: 4.5rem /* 360/80 */;
      position: absolute;
      left: 0.5125rem /* 41/80 */;
      top: 1.5125rem /* 121/80 */;
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px dashed rgba(255, 255, 255, 0.3);
      padding: 0.3875rem /* 31/80 */ 0.4875rem /* 39/80 */;
      .tpis {
        font-size: 0.225rem /* 18/80 */;
        color: #fff;
      }
      .list {
        margin-top: 0.5rem /* 40/80 */;
        width: 100%;
        height: 2.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;

        & > li {
          width: 1.375rem /* 110/80 */;
          height: 0.375rem /* 30/80 */;
          color: #fff;
          line-height: 0.375rem;
          text-align: center;
          border: 1px solid #fff;
          border-radius: 0.0625rem /* 5/80 */;
        }
        .active {
          border-color: #4396f3;
          color: #4396f3;
        }
      }
      .list::after {
        content: "";
        width: 1.375rem /* 110/80 */;
        // height: .375rem /* 30/80 */;
      }
    }
    .date_box {
      width: 5.5rem /* 440/80 */;
      height: 4.5rem /* 360/80 */;
      position: absolute;
      right: 0.6375rem /* 51/80 */;
      top: 1.5125rem /* 121/80 */;
      padding: 0.3875rem /* 31/80 */ 0.4875rem /* 39/80 */;
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px dashed rgba(255, 255, 255, 0.3);
      .tpis {
        font-size: 0.225rem /* 18/80 */;
        color: #fff;
      }
      .date,
      .time {
        display: flex;
        // width: 3.35rem /* 268/80 */;
        & > span {
          white-space: nowrap;
          color: #fff;
          font-size: 0.225rem /* 18/80 */;
          margin-right: 0.2125rem /* 17/80 */;
        }
        .box {
          width: 3.35rem;
        }
      }
      .date {
        margin-top: 0.5rem;
        margin-bottom: 0.375rem /* 30/80 */ /* 50/80 */;
      }
    }
    .el-input__icon {
      color: #4396f3;
    }
    .el-input__inner {
      background-color: rgba(0, 0, 0, 0.1);
      border-color: none !important;
      width: 3.35rem /* 268/80 */;
      margin-bottom: 0.125rem /* 10/80 */;
    }
    .el-input__inner,
    .el-textarea__inner {
      color: #fff;
    }

    .el-select .el-input.is-focus .el-input__inner {
      border-color: none !important;
    }
    .btn {
      width: 1.5rem /* 120/80 */;
      height: 0.4375rem /* 35/80 */;
      position: absolute;
      left: 50%;
      color: #fff;
      font-size: 0.2rem /* 16/80 */;
      transform: translateX(-50%);
      top: 7.225rem /* 578/80 */ /* 87/80 */;
      background: #4396f3;
      border-radius: 0.0625rem /* 5/80 */;
    }
  }
}
</style>
