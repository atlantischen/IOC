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
  name: 'dataMode',
  data () {
    return {
      activeName: 'first',
      leftInfo: [
        {
          title: "今日设备统计",
          type: "WaterLevel",
          datas: {
            tipD: {
              name: '告警总数:',
              value: 224,
              unit: '个',
              other: '(风险指数越高，园区风险越大)'
            },
            data: [
              {
                name: "次要风险",
                value: "172",
              },
              {
                name: "重要风险",
                value: "29",
              },
              {
                name: "严重风险",
                value: "23",
              }
            ],
          },
        },
        {
          title: "近七天告警趋势",
          type: "singleBarChart",
          datas: {
            eHeight: 250,
            xAxisD: [
              "6.1",
              "6.2",
              "6.3",
              "6.4",
              "6.5",
              "6.6",
              "6.7"
            ],
            names: ['次要', '重要', '严重'],
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
          type: 'TableList',
          datas: {
            eHeight: 500,
            padding: null,
            pageSize: 10,
            header: {
              warnLevel: '告警等级',
              warnDevice: '告警设备',
              warnDetail: '告警详情',
              handle: '操作',
            },
            selectList: [
              {
                name: '全部',
                value: 26
              },
              {
                name: '严重',
                value: 4
              },
              {
                name: '重要',
                value: 2
              },
              {
                name: '次要',
                value: 20
              },
            ],
            tabelD: [
              {
                warnLevel: '严重',
                warnDevice: 'F14-实验室非法闯入',
                warnDetail: '非法人员闯入',
              },
              {
                warnLevel: '严重',
                warnDevice: '周玲黑名单',
                warnDetail: '黑名单报警',
              },
              {
                warnLevel: '严重',
                warnDevice: 'F16-1#空调故障',
                warnDetail: '故障',
              },
              {
                warnLevel: '严重',
                warnDevice: 'B1-水房-3#水机',
                warnDetail: '故障',
              },
              {
                warnLevel: '重要',
                warnDevice: 'F16-1#压力过大',
                warnDetail: '风机压差超出',
              },
              {
                warnLevel: '重要',
                warnDevice: 'B1-水房',
                warnDetail: '生活水箱',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
              {
                warnLevel: '次要',
                warnDevice: '15F-#温湿度传感器超...',
                warnDetail: '送风温度超.',
              },
            ]
          }
        }
      ],
    }
  },
  components: {},
  methods: {
  }
}
</script>

<style lang='less' scoped>
</style>
