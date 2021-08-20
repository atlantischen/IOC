<template>
  <div class="theParkOutputValAll">
    <div class="tittle">{{ title }}</div>
    <div
      :id="'outputValueEchart_' + ids"
      :ref="'outputValueEchart_' + ids"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'theParkOutputValAll',
  props: {
    _data: {
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  mounted() {
    this.$nextTick(()=>{
    this.outputValueFun(this.datas);

    })
  },
  methods: {
    // 园区产值
    outputValueFun(val) {
      const { optionName, datas, data2 } = val;
      var option = {
        baseOption: {
          timeline: {
            show: false,
            axisType: 'category',
            // orient: 'vertical',
            loop: false,
            autoPlay: true,
            inverse: true,
            playInterval: this.$retutnZero(data2.value) / data2.value,
            // left: null,
            // right: 0,
            // top: 20,
            // bottom: 20,
            // width: 0,
            // height: 0,
            // symbol: 'none',
            // checkpointStyle: {
            //   borderWidth: 0
            // },
            // controlStyle: {
            //   showNextBtn: false,
            //   showPrevBtn: false
            // },
            data: [],
          },
          tooltip: {
            show: true,
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.8)',
            borderWidth: 1,
            borderColor: '#4396f3',
            padding: [5, 10],
            extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
            textStyle: {
              color: '#fff',
            },
            formatter: (v) => {
              return v.name + ':' + v.value + '%';
            },
          },
          title: {
            show: true,
            text: data2.value,
            link: '',
            target: null,
            subtext: data2.name + '\n' + data2.unit,
            sublink: '',
            subtarget: null,
            left: '22%',
            bottom: '32%',
            textAlign: 'center',
            // backgroundColor:
            // borderColor: '#ccc',
            // borderWidth: 0,
            // padding: 5,
            itemGap: 6,
            textStyle: {
              fontFamily: 'BYfont',
              fontSize: 24,
              color: '#fff',
              fontWeight: 550,
            },
            subtextStyle: {
              fontSize: 12,
              color: '#fff',
            },
          },
          legend: {
            selectedMode: false,
            show: true,
            orient: 'vertical', // 'horizontal'
            right: 8,
            y: 'center',
            data: optionName,
            formatter: function(name) {
              return '{a|' + name + '}';
            },
            textStyle: {
              color: '#fff',
              fontSize: 12,
              padding: [0, 15, 0, 2],
              rich: {
                a: {},
              },
            },
            icon: 'circle',
            itemWidth: 6,
            itemHeight: 6,
            itemGap: 18,
          },
          color: [
            '#4396f3',
            '#95c7ff',
            '#456af3',
            '#0ff',
            '#236390',
            '#ffdd8d',
            '#9a866a',
            '#c9a555',
            '#fff',
          ],
          series: [
            {
              name: '',
              type: 'pie',
              animationDuration: 5000,
              radius: ['62%', '80%'],
              center: ['23%', '50%'],
              // avoidLabelOverlap: false,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              data: [],
            },
          ],
        },
        options: [],
      };
      for (var i = 0; i < optionName.length; i++) {
        option.baseOption.series[0].data[i] = {
          value: datas[i],
          name: optionName[i],
        };
      }
      for (var n = Math.ceil((8 * data2.value) / 10); n <= data2.value; n++) {
        if (n <= data2.value) {
          option.baseOption.timeline.data.push(n);
          option.options.push({
            title: {
              show: true,
              text: n + '',
            },
          });
        }
      }
      this.$redomEchart(this.$refs['outputValueEchart_' + this.ids], option);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/style/gl.less';
.theParkOutputValAll {
  #outputValueEchart,
  [id^='outputValueEchart_'] {
    width: 100%;
    height: 2rem /* 160/80 */;
  }
}
</style>
