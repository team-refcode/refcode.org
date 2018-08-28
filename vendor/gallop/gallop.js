$(document).ready(function(){
    // settings
    var autoPlay = true;
    var autoPlaySpeed = 6000;

    // init vars
    var $gallop = $(".gallop");
    var $slides = $gallop.find("li");
    var itms = $slides.length;
    var ct = 0;
    var controls = '';
    var timeout;

    // create controls
    controls += '<div class="retreat">&laquo;</div>';
    controls += '<div class="autoplay"></div>';
    for (var i = 0; i < itms; i++) {
        controls += "<div class='picker' data-item='"+i+"'>"+(i+1)+"</div>";
    }
    controls += '<div class="advance">&raquo;</div>';
    $gallop.append("<div class='controls'/>").find(".controls").append(controls);
    var $pickers = $(".picker");

    // chained jQuery event handlers
    $gallop
	// slide forward
	.on("click", ".advance", function(){
		gallop();
		delayAutoGallop();
	})

	// slide backwards
	.on("click", ".retreat", function(){
		ct += (ct<2) ? itms - ct - 1 : -2;
		gallop();
		delayAutoGallop();
	})

	// toggle autoplay
	.on("click", ".autoplay", function(){
		$(this).toggleClass("off");
		autoPlay = (autoPlay) ? false : true;
		autoGallop();
	})

	// slide pick handler
	.on("click", ".picker", function(){
		gallop($(this).attr("data-item"));
		delayAutoGallop();
	});

    // advance slide
    function gallop(a) {
        var a = a || ct%itms;
        $slides.removeClass("left").each(function(i){
            $this = $(this);
            if(i < a){
                $this.addClass("left");
            }
        });
        $pickers.removeClass("active").eq(a).addClass("active");
        ct = ++a;
    }

    // autoplay
    function autoGallop(){
        if(autoPlay){
			$gallop.find(".advance").addClass("active");
			setTimeout(function(){$gallop.find(".advance").removeClass("active")}, 5);
            gallop();
            timeout = setTimeout( autoGallop, autoPlaySpeed );
        } else {
            clearTimeout(timeout);
        }
    }

    // delay autoplay after user action
    function delayAutoGallop(){
        if(autoPlay){
            clearTimeout(timeout);
            timeout = setTimeout( autoGallop, (autoPlaySpeed * 1.5) );
        }
    }

    // initiate autoplay
    autoGallop();

});
