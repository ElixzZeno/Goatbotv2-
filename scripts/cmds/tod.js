function _0x4eae(){const _0x534693=['Samir\0B.\0Thakuri','135368bRnGID','7462554qCEGkr','4OLgeZs','includes','Error\0fetching\0data\0from\0API:','tod','520628RFmbeK','truth','20hUJljQ','Failed\0to\0fetch\0truth\0or\0dare\0question\0from\0API.','1.0','https://api.zahwazein.xyz/entertainment/dare?apikey=zenzkey_92d341a7630e','data','dare','1112070rETQuH','https://api.zahwazein.xyz/entertainment/truth?apikey=zenzkey_92d341a7630e','Error\0translating\0text:','77uFkeDP','toLowerCase','sendMessage','error','Incorrect\0syntax!','exports','915903SCsgGR','35031nWSDxp','{pn}\0[truth/t]\0or\0{pn}\0[dare/d]','258312XMtuJm','length','get','5yUpVGS','result','message','Play\0truth\0or\0dare.'];_0x4eae=function(){return _0x534693;};return _0x4eae();}function _0x24c4(_0xd7d9ec,_0x22ea78){const _0x4eaefc=_0x4eae();return _0x24c4=function(_0x24c442,_0x3589ae){_0x24c442=_0x24c442-0x71;let _0x11ba66=_0x4eaefc[_0x24c442];return _0x11ba66;},_0x24c4(_0xd7d9ec,_0x22ea78);}const _0xd6f1e4=_0x24c4;(function(_0x172e3b,_0x311794){const _0x5ecd66=_0x24c4,_0x110836=_0x172e3b();while(!![]){try{const _0xacf637=-parseInt(_0x5ecd66(0x7a))/0x1*(-parseInt(_0x5ecd66(0x86))/0x2)+parseInt(_0x5ecd66(0x7c))/0x3+parseInt(_0x5ecd66(0x8a))/0x4*(-parseInt(_0x5ecd66(0x7f))/0x5)+-parseInt(_0x5ecd66(0x92))/0x6+-parseInt(_0x5ecd66(0x73))/0x7*(parseInt(_0x5ecd66(0x84))/0x8)+-parseInt(_0x5ecd66(0x79))/0x9*(parseInt(_0x5ecd66(0x8c))/0xa)+parseInt(_0x5ecd66(0x85))/0xb;if(_0xacf637===_0x311794)break;else _0x110836['push'](_0x110836['shift']());}catch(_0xa5736a){_0x110836['push'](_0x110836['shift']());}}}(_0x4eae,0x1f985));const axios=require('axios');async function fetchDataFromAPI(_0x5e87e4){const _0xd3fafb=_0x24c4;try{const _0x5d2b08=await axios['get'](_0x5e87e4);return _0x5d2b08[_0xd3fafb(0x90)][_0xd3fafb(0x80)];}catch(_0x11ce28){return console[_0xd3fafb(0x76)](_0xd3fafb(0x88),_0x11ce28[_0xd3fafb(0x81)]),null;}}async function translateText(_0x10906b){const _0x139b84=_0x24c4;try{const _0x1de985='https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q='+encodeURIComponent(_0x10906b),_0x1e588d=await axios[_0x139b84(0x7e)](_0x1de985),_0x57fffc=_0x1e588d['data'][0x0][0x0][0x0];return _0x57fffc;}catch(_0x157df2){return console[_0x139b84(0x76)](_0x139b84(0x72),_0x157df2[_0x139b84(0x81)]),null;}}module[_0xd6f1e4(0x78)]={'config':{'name':'truthordare','aliases':[_0xd6f1e4(0x89)],'version':_0xd6f1e4(0x8e),'author':_0xd6f1e4(0x83),'countDown':0x0,'role':0x0,'shortDescription':{'en':_0xd6f1e4(0x82)},'longDescription':{'en':'Challange\0Yourself\0With\0Random\0Truth\0And\0Dares...'},'category':'game','guide':{'en':_0xd6f1e4(0x7b)}},'onStart':async function({api:_0x5068f6,event:_0x205c16,args:_0x2a7a3f}){const _0x2ff975=_0xd6f1e4,{threadID:_0x2fb04b,messageID:_0x343aa8}=_0x205c16;if(_0x2a7a3f[_0x2ff975(0x7d)]<0x1)return _0x5068f6[_0x2ff975(0x75)](_0x2ff975(0x77),_0x2fb04b,_0x343aa8);const _0x2c9b21=_0x2a7a3f[0x0][_0x2ff975(0x74)](),_0x3db891=[_0x2ff975(0x8b),'t',_0x2ff975(0x91),'d'];if(!_0x3db891[_0x2ff975(0x87)](_0x2c9b21))return _0x5068f6[_0x2ff975(0x75)](_0x2ff975(0x77),_0x2fb04b,_0x343aa8);const _0x217676=_0x2c9b21===_0x2ff975(0x8b)||_0x2c9b21==='t'?_0x2ff975(0x71):_0x2ff975(0x8f);try{const _0x140e5a=await fetchDataFromAPI(_0x217676);if(_0x140e5a){const _0x1cd9eb=await translateText(_0x140e5a);return _0x1cd9eb?_0x5068f6[_0x2ff975(0x75)](_0x1cd9eb,_0x2fb04b,_0x343aa8):_0x5068f6[_0x2ff975(0x75)]('Failed\0to\0translate\0the\0question.',_0x2fb04b,_0x343aa8);}else return _0x5068f6['sendMessage']('Failed\0to\0fetch\0truth\0or\0dare\0question\0from\0API.',_0x2fb04b,_0x343aa8);}catch(_0x11e4f4){return console[_0x2ff975(0x76)]('Error:',_0x11e4f4[_0x2ff975(0x81)]),_0x5068f6[_0x2ff975(0x75)](_0x2ff975(0x8d),_0x2fb04b,_0x343aa8);}}};