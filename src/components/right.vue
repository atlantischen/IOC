<template>
   <div id="IocRightPart" class="IocRightPart">

        <div class="ioc_video">
            <div class="qx_title">视频监控<a href="javascript:;;"  @click="addMore('UI_EVENT_IOC_RightVideoSurveillance_More')">more <i class="iconfont icon-youjiantou"></i></a></div>
            <ul class="video_datas">
                <li>
                    <span class="_red">36</span>
                    <span>告警数</span>
                </li>
                <li>
                    <span class="">10</span>
                    <span>离线数</span>
                </li>
                <li>
                    <span class="_gre">47</span>
                    <span>在线数</span>
                </li>
                <li>
                    <span class="_gre">93</span>
                    <span>总数</span>
                </li>
            </ul>
        </div>
        <div class="ioc_meeting">
            <div class="qx_title">会议室<a href="javascript:;;"  @click="addMore('UI_EVENT_IOC_RightMeetingRoom_More')">more <i class="iconfont icon-youjiantou"></i></a></div>
            <div id="meetEchart" ref="meetEchart_ref"></div>
        </div>
        <!-- 工单管理 -->
        <div class="ioc_WorkOrder">
            <div class="qx_title">工单管理<a href="javascript:;;"  @click="addMore('UI_EVENT_IOC_RightWorkorderManagement_More')">more <i class="iconfont icon-youjiantou"></i></a></div>
            <div class="workOrder_datas">
                <div class="wo_ wo_lf v-h-x">
                    <div class="wo_lf_one v-h-y">
                        <span class="_gre">124</span>
                        <span>当月工单数</span>
                    </div>
                    <div class="wo_lf_two v-h-sb">
                        <div id="WorkOrderInit" ref="WorkOrderInit_ref"></div>
                    </div>
                </div>
                <div class="wo_ wo_rt v-h-x">
                    <div class="wo_lf_one v-h-y">
                        <span class="_gre">45</span>
                        <span>未处理数</span>
                    </div>
                    <div class="wo_lf_two v-h-sb">
                        <div id="WorkOrderInit2" ref="WorkOrderInit2_ref"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ioc_park">
            <div class="qx_title">停车场<a href="javascript:;;"  @click="addMore('UI_EVENT_IOC_RightParkingLot_More')">more <i class="iconfont icon-youjiantou"></i></a></div>
            <div class="workOrder_datas">
                <div class="wo_ wo_lf v-h-x">
                    <div class="wo_lf_one v-h-y">
                        <span class="_gre">420</span>
                        <span>总车位数</span>
                    </div>
                    <div class="wo_lf_two v-h-sb">
                        <div id="parkEchart" ref="parkEchart_ref"></div>
                    </div>
                </div>
            </div>
            <div id="parkEchart2" ref="parkEchart2_ref"></div>
        </div>
    </div>
</template>

<script>
import '../assets/css/iocPage.less'
import {EleResize} from '../assets/js/echarts'
import * as echarts from 'echarts';
export default {
    data(){
        return{

        }
    },
    methods:{
                addMore(name){
                            sendMessageToUnity(name);
                },
                drawLine (dom, option) {
                    // 基于准备好的dom，初始化echarts实例
                    let myChart = echarts.init(document.getElementById(dom))
                    let resizeDiv = document.getElementById(dom)
                    // 绘制图表
                    myChart.setOption(option)
                    console.log(EleResize)
                    let listener = function () {
                        console.log('resize')
                        myChart.resize()
                    }
                    EleResize.on(resizeDiv, listener)
                  
                },
                meetEchartInit() {
                    var dom = 'meetEchart'
                    var option = {
                        // grid: {
                        //   // top: 0,
                        //   right: 0,
                        //   // bottom: 0,
                        //   containLabel: true
                        // },
                        title: {
                            show: true, // 显示策略，默认值true,可选为：true（显示） | false（隐藏）
                            text: '{a|' + 25 + '}{b|%}', // 主标题文本，'\n'指定换行
                            link: '', // 主标题文本超链接,默认值true
                            target: null, // 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                            subtext: '利用率', // 副标题文本，'\n'指定换行
                            sublink: '', // 副标题文本超链接
                            subtarget: null, // 指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                            left: '49%',
                            bottom: '30%',
                            textAlign: 'center', // 水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
                            // backgroundColor: 'rgba(0,0,0,0)', //标题背景颜色，默认'rgba(0,0,0,0)'透明
                            // borderColor: '#ccc', //标题边框颜色,默认'#ccc'
                            // borderWidth: 0, //标题边框线宽，单位px，默认为0（无边框）
                            // padding: 5, //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
                            itemGap: 4, // 主副标题纵向间隔，单位px，默认为10
                            textStyle: { // 主标题文本样式
                                fontFamily: '时尚中黑简体',
                                fontSize: 22,
                                fontWeight: 500,
                                color: '#fff',
                                rich: {
                                    a: {
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        textAlgin: 'center',
                                        color: '#00ffff'
                                    },
                                    b: {
                                        fontSize: 13,
                                        color: '#00ffff'
                                    }
                                }
                            },
                            subtextStyle: {
                                fontFamily: '时尚中黑简体',
                                fontSize: 13,
                                color: '#00ffff'
                            }
                        },
                        series: [{
                            name: '',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            //   labelLayout: function () {
                            //   return {
                            //       x: 0,
                            //       moveOverlap: 'shiftX'
                            //   };
                            //  },
                            label: {
                                formatter: '{per|{c} | } {b|{b}}\n\n',
                                borderWidth: 20,
                                borderRadius: 4,
                                padding: [0, -105],
                                // position: 'left',
                                rich: {
                                    b: {
                                        color: '#00ffff',
                                        fontSize: 12,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#00ffff',
                                        fontSize: 12,
                                        lineHeight: 33,
                                        // fontSize: 12,
                                        // padding: [2, 4],
                                        // borderRadius: 2
                                    }
                                }
                                // position: 'outside',
                                //   // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                //   formatter: '{c} | {b|{b}}',
                                //   // formatter: function (name, value) {
                                //   //   return name
                                //   // },
                                //   // backgroundColor: '#fff',
                                //   // borderColor: '#fff',
                                //   // borderWidth: 1,
                                //   // borderRadius: 4,
                                //   // shadowBlur:3,
                                //   // shadowOffsetX: 2,
                                //   // shadowOffsetY: 2,
                                //   // shadowColor: '#999',
                                //   // padding: [0, 7]
                                // },
                                // emphasis: {
                                //     label: {
                                //         show: true,
                                //         fontSize: '20',
                                //         fontWeight: 'bold'
                                //     }
                                // }
                            },
                            labelLine: {
                                show: true,
                                minTurnAngle: 90,
                                normal: {
                                    length: 20,
                                    length2: 100
                                }
                            },
                            detail: {
                                offsetCenter: [0, -10],
                                textStyle: {
                                    fontSize: 30,
                                    color: '#00ffff'
                                },
                                formatter: function (value) {
                                    return value + '%'
                                }
                            },
                            data: [{
                                    value: 24,
                                    name: '今日预约数',
                                    itemStyle: {
                                        normal: {
                                            color: '#00ffff'
                                        }
                                    }
                                },
                                {
                                    value: 48,
                                    name: '会议室总数',
                                    itemStyle: {
                                        normal: {
                                            color: '#2c566c'
                                        }
                                    }
                                }
                            ]
                        }]
                    }
                     this.drawLine(dom, option)
                    
                // EleResize.on(myChart, listener)
                     
                },
                WorkOrderInit() {
                    var data = [23, 54, 78];
                    var lable = ['投诉', '维修', '报修']
                    var myChart = echarts.init(document.getElementById("WorkOrderInit"));
                    var option = {
                        tooltip: {
                            trigger: 'item'
                            // formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        legend: {
                            show: true,
                            orient: 'vertical', // 'horizontal'
                            y: 'center',
                            left: 18,
                            formatter: function (name) {
                                var i = -1;
                                i += 1
                                return ' ' + name + ': ' + data[lable.indexOf(name)]
                            },
                            data: ['投诉', '维修', '报修'],
                            textStyle: {
                                color: '#fff',
                                fontSize: 13
                            },
                            icon: 'circle',
                            itemWidth: 6, // 设置宽度
                            itemHeight: 6, // 设置高度
                            itemGap: 8 // 设置间距
                        },
                        grid: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            containLabel: true
                        },
                        series: [{
                            name: '',
                            type: 'pie',
                            radius: ['60%', '80%'],
                            center: ['80%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            data: [{
                                    value: data[0],
                                    name: '投诉',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [{
                                                    offset: 0,
                                                    color: '#ff4901'
                                                }]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: data[1],
                                    name: '维修',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [{
                                                    offset: 0,
                                                    color: '#00ffff'
                                                }]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: data[2],
                                    name: '报修',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [{
                                                    offset: 0,
                                                    color: '#7e1602'
                                                }]
                                            )
                                        }
                                    }
                                }
                            ]
                        }]
                    }
                    myChart.setOption(option)
                },
                WorkOrderInit2() {
                    var lable = ['办公区', '公共区', '设备房'];
                    var data = [43, 24, 52];
                    var myChart = echarts.init(document.getElementById("WorkOrderInit2"));
                    var option = {
                        legend: {
                            show: true,
                            orient: 'vertical', // 'horizontal'
                            y: 'center',
                            left: 18,
                            formatter: function (name) {
                                var i = -1;
                                i += 1
                                return ' ' + name + ': ' + data[lable.indexOf(name)]
                            },
                            rich: {
                                b: {
                                    fontSize: 14,
                                    lineHeight: 33,
                                    color: '#fff'
                                }
                            },
                            data: ['办公区', '公共区', '设备房'],
                            textStyle: {
                                color: '#fff',
                                fontSize: 13
                            },
                            icon: 'circle',
                            itemWidth: 6, // 设置宽度
                            itemHeight: 6, // 设置高度
                            itemGap: 8 // 设置间距
                        },
                        tooltip: {
                            trigger: 'item'
                            // formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        // legend: {
                        //     // left: 10,
                        //     data: ['会议室总数', '今日预约数']
                        // },
                        grid: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            containLabel: true
                        },
                        series: [{
                            name: '',
                            type: 'pie',
                            center: ['80%', '50%'],
                            radius: ['60%', '80%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                formatter: '{c} | {b|{b}}',
                                rich: {
                                    // a: {
                                    //     color: '#999',
                                    //     lineHeight: 22,
                                    //     align: 'center'
                                    // },
                                    // abg: {
                                    //     backgroundColor: '#333',
                                    //     width: '100%',
                                    //     align: 'right',
                                    //     height: 22,
                                    //     borderRadius: [4, 4, 0, 0]
                                    // },
                                    // hr: {
                                    //     borderColor: '#aaa',
                                    //     width: '100%',
                                    //     borderWidth: 0.5,
                                    //     height: 0
                                    // },
                                    b: {
                                        fontSize: 12,
                                        lineHeight: 33,
                                        color: '#fff'
                                    }
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [{
                                    value: data[0],
                                    name: '办公区',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [{
                                                    offset: 0,
                                                    color: '#0090ff'
                                                }]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: data[1],
                                    name: '公共区',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [{
                                                    offset: 0,
                                                    color: '#00ffff'
                                                }]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: data[2],
                                    name: '设备房',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [{
                                                    offset: 0,
                                                    color: '#2c566c'
                                                }]
                                            )
                                        }
                                    }
                                }
                            ]
                        }]
                    }
                    myChart.setOption(option)
                },
                parkEchartInit() {
                    var data = [43, 24, 52];
                    var correctRate = 44;
                    var lable = ['B1层', 'B2层', 'B3层'];

                    var myChart = echarts.init(document.getElementById("parkEchart"));
                    var option = {
                        title: {
                            show: true, // 显示策略，默认值true,可选为：true（显示） | false（隐藏）
                            text: '{a|' + 44 + '}{b|%}', // 主标题文本，'\n'指定换行
                            link: '', // 主标题文本超链接,默认值true
                            target: null, // 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                            subtext: '总利用率', // 副标题文本，'\n'指定换行
                            sublink: '', // 副标题文本超链接
                            subtarget: null, // 指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                            right: '-4%',
                            bottom: '30%',
                            textAlign: 'center', // 水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
                            // backgroundColor: 'rgba(0,0,0,0)', //标题背景颜色，默认'rgba(0,0,0,0)'透明
                            // borderColor: '#ccc', //标题边框颜色,默认'#ccc'
                            // borderWidth: 0, //标题边框线宽，单位px，默认为0（无边框）
                            // padding: 5, //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
                            itemGap: 4,
                            textStyle: {
                                fontSize: 20,
                                fontWeight: 500,
                                color: '#fff',
                                rich: {
                                    a: {
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        textAlgin: 'center',
                                        color: '#00ffff'
                                    },
                                    b: {
                                        fontSize: 13,
                                        color: '#00ffff'
                                    }
                                }
                            },
                            subtextStyle: {
                                fontFamily: '时尚中黑简体',
                                fontSize: 12,
                                color: '#00ffff'
                            }
                        },
                        legend: {
                            show: true,
                            orient: 'vertical', // 'horizontal'
                            y: 'center',
                            left: 18,
                            formatter: function (name) {
                                var i = -1;
                                i += 1
                                return ' ' + name + ': ' + data[lable.indexOf(name)]
                            },
                            rich: {
                                b: {
                                    fontSize: 14,
                                    lineHeight: 33,
                                    color: '#fff'
                                }
                            },
                            data: ['B1层', 'B2层', 'B3层'],
                            textStyle: {
                                color: '#fff',
                                fontSize: 13
                            },
                            icon: 'circle',
                            itemWidth: 6, // 设置宽度
                            itemHeight: 6, // 设置高度
                            itemGap: 8 // 设置间距
                        },
                        tooltip: {
                            trigger: 'item'
                            // formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        grid: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            containLabel: true
                        },
                        series: [{
                                name: '',
                                type: 'pie',
                                center: ['80%', '50%'],
                                radius: ['60%', '80%'],
                                avoidLabelOverlap: false,
                                label: {
                                    show: false,
                                    formatter: '{c} | {b|{b}}',
                                    rich: {
                                        // a: {
                                        //     color: '#999',
                                        //     lineHeight: 22,
                                        //     align: 'center'
                                        // },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
                                        // hr: {
                                        //     borderColor: '#aaa',
                                        //     width: '100%',
                                        //     borderWidth: 0.5,
                                        //     height: 0
                                        // },
                                        b: {
                                            fontSize: 12,
                                            lineHeight: 33,
                                            color: '#fff'
                                        }
                                    }
                                },
                                labelLine: {
                                    show: false
                                },
                                data: [{
                                        value: data[0],
                                        name: 'B1层',
                                        itemStyle: {
                                            normal: {
                                                color: new echarts.graphic.LinearGradient(
                                                    0, 0, 0, 1,
                                                    [{
                                                        offset: 0,
                                                        color: '#0090ff'
                                                    }]
                                                )
                                            }
                                        }
                                    },
                                    {
                                        value: data[1],
                                        name: 'B2层',
                                        itemStyle: {
                                            normal: {
                                                color: new echarts.graphic.LinearGradient(
                                                    0, 0, 0, 1,
                                                    [{
                                                        offset: 0,
                                                        color: '#00ffff'
                                                    }]
                                                )
                                            }
                                        }
                                    },
                                    {
                                        value: data[2],
                                        name: 'B3层',
                                        itemStyle: {
                                            normal: {
                                                color: new echarts.graphic.LinearGradient(
                                                    0, 0, 0, 1,
                                                    [{
                                                        offset: 0,
                                                        color: '#2c566c'
                                                    }]
                                                )
                                            }
                                        }
                                    }
                                ]
                            }
                            // {
                            //   name: '',
                            //   type: 'pie',
                            //   center: ['80%', '50%'],
                            //   radius: ['60%', '80%'],
                            //   avoidLabelOverlap: false,
                            //   label: {
                            //     show: false,
                            //     formatter: '{c} | {b|{b}}',
                            //     rich: {
                            //       // a: {
                            //       //     color: '#999',
                            //       //     lineHeight: 22,
                            //       //     align: 'center'
                            //       // },
                            //       // abg: {
                            //       //     backgroundColor: '#333',
                            //       //     width: '100%',
                            //       //     align: 'right',
                            //       //     height: 22,
                            //       //     borderRadius: [4, 4, 0, 0]
                            //       // },
                            //       // hr: {
                            //       //     borderColor: '#aaa',
                            //       //     width: '100%',
                            //       //     borderWidth: 0.5,
                            //       //     height: 0
                            //       // },
                            //       b: {
                            //         fontSize: 12,
                            //         lineHeight: 33,
                            //         color: '#fff'
                            //       }
                            //     }
                            //   },
                            //   labelLine: {
                            //     show: false
                            //   },
                            //   data: [
                            //     {
                            //       value: correctRate,
                            //       name: '总利用率',
                            //       itemStyle: {
                            //         normal: {
                            //           color: new echarts.graphic.LinearGradient(
                            //             0, 0, 0, 1,
                            //             [
                            //               { offset: 0, color: '#02f0fe' }
                            //             ]
                            //           )
                            //         }
                            //       }
                            //     },
                            //     {
                            //       value: 100 - correctRate,
                            //       name: '总利用率',
                            //       itemStyle: {
                            //         normal: { // 颜色渐变
                            //           color: new echarts.graphic.LinearGradient(
                            //             0, 0, 0, 1,
                            //             [
                            //               { offset: 0, color: '#fff' }
                            //             ]
                            //           )
                            //         }
                            //       }
                            //     }
                            //     // {
                            //     //   value: data[0],
                            //     //   name: '0',
                            //     //   itemStyle: {
                            //     //     normal: {
                            //     //       color: new echarts.graphic.LinearGradient(
                            //     //         0, 0, 0, 1,
                            //     //         [
                            //     //           { offset: 0, color: '#fda401' }
                            //     //         ]
                            //     //       )
                            //     //     }
                            //     //   }
                            //     // },
                            //     // {
                            //     //   value: data[1],
                            //     //   name: '1',
                            //     //   itemStyle: {
                            //     //     normal: {
                            //     //       color: new echarts.graphic.LinearGradient(
                            //     //         0, 0, 0, 1,
                            //     //         [
                            //     //           { offset: 0, color: '#d5fb03' }
                            //     //         ]
                            //     //       )
                            //     //     }
                            //     //   }
                            //     // }
                            //   ]
                            // }
                        ]
                    }
                    myChart.setOption(option)
                },
                parkEchartInit2() {
                    var myChart = echarts.init(document.getElementById("parkEchart2"));
                    var option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow' // 'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: '4%',
                            right: '10%',
                            bottom: '0%',
                            top: '20%',
                            containLabel: true
                        },
                        xAxis: {
                            name: '',
                            type: 'value',
                            splitLine: {
                                lineStyle: {
                                    // type: 'dashed',
                                    color: 'rgb(255,255,255,.5)', //左边线的颜色
                                    width: '1' //坐标线的宽度
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(255,255,255,0)',
                                    // type: 'dashed'
                                },
                            },
                            axisLabel: {
                                fontSize: 13,
                                interval: 0,
                                margin: 10,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            // axisLine: {
                            //   show: true
                            // },
                            // axisTick: { // y轴刻度线
                            //   show: true
                            // },
                            bottom: 2,
                            boundaryGap: ['0%', '1%']
                        },
                        yAxis: {
                            name: '(剩余车位数)',
                            nameTextStyle: {
                                color: '#fff',
                            },
                            type: 'category',
                            boundaryGap: ['0%', '1%'],
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(255,255,255,0)',
                                    // type: 'dashed'
                                },
                            },
                            axisLabel: {
                                fontSize: 12,
                                interval: 0,
                                margin: 10,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            data: ['B1', 'B2', 'B3'],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    // type: 'dashed',
                                    color: 'rgb(255,255,255,.5)', //左边线的颜色
                                    width: '1' //坐标线的宽度
                                }
                            },
                            axisLine: {
                                show: true
                            }
                        },
                        series: [{
                            name: '(剩余车位数)',
                            top: 10,
                            color: '#00A6FC',
                            type: 'bar',
                            stack: '总量',
                            barCategoryGap: 2,
                            showBackground: true,
                            backgroundStyle: {
                                color: '#2c566c'
                            },
                            // itemStyle: {
                            //     color: new echarts.graphic.LinearGradient(
                            //         0, 0, 0, 1,
                            //         [
                            //             {offset: 0, color: '#83bff6'},
                            //             {offset: 0.5, color: '#188df0'},
                            //             {offset: 1, color: '#188df0'}
                            //         ]
                            //     )
                            // },
                            itemStyle: {
                                // 通常情况下：
                                normal: {
                                    barBorderRadius: 0,
                                    color: function (params) {
                                        var colorList = [
                                            ['#00ffff', '#0090ff']
                                            // ['#E9EE1C', '#08C6E2'],
                                            // ['#61dbe8', '#0785de'],
                                            // ['#ff9717', '#ff4518'],
                                        ]
                                        // var index = params.dataIndex;
                                        // if (params.dataIndex >= colorList.length) {
                                        //     index = params.dataIndex - colorList.length;
                                        // }
                                        return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                                offset: 0,
                                                color: colorList[0][0]
                                                // color: colorList[index][0]
                                            },
                                            {
                                                offset: 1,
                                                color: colorList[0][1]
                                                // color: colorList[index][1]
                                            }
                                        ])
                                    }
                                }
                            },
                            label: {
                                formatter: '{c}',
                                right: '3%',
                                top: '-4%',
                                show: true,
                                textStyle: {
                                    fontWeight: 400,
                                    fontWeight: 'bold',
                                    fontSize: 13,
                                    color: '#fff'
                                },
                                position: 'right'
                            },
                            barWidth: 12,
                            data: [70, 215, 75]
                        }]
                    }
                    myChart.setOption(option)
                }




        
    
    },
    created(){
    },
    mounted(){
         // 会议室

                this.meetEchartInit();
        // console.log(EleResizem.on,'EleResize');

                // 工单管理
                this.WorkOrderInit()

                this.WorkOrderInit2()
                // 停车场
                this.parkEchartInit()

                this.parkEchartInit2()
    }
}
</script>

<style lang='less' scoped>

</style>