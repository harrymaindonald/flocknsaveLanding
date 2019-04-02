// console.log("hi");
// console.log("hello"); $(function () { $('[data-toggle="tooltip"]').tooltip() })
$(function () {
    $('[data-toggle="popover"]').popover()
})

$( ".list-form" ).change(function() {
	$(".list-form-states").hide();
	$(".list-form-reminder").show();
});

$(function(){


    $(".parent>.child").hide();
    $(".parent").addClass("notshowing");
    $(".shower.whenshowing").hide();
    $(".whennotshowing").css("display", "inline");
    $(".parent>.shower").on('click', function(e){
        var parent = $(this).parent();

        if (parent.is(".showing")){
            parent.removeClass("showing");
            parent.addClass("notshowing");
            parent.children(".whenshowing").hide();
            parent.children(".whennotshowing").show();
        }else if (parent.is(".notshowing")){
            parent.removeClass("notshowing");
            parent.addClass("showing");
            parent.children(".whennotshowing").hide();
            parent.children(".whenshowing").show();
        }


        parent.children(".child").each(function(){
            if ($(this).is(':hidden')){
                $(this).slideDown(250);
            }else if ($(this).is(':visible')){
                $(this).slideUp(250);
            }
            //$(this).show();
        });
    });



    // LIST OF CATEGORY



    //- - START


    // $("#CategoryOneClosed").on("click", function(){

    //     //Names

    //     $("#CategoryOneOpen").addClass("show");

    //     $("#CategoryOneClosed").addClass("hideCategoryNames");

    //     //UL LI

    //     $("#CategoryOne").removeClass("hideCategoryDiv");


    // });

    //CLOSING

    // $("#CategoryOneOpen").on("click", function(){

    //     //Names

    //     $("#CategoryOneOpen").removeClass("show");
    //     $("#CategoryOneClosed").removeClass("hideCategoryNames");
    //     $("#CategoryOneClosed").addClass("show");

    //     //UL LI

    //     $("#CategoryOne").addClass("hideCategoryDiv");


    // });




    //2 - -



    $("#CategoryTwoClosed").on("click", function(){

        //Names

        $("#CategoryTwoOpen").addClass("show");

        $("#CategoryTwoClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryTwo").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryTwoOpen").on("click", function(){

        //Names

        $("#CategoryTwoOpen").removeClass("show");
        $("#CategoryTwoClosed").removeClass("hideCategoryNames");
        $("#CategoryTwoClosed").addClass("show");

        //UL LI

        $("#CategoryTwo").addClass("hideCategoryDiv");


    });

    //3- - - -

    $("#CategoryThreeClosed").on("click", function(){

        //Names

        $("#CategoryThreeOpen").addClass("show");

        $("#CategoryThreeClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryThree").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryThreeOpen").on("click", function(){

        //Names

        $("#CategoryThreeOpen").removeClass("show");
        $("#CategoryThreeClosed").removeClass("hideCategoryNames");
        $("#CategoryThreeClosed").addClass("show");

        //UL LI

        $("#CategoryThree").addClass("hideCategoryDiv");


    });

    //4

    $("#CategoryFourClosed").on("click", function(){

        //Names

        $("#CategoryFourOpen").addClass("show");

        $("#CategoryFourClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryFour").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryFourOpen").on("click", function(){

        //Names

        $("#CategoryFourOpen").removeClass("show");
        $("#CategoryFourClosed").removeClass("hideCategoryNames");
        $("#CategoryFourClosed").addClass("show");

        //UL LI

        $("#CategoryFour").addClass("hideCategoryDiv");


    });


    //5

    $("#CategoryFiveClosed").on("click", function(){

        //Names

        $("#CategoryFiveOpen").addClass("show");

        $("#CategoryFiveClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryFive").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryFiveOpen").on("click", function(){

        //Names

        $("#CategoryFiveOpen").removeClass("show");
        $("#CategoryFiveClosed").removeClass("hideCategoryNames");
        $("#CategoryFiveClosed").addClass("show");

        //UL LI

        $("#CategoryFive").addClass("hideCategoryDiv");


    });

    //6

    $("#CategorySixClosed").on("click", function(){

        //Names

        $("#CategorySixOpen").addClass("show");

        $("#CategorySixClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategorySix").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategorySixOpen").on("click", function(){

        //Names

        $("#CategorySixOpen").removeClass("show");
        $("#CategorySixClosed").removeClass("hideCategoryNames");
        $("#CategorySixClosed").addClass("show");

        //UL LI

        $("#CategorySix").addClass("hideCategoryDiv");


    });



    //7

    $("#CategorySevenClosed").on("click", function(){

        //Names

        $("#CategorySevenOpen").addClass("show");

        $("#CategorySevenClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategorySeven").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategorySevenOpen").on("click", function(){

        //Names

        $("#CategorySevenOpen").removeClass("show");
        $("#CategorySevenClosed").removeClass("hideCategoryNames");
        $("#CategorySevenClosed").addClass("show");

        //UL LI

        $("#CategorySeven").addClass("hideCategoryDiv");


    });




    //8 - -



    $("#CategoryEightClosed").on("click", function(){

        //Names

        $("#CategoryEightOpen").addClass("show");

        $("#CategoryEightClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryEight").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryEightOpen").on("click", function(){

        //Names

        $("#CategoryEightOpen").removeClass("show");
        $("#CategoryEightClosed").removeClass("hideCategoryNames");
        $("#CategoryEightClosed").addClass("show");

        //UL LI

        $("#CategoryEight").addClass("hideCategoryDiv");


    });

    //9- - - -

    $("#CategoryNineClosed").on("click", function(){

        //Names

        $("#CategoryNineOpen").addClass("show");

        $("#CategoryNineClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryNine").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryNineOpen").on("click", function(){

        //Names

        $("#CategoryNineOpen").removeClass("show");
        $("#CategoryNineClosed").removeClass("hideCategoryNames");
        $("#CategoryNineClosed").addClass("show");

        //UL LI

        $("#CategoryNine").addClass("hideCategoryDiv");


    });

    //10

    $("#CategoryTenClosed").on("click", function(){

        //Names

        $("#CategoryTenOpen").addClass("show");

        $("#CategoryTenClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryTen").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryTenOpen").on("click", function(){

        //Names

        $("#CategoryTenOpen").removeClass("show");
        $("#CategoryTenClosed").removeClass("hideCategoryNames");
        $("#CategoryTenClosed").addClass("show");

        //UL LI

        $("#CategoryTen").addClass("hideCategoryDiv");


    });


    //11

    $("#CategoryElevenClosed").on("click", function(){

        //Names

        $("#CategoryElevenOpen").addClass("show");

        $("#CategoryElevenClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryEleven").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryElevenOpen").on("click", function(){

        //Names

        $("#CategoryElevenOpen").removeClass("show");
        $("#CategoryElevenClosed").removeClass("hideCategoryNames");
        $("#CategoryElevenClosed").addClass("show");

        //UL LI

        $("#CategoryEleven").addClass("hideCategoryDiv");


    });

    //12

    $("#CategoryTwelveClosed").on("click", function(){

        //Names

        $("#CategoryTwelveOpen").addClass("show");

        $("#CategoryTwelveClosed").addClass("hideCategoryNames");

        //UL LI

        $("#CategoryTwelve").removeClass("hideCategoryDiv");


    });

    //CLOSING

    $("#CategoryTwelveOpen").on("click", function(){

        //Names

        $("#CategoryTwelveOpen").removeClass("show");
        $("#CategoryTwelveClosed").removeClass("hideCategoryNames");
        $("#CategoryTwelveClosed").addClass("show");

        //UL LI

        $("#CategoryTwelve").addClass("hideCategoryDiv");


    });



    /// - -  END









    //	NAVIGATION - - - - - - - - - - - - - - -- - - -- - - - - -- - - - - - - - - - - - - - - - - - - - - - -

    $("#bars").on("click", function(){


        $("#nav").addClass("show");
        $("#bars").addClass("barsHide");
        $("#exitNav").removeClass("exitHide");




    });

    //EXIT NAV VIA CROSS

    $("#exitNav").on("click", function(){


        $("#nav").removeClass("show");
        $("#bars").removeClass("barsHide");
        $("#exitNav").addClass("exitHide");




    });

    //EXIT VIA CLICKING SECTION IN NAV

    $(".mobile").on("click", function(){


        $("#nav").removeClass("show");
        $("#exitNav").addClass("exitHide");
        $("#bars").removeClass("barsHide");


    });





    //  READMORE - - - - - - - - - - - - - - - - -


    //ABOUT


    $("#readMoreAbout").on("click", function(){





        $("#mobileHideAbout").addClass("showText");
        $("#readMoreAbout").addClass("hide");
        $("#closeAbout").removeClass("hideExitAbout");


        $(".showText").addClass("animated fadeIn");
        $(".showText").one("animationend",function(){


            $(this).removeClass("animated fadeIn");

        });




    });





    //CLOSE - - - - - - - -  x x x x x x x x x x x x x


    //ABOUT


    $("#closeAbout").on("click", function(){


        $("#mobileHideAbout").removeClass("showText");
        $("#readMoreAbout").removeClass("hide");
        $("#closeAbout").addClass("hideExitAbout");


        $(".showText").addClass("animated fadeOut");
        $(".showText").one("animationend",function(){


            $(this).removeClass("animated fadeOut");

        });



    });

    $("#closeBook").on("click", function(){


        $("#mobileHideAbout").removeClass("showText");
        $("#readMoreAbout").removeClass("hide");
        $("#closeAbout").addClass("hideExitAbout");


        $(".showText").addClass("animated fadeOut");
        $(".showText").one("animationend",function(){


            $(this).removeClass("animated fadeOut");

        });



    });




    // - - - - - - - - - - - - - - - - - - - - - -  SCROLLING




    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 900);
                return false;
            }
        }
    });



    // - - - - - - - - - - - - - - - - - - - - - -  TABS

    jQuery(document).ready(function() {
        jQuery('.tabs .tab-links a').on('click', function(e)  {
            var currentAttrValue = jQuery(this).attr('href');

            // Show/Hide Tabs
            jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

            // Change/remove current tab to active
            jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });
    });






    //HOW IT WORKS MORE BUTTON _ _ _

    //--1


    $("#more-button-0").on("click", function(){


        $("#howitworks-more-0").addClass("show");
        $("#more-button-0").addClass("buttonHide");
        $("#exit-button-0").removeClass("exit-buttonHide");




    });
    $("#more-button-1").on("click", function(){


        $("#howitworks-more-1").addClass("show");
        $("#more-button-1").addClass("buttonHide");
        $("#exit-button-1").removeClass("exit-buttonHide");




    });


    //2


    $("#more-button-2").on("click", function(){


        $("#howitworks-more-2").addClass("show");
        $("#more-button-2").addClass("buttonHide");
        $("#exit-button-2").removeClass("exit-buttonHide");




    });

    $("#exit-button-2").on("click", function(){


        $("#howitworks-more-2").removeClass("show");
        $("#more-button-2").removeClass("buttonHide");
        $("#exit-button-2").addClass("exit-buttonHide");




    });

    //3

    $("#more-button-3").on("click", function(){


        $("#howitworks-more-3").addClass("show");
        $("#more-button-3").addClass("buttonHide");
        $("#exit-button-3").removeClass("exit-buttonHide");




    });

    $("#exit-button-3").on("click", function(){


        $("#howitworks-more-3").removeClass("show");
        $("#more-button-3").removeClass("buttonHide");
        $("#exit-button-3").addClass("exit-buttonHide");




    });
    //4

    $("#more-button-4").on("click", function(){


        $("#howitworks-more-4").addClass("show");
        $("#more-button-4").addClass("buttonHide");
        $("#exit-button-4").removeClass("exit-buttonHide");




    });

    $("#exit-button-4").on("click", function(){


        $("#howitworks-more-4").removeClass("show");
        $("#more-button-4").removeClass("buttonHide");
        $("#exit-button-4").addClass("exit-buttonHide");




    });
    //5

    $("#more-button-5").on("click", function(){


        $("#howitworks-more-5").addClass("show");
        $("#more-button-5").addClass("buttonHide");
        $("#exit-button-5").removeClass("exit-buttonHide");




    });

    $("#exit-button-5").on("click", function(){


        $("#howitworks-more-5").removeClass("show");
        $("#more-button-5").removeClass("buttonHide");
        $("#exit-button-5").addClass("exit-buttonHide");




    });

    //6

    $("#more-button-6").on("click", function(){


        $("#howitworks-more-6").addClass("show");
        $("#more-button-6").addClass("buttonHide");
        $("#exit-button-6").removeClass("exit-buttonHide");




    });

    $("#exit-button-6").on("click", function(){


        $("#howitworks-more-6").removeClass("show");
        $("#more-button-6").removeClass("buttonHide");
        $("#exit-button-6").addClass("exit-buttonHide");




    });


    //7

    $("#more-button-7").on("click", function(){


        $("#howitworks-more-7").addClass("show");
        $("#more-button-7").addClass("buttonHide");
        $("#exit-button-7").removeClass("exit-buttonHide");




    });

    $("#exit-button-7").on("click", function(){


        $("#howitworks-more-7").removeClass("show");
        $("#more-button-7").removeClass("buttonHide");
        $("#exit-button-7").addClass("exit-buttonHide");




    });

    //8

    $("#more-button-8").on("click", function(){


        $("#howitworks-more-8").addClass("show");
        $("#more-button-8").addClass("buttonHide");
        $("#exit-button-8").removeClass("exit-buttonHide");




    });

    $("#exit-button-8").on("click", function(){


        $("#howitworks-more-8").removeClass("show");
        $("#more-button-8").removeClass("buttonHide");
        $("#exit-button-8").addClass("exit-buttonHide");




    });

    //9

    $("#more-button-9").on("click", function(){


        $("#howitworks-more-9").addClass("show");
        $("#more-button-9").addClass("buttonHide");
        $("#exit-button-9").removeClass("exit-buttonHide");




    });

    $("#exit-button-9").on("click", function(){


        $("#howitworks-more-9").removeClass("show");
        $("#more-button-9").removeClass("buttonHide");
        $("#exit-button-9").addClass("exit-buttonHide");




    });

    //10

    $("#more-button-10").on("click", function(){


        $("#howitworks-more-10").addClass("show");
        $("#more-button-10").addClass("buttonHide");
        $("#exit-button-10").removeClass("exit-buttonHide");




    });

    $("#exit-button-10").on("click", function(){


        $("#howitworks-more-10").removeClass("show");
        $("#more-button-10").removeClass("buttonHide");
        $("#exit-button-10").addClass("exit-buttonHide");




    });

    //11

    $("#more-button-11").on("click", function(){


        $("#howitworks-more-11").addClass("show");
        $("#more-button-11").addClass("buttonHide");
        $("#exit-button-11").removeClass("exit-buttonHide");




    });

    $("#exit-button-11").on("click", function(){


        $("#howitworks-more-11").removeClass("show");
        $("#more-button-11").removeClass("buttonHide");
        $("#exit-button-11").addClass("exit-buttonHide");
    });
    
    $("#exit-button-12").on("click", function(){


        $("#howitworks-more-12").removeClass("show");
        $("#more-button-12").removeClass("buttonHide");
        $("#exit-button-12").addClass("exit-buttonHide");
    });


    // END OF HOW IT WORKS








}); // - - - - - - hiddenEND

$(".nextRowEnabler").on("click", function(event) {
    event.preventDefault();
    var nxt = $( this ).parent().parent().next();

    if (nxt.is(":visible")){
        nxt.fadeOut();
        $( this ).find('.end').hide();
        $( this ).find('.start').show();
    }else if (nxt.is(":hidden")) {
        nxt.fadeIn();
        $( this ).find('.start').hide();
        $( this ).find('.end').show();
    }else{
        // This shouldn't really be possible...
    }
});

// Multiline tooltip
/**
 * Add additional form upon click
 */
            $( "div.expander" ).on( "click", "a", function(event) {
                event.preventDefault();
                var last = $( "div.copyable .formcopier" ).last();
                var clone = last.clone();
                var mtags = clone.find("[name*='.']");
                for (var i = 0 ; i < mtags.size(); i++){
                    var oldname = mtags.get( i );
                    var oldtag =$(oldname).attr("name");
                    var split = oldtag.split(".");
                    var newtag = String("");
                    for (var sp in split){
                        var ind = parseInt(split[sp], 10);
                        if (!isNaN(ind)){
                            newtag += String(++ind);
                        }else{
                            newtag += split[sp];
                        }
                        if (sp != split.length -1){
                            newtag += "."
                        }
                    }
                    $(oldname).attr("name", newtag);
                }
                var head = clone.find(".headnum");
                var headn = parseInt(head.text());
                if (!isNaN(headn)){
                    $(head).text(++headn);
                }
                $(clone).find("input.icp").val('');
                $(clone).find("input.icp").attr('value', '');
                last.after(clone);

                if ($( "div.dexpander" ).hasClass("disabled")){
                    $( "div.dexpander" ).removeClass("disabled");
                }

//$(clone).find("input.icp").attr("value", "");
//$(clone).find("select option").attr("selected", null);

$('html,body').animate({scrollTop: clone.offset().top});
            });

/**
 * Remove form on click, up until the final form
 */
            $( "div.dexpander" ).on( "click", "a", function(){
                var dex = $( "div.dexpander" );
                var forms = $( "div.copyable .formcopier" );
                if (forms.length > 1){
                    forms.last().remove();
                }
                if (forms.length == 1){
                    if (!dex.hasClass("disabled")){
                        dex.addClass("disabled");
                    }
                }
            });

function calculateSavings(force){
        var errs = $("#errors");
        errs.empty();

        $("input[name='average_usage']").val("")

        var newErr = function(errstr, errblk) {
            errblk.append("<span class=\"errline\">" + errstr + "</span>").hide().fadeIn(500);
        }

        var pp = function(inp) {
            return inp.trim().replace(/[\$\,]/, '');
        }

        var tcString = pp($("input[name='total_charge']").val());
        var kwhString = pp($("input[name='kwh_used']").val());
        var linesCoString = pp($("#lines_company option:selected").val());
        var numCowString = pp($("input[name='number_cows_milked']").val());
        var mpdString = pp($("select[name='milkings_per_day']").val());
        var numberFarmHouses = pp($("input[name='number_farm_houses']").val());
//var desiredRate = pp($("input[name='desired_rate']").val());
        var cd = {
            "total_charge": parseFloat(tcString),
            "kwh_used": parseInt(kwhString),
            "lines_company": (linesCoString),
            "number_cows_milked": parseInt(numCowString),
            "milkings_per_day": parseInt(mpdString),
            "number_farm_houses": parseInt(numberFarmHouses),
//  "desired_rate": parseFloat(desiredRate),
//"total_charge": "Helllo",
        };

        /*
        if (cd["total_charge"].length > 0 && cd["kwh_used"].length > 0 && cd["lines_company"].length > 0 &&
            cd["number_cows_milked"].length > 0 && cd["milkings_per_day"].length > 0 && cd["number_farm_houses"].length >0){
                alert("Send!");
        }
        */

var nerr = 0;
if (isNaN(cd["total_charge"]) ){
    if (tcString.length > 0 || force){
        newErr("Please enter a valid decimal number for the total charge", errs);
    }
    nerr++
}

if (isNaN(cd["kwh_used"] ) ){
    if(kwhString.length > 0 || force){
        newErr("Please enter a valid decimal number for the Kwh used", errs);
    }
    nerr++
}

if (linesCoString.length <  1){
    newErr("Please enter a valid lines company", errs);
    nerr++
}

if (isNaN(cd["number_cows_milked"] )){
    if(numCowString.length > 0 || force){
        newErr("Please enter a valid number of number of cows milked", errs);
    }
    nerr++
}

if (isNaN(cd["milkings_per_day"] ) ){
    if (mpdString.length > 0||force){
        newErr("Please enter a valid number of milkings per day", errs);
    }
    nerr++
}

if (isNaN(cd["number_farm_houses"] )){
    if((numberFarmHouses.length > 0 || force)){
        newErr("Please enter a valid number of farm houses", errs);
    }
    nerr++
}

/*
        if (isNaN(cd["desired_rate"] )){
            if((desiredRate.length > 0 || force)){
                newErr("Please enter a valid number for the rate", errs);
            }
            nerr++
        }
        */


if (nerr == 0){
    $.ajax({
        method: "POST",
        url: "/savings/",
        data: JSON.stringify(cd),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).success(function(data){
        $("#talk").hide()
        $("#luk").hide()
	    $("#alreadysave").hide()
	    $("#willsave").hide()
	$("#btm_btns").hide()
	$("#cur_price_note").hide()
	
        if (data.success) {
            //newErr("There was <b>no</b> error processing this form", errs);
            if(data.annual_savingsf < 0 ){
	    	$("#alreadysave").show()
	    }else{
	    	$("#willsave").show()
		$("#willsaveval").text(data.annual_savings.toString())
	    }
            $("input[name='average_usage']").val(data.average_total_usage.toString());
	    $("#btm_btns").show()
	    $("#cur_price_note").show()
            //$("#daily_rate_v").text(data.daily_rate.toFixed(3).toString())
            $("#sup_rate_v").text(data.supplier_reserve.toFixed(3).toString())
	    base3 = '/savings/go?q=' + data.average_total_usage.toString() + '&r=' + $("#lines_company option:selected").val();
	    $("#gfbtn").prop("href", base3 + "&tt=gf")
	    $("#bbnbtn").prop("href", base3 + "&tt=bbn")
	    $("#mfbtn").prop("href", base3 + "&tt=mf")


        }else{
            if (data.pricing_error){
            $("input[name='average_usage']").val(data.average_total_usage.toString());
                if (data.talk_to_us.length > 0){
                    $("#luk").show()
                    $("#talk").show()
                    $("#talk").removeData("action")
                    $("#talk").removeData("regarding")
                    $("#talk").attr("data-action", "/action/talk-to-us/" + data.talk_to_us + "?redir=/users/favourites")
                    $("#talk").attr("data-regarding", "Electricity pricing.")
                }else if (data.talk_to_us.length < 1){
                    newErr("Sorry! We don't have any pricing for that lines company just yet.", errs);
                }

               if (data.talk_to_us.length < 1){
                    newErr("We currently don't have any pricing available for this lines company. Click 'Let us Know', and we'll contact you when we find a better deal", errs);
            //        $("#urate").html("$" + data.current_estimated_rate)
                    //$("#talk").data("regarding", "Electricity pricing. Based on your input, we suggest you use " + data.current_estimated_rate + " for the unit value")
                }
            }else{
                newErr("There was an error processing this form", errs);
            }
        }
    }).fail(function(data){
        errs.empty();
        newErr("There was an error processing this form.", errs);
    });
}

//alert("hello");
// alert("total_charge: " + cd["lines_company"]);
}

/* Savings */
$("#kw-savings-form")
    .on("change", ":input", function(){
        //calculateSavings(false);
    })
;

$("#kw-savings-form").on("submit", function(e){
    e.preventDefault();
    calculateSavings(true);
});

$("#favlink").hover(function(e){
    $(this).attr("href", "/users/favourites?ae="+ $("#lines_company").find('option:selected').val())
});

$("#lines_company").change(function(){
    var sel = $(this).find('option:selected');
    $('#favlink').attr("href", "/users/favourites?ae=" + sel.val())

    if(sel.attr("id") == "i-dont-know"){
        $('#dont-know-msg').show()
    }else{
        $('#dont-know-msg').hide()
    }

    /*
     *
    var price = sel.data('price');
    $('#desired_rate').val(price);
    */

    //alert($("#lines_company").find("input[value='"+$(this).val()+"']").value()))
});

function updateVal(target) {
	var bids = {}
	var best_bid = NaN

	var bb = $("span." + target + "-best_bid")
	if (bb.length)
	{
		best_bid = bb.text().replace('$', '').replace(',', '')
		best_bid = parseFloat(best_bid)
	}

	$("input.verbid").each(function() {
		if ($( this ).attr("name").startsWith(target)) {
			var name = $( this ).attr("name").replace('bid', '')
			bids[name] = {}
			bids[name]["bid"] = $(this).val();
		}
	});

	$("input.verqty").each(function() {
		if ($( this ).attr("name").startsWith(target)) {
			var name = $( this ).attr("name").replace('qty', '')
			bids[name]["qty"] = $(this).attr("value");
		}
	});

	$("input.verfee").each(function() {
		if ($( this ).attr("name").startsWith(target)) {
			var name = $( this ).attr("name").replace('fee', '')
			bids[name]["fee"] = $(this).attr("value");
		}
	});

	var sum = 0;
	
	// Fee to use above 1 item
	FIXED_FEE = 4.00
	supplier_fee = 0.0
	ii = 0
	for (var key in bids) {
		your_bid = parseFloat(bids[key]["bid"])
		your_qty = parseFloat(bids[key]["qty"])
		your_fee = parseFloat(bids[key]["fee"])

		if (isNaN(your_bid) || isNaN(your_qty))
			continue;

		sum +=  your_bid * your_qty

		if (isNaN(your_fee))
			continue;

		your_line_fee = (your_fee / 100) * your_bid * your_qty
		supplier_fee += your_line_fee
		ii+=1
	}

	if (ii > 1)
	{
		supplier_fee = (FIXED_FEE/100) * sum
	}

	var output_field = $("input[name='" + target + "']")
	var term_field = $("." + target + "-fee")

	if (!isNaN(best_bid) && sum > best_bid) {
		output_field.addClass("bad_bid")
	} else if (output_field.hasClass("bad_bid")) {
		output_field.removeClass("bad_bid")
	}

	if (!isNaN(sum)) {
		output_field.attr("value", sum.toLocaleString());
		term_field.text("$" + supplier_fee.toLocaleString())
	}
}

$(".verbid").change(function(e){
	target = $(e.target).attr("name")
	updateVal(target.split('.')[0])
});

$("#calculate_button").click(function(e){
    calculateSavings(false)
});

//Homepage bottom reveal info
 
 $(document).ready(function(){
    $("#buyerReveal").hover(function(){
        $("#buyerInfo").fadeTo("5000", "1");
        $("#buyerInfo").css("visibility", "inherit");
        $("#buyerRevealIcon").css("cssText", "color: #17954c !important;");
        
    }, function(){
        $("#buyerInfo").fadeTo("400", "0");
        $("#buyerRevealIcon").css("cssText", "color: white !important;");
    });

    $("#supplierReveal").hover(function(){
        $("#supplierRevealIcon").css("cssText", "color: #147398 !important;");
        $("#supplierInfo").fadeTo("5000", "1");
        $("#supplierInfo").css("visibility", "inherit");
    }, function(){
        $("#supplierInfo").fadeTo("400", "0");
        $("#supplierRevealIcon").css("cssText", "color: white !important;");
    });
  });


  //Landing reveal info



  function scrollDown(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d){
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

 
var moveDownBuyer = document.querySelector('.move-down-btn');
var moveDownSupplier = document.querySelector('.move-down-btn2');


moveDownBuyer.addEventListener('click', function(){
    scrollDown('#buyerInterest', 1000);
});

moveDownSupplier.addEventListener('click', function(){
    scrollDown('#supplierInterest', 1000);
});

var revealBuyerInfo = document.getElementById('landingBuyerReveal');
var revealSupplierInfo = document.getElementById('landingSupplierReveal');
var buyerInfo1 = document.getElementById('buyerUl'); 
var buyerInfo2 = document.getElementById('buyersCats');
var supplierInfo1 = document.getElementById('supplierUl');
var supplierInfo2 = document.getElementById('suppliersCats');


revealBuyerInfo.addEventListener('click', function(){
    if(buyerInfo1.style.visibility === "hidden"){
        buyerInfo1.style.visibility = "visible";
        buyerInfo2.style.visibility = "visible";
        
    } else {
        buyerInfo1.style.visibility = "hidden";
        buyerInfo2.style.visibility = "hidden";
    }
});


revealSupplierInfo.addEventListener('click', function(){
    if(supplierInfo1.style.visibility === "hidden"){
        supplierInfo1.style.visibility = "visible";
        supplierInfo2.style.visibility = "visible";
    } else {
        supplierInfo1.style.visibility = "hidden";
        supplierInfo2.style.visibility = "hidden";
    }
});
