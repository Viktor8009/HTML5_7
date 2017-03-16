var formPosition = document.querySelector(".myForm");

function posLeft()
{  
    formPosition.style.float = "left";     
}

function posRight()
{
    formPosition.style.float = "right";   
}

function posCenter()
{
    formPosition.style.float = "none"; 
}

//Delayed show up
setTimeout(function(){
    
    $("#myModal").modal("show");
    
} , 5000);


function alertShow()
{
    
    
}

function changeProgress(progress)
{
    if(!progress)
    {
       progress = document.querySelector(".progress-value").value; 
    }
    
    // Removing the non-favoured elements
    progress = progress.replace(/,/g,".");
    
    progress = progress.replace(/[^0-9\.]/g,"");
    
    progress = parseFloat(progress);
    
    if(!progress || isNaN(progress))
    {
        return;
    }
    
    var progBar = document.querySelector(".progress .progress-bar");
    
    progBar.style.width = progress + "%";
    
    progBar.innerHTML = progress + "% Complete";
}

// Popover settings

$("#popUp").popover();