var game = {};
game.board = function () {
    var s = Snap ("#playground");
    s.attr("fill","#fff");
    var title = s.text(580, 30, "PACMAN");
    title.attr("font-size","44");
    var Topline = s.line(50, 50, 1310, 50);
    var Bottomline = s.line(50, 600, 1310, 600);
    var lefttop = s.line(50,50, 50, 230);
    var lefttopright = s.line(50,230, 150, 230);
    var leftbottomright = s.line(50,400, 150, 400);
    var leftbottom = s.line(50,600, 50, 400);
    var righttop = s.line(1310,50, 1310, 230);
    var righttopleft = s.line(1310,230, 1180, 230);
    var rightbottomleft = s.line(1310,400, 1180, 400);
    var rightbottom = s.line(1310,600, 1310, 400);
    Topline.attr({stroke: "#00F5FF",strokeWidth: 5});
    Bottomline.attr({stroke: "#00F5FF",strokeWidth: 5});
    lefttop.attr({stroke: "#00F5FF",strokeWidth: 5});
    leftbottom.attr({stroke: "#00F5FF",strokeWidth: 5});
    righttop.attr({stroke: "#00F5FF",strokeWidth: 5});
    rightbottom.attr({stroke: "#00F5FF",strokeWidth: 5});
    lefttopright.attr({stroke: "white",strokeWidth: 5});
    leftbottomright.attr({stroke: "white",strokeWidth: 5});
    righttopleft.attr({stroke: "white",strokeWidth: 5});
    rightbottomleft.attr({stroke: "white",strokeWidth: 5});
};

$(function() {
    game.board();
});