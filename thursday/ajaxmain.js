/**
 * Created by tynickel on 2/28/14.
 */
$(function() {
    $('div').on('click', function(){
        $.ajax({
            url: "/ajaxmain",
            success: function(result){
                console.log()
                $('#hello').append(result)
            }
        }))
