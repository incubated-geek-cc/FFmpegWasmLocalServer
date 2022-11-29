const mimeTypes=[
  {
    "Extension": ".aac",
    "Description": "AAC audio file",
    "MIME_Types": [
      "audio/aac"
    ],
    "Works":true
  },
  {
    "Extension": ".aif",
    "Description": "AIFF audio file",
    "MIME_Types": [
      "audio/aiff",
      "audio/aifc",
      "audio/x-aiff"
    ],
    "Works":true
  },
  {
    "Extension": ".aifc",
    "Description": "AIFF audio file",
    "MIME_Types": [
      "audio/aiff",
      "audio/aifc",
      "audio/x-aiff"
    ],
    "Works":true
  },
  {
    "Extension": ".aiff",
    "Description": "AIFF audio file",
    "MIME_Types": [
      "audio/aiff",
      "audio/aifc",
      "audio/x-aiff"
    ],
    "Works":true
  },
  {
    "Extension": ".au",
    "Description": "Audio file",
    "MIME_Types": [
      "audio/basic",
      "audio/au",
      "audio/x-au",
      "audio/x-basic"
    ],
    "Works":true
  },
  {
    "Extension": ".snd",
    "Description": "Audio file",
    "MIME_Types": [
      "audio/basic",
      "audio/au",
      "audio/x-au",
      "audio/x-basic"
    ],
    "Works":false
  },
  {
    "Extension": ".m4a",
    "Description": "MPEG-4 audio file",
    "MIME_Types": [
      "audio/m4a",
      "audio/x-m4a"
    ],
    "Works":true
  },
  {
    "Extension": ".rmi",
    "Description": "Radio MIDI File",
    "MIME_Types": [
      "audio/mid"
    ],
    "Works":false
  },
  {
    "Extension": ".mp3",
    "Description": "MP3 audio file",
    "MIME_Types": [
      "audio/mpeg",
      "audio/mp3",
      "audio/mpeg3",
      "audio/mpg",
      "audio/x-mp3",
      "audio/x-mpeg",
      "audio/x-mpeg3",
      "audio/x-mpg"
    ],
    "Works":true
  },
  {
    "Extension": ".ra",
    "Description": "RealAudio file",
    "MIME_Types": [
      "audio/vnd.rn-realaudio",
      "audio/vnd.pn-realaudio",
      "audio/x-pn-realaudio",
      "audio/x-pn-realaudio-plugin",
      "audio/x-pn-realvideo",
      "audio/x-realaudio"
    ],
    "Works":true
  },
  {
    "Extension": ".ram",
    "Description": "RealAudio file",
    "MIME_Types": [
      "audio/vnd.rn-realaudio",
      "audio/vnd.pn-realaudio",
      "audio/x-pn-realaudio",
      "audio/x-pn-realaudio-plugin",
      "audio/x-pn-realvideo",
      "audio/x-realaudio"
    ],
    "Works":false
  },
  {
    "Extension": ".rpm",
    "Description": "RealAudio file",
    "MIME_Types": [
      "audio/vnd.rn-realaudio",
      "audio/vnd.pn-realaudio",
      "audio/x-pn-realaudio",
      "audio/x-pn-realaudio-plugin",
      "audio/x-pn-realvideo",
      "audio/x-realaudio"
    ],
    "Works":false
  },
  {
    "Extension": ".wav",
    "Description": "Waveform audio file",
    "MIME_Types": [
      "audio/wav",
      "audio/s-wav",
      "audio/wave",
      "audio/x-wav"
    ],
    "Works":true
  },
  {
    "Extension": ".mid",
    "Description": "MIDI audio file",
    "MIME_Types": [
      "audio/x-midi",
      "application/x-midi",
      "audio/mid",
      "audio/midi",
      "audio/soundtrack"
    ],
    "Works":false
  },
  {
    "Extension": ".midi",
    "Description": "MIDI audio file",
    "MIME_Types": [
      "audio/x-midi",
      "application/x-midi",
      "audio/mid",
      "audio/midi",
      "audio/soundtrack"
    ],
    "Works":false
  },
  {
    "Extension": ".m3u",
    "Description": "MP3 playlist file",
    "MIME_Types": [
      "audio/x-mpegurl",
      "application/x-winamp-playlist",
      "audio/mpegurl",
      "audio/mpeg-url",
      "audio/playlist",
      "audio/scpls",
      "audio/x-scpls"
    ],
    "Works":false
  },
  {
    "Extension": ".pls",
    "Description": "MP3 playlist file",
    "MIME_Types": [
      "audio/x-mpegurl",
      "application/x-winamp-playlist",
      "audio/mpegurl",
      "audio/mpeg-url",
      "audio/playlist",
      "audio/scpls",
      "audio/x-scpls"
    ]
  },
  {
    "Extension": ".wma",
    "Description": "Windows Media file",
    "MIME_Types": [
      "audio/x-ms-wma"
    ]
  },
  {
    "Extension": ".avi",
    "Description": "AVI video file",
    "MIME_Types": [
      "video/avi",
      "application/x-troff-msvideo",
      "image/avi",
      "video/msvideo",
      "video/x-msvideo",
      "video/xmpg2"
    ],
    "Works":true
  },
  {
    "Extension": ".m4v",
    "Description": "MPEG-4 video file",
    "MIME_Types": [
      "video/mpeg4",
      "video/x-m4v"
    ],
    "Works":true
  },
  {
    "Extension": ".mp4",
    "Description": "MPEG-4 video file",
    "MIME_Types": [
      "video/mp4",
    ],
    "Works":true
  },
  {
    "Extension": ".webm",
    "Description": "WebM video file",
    "MIME_Types": [
      "video/webm"
    ],
    "Works":true
  },
  {
    "Extension": ".m1v",
    "Description": "MPEG video file",
    "MIME_Types": [
      "video/mpeg"
    ],
    "Works":false
  },
  {
    "Extension": ".m2v",
    "Description": "MPEG video file",
    "MIME_Types": [
      "video/mpeg"
    ],
    "Works":false
  },
  {
    "Extension": ".mp2",
    "Description": "MPEG layer 2 audio file",
    "MIME_Types": [
      "audio/mpeg",
      "audio/x-mpeg",
      "audio/x-mpeg-2"
    ],
    "Works":true
  },
  {
    "Extension": ".mp2",
    "Description": "MPEG layer 2 video file",
    "MIME_Types": [
      "video/mpeg",
      "video/x-mpeg",
      "video/x-mpeq2a"
    ],
    "Works":true
  },
  {
    "Extension": ".mpa",
    "Description": "MPEG video Stream",
    "MIME_Types": [
      "video/mpeg"
    ],
    "Works":true
  },
  {
    "Extension": ".ogg",
    "Description": "OGG audio file",
    "MIME_Types": [
      "audio/ogg",
      "audio/x-ogg",
      "application/ogg"
    ],
    "Works":true
  },
  {
    "Extension": ".ogg",
    "Description": "OGG video file",
    "MIME_Types": [
      "video/ogg",
      "video/x-ogg",
      "application/ogg"
    ],
    "Works":true
  },
  {
    "Extension": ".mpe",
    "Description": "MPEG video file",
    "MIME_Types": [
      "video/mpeg"
    ],
    "Works":false
  },
  {
    "Extension": ".mpeg",
    "Description": "MPEG video file",
    "MIME_Types": [
      "video/mpeg"
    ],
    "Works":true
  },
  {
    "Extension": ".mpg",
    "Description": "MPEG video file",
    "MIME_Types": [
      "video/mpeg"
    ],
    "Works":true
  },
  {
    "Extension": ".mpv2",
    "Description": "MPEG Audio Stream",
    "MIME_Types": [
      "video/mpeg"
    ],
    "Works":false
  },
  {
    "Extension": ".mov",
    "Description": "Quicktime video file",
    "MIME_Types": [
      "video/quicktime"
    ],
    "Works":true
  },
  {
    "Extension": ".mqv",
    "Description": "Quicktime video file",
    "MIME_Types": [
      "video/quicktime"
    ],
    "Works":false
  },
  {
    "Extension": ".qt",
    "Description": "Quicktime video file",
    "MIME_Types": [
      "video/quicktime"
    ],
    "Works":false
  },
  {
    "Extension": ".rv",
    "Description": "RealVideo file",
    "MIME_Types": [
      "video/vnd.rn-realvideo",
      "video/x-pn-realvideo"
    ],
    "Works":false
  },
  {
    "Extension": ".dv",
    "Description": "Digital video file",
    "MIME_Types": [
      "video/x-dv"
    ],
    "Works":false
  },
  {
    "Extension": ".lsf",
    "Description": "Streaming Audio/Video File",
    "MIME_Types": [
      "video/x-la-asf"
    ],
    "Works":false
  },
  {
    "Extension": ".lsx",
    "Description": "Streaming Audio/Video File",
    "MIME_Types": [
      "video/x-la-asf"
    ],
    "Works":false
  },
  {
    "Extension": ".asf",
    "Description": "Windows Media file",
    "MIME_Types": [
      "video/x-ms-asf"
    ],
    "Works":true
  },
  {
    "Extension": ".asr",
    "Description": "Windows Media file",
    "MIME_Types": [
      "video/x-ms-asr"
    ],
    "Works":false
  },
  {
    "Extension": ".asx",
    "Description": "Windows Media file",
    "MIME_Types": [
      "video/x-ms-asx"
    ],
    "Works":false
  },
  {
    "Extension": ".wmv",
    "Description": "Windows Media file",
    "MIME_Types": [
      "video/x-ms-wmv"
    ],
    "Works":true
  }
];