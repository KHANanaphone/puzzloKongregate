var PuzzKong = {};

PuzzKong.SubmitStat = function(str, val){
    
    if(typeof kongGetAPI === 'undefined')
        return;
    
    if(kongGetAPI() != -1 && typeof kongSubmitStat !== 'undefined'){
        kongSubmitStat("AllClear", 1); 
    }
}

$(document).ready(function(){
   
    console.log('loading...');
    kongregateAPI.loadAPI(onComplete);
    
    function onComplete(){
    console.log('load complete');
        PuzzKong.API = kongregateAPI.getAPI();
    }    
});