$(document).ready(function(){
    
    PuzzleScene.Init();
    MenuScene.Init();
});

var DEBUG_CTRL = false;

$(document).keydown(function(event){
    if(event.which=="17")
        DEBUG_CTRL = true;
});

$(document).keyup(function(event){
    if(event.which=="17")
        DEBUG_CTRL = false;
});

function SUBMITSTAT(str, val){
    
    if(typeof kongGetAPI === 'undefined')
        return;
    
    if(kongGetAPI() != -1){
        kongSubmitStat("AllClear", 1); 
    }
}