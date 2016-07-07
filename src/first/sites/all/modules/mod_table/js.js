/**
 * Created by dns on 08.06.16.
 */

(function($)
{
    $(document).ready(function(){
        $("tr").hover(function() {
            //alert('lylyly1');
            var id=this.id;
            var id1='#'+this.id;
            var time= $('#time').data('time');
            var url = Drupal.settings.basePath + '/foo/ajax';
            var url1=location.protocol + '//' + location.host + url;
          //  $(".popover-content").sparkline(val, {type: 'line', width: '100', height: '50'});
            //alert(time);
            $.ajax({
                type: "POST",
                url: location.protocol + '//' + location.host + url, // указываем URL и
                dataType: 'json', // тип загружаемых данных
                data:{
                    param1: id,
                    param2: time
                },
                success: function (data) { // вешаем свой обработчик на функцию success
                    var tit=data.country;
                    var val=data.num;
                  //  var con1=$(id1).sparkline(data.num['val'],{ type:'line'});
                  //  alert(con);
                   // alert(tit);
                   // $(id1).css('white-space','pre-wrap');
                    //$(id1).data('title', tit).attr('data-title', tit);
                   // $(id1).data('html', "TRUE").attr('data-html', "TRUE");
                   // $(id1).data('content', con).attr('data-content', con);

                    //document.getElementById('one').innerHTML = data;
                   // alert(val);
                    $(id1).popover({
                        //Установление направления отображения popover
                        placement: 'top',
                        trigger: 'click',
                        html: 'TRUE',
                        title: data.country
                    });
                    $(".popover-content").sparkline(val, {type: 'line', width: '100', height: '50'});
                }
            });
        });
    });
})(jQuery);