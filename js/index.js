     $(function(){
   	    $('#hindi').click(function() {
	     		$("#audioset").show();
				$("#set0").show();
				$("#set1").show();
				$("#set2").show();
				$("#set3").show();
				hindiaudio();
			});
		 $(document).on('pagebeforecreate', '[data-role="content"]', function(){     
    				setTimeout(function(){
        			$.mobile.loading('show');
   						 },1);    
						});

				$(document).on('pageshow', '[data-role="content"]', function(){  
  				  setTimeout(function(){
       				 $.mobile.loading('hide');
    					},300);      
						});
		 $('#english').click(function() {
				$("#audioset").show();
				$("#set0").show();
				$("#set1").show();
				$("#set2").show();
				$("#set3").show();
				englishaudio();
		   });
		   $('#urdu').click(function() {
				$("#audioset").show();
				$("#set0").show();
				$("#set1").show();
				$("#set2").show();
				$("#set3").hide();
				urduaudio();
			}); 
			
		});
/*	$(function(){		
			$('#select-choice-2').change(function() {
				if(this.value =="daily"){
					$("#audioset").hide();
					$("#set10").show();
					$("#set11").show();
					$("#set12").show();
					$("#set13").show();
					$("#set14").hide();
					$("#set15").hide();
					$("#set16").hide();
					$("#set17").hide();
					dailybroadcast();
					
				}
				if(this.value =="weekly"){
					
					$("#set10").show();
					$("#set11").show();
					$("#set12").show();
					$("#set13").show();
					$("#set14").show();
					$("#set15").show();
					$("#set16").show();
					$("#set17").show();
					weeklybroadcast();
					
				}
				if(this.value =="special"){
					
					$("#set10").show();
					$("#set11").hide();
					$("#set12").hide();
					$("#set13").hide();
					$("#set14").hide();
					$("#set15").hide();
					$("#set16").hide();
					$("#set17").hide();
					specialbroadcast();	
				} 
			});
    });
    
   
  $(function() {
 
    var scrollBarLinks = {
        0: '#home',
        1: '#link2',
        2: '#link3',
        3: '#link4',
        4: '#link5',
        5: '#link6',        
    };
    var functions = {
        0: 'topnews()',
        1: 'nationalnews()',
        2: 'internationalnews()',
        3: 'statenews()',
        4: 'businessnews()',
        5: 'sportlnews()',        
    };
    var scrollBarText = {
        0: 'Top News',
        1: 'National',
        2: 'International',
        3: 'States',
        4: 'Business',
        5: 'Sports',        
    };
    var screensize=screen.width;
    var numLinksShown;
    var checkScroll;
    if(screensize>750)
    { 
    	numLinksShown = 6;
      		checkScroll=0;
      		$("#lefticon").hide();
      		$("#righticon").hide();
    }
    if(screensize>610 && screensize<750)
    { 
    	numLinksShown = 3;
      	checkScroll=3;
      	$("#lefticon").hide();
    }
    if(screensize>500 && screensize<610)
    { 
    	numLinksShown = 3;
      	checkScroll=3;
      	$("#lefticon").hide();
    }
    if(screensize>360 && screensize<500)
    { 
    	numLinksShown = 3;
      	checkScroll=3;
      	$("#lefticon").hide();
    }
    var scrollCursor = 0;
   for (var i = 0; i < numLinksShown; i++) {
         $("<a>", {
            'href': scrollBarLinks[i],
            'onclick': functions[i],
            'data-role': 'button',
            'id': 'scrollBarBtn-' + i,
            'data-inline': true,
            'text': scrollBarText[i]
        }).appendTo("#scrollBar").button();
        
    }
    

    $("#scrollBar").swiperight(function() {
        if (scrollCursor == 0) {
            //alert("Can't slide to the right. 0");
            $("#lefticon").hide();
            return false;
        }
        for(var i = 0; i <numLinksShown; i++) {
      		$("#scrollBar > a:last").remove();
      	}
        scrollCursor--;
       for (var i = scrollCursor; i < numLinksShown+scrollCursor; i++) {
         $("<a>", {
            'href': scrollBarLinks[i],
            'onclick': functions[i],
            'data-role': 'button',
            'id': 'scrollBarBtn-' + i,
            'data-inline': true,
            'text': scrollBarText[i]
        }).appendTo("#scrollBar").button();
    	}
      if(scrollCursor>0){
      		$("#righticon").show();
      }
       if (scrollCursor==0 ) {
    		$("#lefticon").hide();
    	}
    });
    
    
    
     $("#lefticon").click(function() {
     
     	if (scrollCursor >0) {
    		$("#righticon").show();
    	}
    	
    	if (scrollCursor == 0) {
        	$("#lefticon").hide();
            alert("Can't slide to the right. 0");
            return false;
         }else{
        for (var i = 0; i <numLinksShown; i++) {
      		$("#scrollBar > a:last").remove();
      	}
        scrollCursor--;
       for (var i = scrollCursor; i < numLinksShown+scrollCursor; i++) {
         $("<a>", {
            'href': scrollBarLinks[i],
            'onclick': functions[i],
            'id': 'scrollBarBtn-' + i,
            'data-inline': true,
            'text': scrollBarText[i]
        }).appendTo("#scrollBar").button();
        
    } 
    }
    if (scrollCursor==0 ) {
    		$("#lefticon").hide();
    	}
    });
    	
    	$("#righticon").click(function() {
    	
    	
        if (scrollCursor >= checkScroll) {
           // alert("Can't slide to the left. " + scrollBarLinks.length);
            return false;
        }else{
        if(scrollCursor <= checkScroll){
         $("#lefticon").show();
        $("#scrollBar > a:first").remove();
        
        var nextBtn = scrollCursor + numLinksShown;
        scrollCursor++;
        
        $("<a>", {
            'href': scrollBarLinks[nextBtn],
            'onclick': functions[nextBtn],
            'id': 'scrollBarBtn-' + (nextBtn),
            'data-role': 'button',
            'data-inline': true,
            	 'text': scrollBarText[nextBtn]
        }).appendTo("#scrollBar").button();
        }
        }
		if(nextBtn==5){
				 $("#righticon").hide();
		}
		 if (scrollCursor==0 ) {
    		$("#lefticon").hide();
    	}
    });
    

    $("#scrollBar").swipeleft(function() {
    	
        if (scrollCursor >= checkScroll) {
            alert("Can't slide to the left. " + scrollBarLinks.length);
            $("#righticon").hide();
            return false;
        }else{
        if(scrollCursor <= checkScroll){
        $("#scrollBar > a:first").remove();
        
        var nextBtn = scrollCursor + numLinksShown;
        scrollCursor++;
        
        $("<a>", {
            'href': scrollBarLinks[nextBtn],
           	'onclick': functions[nextBtn],
            'id': 'scrollBarBtn-' + (nextBtn),
            'data-role': 'button',
            'data-inline': true,
            	 'text': scrollBarText[nextBtn]
        }).appendTo("#scrollBar").button();
        }
        }
        if(nextBtn==5){
				 $("#righticon").hide();
		}
		if(nextBtn<5){
				 $("#lefticon").show();
		}

      });
 }); */
 
 var favouritetitle = {0:'', 1: '', 2:'',  3:'', 4: ''};
 var favouritelink = {0:'',1: '', 2:'',  3:'', 4: ''};
 var favouritecounter; 
 
 function makefavourite(title, link){
 		if(favouritecounter<4){
 			for(var i=favouritecounter; i<5; i++){
 				favouritetitle[i]=title;
 				favouritelink[i]=link;
 			}
 			}else{
 				alert("Plz delete other favourite");
 			}
 }
 
 function getfavourite(){
 		alert("ok");
 }

  var swipeCursor;
  var cursorLength;
 
  function swipeConfig(swipeCur, cursorLen){
  	   swipeCursor=swipeCur;
  	   cursorLength=cursorLen;
 }
  $(function(){
  
   			topnews();
   			
  $("#contentdetails").swipeleft(function() {
            if(swipeCursor<cursorLength){
		            swipeCursor++;
		        	var des=linkinjson[swipeCursor]+"}"+titleinjson[swipeCursor]+"}"+dateinjson[swipeCursor]+"}"+imageinjson[swipeCursor]+"}"+swipeCursor+"}"+cursorLength;
		           	newsInform(des);
		       }else{
	           		
	           	     alert("No News in LeftSwipe");
	           	}
           
 });
 $("#contentdetails").swiperight(function(){
          
          if(swipeCursor>1){
		            swipeCursor--;
		        	var des=linkinjson[swipeCursor]+"}"+titleinjson[swipeCursor]+"}"+dateinjson[swipeCursor]+"}"+imageinjson[swipeCursor]+"}"+swipeCursor+"}"+cursorLength;
		           	newsInform(des);
		          }else{
	           	    
	           	    alert("No News in RightSwipe");
	           	}
        });
      				
   });
 $(function(){
   $("#leftswipe").click(function() {
     	
          if(swipeCursor>1){
		            swipeCursor--;
		        	var des=linkinjson[swipeCursor]+"}"+titleinjson[swipeCursor]+"}"+dateinjson[swipeCursor]+"}"+imageinjson[swipeCursor]+"}"+swipeCursor+"}"+cursorLength;
		           	newsInform(des);
		          }else{
	           	   
	           	    alert("No News in LeftSwipe");
	           	}
        });
   $("#rightswipe").click(function() {
    	   	 	if(swipeCursor<cursorLength){
		            swipeCursor++;
		        	var des=linkinjson[swipeCursor]+"}"+titleinjson[swipeCursor]+"}"+dateinjson[swipeCursor]+"}"+imageinjson[swipeCursor]+"}"+swipeCursor+"}"+cursorLength;
		           	newsInform(des);
		       	}else{
	    	       		
	        	 	    alert("No News in RightSwipe");
	           	}
    	
    		});
    $("#fontsize").click(function() {
    $("#contentdetails").css('font-size','18px');
    });
      });
    
var months = {1: 'Jan', 2: 'Fab', 3: 'Mar',  4: 'Apr', 5: 'May', 6: 'Jun', 7:'Jul', 8:'Aug',  9:'Set', 10:'Oct', 11:'Nov', 12:'Dec', };
function fontchange(){
				var inc=1;
				var el = document.getElementById('outer');
				var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
				var fontSize = parseFloat(style);
				 //alert(fontSize); 
				if(fontSize==16)
					el.style.fontSize = (fontSize + 2) + 'px';
		        if(fontSize==18)
			   		el.style.fontSize = (fontSize + 2) + 'px';
				if(fontSize==20)
			   		el.style.fontSize = (fontSize + 2) + 'px';
			   	if(fontSize==22)
			   		el.style.fontSize = (fontSize - 6) + 'px';		
			  }
function writeInswipe(id, endid){
	    $("#contentdetails").show();
       // content.setAttribute("style","width:auto;height:auto;text-align:justify;");
        var title, link, date;
        var number = document.getElementById('number');
        number.innerHTML="";
        for(var i=0; i<=endid; i++){
          if(id!=i){
        		title=titlejson[i];
        		link3=linkjson[i];
        	    date=datejson[i];
        	    var link = link3.replace("=","\=");
        		var link2 = link.replace("&","\&");
        		var link1 = link2.replace("'","");
        	    newsfeed(link1).done(function(data){
        		  			/*	var res = data.replace("style=\"font-size:12px\;font-family:verdana\;width:100%\;height:75px\;text-align:justify\;padding:4px\;line-height:150%\;\"","class=\"abc\"");
        						var dat1=$(res).find(".abc").html();
        						var dat  = dat1.replace("style=\"float:right\;padding:5px\;padding-left:10px\;\"","style=\"width:150\;height:150\;float:left\;padding:5px\;padding-left:5px\;\"");
  								//var des="'"+link+"}"+title+"}"+date+"}"+img+"}"+i+"}"+items.length+"'";
  								number.innerHTML='<h1>'+info[4]+" of "+info[5]+'</h1>';
  								content.innerHTML='<p style="color:#0033cc;font-size:20px;text-align:justify;font-weight:bold;">'+info[1]+'</p>';
  								content.innerHTML+=info[2]+"<br>";
  					            content.innerHTML+='<p style="font-size:12px;font-family:Helvetica;text-align:justify;">'+dat+'</p>'; */
  	    });	
                  }
        }
       
        //alert(info[4]);
       // alert(info[5]);
        swipeConfig(info[4],info[5]);
        var dat;
        var link = info[0].replace("=","\=");
        var link2 = link.replace("&","\&");
        var link1 = link2.replace("'","");
        //alert(link1);
        newsfeed(link1).done(function(data){
        //alert(data); 
	    var res = data.replace("style=\"font-size:12px\;font-family:verdana\;width:100%\;height:75px\;text-align:justify\;padding:4px\;line-height:150%\;\"","class=\"abc\"");
        var dat1=$(res).find(".abc").html();
        var dat  = dat1.replace("style=\"float:right\;padding:5px\;padding-left:10px\;\"","style=\"width:150\;height:150\;float:left\;padding:5px\;padding-left:5px\;\"");
  		//var des="'"+link+"}"+title+"}"+date+"}"+img+"}"+i+"}"+items.length+"'";
  		content.innerHTML='<p style="color:#0033cc;font-size:20px;text-align:justify;font-weight:bold;">'+info[1]+'</p>';
  		content.innerHTML+=info[2]+"<br>";
  	
  		 content.innerHTML+='<p style="font-size:12px;font-family:Helvetica;text-align:justify;">'+dat+'</p>';
  	    //alert(dat);
  	 }); 
  	// alert(dat);
	
}

function newsInform(des){

        // alert(des);
        document.getElementById('content').innerHTML="";
        document.getElementById('contentdetails').innerHTML="";
        var content = document.getElementById('contentdetails');
        var swipeCounter = document.getElementById('swipeCounter');
        content.setAttribute("style","width:auto;text-align:justify;margin:10px 5px;");
        $("#contentdetails").show();
		var ht=$(window).height();
		h=(ht*70)/100;
		document.getElementById('contentdetails').style.height =h;
        //$('#contentdetails').css('height','900');
        //alert(h);
        var number = document.getElementById('number');
        number.innerHTML="";
        var info=des.split("}");
        swipeConfig(info[4],info[5]);
        //swipeCounter.innerHTML+=info[2]+"<br>";
        var dat;
        var link = info[0].replace("=","\=");
        var link2 = link.replace("&","\&");
        var link1 = link2.replace("'","");
        var endid=info[5].replace("'","");
        //alert(link1);
        newsfeed(link1).done(function(data){
         	    var res = data.replace("style=\"font-size:12px\;font-family:verdana\;width:100%\;height:75px\;text-align:justify\;padding:4px\;line-height:150%\;\"","class=\"abc\"");
		        var dat1=$(res).find(".abc").html();
		        var dat  = dat1.replace("style=\"float:right\;padding:5px\;padding-left:10px\;\"","style=\"width:150\;height:150\;float:left\;padding:5px\;padding-left:5px\;\"");
		        number.innerHTML='<h3>'+info[4]+" of "+endid+'</h3>';
		  		content.innerHTML='<p style="color:#0033cc;font-size:20px;text-align:justify;font-weight:bold;">'+info[1]+'</p>';
		  		content.innerHTML+=info[2]+"<br>";
		  		// content.innerHTML+='<img style="FLOAT:left; MARGIN-RIGHT:5px;width:25%;height:auto;" src="'+info[3]+'"/>';
		  		 content.innerHTML+='<p style="font-size:12px;font-family:Helvetica;text-align:justify;">'+dat+'</p>';
		  	    //alert(dat);
  	 }); 
  	// alert(dat);
  	
         
   }
   
 
function newsInfo(des){
	   $("#contentdetails").show();
		$("#swipeCounter").show();
        document.getElementById('content').innerHTML="";
       document.getElementById('contentdetails').innerHTML="";
        var content = document.getElementById('contentdetails');
        var number = document.getElementById('number');
        number.innerHTML="";
       // number.innerHTML="";
        content.setAttribute("style","width:100%;text-align:justify;margin:10px 5px;");
        var ht=$(window).height();
		h=(ht*80)/100;
		document.getElementById('contentdetails').style.height =h;
        var info=des.split("}");
        swipeConfig(info[4],info[5]);
        var dat;
        var link = info[0].replace("=","\=");
        var link1 = link.replace("&","\&");
        var endid=info[5].replace("'","");
        newsfeed(link1).done(function(data) { 
			    var res  = data.replace("style=\"font-size:12px\;font-family:verdana\;width:100%\;height:75px\;text-align:justify\;padding:4px\;line-height:150%\;\"","class=\"abc\"");
		        dat1=$(res).find(".abc").html();
		      	var dat  = dat1.replace("style=\"float:right\;padding:5px\;padding-left:10px\;\"","style=\"width:150\;height:150\;float:left\;padding:5px\;padding-left:5px\;\"");
		      	number.innerHTML='<h3>'+(info[4])+" of "+endid+'</h3>';
		  		content.innerHTML='<br><p style="color:#0033cc;font-size:20px;text-align:justify;font-weight:bold;">'+info[1]+'</p>';
		  		content.innerHTML+=info[2]+"<br>";
		  		content.innerHTML+='<p style="font-size:12px;font-family:Helvetica;text-align:justify;">'+dat+'</p>';
		  		var ht=$(window).height();
				h=(ht*70)/100;
				document.getElementById('contentdetails').style.height =h;
				document.getElementById('content').style.height =0;
		  		
  	 }); 
  	 
   }
       
   function newsInfo1(des){
   		
   		$("#contentdetails").show();
   		$("#swipeCounter").show();
        document.getElementById('content').innerHTML="";
        document.getElementById('contentdetails').innerHTML="";
        var content = document.getElementById('contentdetails');
        content.setAttribute("style","width:100%;text-align:justify;margin:10px 5px;");
        document.getElementById('contentdetails').style.height =h;
        var number = document.getElementById('number');
        number.innerHTML="";
        var info=des.split("}");
        var dat;
        var link = info[0].replace("=","\=");
        //var des="'"+link+"}"+title+"}"+img+"}"+j+"}"+items.length+"'";
        var link1 = link.replace("&","\&");
        swipeConfig(info[3],info[4]);
        newsfeed(link1).done(function(data) { 
			    var res  = data.replace("style=\"font-size:12px\;font-family:verdana\;width:100%\;height:75px\;text-align:justify\;padding:4px\;line-height:150%\;\"","class=\"abc\"");
		    	dat1=$(res).find(".abc").html();	
		    	var dat  = dat1.replace("style=\"float:right\;padding:5px\;padding-left:10px\;\"","style=\"width:150\;height:150\;float:left\;padding:5px\;padding-left:5px\;\"");
		    	number.innerHTML='<h3>'+info[3]+" of "+info[4]+'</h3>';
		  		content.innerHTML='<p style="font-size:20px;text-align:justify;font-weight:bold;">'+info[1]+'</p>';
		  	    content.innerHTML+='<p  style="font-size:12px;font-family:Helvetica;text-align:justify;">'+dat+'</p>';
		  	    var ht=$(window).height();
		        h=(ht*70)/100;
		        document.getElementById('contentdetails').style.height =h;
		        document.getElementById('content').style.height =0;
  	}); 
  	
   }
			var titleinjson = {0:'', 1: '', 2:'',  3:'', 4: '', 5: '', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'',12:'',13:'',14:'' };
			var linkinjson = { 0:'',1: '', 2:'',  3:'', 4: '', 5: '', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'',12:'',13:'',14:'' };
			var imageinjson = {0:'', 1: '', 2:'',  3:'', 4: '', 5: '', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'',12:'',13:'',14:'' };
			var details = {0:'', 1: '', 2:'',  3:'', 4: '', 5: '', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'',12:'',13:'',14:'' };
			var dateinjson = {0:'', 1: '', 2:'',  3:'', 4: '', 5: '', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'',12:'',13:'',14:'' };   
function topnews() {
				//$('#content').css('height','900');
				$("#contentdetails").hide();
				$("#swipeCounter").hide();
				h=(ht*75)/100;
		document.getElementById('content').style.height =h;
				
				  //section.innerHTML="Headlines";
				   $("#header h1").html("Headlines");
				   //fun1();
				   //New section
				   
				   $('body').bind('hideOpenMenus', function(){
    	$("ul:jqmData(role='menu')").find('li > ul').hide();
		}); 
		var menuHandler = function(e) {
    	$('body').trigger('hideOpenMenus');
    	$(this).find('li > ul').show();
    	e.stopPropagation();
		};
	 $("ul:jqmData(role='menu') li > ul li").click(function(e) {
   	 $('body').trigger('hideOpenMenus');
		e.stopPropagation();
  	});
	 $('body').delegate("ul:jqmData(role='menu')",'click',menuHandler);
	 $('body').click(function(e){	
    $('body').trigger('hideOpenMenus');
});
				   
				   	//End new section
           			var feed = new google.feeds.Feed("http://newsonair.nic.in/top_rss.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                   	feed.load(function(result) {
                   	document.getElementById('content').innerHTML="";
            		if (!result.error) {
	                	var content = document.getElementById('content');
	                	var items = result.xmlDocument.getElementsByTagName('item');
	                	//alert(items.length);
	                	var j=1;
	                	for (var i = 0; i <items.length; i++){
	                		var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var description1=item.getElementsByTagName('description')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		//alert(Title[i]);
      			    		var pubDate=date1.split("/")
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		var div = document.createElement("div");
      			    		//var imgdiv = document.createElement("div");
      			    	 //background-image: url(../images/test-background.gif); height: 200px; width: 400px; border: 1px solid black;
      			    		//div.setAttribute("style","font-size:12px;font-family:verdana;width:100%;height:75px;text-align:justify;padding:4px;line-height:150%;");
      			    		var description=description1.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/, "  ");
      			    		var ul="'"+link+"'";
      			    		//alert(description);
      			    		var img="img/PBL.jpg";
      			    		img=$(description1).find('img:first').attr('src');
      			    		var length=items.length;
      			    		var des="'"+link+"}"+title+"}"+date+"}"+img+"}"+j+"}"+length+"'";
      			    		//div.setAttribute("onclick","newsInfo('"+des+"');");
      			    		//imgdiv.setAttribute("style","background-image: url(img/PBL.jpg);width:100;height:100;float:left;padding:5px;padding-left:5px;");
      			    		div.setAttribute("style","margin-bottom:0.1cm;width:auto;border:1px solid;border-radius:5px;padding:0.2cm;text-align:justify;");
      			    		titleinjson[j]=title;
      			    		linkinjson[j]=link;
      			    		dateinjson[j]=date;
      			    		imageinjson[j]=img;
      			    		//alert(des);
      			    		//alert("--"+Title[i]+"---"+link[i]+"--"+date[i]+"---"+image[i]);
      			    		div.innerHTML = '<a style="text-decoration:none;" onclick="newsInfo('+des+');" href="#" >'+title+'</a><br><br>';
      			    		div.innerHTML +=date;
      			    		div.innerHTML +='<div style="background-image: url(img/PBL.jpg);width:100;height:100;float:left;" id="imgid"><img style="width:100;height:100;float:left;" src="'+img+'"/></div>';
      			    		//var imgid = document.getElementById('imgid');
      			    		//imgdiv.innerHTML+='<img style="width:110;height:115;float:left;padding:5px;padding-left:5px;" src="'+img+'"/>';
      			    		div.innerHTML +=description;
      			    		//div.appendChild(imgdiv);
							content.appendChild(div);
							j++;
      			}
      			
    		}
  		});
	}
		
function nationalnews() {
//section.innerHTML="National";
$("#swipeCounter").hide();
$("#contentdetails").hide();
		h=(ht*75)/100;
		document.getElementById('content').style.height =h;
					$("#header h1").html("National");
        	   		var feed = new google.feeds.Feed("http://newsonair.nic.in/national_rss.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                    feed.load(function(result) {
                    var content = document.getElementById('content').innerHTML="";
            		if (!result.error) {
	                	var content = document.getElementById('content');
       					var items = result.xmlDocument.getElementsByTagName('item');
       					var j=1;
       				   	for (var i = 0; i <items.length; i++){
      						var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var description1=item.getElementsByTagName('description')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		//alert(Title[i]);
      			    		var pubDate=date1.split("/")
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		var div = document.createElement("div");
      			    		//var imgdiv = document.createElement("div");
      			    	 //background-image: url(../images/test-background.gif); height: 200px; width: 400px; border: 1px solid black;
      			    		//div.setAttribute("style","font-size:12px;font-family:verdana;width:100%;height:75px;text-align:justify;padding:4px;line-height:150%;");
      			    		var description=description1.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/, "  ");
      			    		var ul="'"+link+"'";
      			    		//alert(description);
      			    		var img="img/PBL.jpg";
      			    		img=$(description1).find('img:first').attr('src');
      			    		var des="'"+link+"}"+title+"}"+date+"}"+img+"}"+j+"}"+items.length+"'";
      			    		//div.setAttribute("onclick","newsInfo('"+des+"');");
      			    		//imgdiv.setAttribute("style","background-image: url(img/PBL.jpg);width:100;height:100;float:left;padding:5px;padding-left:5px;");
      			    		div.setAttribute("style","margin-bottom:0.1cm;width:auto;border:1px solid;border-radius:5px;padding:0.2cm;text-align:justify;");
      			    		titleinjson[j]=title;
      			    		linkinjson[j]=link;
      			    		dateinjson[j]=date;
      			    		imageinjson[j]=img;
      			    		//alert("--"+Title[i]+"---"+link[i]+"--"+date[i]+"---"+image[i]);
      			    		div.innerHTML = '<a style="text-decoration:none;" onclick="newsInfo('+des+');" href="#" >'+title+'</a><br>';
      			    		div.innerHTML +=date;
      			    		div.innerHTML +='<div style="background-image: url(img/PBL.jpg);width:100;height:100;float:left;" id="imgid"><img style="width:100;height:100;float:left;" src="'+img+'"/></div>';
      			    		//var imgid = document.getElementById('imgid');
      			    		//imgdiv.innerHTML+='<img style="width:110;height:115;float:left;padding:5px;padding-left:5px;" src="'+img+'"/>';
      			    		div.innerHTML +=description;
      			    		//div.appendChild(imgdiv);
							content.appendChild(div);
							j++;
    			   }
    			}
  			});
		}
	function statenews() {
		//section.innerHTML="State";
		$("#header h1").html("State");
		$("#swipeCounter").hide();
		$("#contentdetails").hide();
		h=(ht*75)/100;
		document.getElementById('content').style.height =h;
           	
        	   		var feed = new google.feeds.Feed("http://newsonair.nic.in/state_rss.asp	");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                    feed.load(function(result) {
                    var content = document.getElementById('content').innerHTML="";
            		if (!result.error) {
	                	var content = document.getElementById('content');
       					var items = result.xmlDocument.getElementsByTagName('item');
       					var j=1;
    			    	for (var i = 0; i <items.length; i++){
      						var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var description1=item.getElementsByTagName('description')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		//alert(Title[i]);
      			    		var pubDate=date1.split("/")
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		var div = document.createElement("div");
      			    		//var imgdiv = document.createElement("div");
      			    	    //background-image: url(../images/test-background.gif); height: 200px; width: 400px; border: 1px solid black;
      			    		//div.setAttribute("style","font-size:12px;font-family:verdana;width:100%;height:75px;text-align:justify;padding:4px;line-height:150%;");
      			    		var description=description1.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/, "  ");
      			    		var ul="'"+link+"'";
      			    		//alert(description);
      			    		var img="img/PBL.jpg";
      			    		img=$(description1).find('img:first').attr('src');
      			    		var des="'"+link+"}"+title+"}"+date+"}"+img+"}"+j+"}"+items.length+"'";
      			    		//div.setAttribute("onclick","newsInfo('"+des+"');");
      			    		//imgdiv.setAttribute("style","background-image: url(img/PBL.jpg);width:100;height:100;float:left;padding:5px;padding-left:5px;");
      			    		div.setAttribute("style","margin-bottom:0.1cm;width:auto;border:1px solid;border-radius:5px;padding:0.2cm;text-align:justify;");
      			    		titleinjson[j]=title;
      			    		linkinjson[j]=link;
      			    		dateinjson[j]=date;
      			    		imageinjson[j]=img;
      			    		//alert("--"+Title[i]+"---"+link[i]+"--"+date[i]+"---"+image[i]);
      			    		div.innerHTML = '<a style="text-decoration:none;" onclick="newsInfo('+des+');" href="#" >'+title+'</a><br>';
      			    		div.innerHTML +=date;
      			    		div.innerHTML +='<div style="background-image: url(img/PBL.jpg);width:100;height:100;float:left;" id="imgid"><img style="width:100;height:100;float:left;" src="'+img+'"/></div>';
      			    		//var imgid = document.getElementById('imgid');
      			    		//imgdiv.innerHTML+='<img style="width:110;height:115;float:left;padding:5px;padding-left:5px;" src="'+img+'"/>';
      			    		div.innerHTML +=description;
      			    		//div.appendChild(imgdiv);
							content.appendChild(div);
							j++;
    		   }
    		}
  		});
	}
		
	function internationalnews() {
	$("#contentdetails").hide();
			$("#swipeCounter").hide();
			h=(ht*80)/100;
		document.getElementById('content').style.height =h;
           		//section.innerHTML="International News";
           		$("#header h1").html("International");
        	   		var feed = new google.feeds.Feed("http://newsonair.nic.in/international_rss.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                    feed.load(function(result) {
                    var content = document.getElementById('content').innerHTML="";
            		if (!result.error) {
	                	var content = document.getElementById('content');
       					var items = result.xmlDocument.getElementsByTagName('item');
       				    var j=1;
    			    	for (var i = 0; i <items.length; i++){
    			    	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var description1=item.getElementsByTagName('description')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		//alert(Title[i]);
      			    		var pubDate=date1.split("/")
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		var div = document.createElement("div");
      			    		//var imgdiv = document.createElement("div");
      			    	  //background-image: url(../images/test-background.gif); height: 200px; width: 400px; border: 1px solid black;
      			    		//div.setAttribute("style","font-size:12px;font-family:verdana;width:100%;height:75px;text-align:justify;padding:4px;line-height:150%;");
      			    		var description=description1.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/, "  ");
      			    		var ul="'"+link+"'";
      			    		//alert(description);
      			    		var img="img/PBL.jpg";
      			    		img=$(description1).find('img:first').attr('src');
      			    		var des="'"+link+"}"+title+"}"+date+"}"+img+"}"+j+"}"+items.length+"'";
      			    		//div.setAttribute("onclick","newsInfo('"+des+"');");
      			    		//imgdiv.setAttribute("style","background-image: url(img/PBL.jpg);width:100;height:100;float:left;padding:5px;padding-left:5px;");
      			    		div.setAttribute("style","margin-bottom:0.1cm;width:auto;border:1px solid;border-radius:5px;padding:0.2cm;text-align:justify;");
      			    		titleinjson[j]=title;
      			    		linkinjson[j]=link;
      			    		dateinjson[j]=date;
      			    		imageinjson[j]=img;
      			    		//alert("--"+Title[i]+"---"+link[i]+"--"+date[i]+"---"+image[i]);
      			    		div.innerHTML = '<a style="text-decoration:none;" onclick="newsInfo('+des+');" href="#" >'+title+'</a><br>';
      			    		div.innerHTML +=date;
      			    		div.innerHTML +='<div style="background-image: url(img/PBL.jpg);width:100;height:100;float:left;" id="imgid"><img style="width:100;height:100;float:left;" src="'+img+'"/></div>';
      			    		//var imgid = document.getElementById('imgid');
      			    		//imgdiv.innerHTML+='<img style="width:110;height:115;float:left;padding:5px;padding-left:5px;" src="'+img+'"/>';
      			    		div.innerHTML +=description;
      			    		//div.appendChild(imgdiv);
							content.appendChild(div);
							j++;
    		   }
    		   //content.innerHTML='<br><br><br><br>';
    		}
  		});
	}
	var heightscreen=$(window).height();
   var divsize=(heightscreen*70)/100;
   
	function businessnews() {
	$("#contentdetails").hide();
	$("#swipeCounter").hide();
	h=(ht*75)/100;
		document.getElementById('content').style.height =h;
           	        //section.innerHTML="Business";
           	        $("#header h1").html("Business");
        	   		var feed = new google.feeds.Feed("http://newsonair.nic.in/business_rss.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                    feed.load(function(result) {
                    var content = document.getElementById('content').innerHTML="";
            		if (!result.error) {
	                	var content = document.getElementById('content');
       					var items = result.xmlDocument.getElementsByTagName('item');
       					j=1;
       					for (var i = 0; i <items.length; i++){
      			            var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var description1=item.getElementsByTagName('description')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		var pubDate=date1.split("/")
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		var div = document.createElement("div");
      			    		var description=description1.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/, "  ");
      			    		var ul="'"+link+"'";
      			    		var img="img/PBL.jpg";
      			    		img=$(description1).find('img:first').attr('src');
      			    		var des="'"+link+"}"+title+"}"+date+"}"+img+"}"+j+"}"+items.length+"'";
      			    		div.setAttribute("style","margin-bottom:0.1cm;width:auto;border:1px solid;border-radius:5px;padding:0.2cm;text-align:justify;");
      			    		titleinjson[j]=title;
      			    		linkinjson[j]=link;
      			    		dateinjson[j]=date;
      			    		imageinjson[j]=img;
      			    		div.innerHTML = '<a style="text-decoration:none;" onclick="newsInfo('+des+');" href="#" >'+title+'</a><br>';
      			    		div.innerHTML +=date;
      			    		div.innerHTML +='<div style="background-image: url(img/PBL.jpg);width:100;height:100;float:left;" id="imgid"><img style="width:100;height:100;float:left;" src="'+img+'"/></div>';
      			    		div.innerHTML +=description;
      			    		content.appendChild(div);
      			    		j++;
    		   }
    		}
  		});
	}
     function sportlnews() {
     $("#swipeCounter").hide();
     $("#contentdetails").hide();
     h=(ht*75)/100;
		document.getElementById('content').style.height =h;
     				//section.innerHTML="Sports News";
     				$("#header h1").html("Sports");
           	   		var feed = new google.feeds.Feed("http://newsonair.nic.in/sports_rss.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                    feed.load(function(result) {
                    var content = document.getElementById('content').innerHTML="";
            		if (!result.error) {
	                	var content = document.getElementById('content');
       					var items = result.xmlDocument.getElementsByTagName('item');
       					var j=1;
       					for (var i = 0; i <items.length; i++){
      						var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var description1=item.getElementsByTagName('description')[0].firstChild.nodeValue;
      			    		var div = document.createElement("div");
      			    		div.setAttribute("style","padding:0.1cm;");
      			    		var description=description1.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/, "  ");
      			    		var ul="'"+link+"'";
      			    	    var img=$(description1).find('img:first').attr('src');
      			    		var des="'"+link+"}"+title+"}"+img+"}"+j+"}"+items.length+"'";
      			    	    //div.setAttribute('onclick','newsInfo1("+des+");');
      			    		titleinjson[j]=title;
      			    		linkinjson[j]=link;
      			    		imageinjson[j]=img;
      			    		div.setAttribute("style","margin-bottom:0.1cm;width:auto;border:1px solid;border-radius:5px;padding:0.2cm;text-align:justify;");
      			    		div.innerHTML = '<a style="text-decoration:none;" onclick="newsInfo1('+des+');" href="#" >'+title+'</a><br>';
      			    		div.innerHTML +='<div style="background-image: url(img/PBL.jpg);width:100;height:100;float:left;" id="imgid"><img style="width:100;height:100;float:left;" src="'+img+'"/></div>';
      			    		//div.innerHTML +='<img style="width:100;height:100;float:left;padding:5px;padding-left:5px;" src="'+img+'"/>';
      			    		div.innerHTML +=description;
							content.appendChild(div);
							j++;
      		   }
    		}
  		});
	}
	//var des="'"+link+"}"+title+"}"+img+"'";
	// Audio
	
	function hindiaudio() {
	$("#contentdetails").hide();
	$("#swipeCounter").hide();
					$("#nationalset").hide();
					$("#regionalset").hide();
					$("#programset").hide();
					$("#audioset").show();
					$("#set3").show();
           			$("#audioset").show();
           			$("#audio h1").html("Audio News");
           			$("#audio-content h3").show();
           			$("#audio-content h3").html("Hindi").css('color','#0101DF');
        	   		var feed = new google.feeds.Feed("http://www.newsonair.nic.in/hindi.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                   	feed.load(function(result) {
                   	document.getElementById('content0').innerHTML="";
                   	document.getElementById('content1').innerHTML="";
                   	document.getElementById('content2').innerHTML="";
                   	document.getElementById('content3').innerHTML="";
                   //	document.getElementById('content1').innerHTML="";
            		if (!result.error) {
	                   	//var content1 = document.getElementById('content1');
       					var items = result.xmlDocument.getElementsByTagName('item');
       					
    			    	for (var i = 0; i < items.length; i++){
    			    		 var content = document.getElementById('content'+i);   
    			    	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			        	var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		var pubDate=date1.split("/")
      			     		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		$('#set'+i+' span.ui-btn-text').text(title+"["+date+"]");
      			    		$('#set'+i+' span.ui-btn-text').css('color','#000000');
      			    		 //content.innerHTML= "<h3 align='left' >'"+date+"'<h3>";
      			    		content.innerHTML= "<audio id= \"player\" src='"+ link +"' preload='metadata' controls='download'></audio>";
                            content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      		  }
    		}
  		});
	}   
	
	
	
	function englishaudio() {
	$("#contentdetails").hide();
		$("#nationalset").hide();
	    $("#regionalset").hide();
		$("#programset").hide();
		$("#set3").show();
		$("#audioset").show();
        $("#audio h1").html("Audio News");
        $("#audio-content h3").show();    		
        $("#audio-content h3").html("English").css('color','#0101DF');
        	   		var feed = new google.feeds.Feed("http://www.newsonair.nic.in/eng.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
             		document.getElementById('content0').innerHTML="";
                   	document.getElementById('content1').innerHTML="";
                   	document.getElementById('content2').innerHTML="";
                   	document.getElementById('content3').innerHTML="";
                   	feed.load(function(result) {
               		if (!result.error) {
               		
	             	var items = result.xmlDocument.getElementsByTagName('item');
       			    
    			    	for (var i = 0; i < items.length; i++){
    			    		var content = document.getElementById('content'+i);   
    			    	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		var pubDate=date1.split("/")
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		$('#set'+i+' span.ui-btn-text').text(title+" ["+date+"]");
      			    		$('#set'+i+' span.ui-btn-text').css('color','#000000');
      			    		//content.innerHTML= "<h3 align='left' >'"+date+"'<h3>";
      			    		content.innerHTML= "<audio id= \"player\" src='"+ link +"' preload='metadata' controls='controls' controls='download'></audio>";
      			    		content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      			    		
      			    
      			    	
    		   }
    		}
  		});
	}   
   function urduaudio() {
   $("#contentdetails").hide();
   $("#set3").hide();
   $("#nationalset").hide();
   $("#regionalset").hide();
   $("#programset").hide();
   $("#audioset").show();
   $("#audio h1").html("Audio News");
   $("#audio-content h3").show();
   $("#audio-content h3").html("Urdu").css('color','#0101DF');;
           			var feed = new google.feeds.Feed("http://www.newsonair.nic.in/urdu.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
             		document.getElementById('content0').innerHTML="";
                   	document.getElementById('content1').innerHTML="";
                   	document.getElementById('content2').innerHTML="";
                   	document.getElementById('content3').innerHTML="";audiotitle1
                   	feed.load(function(result) {
                  	if (!result.error) {
	                 	var items = result.xmlDocument.getElementsByTagName('item');
       					for (var i = 0; i < items.length; i++){
    			    		 var content = document.getElementById('content'+i);   
    			    	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    	    var pubDate=date1.split("/");
      			    	 	var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		$('#set'+i+' span.ui-btn-text').text(title+"  ["+date+"]");
      			    		$('#set'+i+' span.ui-btn-text').css('color','#000000');
      			    		//content.innerHTML= "<h3 align='left' >'"+date+"'<h3>";
      			     		content.innerHTML += "<audio id= \"player\" src='"+ link +"' preload='metadata' controls='controls' controls='download'></audio>";
      			    		content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      			       	
    		      }
    		}
  		});
	}
	function dailybrodcast() {
	$("#contentdetails").hide();
					$("#nationalset").hide();
					$("#regionalset").hide();
					$("#audioset").hide();
					$("#programset").show();
					$("#set10").show();	$("#set11").show();	$("#set12").show();	$("#set13").show();	$("#set14").hide();	$("#set15").hide();	$("#set16").hide();	$("#set17").hide();				
					$("#audio h1").html("Programs");
					$("#audio-content h3").show();
					$("#audio-content h3").html("Daily Programs").css('color','#0101DF');;
					
           			var feed = new google.feeds.Feed("http://www.newsonair.nic.in/daily.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                   	feed.load(function(result) {
                  	if (!result.error) {
	                 	var items = result.xmlDocument.getElementsByTagName('item');
       					for (var i = 0; i < items.length; i++){
       						document.getElementById('content1'+i).innerHTML="";
    			    		var content = document.getElementById('content1'+i);   
    			    	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		var pubDate=date1.split("/");
      			     		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		$('#set1'+i+' span.ui-btn-text').text(title+"(IST)  ["+date+"]");
      			    		$('#set1'+i+' span.ui-btn-text').css('color','#000000');
      			    		//content.innerHTML= "<h3 align='left' >'"+date+"'<h3>";
      			     		content.innerHTML = "<audio id= \"player\" src='"+ link +"' preload='metadata' controls='controls' controls='download'></audio>";
      			    		content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      			       	
    		      }
    		}
  		});
	}
   function weeklybroadcast(){
   $("#contentdetails").hide();
   					$("#nationalset").hide();
					$("#regionalset").hide();
   					$("#audioset").hide();
					$("#programset").show();
                   $("#audio h1").html("Programs");
                   $("#audio-content h3").show();
                   $("#audio-content h3").html("Weekly Programs").css('color','#0101DF');;
                   $("#set10").show();	$("#set11").show(); $("#set12").show();	$("#set13").show();	$("#set14").show(); $("#set15").show();	$("#set16").show();	$("#set17").show();
        	   		var feed = new google.feeds.Feed("http://www.newsonair.nic.in/weekly.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                   	feed.load(function(result) {
                   	if (!result.error) {
	              
       					var items = result.xmlDocument.getElementsByTagName('item');
       					
       					for (var i = 0; i < items.length; i++){
       					document.getElementById('content1'+i).innerHTML="";
       				   		var content = document.getElementById('content1'+i);
    			       	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		var pubDate=date1.split("/");
      			     		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		$('#set1'+i+' span.ui-btn-text').text(title+"(IST) ["+date+"]");
      			    		$('#set1'+i+' span.ui-btn-text').css('color','#000000');
      			    		//content.innerHTML= "<h3 align='left' >'"+date+"'<h3>";
      			    		content.innerHTML+= "<audio id= \"player\" src='"+ link +"' preload='metadata' controls='controls' controls='download'></audio>";
      			    		content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      			    		
    		   }
    		}
  		});
	}
	function specialbroadcast(){
				$("#contentdetails").hide();
				$("#nationalset").hide();
				$("#regionalset").hide();
				$("#audioset").hide();
				$("#programset").show();
				$("#audio h1").html("Programs");
				$("#audio-content h3").show();
				$("#audio-content h3").html("Special Programs").css('color','#0101DF');
				$("#set10").show(); $("#set11").hide(); $("#set12").hide();	$("#set13").hide();	$("#set14").hide();	$("#set15").hide();	$("#set16").hide();	$("#set17").hide();
           			var feed = new google.feeds.Feed("http://www.newsonair.nic.in/special.asp");
        	   		feed.setNumEntries(10);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                   	feed.load(function(result) {
                  	if (!result.error) {
                  	
	              		var items = result.xmlDocument.getElementsByTagName('item');
       					for (var i = 0; i < items.length; i++){
       						document.getElementById('content1'+i).innerHTML="";
   						   	var content = document.getElementById('content1'+i);
    			    	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		var pubDate=date1.split("-");
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		$('#set1'+i+' span.ui-btn-text').text(title+"(IST) ["+date+"]");
      			    		$('#set1'+i+' span.ui-btn-text').css('color','#000000');
      			    		content.innerHTML = "<audio id= \"player\" src='"+ link +"' preload='metadata' controls='controls' controls='download'></audio>";
      			    		content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      			    		
    		   }
    		}
  		});
	}
	function nsdlanguagebulletin(){
	$("#contentdetails").hide();
					$("#nationalset").show();
					$("#regionalset").hide();
					$("#audioset").hide();
					$("#programset").hide();
					$("#audio h1").html("Bulletins");
					$("#audio-content h3").hide();
					//$("#container h4").html("NSD Bulletins").css('color','#0101DF');
           			var feed = new google.feeds.Feed("http://www.newsonair.nic.in/nsd.asp");
        	   		feed.setNumEntries(50);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                   	feed.load(function(result){
                   	if (!result.error) {
	              		var items = result.xmlDocument.getElementsByTagName('item');
	              		
	              		for (var i = 0; i < items.length; i++){
       						// alert("Length :"+items.length);
       						document.getElementById('nsdbulletin'+i).innerHTML="";
    			       		var content = document.getElementById('nsdbulletin'+i);   
    			    	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
      			    		var date1=item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
      			    		var pubDate=date1.split("/");
      			    		//alert(pubDate);
      			    		var year=pubDate[2].split(" ");
      			    		var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		//content.innerHTML= "<h2 align='left'>'"+date+"'</h2>";
      			    		$('#nsd'+i+' span.ui-btn-text').text(title+"-Hrs(IST), Date: ["+date+"]");
      			    		$('#nsd'+i+' span.ui-btn-text').css('color','#000000'); 	    		
      			    		content.innerHTML = "<audio id= \"player\" src='"+ link +"' preload='metadata' controls='controls' controls='download'></audio>";
      			    		content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      			    		
      			    		
    		   }
    		}
  		});
	}
	function reglanguagebulletin(){
	$("#contentdetails").hide();
					$("#nationalset").hide();
					$("#regionalset").show();
					$("#audioset").hide();
					$("#programset").hide();
					$("#audio h1").html("Bulletins");
					$("#audio-content h3").hide();
					//$("#container h3").html("NSD Bulletins").css('color','');
           			var feed = new google.feeds.Feed("http://www.newsonair.nic.in/reg.asp");
        	   		feed.setNumEntries(100);
             		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                   	feed.load(function(result){
                   	if (!result.error) {
	              		var items = result.xmlDocument.getElementsByTagName('item');
	              		for (var i = 0; i < items.length; i++){
       						   // alert("Length :"+items.length);
       						document.getElementById('regbulletin'+i).innerHTML="";
    			       		var content = document.getElementById('regbulletin'+i);   
    			    	   	var item = items[i];
      				  		var title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
      			    		var link = item.getElementsByTagName('guid')[0].firstChild.nodeValue;
      			    	    var date1=item.getElementsByTagName('description')[0].firstChild.nodeValue;
      			    	    //alert(date1);
      			    		//var pubDate=date1.split("/");
      			    		//alert(pubDate);
      			    		//var year=pubDate[2].split(" ");
      			    		//var date=pubDate[1]+" "+months[pubDate[0]]+", "+year[0];
      			    		//content.innerHTML= "<h2 align='left'>'"+date+"'</h2>";
      			    		var date=date1.replace(/<a href="(.*?)".*>(.*?)<\/a>/, "  ");
      			    		//alert(date);
      			    		$('#reg'+i+' span.ui-btn-text').text(title+"(IST) ");
      			    		$('#reg'+i+' span.ui-btn-text').css('color','#000000');
      						content.innerHTML = "<audio id=\"player\" src='"+ link +"' preload='metadata' controls='controls' controls='download'></audio>";
      			    		content.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ link +"'><img src='img/dwn.jpg' width='50' height='50'/> </a>";
      			    		//content.innerHTML+="<a href='#' onclick='makeFavourite("+link+","+title+" )'>Make Favourite </a>";
      			    		
    		   }
    		}
  		});
	}
	
  