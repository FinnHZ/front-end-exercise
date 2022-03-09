(function(){
    $.extend({
        DynamicPie: function(angle, middlelayer,lefttop,rightbottom,leftbottom,righttop){
                if(angle >= 0 && angle < 90){
                    middlelayer.css({'opacity':0})
                    lefttop.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                    rightbottom.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                    leftbottom.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                    righttop.css({'transform':'rotate(' + angle + 'deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                }else if(angle >= 90 && angle < 180){
                    righttop.css({'transform':'rotate(0deg)','opacity':0});
                    rightbottom.css({'transform':'rotate(' + (angle-90) + 'deg)'});
                }else if(angle >= 180 && angle < 270){
                    rightbottom.css({'transform':'rotate(0deg)','opacity':0});
                    leftbottom.css({'transform':'rotate(' + (angle-180) + 'deg)'});
                }else if(angle >= 270 && angle <= 360){
                    leftbottom.css({'transform':'rotate(0deg)','opacity':0});
                    middlelayer.css({'opacity':1})  
                    lefttop.css({'transform':'rotate(' + (angle-270) + 'deg)'});
                }else{
                    angle = 0
                }
        },

        DynamicCircle: function(angle,displaynum,middlelayer,lefttop,rightbottom,leftbottom,righttop,centercircle){
                if(angle >= 0 && angle < 90){
                    middlelayer.css({'opacity':0})
                    lefttop.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                    rightbottom.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                    leftbottom.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                    righttop.css({'transform':'rotate(' + angle + 'deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                    centercircle.html(displaynum);
                }else if(angle >= 90 && angle < 180){
                    righttop.css({'transform':'rotate(0deg)','opacity':0});
                    rightbottom.css({'transform':'rotate(' + (angle-90) + 'deg)'});
                    centercircle.html(displaynum);
                }else if(angle >= 180 && angle < 270){
                    rightbottom.css({'transform':'rotate(0deg)','opacity':0});
                    leftbottom.css({'transform':'rotate(' + (angle-180) + 'deg)'});
                    centercircle.html(displaynum);
                }else if(angle >= 270 && angle <= 360){
                    leftbottom.css({'transform':'rotate(0deg)','opacity':0});
                    middlelayer.css({'opacity':1})  
                    lefttop.css({'transform':'rotate(' + (angle-270) + 'deg)'});
                    centercircle.html(displaynum);
                }else{
                    angle = 0
                }
        },

        DynamicLight: function(angle,middlelayer,lefttop,rightbottom,leftbottom,righttop,centercircle){
            if(angle >= 0 && angle < 90){
                middlelayer.css({'opacity':0})
                lefttop.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                rightbottom.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                leftbottom.css({'transform':'rotate(0deg)','background-color':'rgba(235, 235, 235)','opacity':1});
                righttop.css({'transform':'rotate(' + angle + 'deg)','background-color':'rgba(235, 235, 235)','opacity':1});
            }else if(angle >= 90 && angle < 180){
                righttop.css({'transform':'rotate(0deg)','opacity':0});
                rightbottom.css({'transform':'rotate(' + (angle-90) + 'deg)'});
            }else if(angle >= 180 && angle < 270){
                rightbottom.css({'transform':'rotate(0deg)','opacity':0});
                leftbottom.css({'transform':'rotate(' + (angle-180) + 'deg)'});
            }else if(angle >= 270 && angle <= 360){
                leftbottom.css({'transform':'rotate(0deg)','opacity':0});
                middlelayer.css({'opacity':1})  
                lefttop.css({'transform':'rotate(' + (angle-270) + 'deg)'});
            }else{
                angle = 0
            }
        },


    })
})()