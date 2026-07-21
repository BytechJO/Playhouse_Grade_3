var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(242, 101, 33)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
}
var fillin_data = {    
    "layout"                : 1,
    "numinrow"              : [[1,1,1,1]],
    "mainTitle"             : "../images/icons/phonics_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_121/PHONICS.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">1</span> Unscramble.',
    "subTitleTextRight"     : "Unscramble the question and write the words in the correct order.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p121unscramble.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [
        {
            "textfront": "to / going / Are / eat / you / breakfast / your?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Are you going to eat your breakfast?"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "going / Is / to / Sara / play / garden / the / in?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Is Sara going to play in the garden?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "feel / tomorrow / going / better / I / to / Am?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Am I going to feel better tomorrow?"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
          "textfront": "Is / come / next week / Greg / to / going?",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Is Greg going to come next week?"],
          "strictcase": "no", // yes (or) no
          "type": "text", // text (or) number
      },
    ]
}