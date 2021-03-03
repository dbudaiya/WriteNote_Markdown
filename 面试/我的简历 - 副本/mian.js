// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
option = {
  title: {},
  tooltip: {},
  legend: {},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [{
        name: "静态页面",
        max: 90
      },
      {
        name: "编程基础",
        max: 90
      },
      {
        name: "Vue全家桶",
        max: 90
      },
      {
        name: "其他框架",
        max: 90
      },
      {
        name: "React全家桶",
        max: 90
      }
    ]
  },
  series: [{
    name: '编程能力分析',
    type: 'radar',
    // areaStyle: {normal: {}},
    data: [{
      value: [80, 90, 80, 70, 80],
      name: ''
    }]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);