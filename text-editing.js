(function(){

// create singlton

WebForm = {
    
    container: null,        // containing form
    richTextField: null,    // iframe
    iframe_id: null,        // iframe id
    textArea: null,         // textarea
    
    // arguments: id name id
    init: function(cont, iframe_id, ta){
        
        this.container = document.querySelector(cont);
        this.iframe_id = document.querySelector(iframe_id);
        
        
        this.textArea = document.querySelector(ta);
        
        this.iframe_id.setAttribute("name", "richTextField");
        
        this.richTextField = richTextField;
        
        this.textArea.setAttribute("name", "myTextArea");
        
        this.textArea.display = "none";
        
        this.richTextField.document.designMode = 'On';
        
    },

    bold: function(){
        this.richTextField.document.execCommand('bold', false, null);
    },
    
    underline: function(){
        this.richTextField.document.execCommand('underline', false, null);
    },
    
    strike: function(){
        this.richTextField.document.execCommand('strikeThrough', false, null);
    },
    
    subscript: function(){
        this.richTextField.document.execCommand('subscript', false, null);
    },
    
    superscript: function(){
        this.richTextField.document.execCommand('superscript', false, null);
    },

    italic: function(){
        this.richTextField.document.execCommand('italic', false, null); 
    },

    fontSize: function(){
        let size = prompt('Enter a size 1 - 7', '');
        this.richTextField.document.execCommand('FontSize', false, size);
    },

    foreColor: function(){
        let color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
        this.richTextField.document.execCommand('ForeColor', false, color);
    },

    horizontalRule: function(){
        this.richTextField.document.execCommand('inserthorizontalrule', false, null);
    },

    justifyCenter: function(){
        this.richTextField.document.execCommand('justifyCenter', false, null);
    },
    
    justifyFull: function(){
        this.richTextField.document.execCommand('justifyFull', false, null);
    },
    
    justifyLeft: function(){
        this.richTextField.document.execCommand('justifyLeft', false, null);
    },
    
    justifyRight: function(){
        this.richTextField.document.execCommand('justifyRight', false, null);
    },

    removeFormat: function(){
        this.richTextField.document.execCommand('removeFormat', false, null);
    },

    unorderedList: function(){
        this.richTextField.document.execCommand("InsertOrderedList", false, "newOL");
    },
    
    orderedList: function(){
        this.richTextField.document.execCommand("InsertUnorderedList", false, "newUL");
    },
    
    link: function(){
        let linkURL = prompt("Enter the URL for this link:", "http://"); 
        this.richTextField.document.execCommand("CreateLink", false, linkURL);
    },

    unLink: function(){
        this.richTextField.document.execCommand("Unlink", false, null);
    },
    
    h: function(n){
        this.richTextField.document.execCommand("formatBlock", false, "H"+n);
    },

    image(){
        let imgSrc = prompt('Enter image location', '');
        if(imgSrc != null){
            this.richTextField.document.execCommand('insertimage', false, imgSrc); 
        }else{
            alert("Enter image location");
        }
    },
    
    // importamt before shipping
    prepationSubmit: function(form){
        this.textArea.value = this.richTextField.document.body.innerHTML;
    },
    
    change: function(n){
    
        switch(n){
            case 1:
                this.prepationSubmit();
                this.iframe_id.style.display = "none";
                this.textArea.style.display = "block";
            break;
            case 2:
                this.richTextField.document.body.innerHTML = this.textArea.value;
                this.iframe_id.style.display = "block";
                this.textArea.style.display = "none";
            break;
        }
        
    }

}

})();

window.onload = function(){
    WebForm.init("#web_form_cont", "#richTextField", "#myTextArea");
}