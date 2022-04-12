$(document).ready(function(){ 
$(".ss_white").hover(function(){
    $(this).animate({'opacity':0},250);
    }, function(){ 
    $(this).animate({'opacity':1},250);
    });
});