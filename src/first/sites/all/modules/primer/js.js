/**
 * Created by dns on 08.06.16.
 */
/*(function($)
{

       $(document).ready(function(){
            $('tr').popover({
                //Установление направления отображения popover
                placement : 'top',
                trigger: 'hover'
            });
    });
    })(jQuery);
*/
(function($)
{
   /* var nids_val = db_select('node', 'n')
        ->fields('n', array('nid'))
        ->condition('n.type', 'curse')
        ->range(0,33)
        ->execute()
        ->fetchCol();*/
    $(document).ready(function(){
        $("tr").hover(function() {
            $.ajax({
                url: 'code.php',             // указываем URL и
                dataType : "object",                     // тип загружаемых данных
                success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                    $.each(data, function(i, val) {    // обрабатываем полученные данные
                        /* ... */
                    });
                }
            });
        /*$('tr').popover({
            //Установление направления отображения popover
            placement : 'top',
            trigger: 'hover'*/
        });
    });
})(jQuery);