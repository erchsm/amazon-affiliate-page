$(function() {

 
  $('.flexslider').flexslider({controlNav: false, animation: "fade", slideshowSpeed: 8*1000 }).hover(function(){ $('.flex-direction-nav').fadeIn();}, function(){$('.flex-direction-nav').fadeOut();});
  $('.lightbox').fancybox();
  
  if ($(window).width() >= 959) {
    $('.thumbnail').hover(function(){ $(this).children('.quick_shop').show(); }, function(){ $(this).children('.quick_shop').hide(); })
    $(".quick_shop").leanModal();

      
      $('#feature_image').click(function() {
        $.fancybox.open($(".fancybox"), {"padding": 0, "nextEffect": "fade", "prevEffect": "fade", "index": $(this).find('a').data('index')});
        return false;     
      });
    
  }
  
  $('.thumbnails a').click(function(e) { 
    $('.zoomImg').attr('src', $(this).attr('href'));
    if ($(window).width() >= 767) { 
      if ($('#feature_image a').data('index') != $(this).data('index')) {
        var optionValue = $(this).attr('title');
        $('#feature_image a').attr('href', $(this).attr('href')).data('index', $(this).data('index')); 
        $('#feature_image a img').attr('src', $(this).children('img').attr('src')); 
        $('select.single-option-selector:contains(' + optionValue + ')').val(optionValue).trigger('change');
      }
      e.stopPropagation();
      return false;
    } 
  });
  $('#tag_filter').change(function() { window.location = $('#tag_filter option:selected').val(); });  
  $('#category_filter').change(function() { window.location = $('#category_filter option:selected').val(); });
  $('.update_subtotal').click(function() { $("#cart_form").submit(); return false; });
  $("#cart_form input[type='number']").change(function() {$("#cart_form").submit(); });
  
	var tabs = $('ul.tabs');
	tabs.each(function(i) {
		var tab = $(this).find('> li > a');
		tab.click(function(e) {
			var contentLocation = $(this).attr('href');
			if(contentLocation.charAt(0)=="#") {
				e.preventDefault();
				tab.removeClass('active');
				$(this).addClass('active');
				$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
			}
		});
	});
	
	$(".tweet").tweet({
            join_text: "auto",
            username: "",
            count: 4,
            auto_join_text_default: "",
            auto_join_text_ed: "",
            auto_join_text_ing: "",
            auto_join_text_reply: "",
            auto_join_text_url: "",
            loading_text: "Loading tweets...",
            template: '"{text}" <div class="meta"><span class="label">{tweet_relative_time}</span></div>'
          });
});

function remove_item(id) {
  $("#quantity_" + id + " input")[0].value = 0; 
  $("#cart_form").submit();
}

/*! fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s,l,d,t){var m=d(s),q=d(l),a=d.fancybox=function(){a.open.apply(this,arguments)},u=!1,k=l.createTouch!==t,o=function(a){return"string"===d.type(a)},n=function(b,c){c&&o(b)&&0<b.indexOf("%")&&(b=a.getViewport()[c]/100*parseInt(b,10));return Math.round(b)+"px"};d.extend(a,{version:"2.0.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoResize:!k,autoCenter:!k,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!1,scrolling:"auto",
wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+
(d.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:300,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:300,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",
prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,c){a.close(!0);b&&!d.isArray(b)&&(b=b instanceof d?d(b).get():[b]);a.isActive=!0;a.opts=d.extend(!0,{},a.defaults,c);d.isPlainObject(c)&&c.keys!==t&&(a.opts.keys=c.keys?
d.extend({},a.defaults.keys,c.keys):!1);a.group=b;a._start(a.opts.index||0)},cancel:function(){a.coming&&!1===a.trigger("onCancel")||(a.coming=null,a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onabort=a.imgPreload.onerror=null))},close:function(b){a.cancel();a.current&&!1!==a.trigger("beforeClose")&&(a.unbindEvents(),!a.isOpen||b&&!0===b[0]?(d(".fancybox-wrap").stop().trigger("onReset").remove(),a._afterZoomOut()):(a.isOpen=a.isOpened=
!1,d(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.closeMethod]()))},play:function(b){var c=function(){clearTimeout(a.player.timer)},e=function(){c();a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},f=function(){c();d("body").unbind(".player");a.player.isActive=!1;a.trigger("onPlayEnd")};if(a.player.isActive||b&&!1===b[0])f();else if(a.current&&(a.current.loop||
a.current.index<a.group.length-1))a.player.isActive=!0,d("body").bind({"afterShow.player onUpdate.player":e,"onCancel.player beforeClose.player":f,"beforeLoad.player":c}),e(),a.trigger("onPlayStart")},next:function(){a.current&&a.jumpto(a.current.index+1)},prev:function(){a.current&&a.jumpto(a.current.index-1)},jumpto:function(b){a.current&&(b=parseInt(b,10),1<a.group.length&&a.current.loop&&(b>=a.group.length?b=0:0>b&&(b=a.group.length-1)),a.group[b]!==t&&(a.cancel(),a._start(b)))},reposition:function(b,
c){var e;a.isOpen&&(e=a._getPosition(c),b&&"scroll"===b.type?(delete e.position,a.wrap.stop(!0,!0).animate(e,200)):a.wrap.css(e))},update:function(b){a.isOpen&&(u||setTimeout(function(){var c=a.current,e=!b||b&&"orientationchange"===b.type;if(u&&(u=!1,c)){if(!b||"scroll"!==b.type||e)c.autoSize&&"iframe"!==c.type&&(a.inner.height("auto"),c.height=a.inner.height()),(c.autoResize||e)&&a._setDimension(),c.canGrow&&"iframe"!==c.type&&a.inner.height("auto");(c.autoCenter||e)&&a.reposition(b);a.trigger("onUpdate")}},
200),u=!0)},toggle:function(){a.isOpen&&(a.current.fitToView=!a.current.fitToView,a.update())},hideLoading:function(){q.unbind("keypress.fb");d("#fancybox-loading").remove()},showLoading:function(){a.hideLoading();q.bind("keypress.fb",function(b){27===b.keyCode&&(b.preventDefault(),a.cancel())});d('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")},getViewport:function(){return{x:m.scrollLeft(),y:m.scrollTop(),w:k&&s.innerWidth?s.innerWidth:m.width(),h:k&&s.innerHeight?
s.innerHeight:m.height()}},unbindEvents:function(){a.wrap&&a.wrap.unbind(".fb");q.unbind(".fb");m.unbind(".fb")},bindEvents:function(){var b=a.current,c=b.keys;b&&(m.bind("resize.fb orientationchange.fb"+(b.autoCenter&&!b.fixed?" scroll.fb":""),a.update),c&&q.bind("keydown.fb",function(b){var f;f=b.target||b.srcElement;if(!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey&&(!f||!f.type&&!d(f).is("[contenteditable]")))f=b.keyCode,-1<d.inArray(f,c.close)?(a.close(),b.preventDefault()):-1<d.inArray(f,c.next)?
(a.next(),b.preventDefault()):-1<d.inArray(f,c.prev)&&(a.prev(),b.preventDefault())}),d.fn.mousewheel&&b.mouseWheel&&1<a.group.length&&a.wrap.bind("mousewheel.fb",function(b,c){var d=b.target||null;if(0!==c&&(!d||0===d.clientHeight||d.scrollHeight===d.clientHeight&&d.scrollWidth===d.clientWidth))b.preventDefault(),a[0<c?"prev":"next"]()}))},trigger:function(b,c){var e,f=c||a[-1<d.inArray(b,["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(f){d.isFunction(f[b])&&(e=f[b].apply(f,Array.prototype.slice.call(arguments,
1)));if(!1===e)return!1;f.helpers&&d.each(f.helpers,function(c,e){if(e&&d.isPlainObject(a.helpers[c])&&d.isFunction(a.helpers[c][b]))a.helpers[c][b](e,f)});d.event.trigger(b+".fb")}},isImage:function(a){return o(a)&&a.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)},isSWF:function(a){return o(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(b){var c={},e=a.group[b]||null,f,g,i;if(e&&(e.nodeType||e instanceof d))f=!0,d.metadata&&(c=d(e).metadata());c=d.extend(!0,{},a.opts,{index:b,element:e},d.isPlainObject(e)?
e:c);d.each(["href","title","content","type"],function(b,g){c[g]=a.opts[g]||f&&d(e).attr(g)||c[g]||null});"number"===typeof c.margin&&(c.margin=[c.margin,c.margin,c.margin,c.margin]);c.modal&&d.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});a.coming=c;if(!1===a.trigger("beforeLoad"))a.coming=null;else{g=c.type;b=c.href||e;g||(f&&(g=d(e).data("fancybox-type"),g||(g=(g=e.className.match(/fancybox\.(\w+)/))?
g[1]:null)),!g&&o(b)&&(a.isImage(b)?g="image":a.isSWF(b)?g="swf":b.match(/^#/)&&(g="inline")),g||(g=f?"inline":"html"),c.type=g);if("inline"===g||"html"===g){if(c.content||(c.content="inline"===g?d(o(b)?b.replace(/.*(?=#[^\s]+$)/,""):b):e),!c.content||!c.content.length)g=null}else b||(g=null);"ajax"===g&&o(b)&&(i=b.split(/\s+/,2),b=i.shift(),c.selector=i.shift());c.href=b;c.group=a.group;c.isDom=f;switch(g){case "image":a._loadImage();break;case "ajax":a._loadAjax();break;case "inline":case "iframe":case "swf":case "html":a._afterLoad();
break;default:a._error("type")}}},_error:function(b){a.hideLoading();d.extend(a.coming,{type:"html",autoSize:!0,minWidth:0,minHeight:0,padding:15,hasError:b,content:a.coming.tpl.error});a._afterLoad()},_loadImage:function(){var b=a.imgPreload=new Image;b.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width;a.coming.height=this.height;a._afterLoad()};b.onerror=function(){this.onload=this.onerror=null;a._error("image")};b.src=a.coming.href;(b.complete===t||!b.complete)&&a.showLoading()},
_loadAjax:function(){a.showLoading();a.ajaxLoad=d.ajax(d.extend({},a.coming.ajax,{url:a.coming.href,error:function(b,c){a.coming&&"abort"!==c?a._error("ajax",b):a.hideLoading()},success:function(b,c){"success"===c&&(a.coming.content=b,a._afterLoad())}}))},_preloadImages:function(){var b=a.group,c=a.current,e=b.length,f,g,i,h=Math.min(c.preload,e-1);if(c.preload&&!(2>b.length))for(i=1;i<=h;i+=1)if(f=b[(c.index+i)%e],g=f.href||d(f).attr("href")||f,"image"===f.type||a.isImage(g))(new Image).src=g},_afterLoad:function(){a.hideLoading();
!a.coming||!1===a.trigger("afterLoad",a.current)?a.coming=!1:(a.isOpened?(d(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.prevMethod]()):(d(".fancybox-wrap").stop().trigger("onReset").remove(),a.trigger("afterClose")),a.unbindEvents(),a.isOpen=!1,a.current=a.coming,a.wrap=d(a.current.tpl.wrap).addClass("fancybox-"+(k?"mobile":"desktop")+" fancybox-type-"+a.current.type+" fancybox-tmp "+a.current.wrapCSS).appendTo("body"),
a.skin=d(".fancybox-skin",a.wrap).css("padding",n(a.current.padding)),a.outer=d(".fancybox-outer",a.wrap),a.inner=d(".fancybox-inner",a.wrap),a._setContent())},_setContent:function(){var b=a.current,c=b.content,e=b.type,f=b.minWidth,g=b.minHeight,i=b.maxWidth,h=b.maxHeight;switch(e){case "inline":case "ajax":case "html":b.selector?c=d("<div>").html(c).find(b.selector):c instanceof d&&(c.parent().hasClass("fancybox-inner")&&c.parents(".fancybox-wrap").unbind("onReset"),c=c.show().detach(),d(a.wrap).bind("onReset",
function(){c.appendTo("body").hide()}));b.autoSize&&(f=d('<div class="fancybox-wrap '+a.current.wrapCSS+' fancybox-tmp"></div>').appendTo("body").css({minWidth:n(f,"w"),minHeight:n(g,"h"),maxWidth:n(i,"w"),maxHeight:n(h,"h")}).append(c),b.width=f.width(),b.height=f.height(),f.width(a.current.width),f.height()>b.height&&(f.width(b.width+1),b.width=f.width(),b.height=f.height()),c=f.contents().detach(),f.remove());break;case "image":c=b.tpl.image.replace("{href}",b.href);b.aspectRatio=!0;break;case "swf":c=
b.tpl.swf.replace(/\{width\}/g,b.width).replace(/\{height\}/g,b.height).replace(/\{href\}/g,b.href);break;case "iframe":c=d(b.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr("scrolling",b.scrolling).attr("src",b.href),b.scrolling=k?"scroll":"auto"}if("image"===e||"swf"===e)b.autoSize=!1,b.scrolling="visible";"iframe"===e&&b.autoSize?(a.showLoading(),a._setDimension(),a.inner.css("overflow",b.scrolling),c.bind({onCancel:function(){d(this).unbind();a._afterZoomOut()},load:function(){a.hideLoading();
try{this.contentWindow.document.location&&(a.current.height=d(this).contents().find("body").height())}catch(b){a.current.autoSize=!1}a[a.isOpen?"_afterZoomIn":"_beforeShow"]()}}).appendTo(a.inner)):(a.inner.append(c),a._beforeShow())},_beforeShow:function(){a.coming=null;a.trigger("beforeShow");a._setDimension();a.wrap.hide().removeClass("fancybox-tmp");a.bindEvents();a._preloadImages();a.transitions[a.isOpened?a.current.nextMethod:a.current.openMethod]()},_setDimension:function(){var b=a.wrap,c=
a.inner,e=a.current,f=a.getViewport(),g=e.margin,i=2*e.padding,h=e.width,j=e.height,r=e.maxWidth+i,k=e.maxHeight+i,l=e.minWidth+i,m=e.minHeight+i,p;f.w-=g[1]+g[3];f.h-=g[0]+g[2];o(h)&&0<h.indexOf("%")&&(h=(f.w-i)*parseFloat(h)/100);o(j)&&0<j.indexOf("%")&&(j=(f.h-i)*parseFloat(j)/100);g=h/j;h+=i;j+=i;e.fitToView&&(r=Math.min(f.w,r),k=Math.min(f.h,k));if(e.aspectRatio){if(h>r&&(h=r,j=(h-i)/g+i),j>k&&(j=k,h=(j-i)*g+i),h<l&&(h=l,j=(h-i)/g+i),j<m)j=m,h=(j-i)*g+i}else h=Math.max(l,Math.min(h,r)),j=Math.max(m,
Math.min(j,k));h=Math.round(h);j=Math.round(j);d(b.add(c)).width("auto").height("auto");c.width(h-i).height(j-i);b.width(h);p=b.height();if(h>r||p>k)for(;(h>r||p>k)&&h>l&&p>m;)j-=10,e.aspectRatio?(h=Math.round((j-i)*g+i),h<l&&(h=l,j=(h-i)/g+i)):h-=10,c.width(h-i).height(j-i),b.width(h),p=b.height();e.dim={width:n(h),height:n(p)};e.canGrow=e.autoSize&&j>m&&j<k;e.canShrink=!1;e.canExpand=!1;if(h-i<e.width||j-i<e.height)e.canExpand=!0;else if((h>f.w||p>f.h)&&h>l&&j>m)e.canShrink=!0;a.innerSpace=p-i-
c.height()},_getPosition:function(b){var c=a.current,e=a.getViewport(),f=c.margin,d=a.wrap.width()+f[1]+f[3],i=a.wrap.height()+f[0]+f[2],h={position:"absolute",top:f[0]+e.y,left:f[3]+e.x};c.autoCenter&&c.fixed&&!b&&i<=e.h&&d<=e.w&&(h={position:"fixed",top:f[0],left:f[3]});h.top=n(Math.max(h.top,h.top+(e.h-i)*c.topRatio));h.left=n(Math.max(h.left,h.left+0.5*(e.w-d)));return h},_afterZoomIn:function(){var b=a.current,c=b?b.scrolling:"no";if(b&&(a.isOpen=a.isOpened=!0,a.wrap.addClass("fancybox-opened"),
a.inner.css("overflow","yes"===c?"scroll":"no"===c?"hidden":c),a.trigger("afterShow"),a.update(),(b.closeClick||b.nextClick)&&a.inner.css("cursor","pointer").bind("click.fb",function(c){if(!d(c.target).is("a")&&!d(c.target).parent().is("a"))a[b.closeClick?"close":"next"]()}),b.closeBtn&&d(b.tpl.closeBtn).appendTo(a.skin).bind("click.fb",a.close),b.arrows&&1<a.group.length&&((b.loop||0<b.index)&&d(b.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(b.loop||b.index<a.group.length-1)&&d(b.tpl.next).appendTo(a.outer).bind("click.fb",
a.next)),a.opts.autoPlay&&!a.player.isActive))a.opts.autoPlay=!1,a.play()},_afterZoomOut:function(){var b=a.current;a.wrap.trigger("onReset").remove();d.extend(a,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,skin:null,outer:null,inner:null});a.trigger("afterClose",b)}});a.transitions={getOrigPosition:function(){var b=a.current,c=b.element,e=b.padding,f=d(b.orig),g={},i=50,h=50;!f.length&&b.isDom&&d(c).is(":visible")&&(f=d(c).find("img:first"),f.length||(f=d(c)));f.length?
(g=f.offset(),f.is("img")&&(i=f.outerWidth(),h=f.outerHeight())):(b=a.getViewport(),g.top=b.y+0.5*(b.h-h),g.left=b.x+0.5*(b.w-i));return g={top:n(g.top-e),left:n(g.left-e),width:n(i+2*e),height:n(h+2*e)}},step:function(b,c){var e=c.prop,d,g;if("width"===e||"height"===e)d=Math.ceil(b-2*a.current.padding),"height"===e&&(g=(b-c.start)/(c.end-c.start),c.start>c.end&&(g=1-g),d-=a.innerSpace*g),a.inner[e](d)},zoomIn:function(){var b=a.wrap,c=a.current,e=c.openEffect,f="elastic"===e,g=d.extend({},c.dim,
a._getPosition(f)),i=d.extend({opacity:1},g);delete i.position;f?(g=this.getOrigPosition(),c.openOpacity&&(g.opacity=0),a.outer.add(a.inner).width("auto").height("auto")):"fade"===e&&(g.opacity=0);b.css(g).show().animate(i,{duration:"none"===e?0:c.openSpeed,easing:c.openEasing,step:f?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var b=a.wrap,c=a.current,d=c.openEffect,f="elastic"===d,g={opacity:0};f&&("fixed"===b.css("position")&&b.css(a._getPosition(!0)),g=this.getOrigPosition(),c.closeOpacity&&
(g.opacity=0));b.animate(g,{duration:"none"===d?0:c.closeSpeed,easing:c.closeEasing,step:f?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var b=a.wrap,c=a.current,d=c.nextEffect,f="elastic"===d,g=a._getPosition(f),i={opacity:1};g.opacity=0;f&&(g.top=n(parseInt(g.top,10)-200),i.top="+=200px");b.css(g).show().animate(i,{duration:"none"===d?0:c.nextSpeed,easing:c.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var b=a.wrap,c=a.current,e=c.prevEffect,f={opacity:0};b.removeClass("fancybox-opened");
"elastic"===e&&(f.top="+=200px");b.animate(f,{duration:"none"===e?0:c.prevSpeed,easing:c.prevEasing,complete:function(){d(this).trigger("onReset").remove()}})}};a.helpers.overlay={overlay:null,update:function(){var a,c;this.overlay.width("100%").height("100%");d.browser.msie||k?(a=Math.max(l.documentElement.scrollWidth,l.body.scrollWidth),c=Math.max(l.documentElement.offsetWidth,l.body.offsetWidth),a=a<c?m.width():a):a=q.width();this.overlay.width(a).height(q.height())},beforeShow:function(b){this.overlay||
(b=d.extend(!0,{},a.defaults.helpers.overlay,b),this.overlay=d('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"),b.closeClick&&this.overlay.bind("click.fb",a.close),a.current.fixed&&!k?this.overlay.addClass("overlay-fixed"):(this.update(),this.onUpdate=function(){this.update()}),this.overlay.fadeTo(b.speedIn,b.opacity))},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||0,function(){d(this).remove()});this.overlay=null}};a.helpers.title={beforeShow:function(b){var c;
if(c=a.current.title)c=d('<div class="fancybox-title fancybox-title-'+b.type+'-wrap">'+c+"</div>").appendTo("body"),"float"===b.type&&(c.width(c.width()),c.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(parseInt(c.css("margin-bottom"),10))),c.appendTo("over"===b.type?a.inner:"outside"===b.type?a.wrap:a.skin)}};d.fn.fancybox=function(b){var c=d(this),e=this.selector||"",f,g=function(g){var h=this,j=f,k;!g.ctrlKey&&!g.altKey&&!g.shiftKey&&!g.metaKey&&!d(h).is(".fancybox-wrap")&&
(g.preventDefault(),g=b.groupAttr||"data-fancybox-group",k=d(h).attr(g),k||(g="rel",k=h[g]),k&&""!==k&&"nofollow"!==k&&(h=e.length?d(e):c,h=h.filter("["+g+'="'+k+'"]'),j=h.index(this)),b.index=j,a.open(h,b))},b=b||{};f=b.index||0;e?q.undelegate(e,"click.fb-start").delegate(e,"click.fb-start",g):c.unbind("click.fb-start").bind("click.fb-start",g);return this};d(l).ready(function(){a.defaults.fixed=d.support.fixedPosition||!(d.browser.msie&&6>=d.browser.version)&&!k})})(window,document,jQuery);


// leanModal v1.0 by Ray Stone - http://finelysliced.com.au
(function($){$.fn.extend({leanModal:function(_1){var _2={top:100,overlay:0.6};_1=$.extend(_2,_1);return this.each(function(){var o=_1;$(this).click(function(e){var _3=$("<div id='lean_overlay'></div>");var _4=$(this).data("rel");$("body").append(_3);$("#lean_overlay, .fancybox-close").click(function(){_5(_4);});var _6=$(_4).outerHeight();var _7=$(_4).outerWidth();$("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);if($(_4).hasClass('modal_product')){$(_4).css({"position":"fixed"});}else{$(_4).css({"position":"fixed"});};$(_4).css({"display":"block",opacity:0,"z-index":11000,"left":50+"%","margin-left":-(_7/2)+"px","top":o.top+"px"});$(_4).fadeTo(200,1);e.preventDefault();});});function _5(_8){$("#lean_overlay").fadeOut(200).remove();$(_8).css({"display":"none"});};}});})(jQuery);

/*
 * jQuery FlexSlider v1.8
 * http://flex.madebymufffin.com
 * Copyright 2011, Tyler Smith
 */
(function(a){a.flexslider=function(c,b){var d=c;d.init=function(){d.vars=a.extend({},a.flexslider.defaults,b);d.data("flexslider",true);d.container=a(".slides",d);d.slides=a(".slides > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.animatingTo=d.currentSlide;d.atEnd=(d.currentSlide==0)?true:false;d.eventType=("ontouchstart" in document.documentElement)?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;d.manualPause=false;d.vertical=(d.vars.slideDirection=="vertical");d.prop=(d.vertical)?"top":"marginLeft";d.args={};d.transitions="webkitTransition" in document.body.style;if(d.transitions){d.prop="-webkit-transform"}if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container));d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,((d.containerExists)?d.controlsContainer:d));d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){if(d.transitions){d.setTransition(0)}d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.newSlides=a(".slides > li",d);var m=(-1*(d.currentSlide+d.cloneOffset));if(d.vertical){d.newSlides.css({display:"block",width:"100%","float":"left"});d.container.height((d.count+d.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){d.css({position:"relative"}).height(d.slides.filter(":first").height());d.args[d.prop]=(d.transitions)?"translate3d(0,"+m*d.height()+"px,0)":m*d.height()+"px";d.container.css(d.args)},100)}else{d.args[d.prop]=(d.transitions)?"translate3d("+m*d.width()+"px,0,0)":m*d.width()+"px";d.container.width((d.count+d.cloneCount)*200+"%").css(d.args);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left",display:"block"})},100)}}else{d.transitions=false;d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(d.vars.animationDuration)}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var e=a('<ol class="flex-control-nav"></ol>');var s=1;for(var t=0;t<d.count;t++){e.append("<li><a>"+s+"</a></li>");s++}if(d.containerExists){a(d.controlsContainer).append(e);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(e);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(i){i.preventDefault();if(!a(this).hasClass("active")){(d.controlNav.index(a(this))>d.currentSlide)?d.direction="next":d.direction="prev";d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var v=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(v);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(v);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else{if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}}d.directionNav.bind(d.eventType,function(i){i.preventDefault();var j=(a(this).hasClass("next"))?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){function h(i){if(d.animating){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=d.getTarget("next")}else{if(i.keyCode==37){var j=d.getTarget("prev")}}if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}}}}a(document).bind("keyup",h)}if(d.vars.mousewheel){d.mousewheelEvent=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";d.bind(d.mousewheelEvent,function(y){y.preventDefault();y=y?y:window.event;var i=y.detail?y.detail*-1:y.wheelDelta/40,j=(i<0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){if(!d.manualPause){d.resume()}})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var q=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(q);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(q);d.pausePlay=a(".flex-pauseplay span",d)}var n=(d.vars.slideshow)?"pause":"play";d.pausePlay.addClass(n).text((n=="pause")?d.vars.pauseText:d.vars.playText);d.pausePlay.bind(d.eventType,function(i){i.preventDefault();if(a(this).hasClass("pause")){d.pause();d.manualPause=true}else{d.resume();d.manualPause=false}})}if("ontouchstart" in document.documentElement){var w,u,l,r,o,x,p=false;d.each(function(){if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",g,false)}});function g(i){if(d.animating){i.preventDefault()}else{if(i.touches.length==1){d.pause();r=(d.vertical)?d.height():d.width();x=Number(new Date());l=(d.vertical)?(d.currentSlide+d.cloneOffset)*d.height():(d.currentSlide+d.cloneOffset)*d.width();w=(d.vertical)?i.touches[0].pageY:i.touches[0].pageX;u=(d.vertical)?i.touches[0].pageX:i.touches[0].pageY;d.setTransition(0);this.addEventListener("touchmove",k,false);this.addEventListener("touchend",f,false)}}}function k(i){o=(d.vertical)?w-i.touches[0].pageY:w-i.touches[0].pageX;p=(d.vertical)?(Math.abs(o)<Math.abs(i.touches[0].pageX-u)):(Math.abs(o)<Math.abs(i.touches[0].pageY-u));if(!p){i.preventDefault();if(d.vars.animation=="slide"&&d.transitions){if(!d.vars.animationLoop){o=o/((d.currentSlide==0&&o<0||d.currentSlide==d.count-1&&o>0)?(Math.abs(o)/r+2):1)}d.args[d.prop]=(d.vertical)?"translate3d(0,"+(-l-o)+"px,0)":"translate3d("+(-l-o)+"px,0,0)";d.container.css(d.args)}}}function f(j){d.animating=false;if(d.animatingTo==d.currentSlide&&!p&&!(o==null)){var i=(o>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(i)&&Number(new Date())-x<550&&Math.abs(o)>20||Math.abs(o)>r/2){d.flexAnimate(i,d.vars.pauseOnAction)}else{d.flexAnimate(d.currentSlide,d.vars.pauseOnAction)}}this.removeEventListener("touchmove",k,false);this.removeEventListener("touchend",f,false);w=null;u=null;o=null;l=null}}if(d.vars.animation.toLowerCase()=="slide"){a(window).resize(function(){if(!d.animating){if(d.vertical){d.height(d.slides.filter(":first").height());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.slides.filter(":first").height()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{d.newSlides.width(d.width());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.width()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}})}d.vars.start(d)};d.flexAnimate=function(g,f){if(!d.animating){d.animating=true;d.animatingTo=g;d.vars.before(d);if(f){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(g).addClass("active")}d.atEnd=(g==0||g==d.count-1)?true:false;if(!d.vars.animationLoop&&d.vars.directionNav){if(g==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else{if(g==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")}else{d.directionNav.removeClass("disabled")}}}if(!d.vars.animationLoop&&g==d.count-1){d.pause();d.vars.end(d)}if(d.vars.animation.toLowerCase()=="slide"){var e=(d.vertical)?d.slides.filter(":first").height():d.slides.filter(":first").width();if(d.currentSlide==0&&g==d.count-1&&d.vars.animationLoop&&d.direction!="next"){d.slideString="0px"}else{if(d.currentSlide==d.count-1&&g==0&&d.vars.animationLoop&&d.direction!="prev"){d.slideString=(-1*(d.count+1))*e+"px"}else{d.slideString=(-1*(g+d.cloneOffset))*e+"px"}}d.args[d.prop]=d.slideString;if(d.transitions){d.setTransition(d.vars.animationDuration);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.slideString+",0)":"translate3d("+d.slideString+",0,0)";d.container.css(d.args).one("webkitTransitionEnd transitionend",function(){d.wrapup(e)})}else{d.container.animate(d.args,d.vars.animationDuration,function(){d.wrapup(e)})}}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(g).fadeIn(d.vars.animationDuration,function(){d.wrapup()})}}};d.wrapup=function(e){if(d.vars.animation=="slide"){if(d.currentSlide==0&&d.animatingTo==d.count-1&&d.vars.animationLoop){d.args[d.prop]=(-1*d.count)*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{if(d.currentSlide==d.count-1&&d.animatingTo==0&&d.vars.animationLoop){d.args[d.prop]=-1*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}}d.animating=false;d.currentSlide=d.animatingTo;d.vars.after(d)};d.animateSlides=function(){if(!d.animating){d.flexAnimate(d.getTarget("next"))}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)}};d.canAdvance=function(e){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&e==d.count-1&&d.direction!="next"){return false}else{if(d.currentSlide==d.count-1&&e==0&&d.direction=="next"){return false}else{return true}}}else{return true}};d.getTarget=function(e){d.direction=e;if(e=="next"){return(d.currentSlide==d.count-1)?0:d.currentSlide+1}else{return(d.currentSlide==0)?d.count-1:d.currentSlide-1}};d.setTransition=function(e){d.container.css({"-webkit-transition-duration":(e/1000)+"s"})};d.init()};a.flexslider.defaults={animation:"fade",slideDirection:"horizontal",slideshow:true,slideshowSpeed:7000,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,mousewheel:false,prevText:"Previous",nextText:"Next",pausePlay:false,pauseText:"Pause",playText:"Play",randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides li").length==1){a(this).find(".slides li").fadeIn(400)}else{if(a(this).data("flexslider")!=true){new a.flexslider(a(this),b)}}})}})(jQuery);

// Zoom 1.3 - jQuery image zooming plugin
// (c) 2011 Jack Moore - jacklmoore.com
// license: www.opensource.org/licenses/mit-license.php
(function(a){var b={url:!1,icon:!0,grab:!1,callback:!1,duration:120};a.fn.zoom=function(c){return this.each(function(){var d=this,e=a(d),f=new Image,g=a(f),h,i=e.css("position"),j=a.extend({},b,c||{}),k="mousemove";e.css({position:/(absolute|fixed)/.test(i)?i:"relative",overflow:"hidden"});if(!j.url){j.url=e.find("img:first")[0].src;if(!j.url)return}j.icon&&(h=a('<div class="zoomIcon">').appendTo(e)),f.onload=function(){function n(){b=e.outerWidth(),c=e.outerHeight(),d=(f.width-b)/b,h=(f.height-c)/c}function o(a){i=a.pageX-m.left,l=a.pageY-m.top,i>b?i=b:i<0&&(i=0),l>c?l=c:l<0&&(l=0),f.style.left=i*-d+"px",f.style.top=l*-h+"px",a.preventDefault()}var b,c,d,h,i,l,m=e.offset();n(),g.addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:f.width,height:f.height,border:"none"}).appendTo(e),j.grab?g.mousedown(function(b){m=e.offset(),a(document).one("mouseup",function(){g.stop().fadeTo(j.duration,0),a(document).unbind(k,o)}),n(),o(b),g.stop().fadeTo(a.support.opacity?j.duration:0,1),a(document)[k](o),b.preventDefault()}):g.hover(function(){m=e.offset(),n(),g.stop().fadeTo(a.support.opacity?j.duration:0,1)},function(){g.stop().fadeTo(j.duration,0)})[k](function(a){f.style.left=(a.pageX-m.left)*-d+"px",f.style.top=(a.pageY-m.top)*-h+"px"}),a.isFunction(j.callback)&&j.callback.call(f)},f.src=j.url})},a.fn.zoom.defaults=b})(jQuery);

// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2011 Todd Matthews & Steve Purcell
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory); // AMD support for RequireJS etc.
  else
    factory(jQuery);
}(function ($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
      list: null,                               // [string]   optional name of list belonging to username
      favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
      query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
      avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                                 // [integer]  how many tweets to display?
      fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
      page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
      retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
      intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
      outro_text: null,                         // [string]   do you want text AFTER your tweets?
      join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
      auto_join_text_default: "i said,",        // [string]   auto text for non verb: "i said" bullocks
      auto_join_text_ed: "i",                   // [string]   auto text for past tense: "i" surfed
      auto_join_text_ing: "i am",               // [string]   auto tense for present tense: "i was" surfing
      auto_join_text_reply: "i replied to",     // [string]   auto tense for replies: "i replied to" @someone "with"
      auto_join_text_url: "i was looking at",   // [string]   auto tense for urls: "i was looking at" http:...
      loading_text: null,                       // [string]   optional loading text, displayed while tweets load
      refresh_interval: null ,                  // [integer]  optional number of seconds after which to reload tweets
      twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
      twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
      twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
      template: "{avatar}{time}{join}{text}",   // [string or function] template used to construct each tweet <li> - see code for available vars
      comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
        return tweet2["tweet_time"] - tweet1["tweet_time"];
      },
      filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
        return true;
      }
      // You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
      //   "loaded" -- triggered when tweets have been fetched and rendered
    }, o);

    // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
    var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?����������������]))/gi;

    // Expand values inside simple string templates with {placeholders}
    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    // Export the t function for use when passing a function as the 'template' option
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    function escapeHTML(s) {
      return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
    }

    $.fn.extend({
      linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
      // Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+'" class="tweet_hashtag">#$1</a>'),
      makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });

    function linkURLs(text, entities) {
      return text.replace(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        var text = match;
        for(var i = 0; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url == url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
      });
    }

    function parse_date(date_str) {
      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
      // cannot handle in IE. We therefore perform the following transformation:
      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function relative_time(date) {
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
      var r = '';
      if (delta < 1) {
        r = 'just now';
      } else if (delta < 60) {
        r = delta + ' seconds ago';
      } else if(delta < 120) {
        r = 'about a minute ago';
      } else if(delta < (45*60)) {
        r = 'about ' + (parseInt(delta / 60, 10)).toString() + ' minutes ago';
      } else if(delta < (2*60*60)) {
        r = 'about an hour ago';
      } else if(delta < (24*60*60)) {
        r = 'about ' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
        r = 'about a day ago';
      } else {
        r = 'about ' + (parseInt(delta / 86400, 10)).toString() + ' days ago';
      }
      return r;
    }

    function build_auto_join_text(text) {
      if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
        return s.auto_join_text_reply;
      } else if (text.match(url_regexp)) {
        return s.auto_join_text_url;
      } else if (text.match(/^((\w+ed)|just) .*/im)) {
        return s.auto_join_text_ed;
      } else if (text.match(/^(\w*ing) .*/i)) {
        return s.auto_join_text_ing;
      } else {
        return s.auto_join_text_default;
      }
    }

    function build_api_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      var common_params = '&include_entities=1&callback=?';
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+common_params;
      } else if (s.favorites) {
        return proto+"//"+s.twitter_api_url+"/favorites/"+s.username[0]+".json?page="+s.page+"&count="+count+common_params;
      } else if (s.query === null && s.username.length == 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+common_params;
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+common_params;
      }
    }

    function extract_avatar_url(item, secure) {
      if (secure) {
        return ('user' in item) ?
          item.user.profile_image_url_https :
          extract_avatar_url(item, false).
            replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
      } else {
        return item.profile_image_url || item.user.profile_image_url;
      }
    }

    // Convert twitter API objects into data available for
    // constructing each tweet <li> using a template
    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      o.avatar_size = s.avatar_size;
      o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
      o.retweet = typeof(item.retweeted_status) != 'undefined';
      o.tweet_time = parse_date(item.created_at);
      o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
      o.tweet_relative_time = relative_time(o.tweet_time);
      o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
      o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

      // Default spans, and pre-formatted blocks for common layouts
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
      o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
      o.avatar = o.avatar_size ?
        t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
      o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
      o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
      o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
      o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
      o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
      return o;
    }

    return this.each(function(i, widget){
      var list = $('<div></div>');
      var intro = '<p class="tweet_intro">'+s.intro_text+'</p>';
      var outro = '<p class="tweet_outro">'+s.outro_text+'</p>';
      var loading = $('<p class="loading">'+s.loading_text+'</p>');

      if(s.username && typeof(s.username) == "string"){
        s.username = [s.username];
      }

      $(widget).unbind("tweet:load").bind("tweet:load", function(){
        if (s.loading_text) $(widget).empty().append(loading);
        $.getJSON(build_api_url(), function(data){
          $(widget).empty().append(list);
          if (s.intro_text) list.before(intro);
          list.empty();

          var tweets = $.map(data.results || data, extract_template_data);
          tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
          list.append($.map(tweets, function(o) { return "<div class='four columns'>" + t(s.template, o) + "</div>"; }).join('')).
              children('div:first').addClass('alpha').end().
              children('div:last').addClass('omega').end();

          if (s.outro_text) list.after(outro);
          $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
          if (s.refresh_interval) {
            window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
          }
        });
      }).trigger("tweet:load");
    });
  };
}));