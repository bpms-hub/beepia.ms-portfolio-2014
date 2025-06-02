// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



$.getScript("bower_components/cubeportfolio/js/jquery.cubeportfolio.js", function(){
(function($, window, document, undefined) {
    'use strict';

    var gridContainer = $('#grid-container'),
        filtersContainer = $('#filters-container'),
        wrap, filtersCallback;


    /*********************************
     init cubeportfolio
     *********************************/
    gridContainer.cubeportfolio({

        defaultFilter: '*',

        animationType: 'boxShadow',

        gapHorizontal: 35,

        gapVertical: 30,

        //  gapHorizontal: 5,

        // gapVertical: 5,

        gridAdjustment: 'responsive',

        caption: 'zoom',

        displayType: 'sequentially',

        displayTypeSpeed: 400,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: false,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} / {{total}}</div>',
        singlePageCallback: function(url, element) {

            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage("Error! Please refresh the page!");
                });

        },

        // single page inline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePage Inline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });


    /*********************************
     add listener for filters
     *********************************/
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {

        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

        wrap.on({
            'mouseover.cbp': function() {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function() {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });

        filtersCallback = function(me) {
            wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

            me.addClass('cbp-filter-item-active');

            wrap.trigger('mouseleave.cbp');
        };

    } else {
        filtersCallback = function(me) {
            me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        };
    }

    filtersContainer.on('click.cbp', '.cbp-filter-item', function() {

        var me = $(this);

        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function() {});

    });


    /*********************************
     activate counter for filters
     *********************************/
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function() {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });


    /*********************************
     add listener for load more
     *********************************/
    $('.cbp-l-loadMore-button-link').on('click.cbp', function(e) {

        e.preventDefault();

        var clicks, me = $(this),
            oMsg;

        if (me.hasClass('cbp-l-loadMore-button-stop')) {
            return;
        }

        // get the number of times the loadMore link has been clicked
        clicks = $.data(this, 'numberOfClicks');
        clicks = (clicks) ? ++clicks : 1;
        $.data(this, 'numberOfClicks', clicks);

        // set loading status
        oMsg = me.text();
        me.text('LOADING...');

        // perform ajax request
        $.ajax({
            url: me.attr('href'),
            type: 'GET',
            dataType: 'HTML'
        }).done(function(result) {
            var items, itemsNext;

            // find current container
            items = $(result).filter(function() {
                return $(this).is('div' + '.cbp-loadMore-block' + clicks);
            });

            gridContainer.cubeportfolio('appendItems', items.html(),
                function() {
                    // put the original message back
                    me.text(oMsg);

                    // check if we have more works
                    itemsNext = $(result).filter(function() {
                        return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
                    });

                    if (itemsNext.length === 0) {
                        me.text('NO MORE WORKS');
                        me.addClass('cbp-l-loadMore-button-stop');
                    }

                });

        }).fail(function() {
            // error
        });

    });

})(jQuery, window, document);

});

$.getScript("bower_components/jquery-backstretch/jquery.backstretch.min.js", function(){

   //alert("Script loaded and executed.");
   
$('body').backstretch([
 
    'public/100/100_1.gif',
    'public/100/100_2.gif',
    'public/100/100_3.gif',
    'public/100/100_4.gif',
    'public/100/100_5.gif',
    'public/100/100_6.gif',
    'public/100/100_7.gif',
    'public/100/100_8.gif',
    'public/100/100_9.gif',
    'public/100/100_10.gif',
    'public/100/100_11.gif',
    'public/100/100_blank.gif',
    'public/100/100_blank.gif',






  // 'public/badges/beep_tv.gif',
  // 'public/beep/beep_100_1.gif',
  //  'public/beep/beep_100_1.gif',
  //  'public/beep/beep_1.gif',
  //   'public/beep/beep_2.gif',
  //  'public/beep/beep_3.gif',
  //  'public/beep/beep_4.gif',
  //  'public/beep/beep_5.gif',
   // 'public/beep/beep_6.gif',
   // 'public/beep/beep_7.gif',

   // 'public/beep/beep_8.gif',
   //  'public/beep/beep_8.gif',
     // 'public/beep/beep_8.gif',
   // 'public/beep/beep_9.gif',
   // 'public/beep/beep_10.gif',
   // 'public/beep/beep_11.gif',

   // 'public/anime/2.gif',
   // 'public/anime/3.gif',
   // 'public/anime/4.gif',
   // 'public/anime/5.gif',
   // 'public/anime/6.gif',
   // 'public/beep/3.gif',
   // 'public/beep/4.gif',
   // 'public/beep/5.gif',
   // 'public/beep/7.gif',
   // 'public/beep/6.gif'



    ], {duration: 3000, centeredX: true, centeredY: true});

});


$.getScript("bower_components/moment/min/moment.min.js", function(){


function update() {

  $('#clock').html(moment().format('ZZ•YYYY‘MM“DD_HH:mm:ss.SSS'));
}

setInterval(update, 60);

});

$.getScript("bower_components/fluidbox-master/jquery.fluidbox.min.js", function(){

 
});
