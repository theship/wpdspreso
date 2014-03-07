// http://www.elated.com/articles/javascript-accordion/
// http://www.elated.com/res/File/articles/development/javascript/document-object-model/javascript-accordion/javascript-accordion.html
// modified to add jquery animation -- I know I could've just used jquery, then, for toggle(), but as they say:
// "money won't kill you baby, but time has taken you on"
// julee@adobe.com

$(document).ready(function() {

    var accordionItems = new Array();
    var quoteItems = new Array();

    // Grab the div items from the page
    var divs = document.getElementsByTagName( 'div' );
    
    // put them in the accordion or quotes arrays
    for ( var i = 0; i < divs.length; i++ ) {
        if ( divs[i].className == 'accordionItem' ) {
            accordionItems.push( divs[i] );
        } else if ( divs[i].className == 'under_position' ) {
            quoteItems.push( divs[i] );
        }
    }
    
    // Assign onclick events to the accordion item headings
    for ( var i = 0; i < accordionItems.length; i++ ) {

        var h3 = getFirstChildWithTagName( accordionItems[i], 'H3' );
        h3.onclick = toggleItem;
    }
    
    // Assign onclick events to the quotes
    for ( var i = 0; i < quoteItems.length; i++ ) {
        quoteItems[i].onclick = animateItem;
    }

    // Hide all accordion item bodies except the first
    for ( var i = 1; i < accordionItems.length; i++ ) {
        accordionItems[i].className = 'accordionItem hide';
    }
    
    // grow quotes on click and make them small again. opacity used to figure out if 
    function animateItem(e) {
        
        // close accordionItems so quote doesn't overlap
        for ( var i = 0; i < accordionItems.length; i++ ) {
            accordionItems[i].className = 'accordionItem hide';
        }
        
        var quoteChildren = $(this).find('.p-quote');
        
        var num = $(this).find('.p-quote').css("opacity");
        
        var currentOpacity = Math.ceil(num * 10) / 10;

        if (currentOpacity <= 0.5) {
            // console.log("low opacity, must not be the focus point right now");
            $(this).find('.p-quote').animate({
                opacity: "1",
                width: "100%",
                fontSize: "90%",
                borderWidth: "10px",
                height: "100%"
            }, 250 );
        } else  {
            // console.log("high opacity, since we're done, make it small again...");

            $(this).find('.p-quote').animate({
                fontSize: "33%",
                opacity: "0.40"
            }, 250 );
        }
            
        e.preventDefault();
        
    }
    
    function toggleItem() {
        var itemClass = this.parentNode.className;
        
        // Hide all items
        for ( var i = 0; i < accordionItems.length; i++ ) {
            accordionItems[i].className = 'accordionItem hide';
        }
    
        // Show this item if it was previously hidden
        if ( itemClass == 'accordionItem hide' ) {
            this.parentNode.className = 'accordionItem';
        }
    }
    
    function getFirstChildWithTagName( element, tagName ) {
        for ( var i = 0; i < element.childNodes.length; i++ ) {
            if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
        }
    }

});
