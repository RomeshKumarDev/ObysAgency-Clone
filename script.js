function locomotiveAnimation()
{
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}


function loadingAnimation()
{
    


var tl= gsap.timeline();
tl.from(".line h1",
{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
    
});
tl.from("#line1-part1",
{
    opacity:0,
   
    onStart:function()
    {
        
    var counterh5=document.querySelector("#line1-part1 h5")

    var count=0;
      setInterval(function()
    { 
              if(count<100)
              {
              
                counterh5.innerHTML=  count++;
                   
              }
             else
             {
              counterh5.innerHTML=count;
             }
    },27)
    }


})
tl.to(".line h2",{
    animationName:"anime4",
    opacity:1
})

tl.to("#loader",
{
    opacity:0,
    duration:0.2,
   delay:2.6,
})
tl.from("#page1",
{
    delay:0.2,
    y:1600,
   
    duration:0.6,
    ease:Power4
})
tl.to("#loader",
{
    display:"none",
})
tl.from("#nav",
{
    opacity:0,
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
   y:140,
   stagger:0.2
})
}


function cursorAnimation()
{
    Shery.mouseFollower(
        {
            skew:true,
            ease:"cubic-bezier(0.23,1,0.328,1)",
            duration:1,
        }
    )
Shery.makeMagnet("#nav-part2 h4");
var videoContainer=document.querySelector("#videoContainer");
 var video=  document.querySelector("#videoContainer video")
videoContainer.addEventListener("mouseenter",function()
{
    videoContainer.addEventListener("mousemove",function(dets)
    {
        gsap.to(".mousefollower",{
       opacity:0
        })
        gsap.to("#videoCursor",
        {
            left:dets.x-570,
            y:dets.y-300
        })
    })
})
videoContainer.addEventListener("mouseleave",function()
{
    gsap.to(".mousefollower",
    {
    opacity:1
    })
    gsap.to("#videoCursor",
    {
        left:"80%",
      top:"-10%"
    })
});

var flag=0
videoContainer.addEventListener("click",function(){
    if(flag==0)
    {
        video.play()
    video.style.opacity=1
    document.querySelector("#videoCursor").innerHTML=`<i class="ri-pause-line"></i>`
     gsap.to("#videoCursor",
     {
        scale:0.5

     })
 
flag=1;
    }
    else{
        video.pause()
        video.style.opacity=0
        document.querySelector("#videoCursor").innerHTML=`  <i class="ri-play-large-fill"></i>`
         gsap.to("#videoCursor",
         {
            scale:1
    
         })
     
    flag=0;

    }
})
}
function shreyAnimation()
{
   
    Shery.imageEffect(".image-div",
    {
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":2.62,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.83,"range":[0,10]},"metaball":{"value":0.58,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}},
        gooey:true
    })
}

loadingAnimation();
cursorAnimation();


shreyAnimation();
document.addEventListener("mousemove",function(dets)
{
    gsap.to("#flag",
    {
        x:dets.x,
        y:dets.y

    })
})
document.querySelector("#hero3").addEventListener("mouseenter",function()
{
    gsap.to("#flag",
    {
        opacity:1
    })
})
document.querySelector("#hero3").addEventListener("mouseleave",function()
{
    gsap.to("#flag",
    {
        opacity:0
    })
})