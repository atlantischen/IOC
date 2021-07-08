<template>
  <!-- 物业大数据分析 -->
  <div class="propertyBDA">
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
  name: 'propertyBDA',
  data () {
    return {
      leftInfo: [
        {
          title: "今日设备统计",
          type: "horizontalBarChart",
          datas: {
            datas2: [
              {
                name: '设备总数',
                value: 10900
              }
            ],
            data: [
              {
                name: "在线",
                value: "9672",
              },
              {
                name: "离线",
                value: "523",
              },
              {
                name: "告警",
                value: "334",
              },
              {
                name: "故障",
                value: "371",
              },
            ],
          },
        },
        {
          title: "近七天工单统计",
          type: "singleBarChart",
          datas: {
            // eHeight: 220,
            xAxisD: [
              "6.26",
              "6.27",
              "6.28",
              "6.29",
              "6.30",
              "7.1",
              "7.2"
            ],
            datas2: [
              {
                name: '工单数',
                value: 1067
              },
              {
                name: '未处理工单数',
                value: 129
              },
            ],
            units: ["日期", "个"],
            datas: [[90, 190, 100, 70, 200, 100, 60]],
          },
        },
      ],
      // 右侧
      rightInfo: [
        {
          title: "工单汇总",
          type: 'TableList',
          datas: {
            eHeight: 590,
            padding: null,
            pageSize: 13,
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
