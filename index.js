
window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

var mobile = window.mobileCheck() == 1;
//scale Application HTML
var appScaler = document.getElementById("appPixi");

//chequear escala del aplicativo 
var appWidth = window.innerWidth - 16;
var appHeight = window.innerHeight - 16;
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

//Agregar a ventana
appScaler.appendChild(app.view);

//#region Loader
const Loading = PIXI.Sprite.from('assets/loading.png');

Loading.anchor.set(0.5);
Loading.x = appWidth / 2;
Loading.scale.set(0.5);
Loading.y = appHeight / 2;
app.stage.addChild(Loading);
app.ticker.add((delta) => {
    Loading.rotation += 0.01 * delta;
});


//Loader Font and Sprites
const loader = PIXI.Loader.shared;
loader.baseUrl = 'assets';

//info
var info;
loader.add('info', 'info.json');

//menu
var m_logo;
loader.add('logoTx', 'logo.png');

//about
var a_vertport, a_ana, a_ball;
loader.add('vertport', 'vertport.png');
loader.add('ana', 'ana.jpg');
loader.add('ball', 'ball.png');

//portfolio
var p_c1, p_c2, p_slider, p_ball, p_bg;
loader.add('corner', 'corner.png');
loader.add('blackbg', 'blackbg.png');
loader.add('scroll', 'scroll.png');


var scaleContainer = appHeight / 1080;
minScaleContainer = scaleContainer;

const corners = new PIXI.Container();
corners.scale.set(scaleContainer);

const picslide = new PIXI.Container();
picslide.scale.set(scaleContainer);

const g_about = new PIXI.Container();
const g_portfolio = new PIXI.Container();
const g_info = new PIXI.Container();

//proyectos
var p = [];
var pT = [];
for (var i = 0; i < 10; i++) {
    loader.add('p' + i, 'projects/' + i + '.jpg')
}

//info
var i_horport, i_picture;
loader.add('horport', 'horport.png');

WebFont.load({
    google: {
        families: ['Rubik']
    },
    active: e => {

        loader.load((loader, resources) => {
            //info
            info = resources.info.data;

            //menu
            m_logo = new PIXI.Sprite(resources.logoTx.texture);

            //about
            a_vertport = new PIXI.Sprite(resources.vertport.texture);
            a_ana = new PIXI.Sprite(resources.ana.texture);
            a_ball = new PIXI.Sprite(resources.ball.texture);

            //portfolio
            p_c1 = new PIXI.Sprite(resources.corner.texture);
            p_c2 = new PIXI.Sprite(resources.corner.texture);
            p_slider = new PIXI.Sprite(resources.scroll.texture);
            p_ball = new PIXI.Sprite(resources.ball.texture);
            p_bg = new PIXI.Sprite(resources.blackbg.texture);

            //projects
            p[0] = new PIXI.Sprite(resources.p0.texture);
            p[1] = new PIXI.Sprite(resources.p1.texture);
            p[2] = new PIXI.Sprite(resources.p2.texture);
            p[3] = new PIXI.Sprite(resources.p3.texture);
            p[4] = new PIXI.Sprite(resources.p4.texture);
            p[5] = new PIXI.Sprite(resources.p5.texture);
            p[6] = new PIXI.Sprite(resources.p6.texture);
            p[7] = new PIXI.Sprite(resources.p7.texture);
            p[8] = new PIXI.Sprite(resources.p8.texture);
            p[9] = new PIXI.Sprite(resources.p9.texture);

            //projectTexture
            pT[0] = new PIXI.Texture(resources.p0.texture);
            pT[1] = new PIXI.Texture(resources.p1.texture);
            pT[2] = new PIXI.Texture(resources.p2.texture);
            pT[3] = new PIXI.Texture(resources.p3.texture);
            pT[4] = new PIXI.Texture(resources.p4.texture);
            pT[5] = new PIXI.Texture(resources.p5.texture);
            pT[6] = new PIXI.Texture(resources.p6.texture);
            pT[7] = new PIXI.Texture(resources.p7.texture);
            pT[8] = new PIXI.Texture(resources.p8.texture);
            pT[9] = new PIXI.Texture(resources.p9.texture);

            //info
            i_horport = new PIXI.Sprite(resources.horport.texture);
            i_picture = new PIXI.Sprite(resources.p2.texture);
        });

        loader.onComplete.add((loader) => {
            gsap.to(Loading, {
                alpha: 0, duration: .5, ease: "power2.in", onComplete:
                    function () {
                        app.stage.removeChild(Loading);
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
//#endregion

//------TEXTOS----- 

//#region Estilos
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
//#endregion

//#region Textos
const m_portfolio = new PIXI.Text('PORTFOLIO', stylemenu);
const m_aboutme = new PIXI.Text('ABOUT ME', stylemenu);
const m_divide = new PIXI.Text('/', divider);


const a_description = new PIXI.Text('I am a programmer with a passion on creating new and valuable experiences. I have developed webpages, desktop and mobile applications. I have worked with platforms such as Unity, Unreal, Arduino, Processing, and also javascript libraries as Pixi.js, Aframe.js, and Three.js', styledesc);
const a_mail = new PIXI.Text('ana.villavicencio.b@gmail.com', styledesc);
const a_number = new PIXI.Text('+593983505904', styledesc);


const p_title = new PIXI.Text('Yaku Aguamundi', styletitle);
const p_type = new PIXI.Text('mapping', styledesc);
const p_btmore = new PIXI.Text('more', stylebt);


const i_title = new PIXI.Text('Yaku Aguamundi', styletitle);
const i_type = new PIXI.Text('mapping', styledesc);
const i_desc = new PIXI.Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet suscipit ipsum. In in justo nisl. Donec vitae vulputate odio. Sed mattis mattis leo, quis rutrum dolor consequat vitae. Donec ut erat et dui varius sagittis. sprimis in faucibus. Proin a arcu orci.', styledesc);
const i_programs = new PIXI.Text('Resolume', styledesc);
const i_btback = new PIXI.Text('back', stylebt);

//#endregion

var state = 0;
var pic_position = [];

//***********************FUNCTIONS**************************

//window Resize event
window.addEventListener('resize', resizeScale);
window.addEventListener('mouseup', mouseUp);

function resizeScale() {
    appWidth = window.innerWidth - 16;
    appHeight = window.innerHeight - 16;
    appScaler.style.width = appWidth + "px";
    appScaler.style.height = appHeight + "px";
    app.renderer.resize(appWidth, appHeight);

    scaleContainer = appHeight / 1080;
    minScaleContainer = scaleContainer;

    placeMenu();
    placeInfo();
    placePortfolio();
    placeAbout();

    maxR = appWidth / 2 - (pic_position[pic_position.length - 1] * picslide.scale.x);
    maxL = appWidth / 2;

    maxLBall = appWidth / 2 - p_slider.width / 2;
    maxRBall = appWidth / 2 + p_slider.width / 2;
    mapBall();

}

function init() {
    createMenu();
    createAbout();
    createPortfolio();
    createInfo();
    state = 0;

}

//#region Creacion
function createMenu() {

    m_logo.anchor.set(0, 0.5);
    m_logo.scale.set(0.4);

    m_portfolio.anchor.set(1, 0.5);
    m_aboutme.anchor.set(1, 0.5);
    m_divide.anchor.set(1, 0.5);

    placeMenu();

    app.stage.addChild(m_logo, m_portfolio, m_aboutme, m_divide);

    m_logo.interactive = m_portfolio.interactive = m_aboutme.interactive = true;
    m_logo.buttonMode = m_portfolio.buttonMode = m_aboutme.buttonMode = true;
    m_logo.on('pointerdown', openPortfolio);
    m_portfolio.on('pointerdown', openPortfolio).on('pointerover', hover).on('pointerout', endHover);
    m_aboutme.on('pointerdown', openAbout).on('pointerover', hover).on('pointerout', endHover);
}

function placeMenu() {

    m_logo.position.x = appWidth * .05;
    m_portfolio.position.x = appWidth * .95 - 160;
    m_aboutme.position.x = appWidth * .95;
    m_divide.position.x = appWidth * .95 - 125;

    m_aboutme.position.y = m_portfolio.position.y = m_logo.position.y = m_divide.position.y = 80;
}

function createAbout() {
    a_ana.anchor.set(0.5);
    a_vertport.anchor.set(0.5);
    a_ball.anchor.set(1, 0.5);
    a_description.anchor.set(0.5);
    a_mail.anchor.set(0.5);
    a_number.anchor.set(0.5);


    placeAbout();
    g_about.addChild(a_ana, a_vertport, a_ball, a_description, a_mail, a_number)
    app.stage.addChild(g_about);

    a_mail.id = "mailbt";
    a_number.id = "numberbt"
    a_mail.interactive = a_number.interactive = true;
    a_mail.buttonMode = a_number.buttonMode = true;
    a_mail.on('pointerover', hover).on('pointerout', endHover).on('pointerdown', click);
    a_number.on('pointerover', hover).on('pointerout', endHover).on('pointerdown', click);

    g_about.visible = false;

}

function placeAbout() {
    if (appWidth > 960) {

        a_ana.height = appHeight * .7;
        a_ana.scale.set(a_ana.scale.y)
        a_vertport.scale.set(a_ana.scale.y * 1.6);


        a_vertport.rotation = 0;
        a_vertport.x = appWidth * .25;
        a_vertport.y = appHeight * .55;

        a_ana.x = a_vertport.x + (a_ana.width * .2);
        a_ana.y = appHeight * .55;


        a_description.x = a_mail.x = a_number.x = appWidth * .75;
        a_description.y = appHeight * .45;
        a_mail.y = appHeight * .6;
        a_number.y = appHeight * .65;

        a_ball.x = appWidth * .95;
        a_ball.y = appHeight - (appHeight / 2 - (a_vertport.height) / 2);


        styledesc.wordWrapWidth = appWidth * .4;
    }
    else {


        a_ana.height = appHeight * .6;
        a_ana.scale.set(a_ana.scale.y)
        a_vertport.scale.set(a_ana.scale.y * 1.6);

        a_vertport.rotation = 3.14;
        a_vertport.x = a_ana.width * .28;
        a_vertport.y = appHeight * .55;

        a_ana.x = 0;
        a_ana.y = appHeight * .55;


        a_description.x = a_mail.x = a_number.x = appWidth * .7;
        a_description.y = appHeight * .45;
        a_mail.y = appHeight * .7;
        a_number.y = appHeight * .75;

        a_ball.x = appWidth * .95;
        a_ball.y = appHeight - (appHeight / 2 - (a_vertport.height) / 2);


        styledesc.wordWrapWidth = appWidth * .45;
    }
}

function createPortfolio() {

    p_c1.anchor = p_c2.anchor = p_slider.anchor = p_ball.anchor = p_bg.anchor = p_title.anchor = p_type.anchor = p_btmore.anchor.set(0.5);
    for (var i = 0; i < p.length; i++) {
        picslide.addChild(p[i]);
        p[i].anchor.set(0.5);
        p[i].x = 1000 * (i);
        pic_position[i] = p[i].x;
    }
    p_ball.scale.set(.5);
    p_bg.scale.set(1.2);
    p_c2.rotation = 3.14;
    p_c1.x = -320;
    p_c2.x = 320;
    p_c1.y = -160;
    p_c2.y = 160;

    corners.addChild(p_c1, p_c2);
    p_bg.alpha = 0.75;

    g_portfolio.addChild(picslide, corners, p_bg, p_slider, p_ball, p_title, p_type, p_btmore);
    app.stage.addChild(g_portfolio);


    placePortfolio();

    p_btmore.interactive = true;
    p_btmore.buttonMode = true;
    p_btmore.on('pointerup', openInfo);

    picslide.name = "slide";
    p_ball.name = "ball";

    picslide.interactive = true;
    picslide.buttonMode = true;
    picslide.on('pointerdown', onDrag).on('pointermove', onDragMove).on('pointerup', endDrag);

    p_ball.interactive = true;
    p_ball.buttonMode = true;
    p_ball.on('pointerdown', onDrag).on('pointermove', onDragMove).on('pointerup', endDrag);

}

function placePortfolio() {

    if (appWidth < 960) {
        corners.width = appWidth * .85;
        corners.scale.set(corners.scale.x);
        picslide.scale.set(corners.scale.x)
        scaleContainer = corners.scale.x;
    }
else {
    corners.scale.set (scaleContainer);
    picslide.scale.set (scaleContainer);
}
    corners.x = appWidth / 2;
    corners.y = appHeight / 2;
    picslide.x = appWidth / 2;
    picslide.y = appHeight / 2;

    p_slider.x = p_bg.x = p_title.x = p_type.x = p_btmore.x = appWidth * .5;
    p_bg.y = appHeight * .5
    p_title.y = appHeight * .485;
    p_type.y = appHeight * .515;
    p_btmore.y = appHeight * .8;
    p_slider.y = p_ball.y = appHeight * .9;

}

function createInfo() {
    i_horport.anchor = i_picture.anchor.set (0.5); 
    i_title.anchor = i_type.anchor = i_desc.anchor = i_programs.anchor = i_btback.anchor.set(0.5,0);
    i_picture.scale.set(1.275);
    placeInfo();
    g_info.addChild(i_picture, i_horport, i_title, i_type, i_desc, i_programs, i_btback);
    app.stage.addChild(g_info);
    i_btback.interactive = true;
    i_btback.buttonMode = true;
    i_btback.on('pointerdown', openPortfolio);
    g_info.visible = false;
}

function placeInfo() {

    if (appWidth > 960) {

        i_title.x = i_type.x = i_desc.x = i_programs.x = i_btback.x = appWidth * 0.75;

        i_title.y = i_desc.y-100;
        i_type.y = i_desc.y-70;
        i_desc.y = appHeight *.55 -50;
        i_programs.y = i_desc.y + 180;
        i_btback.y = i_desc.y+240;
        styledesc.wordWrapWidth = appWidth * .4;

        i_horport.y = i_picture.y = appHeight * .55;
        i_picture.width = appWidth * .4;
        i_horport.width = i_picture.width / 2;
        i_picture.height = i_picture.width / 1.7;
        i_horport.height = i_picture.height * 2;
        i_horport.x = appWidth * .41;
        i_picture.x = appWidth * .3;

    } else {
        i_horport.y = i_picture.y = appHeight * .67;
        i_picture.width = appWidth * .75;
        i_horport.width = i_picture.width / 2;
        i_picture.height = i_picture.width / 1.7;
        i_horport.height = i_picture.height * 2;
        i_horport.x = appWidth * .725;
        i_picture.x = appWidth * .5;

        i_title.x = i_type.x = i_desc.x = i_programs.x = i_btback.x = appWidth * 0.5;

        styledesc.wordWrapWidth = appWidth * .9;

        i_title.y = appHeight * .15;
        i_type.y = i_title.y + 25;
        i_desc.y = i_type.y +35;
        i_programs.y = i_desc.y +140;
        i_btback.y = appHeight * .965;

    }
}

//#endregion 

//#region Hover 
var hover;
function hover(e) {

    e.target.tint = 0xdc2c32;
    hover = e.target;
}

function endHover() {
    hover.tint = 0xffffff;
}

function click(e) {


}
//#endregion

//#region Open
function openPortfolio() {

    switch (state) {

        case 1:
            g_info.visible = false;
            break;

        case 2:
            g_about.visible = false;
            break;
    }

    state = 0;
    g_portfolio.visible = true;

}

function openAbout() {
    switch (state) {
        case 0:
            g_portfolio.visible = false;
            break;

        case 1:
            g_info.visible = false;
            break;
    }

    state = 2
    g_about.visible = true;
}

function openInfo() {
    switch (state) {
        case 0:
            g_portfolio.visible = false;
            break;

        case 2:
            g_about.visible = false;
            break;
    }
    state = 1;
    g_info.visible = true;
}
//#endregion


/********************VARIABLES******************/

//#region Dragging Pic Slide
var dragging = false;
var dragged = false;
var startdragging = 0;
var startMouse;
var maxR = appWidth / 2 - pic_position[pic_position.length - 1];
var maxL = appWidth / 2;
var maxLBall;
var maxRBall;

var ballselec = false;
var dragdir = false;
var datax = 0;
var pos;


function onDrag(event) {
    dragging = true;

    if (event.currentTarget.name == "slide") {
        ballselec = false;
    } else {
        ballselec = true;
    }

    gsap.to(p_title, { alpha: 0, duration: 0.5, ease: "sine.in" });
    gsap.to(p_type, { alpha: 0, duration: 0.5, ease: "sine.in" });
    gsap.to(p_bg, { alpha: 0, duration: 0.5, ease: "sine.in" });
    gsap.to(p_btmore, { alpha: 0, duration: 0.5, ease: "sine.in" });
}

function onDragMove(event) {
    if (dragging) {

        if (!ballselec) {
            if (!dragged) {
                startMouse = event.data.global.x - picslide.x;
                startdragging++;
                if (startdragging > 3) {
                    dragged = true;
                }

            } else {
                picslide.x = event.data.global.x - startMouse;

                if (picslide.x > maxL) {
                    picslide.x = maxL;
                }

                if (picslide.x < maxR) {
                    picslide.x = maxR;
                }
            }
            mapBall();
            if (datax < event.data.global.x) {
                dragdir = false;
            }
            else if (datax > event.data.global.x) {

                dragdir = true;
            }
        }
        else {
            if (!dragged) {
                startMouse = event.data.global.x - p_ball.x;
                startdragging++;
                if (startdragging > 3) {
                    dragged = true;
                }

            } else {
                p_ball.x = event.data.global.x - startMouse;

                if (p_ball.x < maxLBall) {
                    p_ball.x = maxLBall;
                }

                if (p_ball.x > maxRBall) {
                    p_ball.x = maxRBall;
                }
            }
            if (datax < event.data.global.x) {
                dragdir = true;
            }
            else if (datax > event.data.global.x) {

                dragdir = false;
            }
            mapPicSlide();

        }

        datax = event.data.global.x;
    }
}

function endDrag(event) {

    startdragging = 0;
    if (dragging) {
        
    dragging = false;
        if (dragged) {
            dragged = false;
            var updatedPic = [];
            for (var i = 0; i < pic_position.length; i++) {
                updatedPic[i] = appWidth / 2 + (1000 * i * scaleContainer);
            }

            var compare = appWidth - picslide.x;
            var closest = updatedPic.reduce(function (prev, curr) {
                return (Math.abs(curr - compare) < Math.abs(prev - compare) ? curr : prev);
            });
            pos = updatedPic.indexOf(closest);


            var finalposition = appWidth - updatedPic[pos];
            if (dragdir) {
                if (picslide.x < finalposition) {
                    if (pos < pic_position.length - 1) {
                        pos++;
                    }
                }
            } else {
                if (picslide.x > finalposition) {
                    if (pos > 0) {
                        pos--;
                    }
                }

            }
            setTimeout(() => {
                dragged = false;
                updateInfo(pos);
            }, 500);
            finalposition = appWidth - updatedPic[pos];

            gsap.to(picslide.position, {
                x: finalposition, duration: 1,
                onUpdate: function () {
                    mapBall()
                },
            });

        
        } else {
            openInfo();
        }
        gsap.to(p_title, { alpha: .75, duration: 0.5, ease: "sine.out" }).delay(0.5);
        gsap.to(p_type, { alpha: .75, duration: 0.5, ease: "sine.out" }).delay(0.5);
        gsap.to(p_bg, { alpha: .75, duration: 0.5, ease: "sine.out" }).delay(0.5);
        gsap.to(p_btmore, { alpha: .75, duration: 0.5, ease: "sine.out" }).delay(0.5);

    }

}

function updateInfo(id) {
    p_title.text = i_title.text = info[id].title;
    p_type.text = i_type.text = info[id].type;
    i_desc.text = info[id].description;
    i_programs.text = info[id].programs;
    i_picture.texture=pT[id];



}
function mapBall() {
    p_ball.x = map_range(picslide.x, maxL, maxR, maxLBall, maxRBall);
}

function mapPicSlide() {
    picslide.x = map_range(p_ball.x, maxLBall, maxRBall, maxL, maxR);
}

function mouseUp() {
    if (dragged) {
        endDrag();
    }

}

//#endregion



function update() {

    if (Loading.visible == true) {
        app.ticker.update();
    }


};

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}