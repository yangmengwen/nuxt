<template>
    <div>
        <Logo></Logo>
        这是订单页面
        {{$store.state.userId}}
        <div class="container">
            <p>这是内容</p>
        </div>
        <div class="chart-wrapper">
            <canvas id="mountNode"></canvas>
        </div>
        <div class="wrapper">
            <div class="fixedWrap">
                <table cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>{{tabList.headerList[0].name}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tabList.content">
                           <td>{{item[0]}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="scrollWrap">
                <table cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th v-for="(item,index) in tabList.headerList" v-if="index >=1" :key="item.name">{{item.name}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in tabList.content" :key="index">
                           <td v-for="(i,idx) in item" v-if="idx >=1" :key="idx">{{i}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- <div class="tableWrap table-border">
            <div class="tableHeaderWrap">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item in tabList.headerList" :key="item.name"><div class="cell">{{item.name}}</div></th>
                        </tr>
                        
                    </thead>
                </table>
            </div>
            <div class="tableBodyWarp">
                <table>
                    <tbody>
                        <tr v-for="item in tabList.content" :key="item.zhong">
                            <td v-for="it in item"><div class="cell">{{item.length}}</div></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div> -->
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="province"
            label="省份"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="市区"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            width="300">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="邮编"
            width="120">
            </el-table-column>
        </el-table>   
    </div>
</template>
<script>
import axios from 'axios'
import antvf2 from '@/plugins/antv'
import Logo from '~/components/Logo.vue'

        var F2 = require('@antv/f2/lib/index');
        var ScrollBar = require('@antv/f2/lib/plugin/scroll-bar');
       var interaction = require('@antv/f2/lib/interaction/')
       var pan = require('@antv/f2/lib/interaction/pan');
        F2.Chart.plugins.register(ScrollBar);
        var Legend = require('@antv/f2/lib/plugin/legend');
        F2.Chart.plugins.register(Legend);
export default {
    data() {
        return {
            tabList :{
                headerList:[
                    {name:"日期"},
                    {name:"区域中心"},
                    {name:"重疾基础保障类"},
                    {name:"环比增量"},
                    {name:"现金流风险保障类"},
                    {name:"环比增量"}
                ],
                content:[
                        ["2018-12-01","北京1","重疾基础保障类1","环比增量1","现金流风险保障类1","环比增量1"],
                        ["2018-12-02","北京1","重疾基础保障类1","环比增量1","现金流风险保障类2","环比增量1"],
                        ["2018-12-03","北京1","重疾基础保障类1","环比增量1","现金流风险保障类3","环比增量1"],
                        ["2018-12-04","北京1","重疾基础保障类1","环比增量1","现金流风险保障类4","环比增量1"],
                        
                    ]
            },
            dataList:[
                {
                    year: '1990',
                    num: '123'
                },
                {
                    year: '1991',
                    num: '152'
                },
                {
                    year: '1992',
                    num: '173'
                },
                {
                    year: '1993',
                    num: '166'
                },
                {
                    year: '1994',
                    num: '163'
                },
                {
                    year: '1995',
                    num: '222'
                },
                {
                    year: '1996',
                    num: '565'
                },
            ],
        
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
        }
    },
    mounted() {
        var chart = new F2.Chart({
            id: 'mountNode',
            plugins: ScrollBar,
            pixelRatio: window.devicePixelRatio
        });
        var _this = this
        const data = [
            { genre: 'Sports', sold: 2755 },
            { genre: 'Strategy', sold: 1152 },
            { genre: 'Action', sold: 1200 },
            { genre: 'Shooter', sold: 3560 },
            { genre: 'Other', sold: 1550 },
            { genre: 'Sports1', sold: 2725 },
            { genre: 'Strategy1', sold: 1151 },
            { genre: 'Action1', sold: 1280 },
            { genre: 'Shooter1', sold: 3150 },
            { genre: 'Other1', sold: 1250 },
            { genre: 'Sports2', sold: 2475 },
        ]
        chart.source(data,{
            release: {
                min: 1152,
                max: 2475
            }
        });
        chart.tooltip({
            showCrosshairs: true,
            showItemMarker: false,
            background: {
                radius: 2,
                fill: '#1890ff',
                padding: [3,5]
            },
            nameStyle: {
                fill: '#fff'
            },
            onShow: function onShow(ev) {
                var items = ev.items;
                items[0].name = items[0].title
            }
        });
        chart.interval().position('genre*sold').color('red')
        // chart.line().position('release*count');
        // chart.point().position('release*count').style({
        //     lineWidth: 1,
        //     stroke: '#fff'
        // });
        chart.interaction('pan',{
            mode: 'x',
            speed: 1000,
            step: 5

        });
        chart.scrollBar({
            mode: 'x',
            xStyle: {
                offsetY: -5
            }
        });
        chart.guide().tag({
            position: [1990,123],
            widthPoint: false,
            content: '',
            size: 4,
            limitInPlot: true,
            offsetX: 5,
            direct: 'cr'
        })
        chart.render();
       const arr = this.$integerSort([6,3,9,1,7])
       //console.log(arr)
    },
    components: {
        Logo
    },
    head() {
        return {
            title: '订单'
        }
    },
    async fetch ({app,store,params}) {
        let {data} = axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res.data[0])
            store.commit('setUserId',res.data[0].userId)
        })
    } 
}

</script>
<style lang="scss" scoped>

.wrapper {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    text-align: center;
    background: #fff;
}

.fixedWrap {
}
.scrollWrap {
    overflow-x: scroll;
    flex: 1;
    margin-left: -0.05rem;
}
.fixedWrap,.scrollWrap {
    table {
        border:solid #ddd; 
        border-width:1px 0px 0px 1px;
    }
    tr {
        border:1px solid #ddd;
    }
    th,td {
        padding: 10px 15px;
        white-space: nowrap;
        border:solid #ddd; 
        border-width:0px 1px 1px 0px;
    }

}

    .container {
        width: 200px;
        height: 200px;
        p {
            font-size: 30px;
        }
    }
</style>


