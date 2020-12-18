
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

var mobile = window.mobileCheck()==1;
//scale Application HTML
var appScaler = document.getElementById("appPixi");

//chequear escala del aplicativo 
var appWidth = window.innerWidth-16;
var appHeight = window.innerHeight-16;
appScaler.style.width = appWidth + "px";
appScaler.style.height = appHeight + "px";

//create Application
let app = new PIXI.Application({
    width: appWidth,
    height: appHeight,
    transparent: false,
    backgroundColor: 0x000000
});

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
PIXI.settings.ROUND_PIXELS = true;


//window Resize event
window.addEventListener('resize', resizeScale);

function resizeScale() {
    appWidth = window.innerWidth - 16;
    appHeight = window.innerHeight - 16;
    appScaler.style.width = appWidth + "px";
    appScaler.style.height = appHeight + "px";
    app.renderer.resize(appWidth, appHeight);

 
    scaleContainer = appHeight / 1080;
    minScaleContainer = scaleContainer;
    //container.scale.set(scaleContainer);

    placeMenu();
    
}
//Agregar a ventana
appScaler.appendChild(app.view);

// Loader

const Loading = PIXI.Sprite.from ('assets/loading.png');

Loading.anchor.set (0.5);
Loading.x =appWidth/2;
Loading.scale.set (0.5);
Loading.y=  appHeight/2;
app.stage.addChild (Loading); 
app.ticker.add ((delta)=> {
 Loading.rotation +=0.01*delta;
});


//Loader Font and Sprites
const loader = PIXI.Loader.shared;
loader.baseUrl ='assets';

//menu
var m_logo;
loader.add('logoTx', 'logo.png');

//about
var a_vertport, a_ana, a_ball ;
loader.add('vertport', 'vertport.png');
loader.add('ana', 'ana.jpg');
loader.add('ball', 'ball.png');

//portfolio
var p_c1, p_c2, p_slider, p_ball, p_bg;
loader.add ('corner', 'corner.png');
loader.add ('blackbg', 'blackbg.png');
loader.add ('scroll', 'scroll.png');


var scaleContainer = appHeight / 1080;
minScaleContainer = scaleContainer;

const corners = new PIXI.Container();
corners.scale.set(scaleContainer);

const picslide = new PIXI.Container();
picslide.scale.set(scaleContainer);

//proyectos
var p = []; 
for (var i = 0; i<3; i++) {
    loader.add ('p'+i, 'projects/'+i+'.jpg')
}

//info
var i_horport, i_picture;
loader.add ('horport', 'horport.png');

WebFont.load({
    google: {
        families: ['Rubik']
    },
    active:e=>{
      
loader.load((loader, resources) => {

    //menu
   m_logo = new PIXI.Sprite (resources.logoTx.texture);

   //about
   a_vertport = new PIXI.Sprite (resources.vertport.texture);
   a_ana = new PIXI.Sprite (resources.ana.texture);
   a_ball = new PIXI.Sprite (resources.ball.texture);

   //portfolio
    p_c1= new PIXI.Sprite (resources.corner.texture);
    p_c2= new PIXI.Sprite (resources.corner.texture);
    p_slider= new PIXI.Sprite (resources.scroll.texture);
    p_ball= new PIXI.Sprite (resources.ball.texture);
    p_bg= new PIXI.Sprite (resources.blackbg.texture);

    //projects
    p[0] = new PIXI.Sprite (resources.p0.texture);
    p[1] = new PIXI.Sprite (resources.p1.texture);
    p[2] = new PIXI.Sprite (resources.p2.texture);

    //info
    i_horport = new PIXI.Sprite (resources.horport.texture);
    i_picture = new PIXI.Sprite (resources.p2.texture);
});

loader.onComplete.add((loader) => {
        gsap.to (Loading, {alpha: 0, duration: .5, ease: "power2.in", onComplete:
            function (){
                app.stage.removeChild (Loading);
                Loading.visble = false;
                }
            }
        );

    app.ticker.stop();
    init();
    gsap.ticker.add(update);
    resizeScale();
});
    }
});

//MENUSCROLL
const MenuContainer = new PIXI.Container();

//------TEXTOS----- 

//ESTILOS
const stylemenu = new PIXI.TextStyle({
    fontFamily: 'Rubik',
    fontSize: 22,
    fontStyle: 'normal',
    fill: '#ffffff',
});
const divider = new PIXI.TextStyle({
    fontFamily: 'Rubik',
    fontSize: 40,
    fontStyle: 'normal',
    fill: '#dc2c32',
  
});
const styledesc = new PIXI.TextStyle({
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: 'lighter',
    align: "center",
    fill: '#ffffff',
    wordWrap: true,
    wordWrapWidth: 440,
});
const styletitle = new PIXI.TextStyle({
    fontFamily: 'Rubik',
    fontSize: 20,
    fontWeight: 'bold',
    align: "center",
    fill: '#ffffff',
    wordWrap: true,
    wordWrapWidth: 440,
});
const stylebt = new PIXI.TextStyle({
    fontFamily: 'Rubik',
    fontSize: 18,
    fontStyle: 'normal',
    fill: '#dc2c32',
    wordWrap: true,
    wordWrapWidth: 440,
});


//Menu
const m_portfolio = new PIXI.Text('PORTFOLIO', stylemenu);
const m_aboutme = new PIXI.Text('ABOUT ME', stylemenu);
const m_divide = new PIXI.Text('/', divider);


const a_description = new PIXI.Text('I am a programmer with a passion on creating new and valuable experiences. I have developed webpages, desktop and mobile applications. I have worked with platforms such as Unity, Unreal, Arduino, Processing, P5js, and also javascript libraries as Pixi.js, Aframe.js, and Three.js', styledesc);
const a_mail = new PIXI.Text('ana.villavicencio.b@gmail.com', styledesc);
const a_number = new PIXI.Text('+593983505904', styledesc);


const p_title = new PIXI.Text ('Yaku Aguamundi', styletitle);
const p_subtitle = new PIXI.Text ('mapping', styledesc);
const p_btmore = new PIXI.Text ('more', stylebt);


const i_title = new PIXI.Text ('Yaku Aguamundi', styletitle);
const i_subtitle = new PIXI.Text ('mapping', styledesc);
const i_desc = new PIXI.Text ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet suscipit ipsum. In in justo nisl. Donec vitae vulputate odio. Sed mattis mattis leo, quis rutrum dolor consequat vitae. Donec ut erat et dui varius sagittis. sprimis in faucibus. Proin a arcu orci.', styledesc);
const i_tipo = new PIXI.Text ('Resolume', styledesc);
const i_btback = new PIXI.Text ('back', stylebt);

//m_portfolio.resolution = m_aboutme.resolution =2;

//***********************FUNCTIONS**************************

function init() {
createMenu ();
//createAbout ();
//createPortfolio ();
createInfo ();
 
}

function createMenu () {

    m_logo.anchor.set (0,0.5);
    m_logo.scale.set (0.4);
    
    m_portfolio.anchor.set (1,0.5);
    m_aboutme.anchor.set (1,0.5);
    m_divide.anchor.set (1,0.5);
    
    placeMenu();
    
    app.stage.addChild (m_logo, m_portfolio, m_aboutme, m_divide);    

    m_logo.interactive = m_portfolio.interactive = m_aboutme.interactive= true;
    m_logo.buttonMode = m_portfolio.buttonMode = m_aboutme.buttonMode= true;
    m_logo.on('pointerdown', openPortfolio); 
    m_portfolio.on('pointerdown', openPortfolio).on('pointerover', hover).on('pointerout', endHover);  
    m_aboutme.on('pointerdown', openAbout).on('pointerover', hover).on('pointerout', endHover);  
}

function placeMenu() {
    
    m_logo.position.x = appWidth*.05;    
    m_portfolio.position.x = appWidth*.95-160;
    m_aboutme.position.x = appWidth*.95;
    m_divide.position.x = appWidth*.95 -125;

    m_aboutme.position.y = m_portfolio.position.y = m_logo.position.y = m_divide.position.y = 80;
}

function createAbout () {
    a_ana.anchor.set (0.5);
    a_vertport.anchor.set (0.5);
    a_ball.anchor.set (1, 0.5);
    a_description.anchor.set (0.5);
    a_mail.anchor.set (0.5);
    a_number.anchor.set (0.5);

    
    placeAbout ();

    app.stage.addChild ( a_ana, a_vertport, a_ball, a_description, a_mail, a_number);

    a_mail.id = "mailbt";
    a_number.id = "numberbt"
    a_mail.interactive = a_number.interactive = true;
    a_mail.buttonMode = a_number.buttonMode = true;
    a_mail.on ('pointerover', hover).on('pointerout', endHover).on ('pointerdown', click);
    a_number.on ('pointerover', hover).on('pointerout', endHover). on ('pointerdown', click);
}

function placeAbout () {
    a_ana.scale.set(0.103);
    a_vertport.scale.set(0.7);

    
    a_vertport.x = appWidth*.3;
    a_vertport.y = appHeight*.55;

    a_ana.x = a_vertport.x+(a_ana.width*.2);
    a_ana.y = appHeight*.55;
    

    a_description.x = a_mail.x = a_number.x= appWidth*.7;
    a_description.y = appHeight*.45;
    a_mail.y = appHeight*.6;
    a_number.y = appHeight*.65;

    a_ball.x =  appWidth-120;
    a_ball.y =  appHeight-80;
}

function createPortfolio () {

    p_c1.anchor = p_c2.anchor= p_slider.anchor= p_ball.anchor= p_bg. anchor =p_title.anchor= p_subtitle.anchor= p_btmore.anchor.set (0.5);
    for (var i = 0 ; i<p.length; i++) {
        picslide.addChild (p[i]); 
        p[i].anchor.set (0.5);
        p[i].x = 1000* (i);
    }
    p_ball.scale.set( .5);
    p_bg.scale.set (1.2);
    p_c2.rotation = 3.14;
    p_c1.x = -280;
    p_c2.x = 280;
    p_c1.y = -140;
    p_c2.y = 140;
    
    placePortfolio ();
    
    corners.addChild  (p_c1, p_c2);
    p_bg.alpha = 0.75;
    app.stage.addChild (corners, picslide, p_bg, p_slider, p_ball, p_title, p_subtitle, p_btmore);

    p_btmore.interactive = true; 
    p_btmore.buttonMode = true; 
    p_btmore.on ('pointerup', openInfo); 
    
}

function placePortfolio () {
    corners.x = app.screen.width / 2;
    corners.y = app.screen.height / 2;
    picslide.x = app.screen.width / 2;
    picslide.y = app.screen.height / 2;

    p_slider.x= p_bg.x = p_title.x = p_subtitle.x = p_btmore.x = appWidth * .5;
    p_bg.y = appHeight *.5
    p_title.y = appHeight * .48;
    p_subtitle.y = appHeight *.52;
    p_btmore.y = appHeight *.8;
    p_slider.y= p_ball.y = appHeight *.9;
    p_ball.x= appWidth*.5;
    
}

function createInfo () {
    i_horport.anchor= i_picture.anchor= i_title.anchor = i_subtitle.anchor = i_desc.anchor = i_tipo.anchor = i_btback.anchor.set (0.5);
    i_picture.scale.set(1.275); 
placeInfo();
    app.stage.addChild (i_picture, i_horport,  i_title, i_subtitle, i_desc, i_tipo, i_btback);

    i_btback.interactive = true;
    i_btback.buttonMode = true;
    i_btback.on ('pointerdown', openPortfolio);

}
function placeInfo () {
 i_horport.y = i_picture.y= i_desc.y = appHeight*.55;
 
i_horport.x = appWidth*.45;
i_picture.x = appWidth *.33;
 i_title.x = i_subtitle.x= i_desc.x= i_tipo.x= i_tipo.x = i_btback.x = appWidth *0.75;

 i_title.y = appHeight *.4;
 i_subtitle.y = appHeight *.45;
 i_tipo.y = appHeight *.72;
 i_btback.y = appHeight *.8;
}

function addInteractivity () {

     /* //Drag Fondo
      logo.interactive = true;
      logo.buttonMode = true;
      fondo.on('pointerdown', onDrag).on('pointermove', onDragMove).on('pointerup', endDrag);  
  */
      //Interactividad botones



}

var hover;
function hover (e) {
    e.target.tint = 0xdc2c32;
    hover = e.target;
}
function endHover () {
    hover .tint = 0xffffff;
}

function click (e) {
    
console.log (e.target);

}

function openPortfolio() {

}

function openAbout() {

}

function openInfo(){

}


function audiomusic() {
    if (playing) {
        playing = false;
audiosong.pause ();
sonido.texture = Tnosonido;
    }else {
        
audiosong.play ();
playing =true;
sonido.texture = Tsonido;

    }
}

function resizePlace () {
    
    //Loader

    overlay.width =appWidth;
    overlay.height =appHeight;
    fondo.scale.set (appWidth/1920, appHeight/1080);
    fondo.x = overlay.x = appWidth/2; 
    fondo.y = overlay.y = appHeight/2;

    Loading.x = BGLoad.x = FLoad.x =appWidth/2;
    Loading.scale.set (0.5);
    Loading.y=  appHeight*.62;
    BGLoad.y= FLoad.y = appHeight *.5;
    BGLoad.scale.set ( appHeight/1080, appHeight/1080 ); 
    FLoad.scale.set ( appWidth/1920, appHeight/1080 ); 
    
    //Intro Background

    maxLmR = appWidth/2 -(97*scaleContainer);
    maxLmL = appWidth/2+(97*scaleContainer);

    //Flechas
    if (mobile) {
        scaleArrows = scaleContainer* 1;
        scaleBall = scaleContainer *1.25;
    }
     else {
        scaleArrows = scaleContainer*.6;
        scaleBall = scaleContainer *1;
     }

     
     if (mobile) {
        flechader.x = flechaMder.x =appWidth - 100;
        flechaizq.x = flechaMizq.x=100;
        flechaizq.y = flechader.y = flechaMizq.y= flechaMder.y=appHeight * .5; 
        }
         else {
        flechader.x = flechaMder.x= appWidth - 50;
        flechaizq.x =flechaMizq.x= 50;
        flechaizq.y = flechader.y = flechaMizq.y= flechaMder.y=appHeight * .5; 
         }

         if (flechader.scale.y > 0) {
            flechader.scale = flechaizq.scale.set(scaleArrows);
         } 
     if (flechaMder.scale.y > 0) {

        flechaMder.scale = flechaMizq.scale.set (scaleArrows);
     }

     if (widthArrows) {
        flechaizq.visible = flechader.visible = true;
         
       
    } else {
        flechaizq.visible = flechader.visible = false;
           }

    //Modal
    modalinitS =[ (appWidth/1920) *.5, (appHeight /1080) *.5]; 
    modalfinS = [ (appWidth/1920), (appHeight /1080)];
    modalF.x= appWidth * .5;
    modalF.y = appHeight*.5;
    modalB.x= appWidth*.5;
    modalB.y = appHeight*.5;

    if (appWidth> 1920*scaleContainer) {
        modalB.scale.set (  modalfinS [0], scaleContainer)
        } 
        else {
        modalB.scale.set (  scaleContainer, scaleContainer)
    }

    if (modal == 2) {
        modalF.scale.set (modalfinS [0], modalfinS [1]);
    }

    modalBt.x = appWidth*.5;
    modalBt.y = appHeight*.9;
    modalC.x = appWidth * .95 ;
    modalC.y = appHeight*.05;
    modalT.x = appWidth * .3;
    modalT.y = appHeight *.35;
    modalD.x = appWidth * .3;
    modalD.y = appHeight *.35+60;
    modalD.style.wordWrapWidth =appWidth*.42;
    
    modalWBG.x = appWidth*.5;
    modalWBG.y = appHeight*.5;
    modalWBG.width = appWidth*.5; 
    modalWBG.height = appHeight*.4;
    
    modalBt.scale = modalC.scale.set(scaleImg*scaleContainer);
    //Menu
    menuBG.x = appWidth * .5 ;
    menuBG.y = appHeight*.5;
    if (appWidth> 1920*scaleContainer) {
        menuBG.scale.set (  modalfinS [0], scaleContainer);
        } 
        else {
        menuBG.scale.set (  scaleContainer, scaleContainer)
    }
    menuClose.x = appWidth*.95 ;
    menuClose.y = appHeight*.05;
    
    menuClose.scale.set (scaleImg*scaleContainer); 

    menuAbout.x = appWidth *.5; 
    menuAbout.y = appHeight*.76;

    scrollSpace.scale.set (scaleContainer*.20, scaleContainer*.4);
    scrollSpace.x =appWidth*.5;
    scrollSpace.y = appHeight*.5-(25*scaleContainer);
    
    MenuContainer.width = scrollSpace.width; 
    MenuContainer.height = scrollSpace.width*3.5;
    MenuContainer.x= appWidth*.5; 
    MenuContainer.y =  scrollSpace.y - appHeight*.2;
    
      
    //Boton Menu
    menu.x = appWidth * .93;
    menu.y = appHeight * .07;
    menu.scale.set (scaleImg *scaleContainer);

    //Creditos
    creditos[0].scale.set(appWidth/1920, appHeight/1080)
    creditos[0].x = appWidth * .5;
    creditos[0].y = appHeight * .5;
    creditos[1].y = appHeight * .9;
    creditos[1].x = appWidth * .5-180;
    creditos[2].y = appHeight * .9;
    creditos[2].x = appWidth * .5+180;

    center = appWidth/2;

    //logos
    
    distL.x = 240*scaleContainer;
    distL.y = 120*scaleContainer;
    sonido.x = appWidth - 50;
    sonido.y = appHeight - 50;
    sonido.scale.set ( scaleContainer *.5);
    sonido.scale.set ( scaleContainer *.5);
    if (distL.scale.y >0 ) {
        distL.scale.y = scaleContainer*.7;
    } else {
    distL.scale.set (scaleContainer*.7);
    }    
    distL.scale.x =scaleContainer*.7;

    //stars
    if (stars [0].alpha>0) {
    starAnimation (false);
    }
    if (ruedaanim) {
    starAnimation (true);
    }
}

/********************VARIABLES******************/
var dragging = false;
var dragged = false;
var ruedaanim = false; 
var modal = 0;
var introanim = 0;
var fast = 0;
var scaleContainer = appHeight / 1080;
var minscaleContainer;
var datax = 0;
var move = 0.7;
var sentido = -1;
var selectedBuilding = 0;
var logoanim = [];
var moveFlech = false;
//var center = container.x;
var startdragging = 0;
var swiperight;
var swipeleft;
var swipeEnd;
var modalinitS =[ (appWidth/1920) *.5, (appHeight /1080) *.5]; 
var modalfinS = [ (appWidth/1920), (appHeight /1080)];
var menuB = false; 
var creditosB = false;
var datay =0;
var justmoved;
var prevTexture; 
var startMouse;
var maxR = ((appWidth / 2) + ((1920 * scaleContainer) - appWidth) / 2);
var maxL = ((appWidth / 2) - ((1920 * scaleContainer) - appWidth) / 2);



    
function starAnimation(activate) {
    if (activate) {
 for (var i =0; i <starAmount; i++) {
     
    stars[i].position.x = map_range(Math.random(), 0 , 1, 0 , appWidth ) ;
    stars[i].position.y = -50 ;
    gsap.to (stars [i], {alpha: 1, duration: 0.5} );
    starGsapX [i] = gsap.to (stars[i].position, {x: stars[i].position.x + Math.random () * 100, duration:4+ (Math.random ()*4), yoyo: true, repeat: -1, ease: "none"});
    starGsapY [i] = gsap.to (stars[i].position, {y: appHeight+100, duration: 10+ (Math.random ()*5), repeat: -1, ease: "sine"}).delay (Math.random()*20); 
 
 }
} else {
    for (var i =0; i <starAmount; i++) {
        starGsapX [i].kill ();
        starGsapY [i].kill();
        gsap.to (stars [i], {alpha: 0, duration: 0.5} );
     }
}
}

function mouseUp () {
    if (dragged ) {
        dragged = false;
        dragging = false;
    }
   
    
}

function moveIzq() {
    
    if (modal == 0) {

        moveFlech = true;
        flechaizq.interactive = false;
        gsap.to(flechaizq, { alpha: 0, duration: 0.1, ease: "power2.out" });
        if (mobile) {
            console.log (maxR + ", "+ qR + ", "+ center + ", "+ qL + ", "+ maxL);            
            if (container.x >=center && container.x < qR) {
                nextpos = qR;
                } else if (container.x >= qR) {
                nextpos = maxR;
                } else if (container.x <=center && container.x >= qL) {
                    nextpos = center;
                } else {
                    nextpos = qL;
                }
        } else {

            if (container.x >=center) {
            nextpos = maxR;
            } else if (container.x <= maxR) {
            nextpos = center;
            }

        }
        gsap.to(container.position, {
            x: nextpos, duration: 1, ease: "power2.inOut", onComplete:
                function () {
                   if ( nextpos!= maxR) {
                    gsap.to(flechaizq, { alpha: 1, duration: 0.1, ease: "power2.in" })
                    flechaizq.interactive = true;
                   
                   }
                   moveFlech = false;

                }
        });
    }

}

function moveDer() {
    if (modal == 0) {
        moveFlech = true;
        flechader.interactive = false;
        gsap.to(flechader, { alpha: 0, duration: 0.1, ease: "power2.out" });
        
       if (mobile) {
        if (container.x <=center && container.x > qL) {
            nextpos = qL;
            } else if (container.x <= qL) {
            nextpos = maxL;
            } else if (container.x >=center && container.x <= qR) {
                nextpos = center;
            } else {
                nextpos = qR;
            }
        } else {
            if (container.x <=center) {
                nextpos = maxL;
            } else if (container.x >= maxL) {
                nextpos = center;
            }
        }
        gsap.to(container.position, {
            x: nextpos, duration: 1, ease: "power2.inOut", onComplete:
                function () {
                    if (nextpos!= maxL) { 
                    gsap.to(flechader, { alpha: 1, duration: 0.1, ease: "power2.in" });
                    flechader.interactive = true;
                    
                    }
                    
                    moveFlech = false; 
                }
        });
    } 

}

function onDrag() {
    if (modal == 0 && widthArrows) {
        dragging = true;
    }
}

function onDragMove(event) {
    
    if (dragging) {
  
        if (!dragged){
            startMouse = event.data.global.x -container.x;
            startdragging++;
            if (startdragging >3) {
                dragged=true;
            }
        
        } else {
            container.x = event.data.global.x- startMouse;
             if (container.x<maxL) {
                container.x =maxL;
             }
            if (container.x> maxR) {
                
                container.x = maxR;
            }
        }
            
        datax = event.data.global.x;
    } 
}      

function endDrag() {
    
    startdragging = 0;
    dragging = false;
    setTimeout(() => {
    dragged = false;
    }, 100);
}

function buildingDer () {
    selectedBuilding ++;
    if (selectedBuilding == edificiosInt.length) {
        selectedBuilding = 0;
    
}
    while (edificiosInt [selectedBuilding].externallink) {
        selectedBuilding ++;
        if (selectedBuilding == edificiosInt.length) {
            selectedBuilding = 0;
        }
    } 
       
      
        ChangeBuilding ();

}

function buildingIzq () {

    selectedBuilding --;
    if (selectedBuilding == -1) {
        selectedBuilding = edificiosInt.length-1;
    
}
    while (edificiosInt [selectedBuilding].externallink) {
        selectedBuilding --;
        console.log (selectedBuilding)
        if (selectedBuilding == -1) {
            selectedBuilding = edificiosInt.length-1;
        }
    }
       
    ChangeBuilding ();

}

function animLogos() {
    for (var i = 0; i< edificiosInt.length; i++) {
    logoanim[i] = gsap.to(nombres[i].position, { y: nombres[i].position.y - 30, duration:1, repeat: -1, yoyo: true, ease: "sine.inOut" });
    logoanim [i].kill(); 
}
}

function placeBuildings() {
    for (var i = 0; i < edificiosInt.length; i++) {
        edificios[i].x = edificiosInt[i].position[0];
        edificios[i].y = edificiosInt[i].position[1];

            nombres[i].x = edificiosInt[i].position[0];
            if (i == 0 ) {
                nombres[i].y = edificiosInt[i].position[1]-230;
            }else if (i==2){
                
                nombres[i].y = edificiosInt[i].position[1]-250;
                
                } else if (i==3){
                
            nombres[i].y = edificiosInt[i].position[1]-160;
            
            nombres[i].x = edificiosInt[i].position[0]+20;
            }else{
            nombres[i].y = edificiosInt[i].position[1]-190;
    
        }
    }
}

function introFin() {
    
   
        ruedaanim= true;
        starAnimation (true);
        
            menu.visible = true;
            distL.visible = true; 
            gsap.to(distL.scale, { y: scaleContainer*.7, duration: .5, ease: "power2.in" });
            fondo.interactive = true;
            if (widthArrows) {
            flechaizq.visible = flechader.visible = true;
            gsap.to(flechader.scale, { x: scaleArrows, y: scaleArrows, duration: .5, ease: "power2.in" }).delay(.5);
            gsap.to(flechaizq.scale, { x: scaleArrows, y: scaleArrows, duration: .5, ease: "power2.in" }).delay(.5);
          
            flechaizq.buttonMode = flechader.buttonMode = true;
            flechaizq.interactive = flechader.interactive = true;
       
            }

  
                for (var i = 0; i < edificiosInt.length; i++) {
                    edificios[i].interactive = true;
                    edificios [i].buttonMode = true;
                }
                menu.interactive = true;
                menu.buttonMode = true;
                gsap.to (menu, {alpha:1, duration: 0.5});
            
      
        introanim = 2;
   
}

function OverBuilding(event) {
    var over = event.currentTarget.name;
    gsap.to(edificios[over].scale, { x: 1.1, y: 1.1, duration: .5 });
        gsap.to(nombres[over].scale, { x: .7, y: .7, duration: 1 });
        logoanim[over].restart();
    
}

function OutBuilding(event) {
    var over = event.currentTarget.name; 
      gsap.to(edificios[over].scale, { x: 1, y: 1, duration: .5 });
        gsap.to(nombres[over].scale, { x: .6, y: .6, duration: 1 });
        logoanim[over].restart();
        logoanim[over].kill();

    }

function BuildingSelect(event) {
    if (!moveFlech) {
        if (dragged) {
            endDrag();
        } else {
            selectedBuilding = event.currentTarget.name;
            if (!edificiosInt [selectedBuilding].externallink) {
           
            if (modal == 0) {
                dragging = false;
                modal = 1;
                gsap.to(edificios[selectedBuilding].scale, { x: 1, y: 1, duration: 0.5 });
                gsap.to(edificios[selectedBuilding].scale, { x: 1.1, y: 1.1, duration: 0.5 , 
                    onComplete: function () {
                   openModal();
                } });
                
                modalT.text = edificiosInt[selectedBuilding].title;
                modalD.text = edificiosInt[selectedBuilding].description;
              
            }
        } else {
            linkModal();
        }
        }
    }
}

function BuildingSelectMenu(event) {
        selectedBuilding = event.currentTarget.name;
        
    if (!edificiosInt [selectedBuilding].externallink) {
        modal=1;
        modalT.text = edificiosInt[selectedBuilding].title;
        modalD.text = edificiosInt[selectedBuilding].description;
        menuAbout.interactive= false;
        menuAbout.buttonmode = false;
        menuClose.interactive =false; 
        menuClose.buttonmode=false;
        scrollSpace.interactive =false;
        for (var i = 0; i< menuEdf.length; i++) {
            menuEdf [i].buttonmode =false;
            menuEdf [i].interactive =false; 
        }

        openModal();
        setTimeout(() => {
            for (var i = 0; i< menuEdf.length; i++) { 
                menuEdf [i].visible =false; 
            }

        modalF.visible = menuBG.visible = menuClose.visible = menuAbout.visible = 
        MenuContainer.visible=scrollSpace.visible=false;
        }, 500);
    } else {
        
        linkModal();
    }
  
}

function deselectBuilding() {
    gsap.to(edificios[selectedBuilding].scale, { x: 1, y: 1, duration: 0.5 });
    
}

function closeModal() {
    if (modal == 2) {
        
        if (!menuB) {
            overlay.visible =true;
            menu.visible = true;
     
            distL.visible =  true; 
           if (widthArrows) {
            flechaizq.visible = flechader.visible = true;
           }
            menu.interactive = true;
             for (var i =0; i< edificios.length; i++) {
                edificios[i].visible = true;
            }
        gsap.to (blurFilter, {blur: 1, duration: 0.5});
        gsap.to(modalWBG, { alpha: 0, duration: 0.3, ease: "power2.out"}) ;

        gsap.to(modalF.scale, { x: modalinitS[0], y: modalinitS[1], duration: 0.3, ease: "power2.out"}).delay (.4);
        gsap.to(modalF, { alpha: 0, duration: 0.3, ease: "power2.out", onComplete: function () {      
            modalWBG.visible = false;   
            if (widthArrows) {

                    flechaizq.buttonMode = flechader.buttonMode =true; 
                    flechaizq.interactive = flechader.interactive =true; 
                    
                }
            for (var i =0; i< edificios.length; i++) {
                edificios[i].interactive =true;
                edificios[i].buttonMode = true;
            }
            
        modal =0;
        } }).delay(.4);
        gsap.to (flechaMizq.scale, {x:scaleArrows, y:0, duration:0.3, ease: "power2.out"});       
        gsap.to (flechaMder.scale, {x:scaleArrows, y:0, duration:0.3, ease: "power2.out", onComplete: function () {
            flechaMder.interactive = flechaMizq.interactive = false;
            flechaMder.buttonMode = flechaMizq.buttonMode = false;
            flechaMder.visible = flechaMizq.visible = false;
        }});
         }else {
        

            modalF.visible = menuBG.visible = menuClose.visible = menuAbout.visible = 
            MenuContainer.visible= scrollSpace.visible=true;
            gsap.to(modalWBG, { alpha: 0, duration: 0.3, ease: "power2.out"}) ;

        gsap.to(modalB, { alpha: 0, duration: 0.3, ease: "power2.out" });
        menuAbout.interactive= true;
        menuAbout.buttonmode = true;
        menuClose.interactive =true; 
        menuClose.buttonmode=true;
        scrollSpace.interactive =true;
        for (var i = 0; i< menuEdf.length; i++) {
            menuEdf [i].buttonmode =true;
            menuEdf [i].interactive =true; 
            menuEdf [i].visible = true;
        }
        }
        
        modalBt.interactive = false;
        modalC.interactive = false;  
        modalBt.buttonMode = false;
        modalC.buttonMode = false;
        
        gsap.to(modalBt, { alpha: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(modalC, { alpha: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(modalT, { alpha: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(modalD, { alpha: 0, duration: 0.3, ease: "power2.out", onComplete: function () {
            modalF.visible = modalB.visible = modalBt.visible = modalC.visible = modalT.visible = modalD.visible = true;
        }});
        
        gsap.to (flechaMizq.scale, {x:scaleArrows, y:0, duration:0.3, ease: "power2.out"}); 
        gsap.to (flechaMder.scale, {x:scaleArrows, y:0, duration:0.3, ease: "power2.out", onComplete: function () {
            flechaMder.interactive = flechaMizq.interactive = false;
            flechaMder.buttonMode = flechaMizq.buttonMode = false;
            flechaMder.visible = flechaMizq.visible = false;
        }});
    }
    deselectBuilding();
}

function openModal() {
    if (modal == 1) {
        setTimeout(() => {
            menu.interactive = false;
            fondo.interactive =false; 
    
            flechaizq.visible = flechader.visible = false;
            
            overlay.visible =false;
            menu.visible = false;
            for (var i =0; i< edificios.length; i++) {
                edificios[i].interactive =false;
                edificios[i].buttonMode = false;
                edificios[i].visible = false;
                
            }
        }, 400);
        modalWBG.visible =  modalF.visible = modalB.visible = modalBt.visible = modalC.visible = modalT.visible = modalD.visible = true;
        modalBt.interactive = true;
        modalBt.buttonMode = true;
        flechaMder.visible = flechaMizq.visible = true;
        menu.interactive = false;
        menu.buttonmode = false;
        modalB.texture = fondos [selectedBuilding];

        gsap.to (blurFilter, {blur: 0, duration: 0.4});
        gsap.to(modalF.scale, { x: modalfinS [0], y: modalfinS[1], duration: 0.3, ease: "power2.out" }).delay (.1);
        gsap.to(modalF, { alpha: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(modalB, { alpha: 1, duration: 0.3, ease: "power2.out" }).delay (.1);
        gsap.to(modalWBG, { alpha: 0.8, duration: 0.3, ease: "power2.out"}) ;

        gsap.to(modalBt, { alpha: 1, duration: 0.3, ease: "power2.out", 
        
        onComplete: 
        function () {
            
        modalC.buttonMode = true;
        modalC.interactive = true;
            modal = 2;
            
           } }).delay (.5);
           gsap.to (flechaMizq.scale, {x:scaleArrows, y:scaleArrows, duration:0.3, ease: "power2.out"}).delay (.5); 
        gsap.to (flechaMder.scale, {x:scaleArrows, y:scaleArrows, duration:0.3, ease: "power2.out", onComplete: function () {
            flechaMder.interactive = flechaMizq.interactive = true;
            flechaMder.buttonMode = flechaMizq.buttonMode = true;
        }}).delay (.5);
        gsap.to(modalC, { alpha: 1, duration: 0.3, ease: "power2.out" }).delay(.5);
        gsap.to(modalT, { alpha: 1, duration: 0.3, ease: "power2.out" }).delay(.3);
        gsap.to(modalD, { alpha: 1, duration: 0.3, ease: "power2.out" }).delay(.4);
    }
}

function ChangeBuilding () {
    
    modalB.texture = fondos [selectedBuilding];

    modalT.text = edificiosInt[selectedBuilding].title;
    modalD.text = edificiosInt[selectedBuilding].description;
}

function openMenu() {
    modal = 1;
    if (modal == 1) {
        setTimeout(() => {
            menu.interactive = false;
            fondo.interactive =false; 
            overlay.visible =false;
            menu.visible = false;
          
            
            flechaizq.visible = flechader.visible = false;
            for (var i =0; i< edificios.length; i++) {
                edificios[i].interactive =false;
                edificios[i].buttonMode = false;
                edificios[i].visible = false;
            }
        }, 400);

        modalF.visible = menuBG.visible = menuClose.visible = menuAbout.visible = 
        MenuContainer.visible=scrollSpace.visible=true;

        menuB = true; 
        menuClose.interactive = true;
        menuClose.buttonMode = true;
        scrollSpace.interactive = true; 
        for (var i = 0; i<menuEdf.length; i++) {
            menuEdf[i].interactive = true;
            menuEdf[i].buttonMode=true;
            menuEdf [i].visible = true;
        }
        menuAbout.interactive =true;
        menuAbout.buttonMode =true;

        modalB.alpha =0;

        gsap.to (blurFilter, {blur: 0, duration: 0.5});
        gsap.to(modalF.scale, { x: modalfinS [0], y: modalfinS[1], duration: 0.3, ease: "power2.out" }).delay (.1);
        gsap.to(modalF, { alpha: 1, duration: 0.3, ease: "power2.out" }).delay (.1);
        gsap.to(menuBG, { alpha: 1, duration: 0.3, ease: "power2.out" }).delay (.1);
        gsap.to(menuClose, { alpha: 1, duration: 0.3, ease: "power2.out", onComplete: function () {modal= 2} }).delay(.2);
        gsap.to (menuAbout, {alpha : 1, duration: 0.5, ease : "power2.out"}).delay (.1);   
        gsap.to (MenuContainer, {alpha : 1, duration: 0.5, ease : "power2.out"}).delay (.1);
       }
}

function closeMenu() {
    if (menuB) {
     if (modal == 2) {
        if (creditosB) {
            closeCredit ();
        } else {
                menu.interactive = true;
                fondo.interactive =true; 
              if (widthArrows) {
                  
                flechaizq.buttonMode = flechader.buttonMode =true; 
              }
                
                overlay.visible =true;
                menu.visible = true;
                 
                for (var i =0; i< edificios.length; i++) {
                    edificios[i].interactive =true;
                    edificios[i].buttonMode = true;
                    edificios[i].visible = true;
                }

        menuClose.interactive = false;
        menuClose.buttonMode = false;
        scrollSpace.interactive = false; 
        for (var i = 0; i<menuEdf.length; i++) {
            menuEdf[i].interactive = false;
            menuEdf[i].buttonMode=false;
        }
        menuAbout.interactive =false;
        menuAbout.buttonMode =false;
        menu.interactive = true;
        menuB = false; 
        menuClose.interactive = false;
        menu.interactive = true;
setTimeout(() => {
    modalF.visible = menuBG.visible = menuClose.visible = menuAbout.visible = 
    MenuContainer.visible= scrollSpace.visible= modalB.visible =false;
     for (var i = 0; i<menuEdf.length; i++) {
        menuEdf[i].visible=false;
    }  
},700);
     
        gsap.to (blurFilter, {blur: 1, duration: 0.5});
        gsap.to(modalF.scale, { x: modalinitS[0], y: modalinitS[1], duration: 0.3, ease: "power2.out", onComplete: 
        function () { 
            modal = 0;  
            modalB.alpha =1; 
        }}).delay (.4);
        gsap.to(modalF, { alpha: 0, duration: 0.3, ease: "power2.out"}).delay(.4);
        gsap.to(menuBG, { alpha: 0, duration: 0.3, ease: "power2.out" }).delay (.4);
        gsap.to (menuAbout, {alpha : 0, duration: 0.5, ease : "power2.out"});
        gsap.to (MenuContainer, {alpha : 0, duration: 0.5, ease : "power2.out"});
        gsap.to(menuClose, { alpha: 0, duration: 0.3, ease: "power2.out" });   
         }
    }
}
}

function openCredit() {
    scrollSpace.interactive =false;
    menuAbout.interactive =false;
    menuAbout.buttonMode= false;
    for (var i = 0; i < creditos.length; i++) {
    creditos [i].visible = true;
        creditosB = true; 
        if (i == 0) {
            gsap.to(creditos[i].scale, { x: modalfinS [0],y: modalfinS[1], duration: .5, ease: "power2.in" });
            gsap.to(creditos[i], {alpha:1, duration: .5, ease: "power2.in" , onComplete: function () {
                videovimeo.style.display = "block";
            }});
        } else {
            creditos[i].interactive = true;
            creditos[i].buttonMode = true;
            
            gsap.to(creditos[i], { alpha: 1, duration: 1, ease: "power2.in" }).delay(.5);
        }
    }

        setTimeout(() => {
            for (var i = 0; i< menuEdf.length; i++) { 
                menuEdf [i].visible =false; 
            }
        modalF.visible = menuBG.visible  = menuAbout.visible = 
        MenuContainer.visible=scrollSpace.visible=false;
        }, 500);
}

function closeCredit() {
    creditosB = false; 
    for (var i = 0; i< menuEdf.length; i++) { 
        menuEdf [i].visible =true; 
    }
modalF.visible = menuBG.visible  = menuAbout.visible = 
MenuContainer.visible= scrollSpace.visible=true;

    scrollSpace.interactive =true;
    menuAbout.interactive =true;
    menuAbout.buttonMode= true;
    for (var i = 1; i<creditos.length-1; i++){
            creditos[i].interactive = false;
            creditos [i].buttonMode = false;
    }
        videovimeo.style.display = "none";
    for (var i = 0; i < creditos.length; i++) {
        
        if (i == 0) {
            gsap.to(creditos[i].scale, { x: modalinitS [0],y: modalinitS[1], duration: .5, ease: "power2.in" });
            gsap.to(creditos[i], {alpha:0, duration: .5, ease: "power2.in" });

        }  else {
            creditos[i].interactive = false;
            gsap.to(creditos[i], { alpha: 0, duration: 1, ease: "power2.out"});
        }
    }
    setTimeout(() => {
        
    for (var i = 0; i < creditos.length; i++) { 
        creditos [i].visible= false;
    }
    }, 1000);
}

function openCreditLink(event) {
    var id = event.currentTarget.name;
    switch (id) {
        case 1:
            document.getElementById("atiko").click();
            break;
        case 2:
            document.getElementById("sindicato").click();
            break;
    
    }
}

function linkModal() {
    const urlParams = new URLSearchParams(window.location.search);
    
    docBut = document.getElementById("modalbut");
    docBut.href = edificiosInt[selectedBuilding].link+'?n='+urlParams.get('n');
    docBut.click();
}

function zoom(e) {
    if (introanim == 2) {
        if (e.deltaY > 0) {
            scaleContainer = scaleContainer + 0.001;
            if (scaleContainer > minScaleContainer + minScaleContainer * .1) scaleContainer = minScaleContainer + minScaleContainer * .1;
        } else {
            scaleContainer = scaleContainer - 0.001;
            if (scaleContainer < minScaleContainer) scaleContainer = minScaleContainer;
        }
        container.scale.set(scaleContainer);
    }
}

function update () {

    if (Loading.visible == true) {
    app.ticker.update();
    }
    if (ruedaanim) {
    rueda.rotation -= 0.002;
    } 

    if (dragging || moveFlech) {
        justmoved =true;
      
           } else {
        if (justmoved) {
            justmoved = false;
            if (container.x< maxR-100 && container.x > maxL+50) {
                gsap.to (flechader, {alpha : 1, duration: 0.1}); 
                flechader.interactive = true;
                flechader.buttonMode = true;
                gsap.to (flechaizq, {alpha : 1, duration: 0.1}); 
                flechaizq.interactive = true;
                flechaizq.buttonMode = true;
            } else {
                if (container.x <maxR-100) {
                    gsap.to (flechader, {alpha : 0, duration: 0.1}); 
                    flechader.interactive = false;
                    flechader.buttonMode = false;
                } else if (container.x > maxL+50){
                    gsap.to (flechaizq, {alpha : 0, duration: 0.1}); 
                    flechaizq.interactive = false;
                    flechaizq.buttonMode = false;
                }
            }
        }
    }

};

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}