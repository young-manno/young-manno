const _0x46986e=_0x35f0;function _0x35f0(_0x51ec84,_0x553d7b){const _0x5c78fb=_0x5c78();return _0x35f0=function(_0x35f0e6,_0x4e6335){_0x35f0e6=_0x35f0e6-0x13d;let _0x805cdd=_0x5c78fb[_0x35f0e6];return _0x805cdd;},_0x35f0(_0x51ec84,_0x553d7b);}function _0x5c78(){const _0x3944f8=['184836FLWxfG','utf8','toLowerCase','AUTO_REPLY','sendMessage','FAKE_RECORDING','967832YRqCrs','recording','AUTO_STICKER','7wxNlJx','readFileSync','true','sendPresenceUpdate','712FpPAeT','parse','../media/autovoice.json','998982mQzyFj','audio/mpeg','yourName','609XwQlwF','AUTO_VOICE','35125JcAQju','../media/autoreply.json','body','2388430KgsCOl','1221876pTCBXf','join','reply','24QfdTEB','../media/autosticker.json'];_0x5c78=function(){return _0x3944f8;};return _0x5c78();}(function(_0x470ba9,_0x2b7f4a){const _0xf3b4d0=_0x35f0,_0x1544e8=_0x470ba9();while(!![]){try{const _0x353757=-parseInt(_0xf3b4d0(0x156))/0x1+parseInt(_0xf3b4d0(0x145))/0x2*(parseInt(_0xf3b4d0(0x14b))/0x3)+parseInt(_0xf3b4d0(0x154))/0x4*(-parseInt(_0xf3b4d0(0x14d))/0x5)+-parseInt(_0xf3b4d0(0x151))/0x6+parseInt(_0xf3b4d0(0x141))/0x7*(parseInt(_0xf3b4d0(0x13e))/0x8)+parseInt(_0xf3b4d0(0x148))/0x9+parseInt(_0xf3b4d0(0x150))/0xa;if(_0x353757===_0x2b7f4a)break;else _0x1544e8['push'](_0x1544e8['shift']());}catch(_0x25c777){_0x1544e8['push'](_0x1544e8['shift']());}}}(_0x5c78,0x1b748));const config=require('../config'),fs=require('fs'),path=require('path'),{cmd,commands}=require('../command');cmd({'on':_0x46986e(0x14f)},async(_0x24c5fb,_0x287f74,_0x2791d6,{from:_0xf83304,body:_0x2231b4,isOwner:_0x3f9846})=>{const _0x34eeaa=_0x46986e,_0x1d6fc6=path[_0x34eeaa(0x152)](__dirname,_0x34eeaa(0x147)),_0x1344a7=JSON[_0x34eeaa(0x146)](fs[_0x34eeaa(0x142)](_0x1d6fc6,_0x34eeaa(0x157)));for(const _0x35d58a in _0x1344a7){_0x2231b4[_0x34eeaa(0x158)]()===_0x35d58a[_0x34eeaa(0x158)]()&&(config[_0x34eeaa(0x14c)]===_0x34eeaa(0x143)&&(await _0x24c5fb[_0x34eeaa(0x144)]('recording',_0xf83304),await _0x24c5fb[_0x34eeaa(0x15a)](_0xf83304,{'audio':{'url':_0x1344a7[_0x35d58a]},'mimetype':_0x34eeaa(0x149),'ptt':!![]},{'quoted':_0x287f74})));}}),cmd({'on':_0x46986e(0x14f)},async(_0x3822c6,_0x1c8d93,_0x5da9d1,{from:_0x71a430,body:_0x422039,isOwner:_0x185f63})=>{const _0x32d7e7=_0x46986e,_0x33bef6=path[_0x32d7e7(0x152)](__dirname,_0x32d7e7(0x155)),_0x22c2a4=JSON[_0x32d7e7(0x146)](fs[_0x32d7e7(0x142)](_0x33bef6,'utf8'));for(const _0x3dd3b7 in _0x22c2a4){_0x422039['toLowerCase']()===_0x3dd3b7[_0x32d7e7(0x158)]()&&(config[_0x32d7e7(0x140)]===_0x32d7e7(0x143)&&await _0x3822c6[_0x32d7e7(0x15a)](_0x71a430,{'sticker':{'url':_0x22c2a4[_0x3dd3b7]},'package':_0x32d7e7(0x14a)},{'quoted':_0x1c8d93}));}}),cmd({'on':_0x46986e(0x14f)},async(_0x57a199,_0x334eab,_0x4b85f9,{from:_0xaa069,body:_0x5d780d,isOwner:_0x210395})=>{const _0x42b218=_0x46986e,_0x2f9a84=path[_0x42b218(0x152)](__dirname,_0x42b218(0x14e)),_0x40b389=JSON['parse'](fs[_0x42b218(0x142)](_0x2f9a84,_0x42b218(0x157)));for(const _0x311d93 in _0x40b389){_0x5d780d['toLowerCase']()===_0x311d93['toLowerCase']()&&(config[_0x42b218(0x159)]===_0x42b218(0x143)&&await _0x4b85f9[_0x42b218(0x153)](_0x40b389[_0x311d93]));}}),cmd({'on':_0x46986e(0x14f)},async(_0x2fc17d,_0x435a6,_0x5756be,{from:_0x2563bf,body:_0x3339b3,isOwner:_0x3c53d8})=>{const _0xfcc5f4=_0x46986e;if(config[_0xfcc5f4(0x13d)]==='true')await _0x2fc17d[_0xfcc5f4(0x144)](_0xfcc5f4(0x13f),_0x2563bf);});