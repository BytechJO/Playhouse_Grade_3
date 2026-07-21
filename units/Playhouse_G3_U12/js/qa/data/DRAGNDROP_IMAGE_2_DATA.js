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
var _activity_json = 
    {
        "layout"                : 1,
        "numinrow"              : [[1,1,1]],
        "mainTitle"             : "../images/icons/phonics_main_title.png",
        "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
        "mainTitleAudio"        : "../audios/page_109/PHONICS.mp3",
        "mainTitleIconPos"      : {"right": "-18px"},
        "subTitleTextLeft"      : '<span class="orange_text">1</span> Write. <span class="orange_text">Choose a word from the word box to complete each sentence.</span>',
        "subTitleTextRight"     : "",
        "subTitleIcons"         : [],
        "subTitleAudio"         : "../audios/new/p109write1.mp3",
        "image"                 : "new_drag_drop.png",
        "type": "drag_drop",
        "images": [],
        "questions": [
            "<b>1</b> &nbsp; My ___ likes to watch TV.",
            "<b>2</b> &nbsp; The ___ that finishes first wins.",
            "<b>3</b> &nbsp; I ate the whole ___ of bananas.",
            "<b>4</b> &nbsp; A ___ of birds flew over my house.",
            "<b>5</b> &nbsp; My football ___ won the match.",
            "<b>6</b> &nbsp; The second grade  ___ is outside.",
        ],
        "options": ["family", "team", "group", "bunch", "flock", "class"],
        "answers": ["family", "group", "bunch", "flock", "team", "class"],
        // "default_answer": {1:"apple"}
    };