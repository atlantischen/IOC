let homePage = {
  leftInfo: [{
      type: "TheParkIs",
      zh: {
        title: "园区情况",
        datas: {
          datas1: [
            [{
                data: [158],
                name: "待入驻企业",
              },
              {
                data: [28],
                name: "已入驻企业",
              },
            ],
            [{
                data: [36],
                name: "装修中企业",
              },
              {
                data: [132],
                name: "已办公企业",
              },
            ],
          ],
          datas2: {
            datas: [23, 34, 45],
            names: ["占地面积", "绿化率", "入驻率"],
          },
        },
      },
      en: {
        title: "The park is",
        datas: {
          datas1: [
            [{
                data: [158],
                name: "Enterprises to be settled",
              },
              {
                data: [28],
                name: "Settled enterprise",
              },
            ],
            [{
                data: [36],
                name: "Enterprise in Decoration",
              },
              {
                data: [132],
                name: "Office enterprise",
              },
            ],
          ],
          datas2: {
            datas: [23, 34, 45],
            names: ["Covers an area of", "Afforestation rate", "Occupancy rate"],
          },
        },
      },
    },
    // {
    //     type: "PedestrianPosture",
    //     zh: {
    //         title: "人行态势",
    //         datas: {
    //             smooth: false,
    //             unit: ["时间", "人"],
    //             names: ["办公人员", "访客"],
    //             xData: ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00"],
    //             datas: [
    //                 [23, 12, 43, 32, 21, 43],
    //                 [34, 2, 32, 32, 32, 23],
    //             ],
    //             datas2: [
    //                 {
    //                     name: "今日总人流量",
    //                     value: 28264,
    //                 },
    //                 {
    //                     name: "今日总访客",
    //                     value: 289,
    //                 },
    //             ],
    //         },
    //     },
    //     en: {
    //         title: "The pedestrian posture",
    //         datas: {
    //             smooth: false,
    //             unit: ["time", "people"],
    //             names: ["Office workers", "visitors"],
    //             xData: ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00"],
    //             datas: [
    //                 [23, 12, 43, 32, 21, 43],
    //                 [34, 2, 32, 32, 32, 23],
    //             ],
    //             datas2: [
    //                 {
    //                     name: "Total traffic today",
    //                     value: 28264,
    //                 },
    //                 {
    //                     name: "Total Visitors Today",
    //                     value: 289,
    //                 },
    //             ],
    //         },
    //     },
    // },
    // {
    //     type: "TheParkOutputVal",
    //     zh: {
    //         title: "园区产值",
    //         datas: {
    //             optionName: [
    //                 "新能源",
    //                 "新材料",
    //                 "生物医药",
    //                 "智能制造",
    //                 "信息技术",
    //                 "文化创意",
    //                 "现代服务",
    //                 "节能环保",
    //                 "商家",
    //             ],
    //             datas: [43, 34, 32, 34, 35, 32, 20, 20, 8],
    //             datas2: [
    //                 {
    //                     name: "今日总人流量",
    //                     value: 28264,
    //                 },
    //                 {
    //                     name: "今日总访客",
    //                     value: 289,
    //                 },
    //             ],
    //         },
    //     },
    //     en: {
    //         title: "The output value",
    //         datas: {
    //             optionName: [
    //                 "New energy",
    //                 "The new material",
    //                 "Biological medicine",
    //                 "Intelligent manufacturing",
    //                 "Information technology (it)",
    //                 "Cultural creativity",
    //                 "Modern service",
    //                 "Energy conservation and environmental protection",
    //                 "merchants",
    //             ],
    //             datas: [43, 34, 32, 34, 35, 32, 20, 20, 8],
    //             datas2: [
    //                 {
    //                     name: "Total traffic today",
    //                     value: 28264,
    //                 },
    //                 {
    //                     name: "Total Visitors Today",
    //                     value: 289,
    //                 },
    //             ],
    //         },
    //     },
    // }
  ],
  rightInfo: [
    // {
    //     type: "EnergyTrend",
    //     zh: {
    //         title: "能耗态势",
    //         datas: {
    //             energyTrendData: [
    //                 {
    //                     unit: "kW.h",
    //                     text: "电耗",
    //                     todayPower: 632,
    //                     monthPower: 15752,
    //                     yearPower: 200163,
    //                 },
    //                 {
    //                     unit: "m³",
    //                     text: "水耗",
    //                     todayPower: 205,
    //                     monthPower: 5380,
    //                     yearPower: 62583,
    //                 },
    //             ],
    //         },
    //     },
    //     en: {
    //         title: "Energy consumption trend",
    //         datas: {
    //             energyTrendData: [
    //                 {
    //                     unit: "kW.h",
    //                     text: "Power consumption",
    //                     todayPower: 632,
    //                     monthPower: 15752,
    //                     yearPower: 200163,
    //                 },
    //                 {
    //                     unit: "m³",
    //                     text: "Water consumption",
    //                     todayPower: 205,
    //                     monthPower: 5380,
    //                     yearPower: 62583,
    //                 },
    //             ],
    //         },
    //     }
    // },
    // {
    //     type: "PedestrianPosture",
    //     zh: {
    //         title: "车行态势",
    //         datas: {
    //             smooth: true,
    //             names: ["进", "出"],
    //             unit: ["时间", "辆"],
    //             xData: [
    //                 "00:00",
    //                 "02:00",
    //                 "04:00",
    //                 "06:00",
    //                 "08:00",
    //                 "10:00",
    //                 "12:00",
    //             ],
    //             datas: [
    //                 [7, 9, 3, 14, 9, 36, 23],
    //                 [10, 15, 12, 23, 20, 45, 36],
    //             ],
    //             datas2: [
    //                 {
    //                     value: 3200,
    //                     name: "总车位",
    //                 },
    //                 {
    //                     value: 236,
    //                     name: "剩余车位",
    //                 },
    //                 {
    //                     value: 2954,
    //                     name: "在场车辆",
    //                 },
    //             ],
    //         },
    //     },
    //     en: {
    //         title: "The car situation",
    //         datas: {
    //             smooth: true,
    //             names: ["Into the", "Out of the"],
    //             unit: ["time", "car"],
    //             xData: [
    //                 "00:00",
    //                 "02:00",
    //                 "04:00",
    //                 "06:00",
    //                 "08:00",
    //                 "10:00",
    //                 "12:00",
    //             ],
    //             datas: [
    //                 [7, 9, 3, 14, 9, 36, 23],
    //                 [10, 15, 12, 23, 20, 45, 36],
    //             ],
    //             datas2: [
    //                 {
    //                     value: 3200,
    //                     name: "The total parking Spaces",
    //                 },
    //                 {
    //                     value: 218,
    //                     name: "The remaining space",
    //                 },
    //                 {
    //                     value: 2954,
    //                     name: "The presence of vehicles",
    //                 },
    //             ],
    //         },
    //     }
    // },
    // {
    //     type: "equipmentSituation",
    //     zh: {
    //         title: "设备态势",
    //         datas: {
    //             equipmentSDatas: [
    //                 {
    //                     value: 1168,
    //                     name: "安防",
    //                 },
    //                 {
    //                     value: 936,
    //                     name: "能耗",
    //                 },
    //                 {
    //                     value: 1009,
    //                     name: "网络",
    //                 },
    //                 {
    //                     value: 1027,
    //                     name: "消防",
    //                 },
    //             ],
    //             names: ["正常", "故障"],
    //             xAxisName: ["安防", "能耗", "网络", "消防"],
    //             datas: [12530, 23440, 24520, 23440]
    //         }
    //     },
    //     en: {
    //         title: "Equipment situation",
    //         datas: {
    //             equipmentSDatas: [
    //                 {
    //                     value: 1168,
    //                     name: "security",
    //                 },
    //                 {
    //                     value: 936,
    //                     name: "The energy consumption",
    //                 },
    //                 {
    //                     value: 1009,
    //                     name: "network",
    //                 },
    //                 {
    //                     value: 1027,
    //                     name: "fire",
    //                 },
    //             ],
    //             names: ["normal", "The fault"],
    //             xAxisName: ["security", "The energy consumption", "network", "fire"],
    //             datas: [12530, 23440, 24520, 23440]
    //         }
    //     }
    // }
  ]
}
let homePage2 = JSON.stringify(homePage)
export default {
  zh: {
    homePage: homePage2,
  },
  en: {
    homePage: homePage2,
  }
};
export {
  homePage
};