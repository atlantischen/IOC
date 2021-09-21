<template>
  <!-- 数据模式 -->
  <div class="dataMode">
    <ServiceSystem />
    <LeftRight>
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center> </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
  </div>
</template>

<script>
export default {
  name: "dataMode",
  data() {
    return {
      activeName: "first",
      leftInfo: [
        {
          title: "今日告警统计",
          type: "WaterLevel",
          datas: {
            tipD: {
              name: "告警总数:",
              value: 224,
              unit: "个",
              other: "(风险指数越高，园区风险越大)",
            },
            data: [
              {
                name: "次要风险",
                value: this.$randomNumer(0, 50),
              },
              {
                name: "重要风险",
                value: this.$randomNumer(0, 30),
              },
              {
                name: "严重风险",
                value: this.$randomNumer(0, 20),
              },
            ],
          },
        },
        {
          title: "近七天告警趋势",
          type: "SingleBarChart",
          datas: {
            eHeight: 250,
            // xAxisD: [
            //   "6.1",
            //   "6.2",
            //   "6.3",
            //   "6.4",
            //   "6.5",
            //   "6.6",
            //   "6.7"
            // ],
            xAxisD: this.$funDateArr(-7),
            names: ["次要", "重要", "严重"],
            units: ["", "个"],
            datas: [
              [51, 36, 47, 34, 44, 28, 48],
              [18, 13, 17, 31, 10, 9, 5],
              [17, 3, 2, 11, 12, 4, 2],
            ],
          },
        },
      ],
      // 右侧
      rightInfo: [
        {
          title: "未解决告警",
          type: "TableList",
          datas: {
            eHeight: 500,
            padding: null,
            pageSize: 10,
            header: {
              warnLevel: "告警等级",
              warnDevice: "告警设备",
              warnDetail: "告警详情",
              handle: "操作",
            },
            selectList: [
              {
                name: "全部",
                value: 26,
              },
              {
                name: "严重",
                value: 4,
              },
              {
                name: "重要",
                value: 2,
              },
              {
                name: "次要",
                value: 20,
              },
            ],
            tabelD: [
              {
                warnLevel: "严重",
                warnDevice: "F14-实验室非法闯入",
                warnDetail: "14F-实验室_走廊摄像机抓拍到非法人员闯入",
                warnLocal: "14F实验室走廊",
                deviceNum: "CW-14F-002",
                warnVal: null,
                ppImg: require("@/assets/img/datas/pp_1.png"),
                warningTime: "2021-07-08 16:23:12",
              },
              {
                warnLevel: "严重",
                warnDevice: "黑名单报警",
                warnDetail: "周玲黑名单",
                warnLocal: "",
                deviceNum: "",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-30 12:34:21",
              },
              {
                warnLevel: "严重",
                warnDevice: "16F-1#空调室内机",
                warnDetail: "故障",
                warnLocal: "16F会议室",
                deviceNum: "HL-KTGZ-213",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-07-08 9:23:56",
              },
              {
                warnLevel: "严重",
                warnDevice: "B1-水房-3#给水泵",
                warnDetail: "故障",
                warnLocal: "B1_水房",
                deviceNum: "DC-B1-345",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-07-08 23:06:24",
              },
              {
                warnLevel: "重要",
                warnDevice: "16F-1#压力传感器",
                warnDetail: "风机压差超出限值",
                warnLocal: "16F中央风机",
                deviceNum: "FJ-16F-4567",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-07-08 12:33:19",
              },
              {
                warnLevel: "重要",
                warnDevice: "B1-水房-生活水箱-液位传感器",
                warnDetail: "生活水箱-液位传感器告警",
                warnLocal: "B1_水房",
                deviceNum: "DC-B1-3542",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-07-09 14:22:43",
              },
              {
                warnLevel: "次要",
                warnDevice: "16F-#温湿度传感器",
                warnDetail: "送风温度超出阀值",
                warnLocal: "16F",
                deviceNum: "CG_16F_3411",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-07-06 17:23:52",
              },
              {
                warnLevel: "次要",
                warnDevice: "1F-大堂门_门禁左",
                warnDetail: "超时未关",
                warnLocal: "1F-大堂",
                deviceNum: "MZ_1F_4574",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-07-06 07:42:23",
              },
              {
                warnLevel: "次要",
                warnDevice: "15F-#烟雾传感器",
                warnDetail: "传感器失灵",
                warnLocal: "15F-茶水室",
                deviceNum: "DV_15F_2341",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-07-05 13:44:54",
              },
              {
                warnLevel: "次要",
                warnDevice: "13F-#门禁右",
                warnDetail: "门禁失灵",
                warnLocal: "13F-电梯走廊",
                deviceNum: "DT-13F-23232",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-30 09:34:43",
              },
              {
                warnLevel: "次要",
                warnDevice: "12F-#温湿度传感器",
                warnDetail: "送风温度超出阀值",
                warnLocal: "12F",
                deviceNum: "CG_12F_43563",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-28 14:44:55",
              },
              {
                warnLevel: "次要",
                warnDevice: "14F-#机房服务器",
                warnDetail: "服务器内存用完",
                warnLocal: "14F",
                deviceNum: "DV_14F_3452",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-28 12:13:03",
              },
              {
                warnLevel: "次要",
                warnDevice: "11F-#精密空调",
                warnDetail: "精密空调温度过高",
                warnLocal: "11F",
                deviceNum: "DV_11F_4353",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-27 17:23:49",
              },
              {
                warnLevel: "次要",
                warnDevice: "12F-#UPS APM01",
                warnDetail: "UPS整流故障",
                warnLocal: "12F",
                deviceNum: "DV_12F_23543",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-27 18:12:53",
              },
              {
                warnLevel: "次要",
                warnDevice: "16F-空调机",
                warnDetail: "空调机运转异常",
                warnLocal: "16F-财务室",
                deviceNum: "DV_16F_654756",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-26 11:55:22",
              },
              {
                warnLevel: "次要",
                warnDevice: "13F-压缩机",
                warnDetail: "压缩机损坏",
                warnLocal: "13F-市场二部",
                deviceNum: "DV_13F_21421",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-26 15:41:42",
              },
              {
                warnLevel: "次要",
                warnDevice: "B1-消防通道",
                warnDetail: "粤BF3939 占用消防通道",
                warnLocal: "B1-停车场",
                deviceNum: "XF_B1_435524",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-25 13:48:16",
              },
              {
                warnLevel: "次要",
                warnDevice: "3F-#冷却塔",
                warnDetail: "冷却塔故障",
                warnLocal: "3F-停车场",
                deviceNum: "DV_3F_23432",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-24 16:33:23",
              },
              {
                warnLevel: "次要",
                warnDevice: "4F-#温控器",
                warnDetail: "温控器超高温",
                warnLocal: "4F",
                deviceNum: "WM_4F_23423",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-24 17:23:00",
              },
              {
                warnLevel: "次要",
                warnDevice: "3F-#压缩机",
                warnDetail: "压缩机启动不良",
                warnLocal: "3F",
                deviceNum: "DV_3F_88772",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-23 15:03:52",
              },
              {
                warnLevel: "次要",
                warnDevice: "1F-#冷冻泵",
                warnDetail: "供水温低于下限值",
                warnLocal: "1F",
                deviceNum: "DV_1F_5434434",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-23 16:12:32",
              },
              {
                warnLevel: "次要",
                warnDevice: "16F-#温控器",
                warnDetail: "温控器超高温",
                warnLocal: "16F",
                deviceNum: "DV_16F_887565",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-21 12:34:12",
              },
              {
                warnLevel: "次要",
                warnDevice: "15F-#灯照",
                warnDetail: "光线不强",
                warnLocal: "15F",
                deviceNum: "DB_15F_324343",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-21 14:55:29",
              },
              {
                warnLevel: "次要",
                warnDevice: "14F-#温控器",
                warnDetail: "展览区温控器损坏",
                warnLocal: "14F",
                deviceNum: "DC_14F_78677",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-20 11:33:12",
              },
              {
                warnLevel: "次要",
                warnDevice: "16F-#大会议室_摄像头",
                warnDetail: "摄像头损坏",
                warnLocal: "16F",
                deviceNum: "MT_16F_34234",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-22 11:33:12",
              },
              {
                warnLevel: "次要",
                warnDevice: "14F-#机房机箱",
                warnDetail: "温度过高",
                warnLocal: "14F-#展厅机房",
                deviceNum: "DC_14F_54656",
                warnVal: null,
                ppImg: null,
                warningTime: "2021-06-22 11:33:12",
              },
            ],
          },
        },
      ],
    };
  },
  components: {},
  created() {
    this.leftInfo[0].datas.tipD.value = 0;
    for (let i = 0; i < this.leftInfo[0].datas.data.length; i++) {
      this.leftInfo[0].datas.tipD.value += this.leftInfo[0].datas.data[i].value;
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
