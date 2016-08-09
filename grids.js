
$(window).resize(function(){
	wh();
})
$(document).ready(function(){
	wh();
	$("[id^=bsp]").hide();
	$("[id^=bsp11]").show();
	
        var panelList = $('.draggable');

        panelList.sortable({
            // Only make the .panel-heading child elements support dragging.
            // Omit this to make then entire <li>...</li> draggable.
            handle: '.panel-heading', 
            update: function() {
                $('.panel', panelList).each(function(index, elem) {
                     var $listItem = $(elem),
                         newIndex = $listItem.index();

                     // Persist the new indices.
                });
            }
        });
	
})
.delegate(".btn-group button", "click", function(e) {
	
	var fn =$(this).text();
	
	$("[id^=bsp]").hide();
	$("#bsp"+fn).show();

})
;
function wh(){
	var 
		gr = "lg",
		w = +$(window).width()
	;
	if(w<1200) gr = "md"; 
	if(w<992) gr = "sm"; 
	if(w<768) gr = "xs"; 
	
	$("#rmsg").html("W:"+w+"&nbsp;&nbsp;H:"+$(window).height()+"&nbsp;&nbsp;<b>col-"+gr+"</b>");
}



