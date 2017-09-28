$(function () {
    // 折线图
    line()

    // 开关切换
    $('.on-off .icon').on('click', function () {
        $(this).toggleClass('active');
        if($('.sel-button').css('display')=='none'){
            setTimeout(function () {
                $('.sel-button').toggle()
            },200)
            $('.mask').toggle()
            $('.sel-button ul li').find('button').addClass('animate_top-active').removeClass('animate_b-active')
            $('.sel-button ul li').each(function (index) {
                var _this=$(this);
                anim_del(_this,index)
            })
        }else{
            $('.sel-button ul li').find('button').removeClass('animate_top-active').addClass('animate_b-active')
            $($('.sel-button ul li').toArray().reverse()).each(function (index) {
                var _this=$(this);
                anim_del(_this,index);
            })
            setTimeout(function () {
                $('.mask').toggle()
                $('.sel-button').toggle()
            },450)
        }
    })
    $('.sel-button ul li button').each(function () {
        $(this).on('click',function () {
            $('.on-off .icon').click()
            var val=$(this).text().toString();
            setTimeout(function () {
                $('.line-title').text(val);
                line()
            },500)
        })
    })
    $('.mask').on('click',function () {
        $('.on-off .icon').click()
    })
    function anim_del(ele,index) {
        ele.find('button').css({'animation-delay': (index / 20) + 's'});
    }
    function line() {
        var chart = new Highcharts.Chart('line', {
            title: {
                text: '',
                style: {
                    fontSize: '18px',
                    color: '#fff'
                },
                x: 0
            },
            chart: {
                backgroundColor: 'transparent',
                type: 'line'
            },
            subtitle: {
                text: '',
                x: -20
            },
            colors: ['#fff'],
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: true,
                    style: {
                        color: '#fff'
                    }
                },
                tickWidth: 0,
                lineColor: 'transparent',
                categories: [30, 31, 37, 35, 36, 30, 35]
            },
            yAxis: {
                plotLines: [{
                    value: 0,
                    width: 0,
                }],
                gridLineWidth: 0,
                labels: {
                    enabled: false,
                },
                enabled: false,
                title: null
            },
            tooltip: {
                valueSuffix: '摄氏度'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false,
                        style: {
                            color: '#fff',
                            fontSize: '10px',
                            fontWeight: 'normal',
                        }
                    },
                },
            },
            series: [{
                name: '温度',
                data: [30, 31, 37, 35, 36, 30, 35],
            }]
        });
    }
})