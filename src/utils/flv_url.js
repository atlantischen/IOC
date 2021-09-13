
import fun from './dataMethods'
let url =process.env.VUE_APP_FLV_URL
export const urlArry= {
  // 安保数据视频地址
    theParkServiceList:[
      {
        local: '16楼C区铭筑',
        url: url+':8086/live?app=live&stream=cctv1',
        id: 1
      },
      {
        local: '16层C区女厕',
        url: url+':8086/live?app=live&stream=cctv2',
        id: 2
      },
      {
        local: '16楼前台',
        url: url+':8086/live?app=live&stream=cctv3',
        id: 3
      },
      {
        local: '16楼A区铭筑男厕',
        url: url+':8086/live?app=live&stream=cctv4',
        id: 4
      },
      {
        local: '16楼A区会议室',
        url: url+':8086/live?app=live&stream=cctv5',
        id: 5
      },
      {
        local: '14楼A区铭筑',
        url:url+':8086/live?app=live&stream=cctv6',
        id: 6
      },
      {
        local: '14楼D区吧台',
        url: url+':8087/live?app=live&stream=cctv7',
        id: 7
      },
      {
        local: '14楼C区女厕',
        url: url+':8087/live?app=live&stream=cctv8',
        id: 8
      },
      {
        local: '14楼A区大事记',
        url: url+':8087/live?app=live&stream=cctv9',
        id: 9
      },
      {
        local: '14层B区男厕',
        url: url+':8087/live?app=live&stream=cctv14',
        id: 10
      },
      {
        local: '14楼贵宾会议室外',
        url: url+':8087/live?app=live&stream=cctv15',
        id: 11
      },
      {
        local: '14楼B区机房外',
        url: url+':8087/live?app=live&stream=cctv16',
        id: 12
      },
    ],
    // 冷源视频地址
    codesourceList:[
        {
          id: fun.uuid(),
          url: url+':8084/live?app=live&stream=cctv1',
        },
        {
            id: fun.uuid(),
          url:url+':8084/live?app=live&stream=cctv2',
        },
        {
            id: fun.uuid(),
          url: url+':8084/live?app=live&stream=cctv3',
        },
        {
            id: fun.uuid(),
          url: url+':8084/live?app=live&stream=cctv4',
        },
        {
            id: fun.uuid(),
          url: url+':8084/live?app=live&stream=cctv5',
        },
        {
            id: fun.uuid(),
          url: url+':8084/live?app=live&stream=cctv6',
        },
   
      ],
    // 给排水视频地址
    watersupplyList:[
             {
                id: fun.uuid(),
            url: url+':8085/live?app=live&stream=cctv13',
          },
          {
            id: fun.uuid(),
            url:url+':8085/live?app=live&stream=cctv14',
          },
          {
            id: fun.uuid(),
            url: url+':8085/live?app=live&stream=cctv15',
          },
          {
            id: fun.uuid(),
            url: url+':8085/live?app=live&stream=cctv12',
          },
   
    ],
    // 电梯轿厢监控视频地址
    monitorList1:[
        {
            id: fun.uuid(),
           url: url+':8086/live?app=live&stream=cctv1',
         },
         {
            id: fun.uuid(),
           url: url+':8086/live?app=live&stream=cctv2',
         },
         {
            id: fun.uuid(),
           url: url+':8086/live?app=live&stream=cctv3',
         },
         {
            id: fun.uuid(),
           url: url+':8086/live?app=live&stream=cctv4',
         },
          
       ],
       
    // 电梯电梯间监控视频地址
    monitorList2:[
        {
            id: fun.uuid(),
           url: url+':8085/live?app=live&stream=cctv6',
         },
         {
            id: fun.uuid(),
           url: url+':8085/live?app=live&stream=cctv7',
         },
         {
            id: fun.uuid(),
           url: url+':8085/live?app=live&stream=cctv8',
         },
         {
            id: fun.uuid(),
           url:url+':8085/live?app=live&stream=cctv9',
         },
          
       ],
    // 电梯查看更多视频地址  
    moreVideoList: [
        {
            id: fun.uuid(),
          url: url+':8086/live?app=live&stream=cctv1',
        },
        { id: fun.uuid(),
          url: url+':8086/live?app=live&stream=cctv2',
        },
        {
            id: fun.uuid(),
          url: url+':8086/live?app=live&stream=cctv3',
        },
        {
            id: fun.uuid(),
          url: url+':8086/live?app=live&stream=cctv4',
        },
         {
             id: fun.uuid(),
          url: url+':8086/live?app=live&stream=cctv5',
        },
        {
            id: fun.uuid(),
          url:url+':8086/live?app=live&stream=cctv6',
        },
        {
            id: fun.uuid(),
          url:url+':8085/live?app=live&stream=cctv7',
        },
        {
            id: fun.uuid(),
          url: url+':8085/live?app=live&stream=cctv8',
        },
          {
            id: fun.uuid(),
          url: url+':8085/live?app=live&stream=cctv9',
        },
        {
            id: fun.uuid(),
          url: url+':8085/live?app=live&stream=cctv10',
        },
        {
            id: fun.uuid(),
          url: url+':8085/live?app=live&stream=cctv11',
        },
        {
            id: fun.uuid(),
          url:url+':8085/live?app=live&stream=cctv12',
        },
      
      ],
      // 电梯单个视频地址
      elevatorList:[
        {
          id: fun.uuid(),
        url: url+'/live?app=live&stream=cctv1',
      },
      ]


    }
    
