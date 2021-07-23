<template>
  <!-- 企业大数据分析 -->
  <div class="enterpriseBDA">
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
  name: "enterpriseBDA",
  data () {
    return {
      leftInfo: [
        {
          title: "企业类型占比",
          type: "FocusIndustry",
          datas: {
            eHeight: null,
            padding: [10, 0],
            optionName: [
              "零售商家",
              "生物医药",
              "信息技术",
              "节能环保",
              "智能制造",
              "新能源",
              "新材料",
              "其他",
            ],
            datas: [18, 15, 14, 13, 12, 11, 10, 7],
          },
        },
        {
          title: "企业服务统计",
          type: "singleBarChart",
          datas: {
            eHeight: 280,
            xAxisD: [
              "物业",
              "共享",
              "人才",
              "采购",
              "党群",
              "企业",
              "政务",
              "入驻",
            ],
            names: ["上月", "本月"],
            units: ["", "个"],
            datas: [
              [180, 100, 200, 230, 150, 230, 50, 200],
              [300, 140, 140, 260, 240, 260, 60, 300],
            ],
          },
        },
      ],
      // 右侧
      rightInfo: [
        {
          title: "企业楼栋分布",
          type: "PieChart3",
          datas: {
            eHeight: null,
            padding: [10, 0],
            optionName: [
              "3期B座",
              "1期A座",
              "3期C座",
              "2期A座",
              "3期A座",
              "1期B座",
              "2期B座",
              "1期C座",
            ],
            datas: [18, 17, 15, 14, 11, 10, 8, 7],
          },
        },
        {
          title: "本月企业服务办理TOP4",
          type: "PyramidChart",
          datas: {
            eHeight: null,
            padding: null,
            header: ["访客车牌", "访客姓名", "进/出场类型", "时间"],
            tabelD: [
              {
                licence: "粤B1026B",
                ownerName: "付春晖",
                type: "出场",
                time: "16:05:06",
              },
              {
                licence: "粤BF3588",
                ownerName: "陈云芳",
                type: "进场",
                time: "16:08:23",
              },
              {
                licence: "粤A93521",
                ownerName: "夏少东",
                type: "出场",
                time: "16:09:23",
              },
              {
                licence: "粤AD3521",
                ownerName: "曲优",
                type: "出场",
                time: "15:34:12",
              },
              {
                licence: "粤AD3521",
                ownerName: "李志明",
                type: "出场",
                time: "15:43:32",
              },
              {
                licence: "粤AD3521",
                ownerName: "黄欣",
                type: "出场",
                time: "16:09:45",
              },
              {
                licence: "粤AD3521",
                ownerName: "田骄",
                type: "进场",
                time: "13:34:21",
              },
              {
                licence: "粤AD3521",
                ownerName: "胡思安",
                type: "进场",
                time: "12:34:12",
              },
              {
                licence: "粤AD3521",
                ownerName: "吴大坤",
                type: "出场",
                time: "16:32:43",
              },
              {
                licence: "粤AD3521",
                ownerName: "刘虎娣",
                type: "出场",
                time: "12:00:12",
              },
              {
                licence: "粤AD3521",
                ownerName: "谭珏",
                type: "出场",
                time: "19:32:13",
              },
              {
                licence: "粤AD3521",
                ownerName: "王咚咚",
                type: "出场",
                time: "11:23:32",
              },
              {
                licence: "粤AD3521",
                ownerName: "蔡迪",
                type: "进场",
                time: "14:23:54",
              },
              {
                licence: "粤AD3521",
                ownerName: "石俊",
                type: "出场",
                time: "12:40:59",
              },
              {
                licence: "粤AD3521",
                ownerName: "史娜",
                type: "进场",
                time: "14:51:01",
              },
              {
                licence: "粤AD3521",
                ownerName: "胡韩振",
                type: "进场",
                time: "10:54:02",
              },
              {
                licence: "粤AD3521",
                ownerName: "章经信",
                type: "出场",
                time: "18:43:07",
              },
              {
                licence: "粤AD3521",
                ownerName: "刘生",
                type: "出场",
                time: "12:34:31",
              },
              {
                licence: "粤AD3521",
                ownerName: "林金",
                type: "进场",
                time: "18:09:12",
              },
              {
                licence: "粤AD3521",
                ownerName: "秦风明",
                type: "出场",
                time: "17:23:23",
              },
              {
                licence: "粤AD3521",
                ownerName: "昊岳",
                type: "出场",
                time: "16:09:23",
              },
              {
                licence: "粤AD3521",
                ownerName: "管简君",
                type: "出场",
                time: "16:09:23",
              },
              {
                licence: "粤AD3521",
                ownerName: "安吉里",
                type: "出场",
                time: "16:09:23",
              },
            ],
          },
        },
      ],
    };
  },
  components: {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
