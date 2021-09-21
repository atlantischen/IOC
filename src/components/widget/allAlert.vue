<template>
  <div class="allAlert">
    <div class="qDialog">
      <el-dialog
        class="hd_scrollbar"
        :title="title"
        v-model="dialogVisible"
        @close="openClose(false)"
        @open="openClose(true)"
      >
        <el-table
          class="allAlertTable"
          :data="allAlerts"
          style="width: 100%"
          height="400px"
        >
          <el-table-column
            prop="AlarmLocation"
            label="告警位置"
            show-overflow-tooltip
          />
          <el-table-column
            prop="AlarmTypes"
            label="告警类型"
            show-overflow-tooltip
          />
          <el-table-column
            prop="DeviceName"
            label="设备名称"
            show-overflow-tooltip
          />
          <el-table-column
            prop="AlarmContent"
            label="告警内容"
            show-overflow-tooltip
          />
          <el-table-column
            prop="AlarmLevel"
            label="告警等级"
            show-overflow-tooltip
          />
          <el-table-column
            prop="AlarmTime"
            label="告警时间"
            show-overflow-tooltip
          />
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "allAlert",
  props: {
    _data: {
      type: Object
    },
    title: {
      type: String,
      default: ''
    },
    Visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      allAlerts: [
        {
          AlarmLocation: '负一楼/水泵房',
          AlarmTypes: '消防告警',
          DeviceName: "水泵房",
          AlarmContent: "水泵房",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 16:23:42",
          SerialNum: null,
        },
        {
          AlarmLocation: '造丝生产现场',
          AlarmTypes: '人员黑名单',
          DeviceName: "开包区",
          AlarmContent: "开包区",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
        {
          AlarmLocation: '膨胀丝工房',
          AlarmTypes: '消防告警',
          DeviceName: "膨胀工序",
          AlarmContent: "膨胀工序",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
        {
          AlarmLocation: '室外区域/综合办公楼前',
          AlarmTypes: '车辆黑名单',
          DeviceName: "综合办公楼前",
          AlarmContent: "综合办公楼前",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
        {
          AlarmLocation: '原料出口处',
          AlarmTypes: '周界入侵',
          DeviceName: "原料出口处",
          AlarmContent: "原料出口处",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
        {
          AlarmLocation: '一层/辅料平衡高架库',
          AlarmTypes: 'BA系统',
          DeviceName: "辅料平衡高架库",
          AlarmContent: "辅料平衡高架库",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
        {
          AlarmLocation: '造丝生产现场',
          AlarmTypes: '违规停车',
          DeviceName: "造丝生产现场",
          AlarmContent: "造丝生产现场",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
        {
          AlarmLocation: '生产区/动力工房',
          AlarmTypes: '故障离线',
          DeviceName: "动力工房",
          AlarmContent: "动力工房",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
        {
          AlarmLocation: '原料出口处',
          AlarmTypes: '人员黑名单',
          DeviceName: "原料出口处",
          AlarmContent: "原料出口处",
          AlarmLevel: "黄色告警高发",
          AlarmTime: "2021-07-30 14:21:32",
        },
      ]
    };
  },
  components: {},
  watch: {
    Visible: {
      handler (n, o) {
        this.dialogVisible = n
      },
      deep: true,
      immediate: true
    },
    _data: {
      handler (n, o) {
        this.allAlerts = n
      },
      deep: true,
      immediate: true
    },
  },
  mounted () {
  },
  methods: {
    openClose (bool) {
      this.dialogVisible = bool
      this.$emit('off', 'allAlarm', bool)
    }
  },
};
</script>

<style scoped lang="less">
.allAlert {
  :deep(.qDialog) {
    .el-dialog {
      top: 6vh;
      width: 12.9rem /* 1032/80 */ !important;
      height: 6rem /* 480/80 */ !important;
      border: 1px solid rgba(67, 149, 243, 0.8);
      background: #0f2033;
      border-radius: 10px;
      box-shadow: inset 0 5px 15px 0.1px rgba(67, 149, 243, 0.1);
      -moz-box-shadow: inset 0 5px 15px 0.1px rgb(67, 149, 243, 0.1);
      -webkit-box-shadow: inset 0 5px 15px 0.1px rgb(67, 149, 243, 0.1);
      background: url("~@/assets/img/echart/allAlert_bg.png") repeat;
      background-size: 0.175rem /* 14/80 */;
      .el-dialog__body {
        padding: 0.125rem /* 10/80 */ 0.3625rem /* 29/80 */ 0.375rem /* 30/80 */;
      }
      .el-dialog__footer {
        padding: 0;
      }
    }
    .allAlertTable {
      font-size: 12px;
      background-color: transparent;
      th,
      tr,
      .el-table__expanded-cell {
        color: #fff;
        background-color: transparent;
      }
      th {
        color: rgba(255, 255, 255, 0.7);
      }
      td,
      th {
        text-align: left;
        padding: 0.125rem /* 10/80 */ 0;
      }
      td {
        border: none;
      }
      .el-table__empty-block .el-table__empty-text {
        color: #fff;
      }
      .el-table__row > td {
        border: none;
      }
      td,
      th.is-leaf {
        border-bottom: none;
      }
      tbody {
        tr {
          &:nth-child(odd) {
            background: #112951;
          }
        }
        .el-table__row {
          &:hover {
            background-color: rgba(30, 57, 87, 1);
            td {
              background-color: transparent;
              background-color: rgba(30, 57, 87, 1);
            }
          }
        }
      }
      .cell {
        white-space: nowrap;
      }
    }
    .el-table--border::after,
    .el-table--group::after,
    .el-table::before {
      background-color: transparent;
    }
  }
}
</style>
