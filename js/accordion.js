// http://www.elated.com/articles/javascript-accordion/
// http://www.elated.com/res/File/articles/development/javascript/document-object-model/javascript-accordion/javascript-accordion.html
// modified to add jquery animation -- I know I could've just used jquery, then, for toggle(), but as they say:
// "money won't kill you baby, but time has taken you on

$(document).ready(function() {

/*    
    $("#quote1").click(function() {
        $('#pquote1').animate({
            width: "100%",
            fontSize: "90%",
            borderWidth: "10px",
            height: "100%"
        }, 250 );
    });

    $("#quote2").click(function() {
        $('#pquote2').animate({
            width: "100%",
            fontSize: "90%",
            borderWidth: "10px",
            height: "100%"
        }, 250 );
    });

    $("#quote3").click(function() {
        $('#pquote3').animate({
            width: "100%",
            fontSize: "90%",
            borderWidth: "10px",
            height: "100%"
        }, 250 );
    });
*/
    
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
    
    // grow quotes on click
    function animateItem(e) {
        
        var quoteChildren = $(this).find('.p-quote');        
        
        e.preventDefault();
        
        quoteChildren.animate({
            width: "100%",
            fontSize: "90%",
            borderWidth: "10px",
            height: "100%"
        }, 250 );
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
