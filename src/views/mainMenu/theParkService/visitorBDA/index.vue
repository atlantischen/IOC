<template>
  <!-- 访客大数据分析 -->
  <div class="visitorBDA">
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
import data from '@/datas/falseDatas.js';
export default {
  name: 'visitorBDA',
  data() {
    return {
      leftInfo: [
        {
          title: '今日访客统计',
          type: 'PedestrianPosture2',
          datas: {
            eHeight: 240,
            names: null,
            unit: ['时间', '人'],
            // xData: [
            //   "09:00",
            //   "10:00",
            //   "11:00",
            //   "14:00",
            //   "15:00",
            //   "16:00",
            //   "17:00",
            //   "18:00"
            // ],
            xData: this.$timeRangeArr(null, ['12:00', '13:00']),
            datas: [
              // [120, 240, 310, 355, 320, 220, 100, 98]
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                this.$randomNumer(10, 40),
                this.$randomNumer(10, 50),
                this.$randomNumer(10, 50),
                this.$randomNumer(10, 50),
                this.$randomNumer(10, 50),
                this.$randomNumer(10, 50),
                this.$randomNumer(10, 50),
                0,
                0,
                0,
                0,
                0,
                0,
                0,
              ],
            ],
            datas2: [
              {
                value: 32856,
                name: '今日总人数',
              },
              {
                value: data.VisitorsToday,
                name: '今日访客总量',
              },
            ],
          },
        },
        {
          title: '访客楼栋分布',
          type: 'SingleBarChart',
          datas: {
            eHeight: 300,
            xAxisD: [
              '1A栋',
              '1B栋',
              '1C栋',
              '2A栋',
              '2B栋',
              '2C栋',
              '3A栋',
              '3B栋',
              '3C栋',
            ],
            units: ['', '人'],
            datas: [
              // [500, 480, 900, 850, 650, 610, 780, 620, 500],
              [
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
                this.$randomNumer(50, 300),
              ],
            ],
          },
        },
      ],
      // 右侧
      rightInfo: [
        {
          title: '近7天访客统计',
          type: 'PedestrianPosture',
          datas: {
            eHeight: null,
            padding: null,
            smooth: true,
            unit: ['日期', '人'],
            // xData: ["4.13", "4.14", "4.15", "4.16", "4.17", "4.18", "4.19"],
            xData: this.$funDateArr(-7),
            datas: [
              [
                this.$randomNumer(100, 300),
                this.$randomNumer(100, 300),
                this.$randomNumer(100, 300),
                this.$randomNumer(100, 300),
                this.$randomNumer(100, 300),
                this.$randomNumer(100, 300),
                this.$randomNumer(100, 300),
              ],
            ],
          },
        },
        {
          title: '今日访客进出车辆',
          type: 'TableList',
          datas: {
            eHeight: 420,
            padding: null,
            pageSize: 8,
            header: {
              licence: '访客车牌',
              ownerName: '访客姓名',
              type: '进/出场类型',
              time: '时间',
            },
            tabelD: [
              {
                licence: '粤BB026B',
                ownerName: '付春晖',
                type: '出场',
                time: '16:05:06',
              },
              {
                licence: '粤BF3588',
                ownerName: '陈云芳',
                type: '进场',
                time: '16:08:23',
              },
              {
                licence: '粤BR35E1',
                ownerName: '夏少东',
                type: '出场',
                time: '16:09:23',
              },
              {
                licence: '川AF2343',
                ownerName: '曲优',
                type: '出场',
                time: '15:34:12',
              },
              {
                licence: '粤D234D3',
                ownerName: '李志明',
                type: '出场',
                time: '15:43:32',
              },
              {
                licence: '粤C30335',
                ownerName: '黄欣',
                type: '出场',
                time: '16:09:45',
              },
              {
                licence: '贵A32404',
                ownerName: '田骄',
                type: '进场',
                time: '13:34:21',
              },
              {
                licence: '粤EF3430',
                ownerName: '胡思安',
                type: '进场',
                time: '12:34:12',
              },
              {
                licence: '粤BS4544',
                ownerName: '吴大坤',
                type: '出场',
                time: '16:32:43',
              },
              {
                licence: '粤DF3243',
                ownerName: '刘虎娣',
                type: '出场',
                time: '12:00:12',
              },
              {
                licence: '湘A34355',
                ownerName: '谭珏',
                type: '出场',
                time: '19:32:13',
              },
              {
                licence: '赣BR3423',
                ownerName: '王咚咚',
                type: '出场',
                time: '11:23:32',
              },
              {
                licence: '湘AY8768',
                ownerName: '蔡迪',
                type: '进场',
                time: '14:23:54',
              },
              {
                licence: '苏CZ3453',
                ownerName: '石俊',
                type: '出场',
                time: '12:40:59',
              },
              {
                licence: '粤D46456',
                ownerName: '史娜',
                type: '进场',
                time: '14:51:01',
              },
              {
                licence: '粤S34354',
                ownerName: '胡韩振',
                type: '进场',
                time: '10:54:02',
              },
              {
                licence: '鲁A45466',
                ownerName: '章经信',
                type: '出场',
                time: '18:43:07',
              },
              {
                licence: '冀B235D3',
                ownerName: '刘生',
                type: '出场',
                time: '12:34:31',
              },
              {
                licence: '粤F456E6',
                ownerName: '林金',
                type: '进场',
                time: '18:09:12',
              },
              {
                licence: '粤B454F5',
                ownerName: '秦风明',
                type: '出场',
                time: '17:23:23',
              },
              {
                licence: '粤H545R6',
                ownerName: '昊岳',
                type: '出场',
                time: '16:09:23',
              },
              {
                licence: '浙A12313',
                ownerName: '管简君',
                type: '出场',
                time: '16:09:23',
              },
              {
                licence: '鄂AF3432',
                ownerName: '安吉里',
                type: '出场',
                time: '16:09:23',
              },
            ],
          },
        },
      ],
    };
  },
  components: {},
  created() {
    let _l = this.leftInfo[0].datas.xData.length;
    this.leftInfo[0].datas.datas[0] = this.leftInfo[0].datas.datas[0].slice(
      0,
      _l
    );
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
