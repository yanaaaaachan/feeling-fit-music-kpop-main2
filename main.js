// 2進数から10進数に変換する
function binary_to_decimal(A) {
    val = 0;
    for (let i = 0; i < 5; i++) {
        val += A[i] * (2 ** (4-i));
    }
    return val;
}

contents = {
    0:["https://www.youtube.com/embed/XQmpVHUi-0A?si=ngNjYTytPsB86lIx", "https://www.youtube.com/embed/gdZLi9oWNZg?si=_pIsmmQnfj4RhB_2"],//00000
    1:["https://www.youtube.com/embed/Dab4EENTW5I?si=yPTjFt1k8PCxzmFC","https://www.youtube.com/embed/h7mZX8INIYI?si=-CUbAdk1ukIwAnlB"],//00001
    2:[""],//00010
    3:["https://www.youtube.com/embed/JsOOis4bBFg?si=ONxWQVfJv3RjdRm8","https://www.youtube.com/embed/X-uJtV8ScYk?si=mL5e8L-HWlZZwz7v","https://www.youtube.com/embed/TQTlCHxyuu8?si=81gQU_lzjlGMVErr","https://www.youtube.com/embed/EaswWiwMVs8?si=ik-uLQnM9NgK4Lon","https://www.youtube.com/embed/BVwAVbKYYeM?si=Qtnz7xOEgHZeVADs","https://www.youtube.com/embed/gwMa6gpoE9I?si=DoFr94EG7Wy0ok50","https://www.youtube.com/embed/ALj5MKjy2BU?si=FMw99D4acJ0JCiFa"],//00011   
    4:["https://www.youtube.com/embed/dtV1I9WtQuo?si=qZRCHnDDDf-C7e5x","https://www.youtube.com/embed/VEZ_Ui6d9AM?si=kBOvPTzqv-9Nlmme","https://www.youtube.com/embed/zEkg4GBQumc?si=lErQvgI2l9iW1Fd4","https://www.youtube.com/embed/xe2r_KG2XdA?si=GXkHTpz__WvDp25k"],//00100
    5:[""],//00101
    6:["https://www.youtube.com/embed/k8Y6ZTjmCXs?si=CsTsPMPOcNL3fdbO","https://www.youtube.com/embed/Eauqg3aPkTs?si=9ei3WBMIGV4JSRGe","https://www.youtube.com/embed/7C2z4GqqS5E?si=KH-JYz9-T6F1DNo6","https://www.youtube.com/embed/NMdTd9e-LEI?si=WldWTkFXUqnbtacb","https://www.youtube.com/embed/9MFnF-U7x80?si=V68S9q7Vj8avbzKV"],//00110
    7:["https://www.youtube.com/embed/5rPluw_-Eb4?si=2SU7CvDnI6e9hHTb","https://www.youtube.com/embed/UWoyeuwj9c0?si=M9J8fLsec6hclvXf","https://www.youtube.com/embed/0lapF4DQPKQ?si=JztXKURvg8LxxNen","https://www.youtube.com/embed/-GQg25oP0S4?si=iejaByIGKK6_vu0l"],//00111
    8:["https://www.youtube.com/embed/n81ceM7rlaw?si=7cPq3AdekJ5B1FlA","https://www.youtube.com/embed/9IHwqdz8Xhw?si=SAvbSUnBFpYXhtLQ"],//01000
    9:["https://www.youtube.com/embed/UcGWYKHBDA4?si=eCzvnRrtXU5qI6pc","https://www.youtube.com/embed/pok5yDw77uM?si=t4kcCz8V20-yC7Wj","https://www.youtube.com/embed/Smgql_DESn8?si=oeT54P7z8rA65sKN","https://www.youtube.com/embed/LYJDf9oPQ-0?si=l_PrarRaUdpHODkR","https://www.youtube.com/embed/P131csq4P6Q?si=o70ls8SJhO0AK4bD"],//01001
    10:[""],//01010
    11:["https://www.youtube.com/embed/YLtEc-kvOqA?si=KrxE5zO_IGHOOBUO"],//01011
    12:["https://www.youtube.com/embed/S4qK-Gzyws0?si=Ik4MMGMZpw3M3d-w","https://www.youtube.com/embed/zFT3f9biz68?si=uXT9gzTbUH7j-Vg8","https://www.youtube.com/embed/-5q5mZbe3V8?si=2wdhxGGNeFtBYy2k"],//01100
    13:[""],//01101
    14:["https://www.youtube.com/embed/X7d6Dt17yHk?si=HkeK8Bc1pzF9BBKS"],//01110
    15:[""],//01111
    16:["https://www.youtube.com/embed/9YnlX1lSWHg?si=h8bLYGGIbLCZrYZa","https://www.youtube.com/embed/6ZUIwj3FgUY?si=JkTmaL7Bm4jxAWY0"],//10000
    17:["https://www.youtube.com/embed/zQELp93xxfo?si=mjmcbLglDOmo76eT"],//10001
    18:["https://www.youtube.com/embed/fmOEKOjyDxU?si=d5S2M7ww_VeJcva1","https://www.youtube.com/embed/w4cTYnOPdNk?si=3aajxjDnbjJeY1_i","https://www.youtube.com/embed/3ymwOvzhwHs?si=iC9pcpp64x_FuDHW","https://www.youtube.com/embed/pG6iaOMV46I?si=BMKU76EFu4jR8TT2","https://www.youtube.com/embed/Y8JFxS1HlDo?si=Mft-vxt6GCErlbKQ"],//10010
    19:["https://www.youtube.com/embed/4vbDFu0PUew?si=Jf4ToJpTZmfj6SSo","https://www.youtube.com/embed/pyf8cbqyfPs?si=4YzIXcs7uvGdGeGm","https://www.youtube.com/embed/UBURTj20HXI?si=sx7yGiVnfsDj2oIZ"],//10011
    20:["https://www.youtube.com/embed/cKlEE_EYuNM?si=F4wcUaq1Gq1V2Edj","https://www.youtube.com/embed/5DhAts7WcPk?si=NIsMGBvFMIc-9QZU"],//10100
    21:[""],//10101
    22:["https://www.youtube.com/embed/BpCvYeK5hcE?si=PendWy2OINaMu63Y"],//10110
    23:[""],//10111
    24:["https://www.youtube.com/embed/mH0_XpSHkZo?si=ZTOqu8ZjWWoEtyLw","https://www.youtube.com/embed/i0p1bmr0EmE?si=xcOXh1-rQTBcP-Fe","https://www.youtube.com/embed/rRzxEiBLQCA?si=-zYHezJy6w2r12fd","https://www.youtube.com/embed/Fm5iP0S1z9w?si=1vdUQ6RywA8mFHCU","https://www.youtube.com/embed/F0B7HDiY-10?si=1E72yhhusIcI8Il2","https://www.youtube.com/embed/V9Wsm0hlLUI?si=09e2aZM211eQiFWd"],//11000
    25:["https://www.youtube.com/embed/-uqWaGzQyxA?si=OT4aMxaOWrfE_GRo"],//11001
    26:["https://www.youtube.com/embed/--FmExEAsM8?si=FtfwdnOhcrd4AfWB"],//11010
    27:["https://www.youtube.com/embed/715h-XJ9Wzg?si=tSs_CnO28uUJr7oq"],//11011
    28:["https://www.youtube.com/embed/CfUGjK6gGgs?si=yB1gR9tKuNmkfSEg","https://www.youtube.com/embed/Km71Rr9K-Bw?si=1Oe9Cmfj6cdW2oSn","https://www.youtube.com/embed/FzVR_fymZw4?si=XB6oBATcnsuvAJdS"],//11100
    29:["https://www.youtube.com/embed/_Hu4GYtye5U?si=fUpMCFoJzc0dAWHs"],//11101
    30:["https://www.youtube.com/embed/VcOSUOpACq0?si=hCN0Xxf_lI2L0Pvu"],//11110
    31:["https://www.youtube.com/embed/pXS9WVPC1pg?si=24KhERfu8I_O9fIX"],//11111
};


function getOption(name, form){
    let selected_option;
    
    let choices = form.elements[name];
    for (let i = 0; i < choices.length; i++) {
        if(choices[i].checked){
            selected_option = choices[i].value;
            break;
        }
    }
    return selected_option;
}

function sendSelectedOption(){
    let form = document.getElementById("myForm");
    let A = [-1, -1, -1, -1, -1]

    let boy_girl = getOption("boy_girl", form);
    let cool_cute = getOption("cool_cute", form);
    let up_down = getOption("up_down", form);
    let sawayaka_deep = getOption("sawayaka_deep", form);
    let love = getOption("love", form);
    if(boy_girl && cool_cute && up_down && sawayaka_deep && love){

        if(boy_girl == "男"){
            A[0]=0
        }
        else if(boy_girl == "女"){
            A[0]=1
        }
        
        if(cool_cute == "かっこいい"){
            A[1]=0
        }
        else if(cool_cute == "かわいい"){
            A[1]=1
        }
        
        if(up_down == "テンションup"){
            A[2]=0
        }
        else if(up_down == "落ち着いてる"){
            A[2]=1
        }
        
        if(sawayaka_deep == "さわやか"){
            A[3]=0
        }
        else if(sawayaka_deep == "ディープ"){
            A[3]=1
        }
        
        if(love == "恋愛系"){
            A[4]=0
        }
        else if(love == "恋愛系以外"){
            A[4]=1
        }
    }else{
        alert("選択してください");
        return;
    }

    val = binary_to_decimal(A)
    // console.log(val)
    // console.log(contents[val])

    let selectedVideoURL = contents[val];

    let videoContainer = document.getElementById("videoContainer");
    // 既存の要素を削除
    while (videoContainer.firstChild) {
        videoContainer.removeChild(videoContainer.firstChild);
    }

    // 配列の各要素にYouTube埋め込みプレーヤーを追加
    selectedVideoURL.forEach(function(videoURL) {
        let iframe = document.createElement('iframe');
        iframe.width = '480';
        iframe.height = '270';
        iframe.src = videoURL;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        let videoItem = document.createElement('div');
        videoItem.appendChild(iframe);
        
        videoContainer.appendChild(videoItem);
    });
}

// r1 = button()
// r2 = button()
// A=[-1,-1]
// A[0]=r1="ナムジャ"
// A[1]=r2="ヨジャ"

// r3 = button()
// r4 = button()
// A=[-1,-1]
// A[0]=r3="かっこいい"
// A[1]=r4="かわいい"

// r5 = button()
// r6 = button()
// A=[-1,-1]
// A[0]=r5="テンションup"
// A[1]=r6="落ち着いてる"

// r7 = button()
// r8 = button()
// A=[-1,-1]
// A[0]=r7="さわやか"
// A[1]=r8="ディープ"

// r9 = button()
// r10 = button()
// A=[-1,-1]
// A[0]=r9="恋愛系"
// A[1]=r10="恋愛系以外"

// window.onload = function() {
//     window.location.hash = "hogehoge"
// }