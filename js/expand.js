var quote = document.getElementsByClassName( 'under_position' );
quote.onclick = expandQuote;

function expandQuote() {
    var currentName = this.className;
    
    if (currentName == "under_position") {
        this.className = "under_position expand";
    } else {
        this.className = "under_position";
    }
    


}

