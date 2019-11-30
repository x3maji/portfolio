jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<div class="alert"><span class="close">&times</span>Ваша заявка принята</div>';
$(".fields").hide();} 
else {
result = msg;
}
$('.note').html(result);
}
});
return false;
});
});
/**закрытие всплывающего окна */
$('body').on('click','span.close',function(){
    $('.ajax-contact-form')[0].reset();
    $('.alert').hide();
    $('.fields').show();
    
})