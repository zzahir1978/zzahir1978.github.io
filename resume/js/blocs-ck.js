// Loading page complete
function getHeroHeight(){var e=$(window).height();e<window.heroBodyH&&(e=heroBodyH+100);return e}function checkHero(){if($("#hero-bloc").length){P=parseInt($(".hero-nav").css("padding-top"))*2;window.heroBodyH=$(".hero-nav").outerHeight()+P+$(".vc-content").outerHeight()+50;$(".hero").css("height",getHeroHeight()+"px")}}function scrollToTarget(e){if(e==1)e=0;else if(e==2)e=$(document).height();else{e=$(e).offset().top;$(".sticky-nav").length&&(e-=100)}$("html,body").animate({scrollTop:e},"slow")}function animateWhenVisible(){hideAll();inViewCheck();$(window).scroll(function(){inViewCheck();scrollToTopView();stickyNavToggle()})}function stickyNavToggle(){var e=0,t="sticky";if($(".sticky-nav").parent().is("#hero-bloc")){e=$(".sticky-nav").height();t="sticky animated fadeInDown"}if($(window).scrollTop()>e){$(".sticky-nav").addClass(t);t=="sticky"&&$(".page-container").css("padding-top",$(".sticky-nav").height())}else{$(".sticky-nav").removeClass(t);$(".page-container").removeAttr("style")}}function hideAll(){$(".animated").each(function(e){$(this).closest(".hero").length||$(this).removeClass("animated").addClass("hideMe")})}function inViewCheck(){$($(".hideMe").get().reverse()).each(function(e){var t=jQuery(this),n=t.offset().top+t.height(),r=$(window).scrollTop()+$(window).height();t.height()>$(window).height()&&(n=t.offset().top);if(n<r){var i=t.attr("class").replace("hideMe","animated");t.css("visibility","hidden").removeAttr("class");setTimeout(function(){t.attr("class",i).css("visibility","visible")},.01)}})}function scrollToTopView(){$(window).scrollTop()>$(window).height()/3?$(".scrollToTop").hasClass("showScrollTop")||$(".scrollToTop").addClass("showScrollTop"):$(".scrollToTop").removeClass("showScrollTop")}function setUpLightBox(){window.targetLightbox;$(document).on("click","[data-lightbox]",function(e){e.preventDefault();targetLightbox=$(this);var t='<p class="lightbox-caption">'+$(this).attr("data-caption")+"</p>";$(this).attr("data-caption")||(t="");var n=$('<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content '+$(this).attr("data-frame")+'"><button type="button" class="close close-lightbox" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><a href="#" class="prev-lightbox" aria-label="prev"></a><a href="#" class="next-lightbox" aria-label="next"></a><img id="lightbox-image" class="img-responsive" src="'+$(this).attr("data-lightbox")+'">'+t+"</div></div></div></div>");$("body").append(n);$("#lightbox-modal").modal("show");$("a[data-lightbox]").index(targetLightbox)==0&&$(".prev-lightbox").hide();$("a[data-lightbox]").index(targetLightbox)==$("a[data-lightbox]").length-1&&$(".next-lightbox").hide()}).on("hidden.bs.modal","#lightbox-modal",function(){$("#lightbox-modal").remove()});$(document).on("click",".next-lightbox, .prev-lightbox",function(e){e.preventDefault();var t=$("a[data-lightbox]").index(targetLightbox),n=$("a[data-lightbox]").eq(t+1);$(this).hasClass("prev-lightbox")&&(n=$("a[data-lightbox]").eq(t-1));$("#lightbox-image").attr("src",n.attr("data-lightbox"));$(".lightbox-caption").html(n.attr("data-caption"));targetLightbox=n;$(".next-lightbox, .prev-lightbox").hide();$("a[data-lightbox]").index(n)!=$("a[data-lightbox]").length-1&&$(".next-lightbox").show();$("a[data-lightbox]").index(n)>0&&$(".prev-lightbox").show()})}$(window).load(function(){checkHero();animateWhenVisible()});$(document).ready(function(){$(".hero").css("height",$(window).height()+"px");$("#scroll-hero").click(function(){$("html,body").animate({scrollTop:$("#hero-bloc").height()},"slow")});setUpLightBox()});$(window).resize(function(){$(".hero").css("height",getHeroHeight()+"px")});$(function(){$('[data-toggle="tooltip"]').tooltip()});