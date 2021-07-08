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
          title: "工单汇总",
          type: 'TableList',
          datas: {
            eHeight: 600,
            padding: null,
            pageSize: 15,
            header: {
              orderType: '工单类型',
              createrName: '工单创建人',
              hdPeople: '处理人',
              state: '状态',
              handle: '操作',
            },
            tabelD: [
              {
                orderType: '物业保修',
                createrName: '付春晖',
                hdPeople: 'admin',
                state: '处理中'
              },
              {
                orderType: '会议室预定',
                createrName: '陈云芳',
                hdPeople: 'admin',
                state: '超时'
              },
              {
                orderType: '车位申请',
                createrName: '夏少东',
                hdPeople: 'admin',
                state: '处理中'
              },
              {
                orderType: 'IT报修',
                createrName: '曲优',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '入驻办理',
                createrName: '李志明',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '广告位申请',
                createrName: '黄欣',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '物业保修',
                createrName: '田骄',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: 'IT报修',
                createrName: '胡思安',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '入驻办理',
                createrName: '吴大坤',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '物业保修',
                createrName: '刘虎娣',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '入驻办理',
                createrName: '谭珏',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: 'IT报修',
                createrName: '王咚咚',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '会议室预定',
                createrName: '蔡迪',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '物业保修',
                createrName: '石俊',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '会议室预定',
                createrName: '史娜',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '车位申请',
                createrName: '胡韩振',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '会议室预定',
                createrName: '章经信',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '物业保修',
                createrName: '刘生',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '车位申请',
                createrName: '林金',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '物业保修',
                createrName: '秦风明',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '物业保修',
                createrName: '昊岳',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '物业保修',
                createrName: '管简君',
                hdPeople: 'admin',
                state: '完成'
              },
              {
                orderType: '车位申请',
                createrName: '安吉里',
                hdPeople: 'admin',
                state: '完成'
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
