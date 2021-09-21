import dm from '@/utils/dataMethods'
export default {
  "VisitorsToday": dm.randomNumer(200, 300), // 今日访客总人数
  "warnDatas": [ // 循环告警info
    {
      "SerialNum": 0,
      "EquipmentNum": "534080",
      "AlarmLocation": "1期A座14F实验室",
      "AlarmType": "消防报警",
      "AlarmTime": "2021-08-07 15:28:30"
    },
    {
      "SerialNum": 1,
      "EquipmentNum": "534081",
      "AlarmLocation": "3期C座16F研发中心走廊",
      "AlarmType": "陌生人报警",
      "AlarmTime": "2021-08-09 11:25:26"
    },
    {
      "SerialNum": 2,
      "EquipmentNum": "534082",
      "AlarmLocation": "3期C座1F商业广场",
      "AlarmType": "黑名单报警",
      "AlarmTime": "2021-08-10 15:58:27"
    },
    {
      "SerialNum": 3,
      "EquipmentNum": "534083",
      "AlarmLocation": "2期A座监控中心机房",
      "AlarmType": "区域侦测报警",
      "AlarmTime": "2021-08-13 13:42:28"
    },
    {
      "SerialNum": 4,
      "EquipmentNum": "534084",
      "AlarmLocation": "1期B座5F-3#空调",
      "AlarmType": "故障报警",
      "AlarmTime": "2021-08-11 16:38:29"
    },
    {
      "SerialNum": 5,
      "EquipmentNum": "534085",
      "AlarmLocation": "喷泉广场15#井盖",
      "AlarmType": "物品移动报警",
      "AlarmTime": "2021-08-15 14:16:30"
    },
    {
      "SerialNum": 6,
      "EquipmentNum": "534086",
      "AlarmLocation": "2期B座22F2208室",
      "AlarmType": "烟感探头报警",
      "AlarmTime": "2021-08-16 17:35:31"
    }
  ]
}