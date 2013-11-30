var game = {};
game.frame = [
    {'xs':50,'ys':50,'xe':1310,'ye':50},
    {'xs':50,'ys':50,'xe':50,'ye':230},
    {'xs':50,'ys':230,'xe':150,'ye':230},
    {'xs':50,'ys':350,'xe':150,'ye':350},
    {'xs':50,'ys':400,'xe':150,'ye':400},
    {'xs':50,'ys':600,'xe':50,'ye':400},
    {'xs':49,'ys':280,'xe':149,'ye':280},
    {'xs':149,'ys':227,'xe':149,'ye':280},
    {'xs':150,'ys':400,'xe':150,'ye': 350},
    {'xs':1310,'ys':50,'xe':1310,'ye':230},
    {'xs':1310,'ys':230,'xe':1220,'ye':230},
    {'xs':1220,'ys':227,'xe':1220,'ye':280},
    {'xs':1220,'ys':280,'xe':1310,'ye':280},
    {'xs':1220,'ys':350,'xe':1310,'ye':350},
    {'xs':1220,'ys':400,'xe':1220,'ye':350},
    {'xs':1310,'ys':400,'xe':1220,'ye':400},
    {'xs':1310,'ys':600,'xe':1310,'ye':400},
    {'xs':110,'ys':145,'xe':220,'ye':145},//Lines starts
    {'xs':300,'ys':50,'xe':300,'ye':190},
    {'xs':650,'ys':50,'xe':650,'ye':245},
    {'xs':550,'ys':245,'xe':750,'ye':245},
    {'xs':367,'ys':120,'xe':550,'ye':120},
    {'xs':460,'ys':122,'xe':460,'ye':360},
    {'xs':390,'ys':360,'xe':520,'ye':360},
    {'xs':1077,'ys':50,'xe':1077,'ye':230},
    {'xs':977,'ys':230,'xe':1177,'ye':230},
    {'xs':1123,'ys':330,'xe':1123,'ye':600},
    {'xs':1023,'ys':430,'xe':1123,'ye':430},
    {'xs':1230,'ys':490,'xe':1310,'ye':490},
    {'xs':1160,'ys':145,'xe':1310,'ye':145},
    {'xs':877,'ys':137,'xe':877,'ye':357},
    {'xs':747,'ys':137,'xe':997,'ye':137},
    {'xs':558,'ys':394,'xe':727,'ye':394},
    {'xs':558,'ys':394,'xe':558,'ye':600},
    {'xs':728,'ys':494,'xe':728,'ye':600},
    {'xs':300,'ys':260,'xe':300,'ye':600},
    {'xs':300,'ys':450,'xe':500,'ye':450},
    {'xs':874,'ys':425,'xe':874,'ye':600},
    {'xs':124,'ys':495,'xe':214,'ye':495},//Lines Ends
    {'xs':50,'ys':600,'xe':1310,'ye':600}
];
game.states = [{
    fill: '#bada55',
    cy: 550},
    {cx:53}
];
game.boardXray = function () {
    var s = Snap ("#playground");
    $('#playground').css('background-color', '#fff');
    var title = s.text(580, 30, "PACMAN");
    title.attr("font-size","44");
    /*Frame*/
    var Topline = s.line(50, 50, 1310, 50);
    var Bottomline = s.line(50, 600, 1310, 600);
    Topline.attr({stroke: "black",strokeWidth: 5});
    Bottomline.attr({stroke: "black",strokeWidth: 5});
    
    var lefttop = s.line(50,50, 50, 230);
    var righttop = s.line(1310,50, 1310, 230);
    lefttop.attr({stroke: "green",strokeWidth: 5});
    righttop.attr({stroke: "green",strokeWidth: 5});
    
    var leftbottom = s.line(50,600, 50, 400);
    var rightbottom = s.line(1310,600, 1310, 400);
    leftbottom.attr({stroke: "#00F5FF",strokeWidth: 5});
    rightbottom.attr({stroke: "#00F5FF",strokeWidth: 5});
    
    var lefttopright = s.line(50,230, 150, 230);
    var righttopleft = s.line(1310,230, 1220, 230);
    lefttopright.attr({stroke: "blue",strokeWidth: 5});
    righttopleft.attr({stroke: "blue",strokeWidth: 5});
    
    var lefttopcenter = s.line(149,227, 149, 280);
    var lefttopout = s.line(49,280, 149, 280);
    lefttopcenter.attr({stroke: "red",strokeWidth: 5});
    lefttopout.attr({stroke: "red",strokeWidth: 5});
    
    var leftbottomright = s.line(50,400, 150, 400);
    var rightbottomleft = s.line(1310,400, 1220, 400);
    leftbottomright.attr({stroke: "maroon",strokeWidth: 5});
    rightbottomleft.attr({stroke: "maroon",strokeWidth: 5});
    
    var TBendleft = s.line(150,400, 150, 350);
    var TBendRight = s.line(1220,400, 1220, 350);
    TBendleft.attr({stroke: "grey",strokeWidth: 5});
    TBendRight.attr({stroke: "grey",strokeWidth: 5});
    
    var TBendleftout = s.line(50,350, 150, 350);
    var TBendRightout = s.line(1220,350, 1310, 350);
    TBendleftout.attr({stroke: "pink",strokeWidth: 5});
    TBendRightout.attr({stroke: "pink",strokeWidth: 5});
    
    var righttopcenter = s.line(1220,227, 1220, 280);
    var righttopout = s.line(1220,280, 1310, 280);
    righttopcenter.attr({stroke: "yellow",strokeWidth: 5});
    righttopout.attr({stroke: "yellow",strokeWidth: 5});
    /*Frame Ends*/
    };

game.animate = function(_max,_element,_axis){  
    if(_axis === "cx"){
    for (var i=0; i < _max;i++){    
        _element.animate({"cx":i},5000);}
    }
else{
    for (var j=0; j < _max;j++){    
        _element.animate({"cy":j},5000);}
}
};

game.play = function(){
    var s = Snap ("#playground");
    var circle = s.circle(650,570,15);
    circle.attr("fill","yellow");
    var eye = s.circle(654,562,3);
    eye.attr("fill","black");
    var mouth = s.polygon("10,0,40,0,15,20");
    mouth.attr("fill","red");
    mouth.attr({"cx":650});
    var max = 50;
    $(document).keydown(function (e) {
    if (e.keyCode ==37) { //Left 
        circle.stop();
        game.animate(80,circle,"cx");
    }
    if(e.keyCode ==39) { //Right
        circle.stop();
        game.animate(1290,circle,"cx");
    }
    if(e.keyCode ==38) { //Up
        circle.stop();
        game.animate(80,circle,"cy");
    }
    if(e.keyCode ==40) { //Down
        circle.stop();
        game.animate(570,circle,"cy");
    }
    //alert("Key Pressed");
});
};

game.boardGen = function(){
    var canvas = Snap ("#playground");
    var title = canvas.text(580, 30, "PACMAN");
    title.attr({fontSize:"44",fill: "white"});
    for(var v in game.frame){
        var temp = game.frame[v];
        var board = canvas.line(temp.xs, temp.ys, temp.xe, temp.ye);    
        board.attr({stroke: "#00F5FF",strokeWidth: 5});
    }
};

$(function() {
    //game.boardXray();
    game.boardGen();
    game.play();
});