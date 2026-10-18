var $=function(s){return document.querySelector(s)},$$=function(s){return document.querySelectorAll(s)};
var H=function(a,f){return a.map(f).join('')};
var svg=function(s){return 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")'};
var rnd=Math.random;

/* ===== EDIT HERE: PHOTOS =====
   Profile photo: put the file path below.
   Project / experience photos: edit the D('folder',[...file names...]) lists further down. */
var PROFILE='assets/AB34E32E-AB14-4EDD-A628-81156D6A98A6.jpeg';
var D=function(d,f){return f.map(function(x){return d+'/'+x})};

/* icons (outline style) */
var IC={
cap:`<path d='M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z'/><path d='M22 10v6'/><path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5'/>`,
book:`<path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20'/>`,
users:`<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/>`,
palette:`<circle cx='13.5' cy='6.5' r='.5'/><circle cx='17.5' cy='10.5' r='.5'/><circle cx='8.5' cy='7.5' r='.5'/><circle cx='6.5' cy='12.5' r='.5'/><path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z'/>`,
image:`<rect width='18' height='18' x='3' y='3' rx='2'/><circle cx='9' cy='9' r='2'/><path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/>`,
leaf:`<path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'/><path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'/>`,
camera:`<path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z'/><circle cx='12' cy='13' r='3'/>`,
trend:`<path d='M16 7h6v6'/><path d='m22 7-8.5 8.5-5-5L2 17'/>`,
cart:`<circle cx='8' cy='21' r='1'/><circle cx='19' cy='21' r='1'/><path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/>`,
video:`<path d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5'/><rect x='2' y='6' width='14' height='12' rx='2'/>`,
sprout:`<path d='M7 20h10'/><path d='M10 20c5.5-2.5.8-6.4 3-10'/><path d='M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z'/><path d='M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z'/>`,
group:`<path d='M18 21a8 8 0 0 0-16 0'/><circle cx='10' cy='8' r='5'/><path d='M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3'/>`,
star:`<path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'/>`,
terminal:`<path d='m4 17 6-6-6-6'/><path d='M12 19h8'/>`,
globe:`<circle cx='12' cy='12' r='10'/><path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'/><path d='M2 12h20'/>`,
phone:`<rect width='14' height='20' x='5' y='2' rx='2'/><path d='M12 18h.01'/>`,
cpu:`<rect width='16' height='16' x='4' y='4' rx='2'/><rect width='6' height='6' x='9' y='9' rx='1'/><path d='M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2'/>`,
wrench:`<path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z'/>`,
github:`<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'/><path d='M9 18c-4.51 2-5-2-7-2'/>`,
linkedin:`<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/><rect width='4' height='12' x='2' y='9'/><circle cx='4' cy='4' r='2'/>`,
mail:`<rect width='20' height='16' x='2' y='4' rx='2'/><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/>`,
user:`<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/>`,
layers:`<path d='m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z'/><path d='m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65'/><path d='m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65'/>`,
briefcase:`<path d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'/><rect width='20' height='14' x='2' y='6' rx='2'/>`,
spark:`<path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'/><path d='M20 3v4'/><path d='M22 5h-4'/>`,
l:`<path d='m15 18-6-6 6-6'/>`,
r:`<path d='m9 18 6-6-6-6'/>`};
var I=function(n){return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>'};
function gal(a,ic){a=a&&a.length?a:[null];return '<div class="gal"><div class="scroll">'+H(a,function(u){return '<figure class="shot">'+(u?'<img src="'+encodeURI(u)+'" alt="" loading="lazy" onerror="this.remove()">':'')+'<span>'+I(ic)+'<small>add screenshot</small></span></figure>'})+'</div></div>'}

/* flower mask + star pattern */
var c='';for(var i=0;i<6;i++){var a=i*Math.PI/3;c+='<circle cx="'+(50+28*Math.cos(a))+'" cy="'+(50+28*Math.sin(a))+'" r="22"/>'}
document.documentElement.style.setProperty('--fl',svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#000">'+c+'<circle cx="50" cy="50" r="30"/></g></svg>'));
$('.stars').style.backgroundImage=svg('<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170"><path d="M32 18q2 9 11 11-9 2-11 11-2-9-11-11 9-2 11-11z" fill="#fff" opacity=".95"/><path d="M118 96q3 13 16 16-13 3-16 16-3-13-16-16 13-3 16-16z" fill="#ff9ec8"/><path d="M130 22q1 5 6 6-5 1-6 6-1-5-6-6 5-1 6-6z" fill="#c9a9ff"/><circle cx="70" cy="130" r="3" fill="#fff"/><circle cx="12" cy="95" r="2.5" fill="#ff9ec8"/><circle cx="95" cy="50" r="2" fill="#fff"/></svg>');

/* drifting clouds + rising sparkles */
var bg=$('.bg'),G=['✦','✧','✦','✧'],CL=['#ff5fa2','#fff','#b88cff','#4cc3e0'];
for(i=0;i<6;i++){var d=document.createElement('div');d.className='cloud';d.style.cssText='--w:'+(130+rnd()*170)+'px;top:'+(rnd()*85)+'%;--d:'+(55+rnd()*55)+'s;animation-delay:-'+(rnd()*90)+'s;opacity:'+(.3+rnd()*.35);bg.append(d)}
for(i=0;i<26;i++){var s=document.createElement('span');s.className='fl';s.textContent=G[i%G.length];s.style.cssText='left:'+(rnd()*100)+'%;font-size:'+(12+rnd()*22)+'px;--d:'+(14+rnd()*18)+'s;animation-delay:-'+(rnd()*30)+'s;color:'+CL[i%4]+';opacity:.8';bg.append(s)}
addEventListener('scroll',function(){$('.stars').style.translate='0 '+(-scrollY*.12)+'px'},{passive:true});



/* data */
var P=[
{n:'01',t:'PICVERSE',i:'image',img:D('assets/picverse',['picverse1.png','picverse2.png','picverse3.png','picverse4.png','picverse5.png','picverse6.png']),d:'PICVERSE is my first web development project, created as part of a Human and Computer Interaction course. I designed and developed a web-based image-sharing platform from scratch, focusing on creating an intuitive user interface and smooth user experience.',s:['HTML','CSS','JavaScript'],l:[['GitHub','https://github.com/mchristabela/PICVERSE'],['Live website','https://mchristabela.github.io/PICVERSE/']]},
{n:'02',t:'PlastiTrace',i:'leaf',img:D('assets/plastitrace',['plastitrace1.png','plastitrace2.png','plastitrace3.png','plastitrace4.png']),d:'PlastiTrace is an AI-powered application developed as part of an Artificial Intelligence course to automatically identify and classify different types of plastic. The project was implemented as both a web application and desktop application, supporting real-time detection through webcam input and image uploads.',s:['Python','ResNet-18'],l:[['GitHub','https://github.com/LuisSoe/plastictrace'],['Live website','https://plastitrace.michelleang.site']]},
{n:'03',t:'Smart Attendance System',i:'camera',img:D('assets/attendance system',['atd1.png','atd2.png','atd3.png','atd4.png','atd5.png']),d:'A computer vision project developed as part of a Computer Vision course to improve the efficiency and accuracy of attendance tracking. The system uses facial recognition to automate attendance and achieved 94–98% confidence scores during live testing, providing a faster, more reliable, and contactless alternative to conventional attendance methods.',s:['Python','OpenCV','Haar Cascade','LBPH','XGBoost'],l:[['GitHub','https://github.com/evnjeremy-maker/face-recognition-attendance']]},
{n:'04',t:'Volatility-Based Market Regime Detection on EUR/USD Using Unsupervised Machine Learning Models',i:'trend',img:D('assets/rm',['Screenshot 2026-10-05 at 17.18.16.png','Screenshot 2026-10-05 at 17.10.34.png','Screenshot 2026-10-05 at 17.11.25.png']),d:'Research project for the Research Methodology course focused on detecting low- and high-volatility regimes in the EUR/USD market. The study compares multiple unsupervised learning models and evaluates their effectiveness for market analysis and risk management.',s:['HMM','K-Means','GMM'],l:[['Read paper','https://drive.google.com/file/d/1xi42MwsMQ3PJOYUoI9xO7K8dRm5IrhHU/view?usp=sharing']]},
{n:'05',t:'EUR/USD Next-Candle Predictor',i:'leaf',img:D('assets/eur usd',['eurusd1.png','eurusd2.png','eurusd3.png','eurusd4.png']),d:'A machine learning project that estimates the next 15-minute price move of EUR/USD from the last candle, time of day, spread, and volume, evaluated with walk-forward validation on 100,000 bars. Available as an interactive web application where users can enter a bar or upload a CSV, with all calculations running locally in the browser.',s:['Python','Ridge Regression','Walk-forward validation'],l:[['GitHub','https://github.com/mchristabela/EUR-USD-M15-Prediction'],['Live website','hhttps://eur-usd-m15-prediction.michelleang.site']]}];
var X=[
{y:'2025',t:'Study2Challenge Finalist - Nutricart',i:'cart',img:D('assets/s2c',['Screenshot 2026-10-05 at 20.20.36.png','Screenshot 2026-10-05 at 20.20.44.png','Screenshot 2026-10-05 at 20.20.53.png','Screenshot 2026-10-05 at 20.21.00.png','Screenshot 2026-10-05 at 20.21.02.png']),d:'A web-based platform that optimizes grocery choices based on nutritional needs, local food prices, and budget constraints. Designed to help families build affordable and balanced grocery baskets through personalized food recommendations.'},
{y:'2025 – present',t:'BNCC (Bina Nusantara Computer Club)',i:'video',img:D('assets/bncc',['7B5DD5F4-BFF7-4872-9B86-544D6BE33E94_1_105_c.jpeg','B550D65E-AFC4-43CC-975E-1680E8958781_1_201_a.jpg','E114D0C5-F06C-40D5-9946-4A7AA9492796.jpeg','DC019922-DF80-4819-9B2D-3FE9F70A16A8.jpeg']),d:'Public Relations Activist responsible for managing content creation, including graphic design and video editing, to support organizational communication and promotional activities. Also contributed to TechUp 2026 through event and equipment coordination, supporting event preparation and on-site operations.'},
{y:'2025 & 2026',t:'Freshmen Leader',i:'sprout',img:D('assets/fl',['fl3.jpeg','fl1.jpg','fl2.jpg','fl4.jpeg','39C3BB95-8AE6-4C43-AAC7-B95226FBA49F_1_105_c.jpeg','2C9DF8BF-9692-4E6C-8A15-8EB160AC78F5_1_105_c.jpeg']),d:'Guided and supported new students throughout their transition into university life as a Freshmen Leader. Strengthened communication, leadership, teamwork, and problem-solving skills while fostering a supportive and collaborative environment.'},
{y:'2026',t:'Freshmen Partner',i:'group',img:D('assets/fp',['4C3BD555-032B-48FB-B945-AD902F4C6089_1_105_c.jpeg','AC56614C-7D06-4D7B-B336-9B231E775571_1_105_c.jpeg']),d:'Guided and supported freshmen throughout their community service activities, helping them collaborate effectively and engage meaningfully with the local community. Strengthened leadership, communication, teamwork, and problem-solving skills while contributing to positive social impact.'},
{y:'2025 - 2026',t:'S-Class',i:'star',img:D('assets/sclass',['4AFEA105-875B-42C8-94A7-F002CFB46936_1_201_a.jpg','B034735B-7194-4F0F-8064-D1953E30E6B7.jpeg','99F37AC9-9EBA-4256-921E-280EE4CD1F82_1_102_a.jpeg']),d:'Selected as 1 of 60 students with the highest midterm scores in the first semester. Received weekly training in web and mobile app development through Ureeka and participated in multiple programming competitions, strengthening technical, problem-solving, and teamwork skills.'}];
var S=[['Programming Languages','terminal',['Python','C','JavaScript','SQL']],['Web Development','globe',['HTML','CSS','React','Node.js']],['Mobile Development','phone',['Flutter','Android (Java)']],['UI/UX','palette',['Figma','Wireframing','Prototyping','User Research']],['Intelligent Systems','cpu',['Machine Learning','Computer Vision','Deep Learning','Natural Language Processing (NLP)','Speech Recognition']],['Tools','wrench',['VS Code','Github','Colab','Android Studio']]];

$('#plist').innerHTML=H(P,function(p,i){return '<div class="pi"><div class="badge"></div><article class="proj box s'+(i%4)+' '+['pinkbox','skybox','lvbox','pinkbox'][i]+'">'+gal(p.img,p.i)+'<span class="tag">Project '+p.n+'</span><h3>'+p.t+'</h3><p>'+p.d+'</p><div class="chips">'+H(p.s,function(x){return '<span>'+x+'</span>'})+'</div><div class="links">'+H(p.l,function(l,j){return '<a class="btn'+(j?' alt':'')+'" href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+'</a>'})+'</div></article></div>'});

var SH=['blob1','leaf','blob2','leaf2','arch'];
$('#elist').innerHTML=H(X,function(x,i){return '<div class="ex"><div class="badge"></div><div class="box '+['pinkbox','skybox','lvbox'][i%3]+' '+(i%2?'leaf2':'leaf')+'"><span class="tag">'+x.y+'</span><h3>'+x.t+'</h3><p>'+x.d+'</p>'+gal(x.img,x.i)+'</div></div>'});


$('#slist').innerHTML=H(S,function(s,i){return '<div class="box sq '+['pinkbox','skybox','lvbox'][i%3]+'"><h3>'+I(s[1])+s[0]+'</h3><ul class="chips">'+H(s[2],function(x){return '<li>'+x+'</li>'})+'</ul></div>'});

/* fill static icons, photos, gallery arrows */
$$('[data-i]').forEach(function(e){e.innerHTML=I(e.dataset.i)});
$('#me').src=PROFILE;
$$('.gal').forEach(function(g){var s=g.firstChild;[['l',-1],['r',1]].forEach(function(a){var b=document.createElement('button');b.className='arr '+a[0];b.type='button';b.setAttribute('aria-label',a[1]<0?'Previous photo':'Next photo');b.innerHTML=I(a[0]);b.onclick=function(){s.scrollBy({left:a[1]*s.clientWidth*.8,behavior:'smooth'})};g.append(b)})});

/* tilt on hover */
$$('.tilt').forEach(function(el){
  el.addEventListener('pointermove',function(e){if(e.pointerType==='touch')return;var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='perspective(900px) rotateY('+(x*9)+'deg) rotateX('+(-y*9)+'deg) translateY(-5px)'});
  el.addEventListener('pointerleave',function(){el.style.transform=''});
});

/* cursor glow + sparkle trail */
var g=$('#glow'),mx=innerWidth/2,my=innerHeight/2,gx=mx,gy=my,last=0;
function spark(x,y,big){var s=document.createElement('span');s.className='sp';s.textContent=G[rnd()*G.length|0];s.style.cssText='left:'+x+'px;top:'+y+'px;color:'+CL[rnd()*4|0]+';font-size:'+(big?22:14)+'px;--dx:'+((rnd()-.5)*(big?120:50))+'px;--dy:'+((big?(rnd()-.5)*120:20+rnd()*40))+'px';document.body.append(s);s.onanimationend=function(){s.remove()}}
var calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(matchMedia('(pointer:fine)').matches&&!calm){
  addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;g.style.opacity=1;var t=performance.now();if(t-last>45){last=t;spark(mx,my)}});
  document.addEventListener('mouseleave',function(){g.style.opacity=0});
  (function loop(){gx+=(mx-gx)*.14;gy+=(my-gy)*.14;g.style.transform='translate('+gx+'px,'+gy+'px)';requestAnimationFrame(loop)})();
}else g.remove();
if(!calm)addEventListener('pointerdown',function(e){for(var k=0;k<7;k++)spark(e.clientX,e.clientY,1)});
;
(function(){
  var bg=document.querySelector('.bg'),st=document.querySelector('.stars'),r=Math.random,m=innerWidth<700;

  /* bulan/matahari + bintang jatuh + gunung/bukit (diletakkan di belakang awan & sparkle) */
  st.insertAdjacentHTML('afterend',
    '<div class="orb"></div>'+
    '<div class="shoot"><i style="--t:10%;--l:15%;--dl:2s"></i><i style="--t:22%;--l:55%;--dl:8s"></i></div>'+
    '<svg class="hills" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">'+
    '<path class="hl0" d="M0 130 L130 60 L230 120 L360 40 L500 130 L620 80 L760 140 L900 50 L1040 125 L1180 70 L1320 130 L1440 90 V320 H0Z"/>'+
    '<path class="hl1" d="M0 150 C160 70 300 90 460 140 S760 200 960 120 S1300 60 1440 130 V320 H0Z"/>'+
    '<path class="hl2" d="M0 220 C200 150 360 170 540 215 S900 270 1100 200 S1350 170 1440 210 V320 H0Z"/>'+
    '<path class="hl3" d="M0 275 C220 230 420 250 640 280 S1060 305 1240 265 S1380 255 1440 270 V320 H0Z"/>'+
    '</svg>');

  /* bintang berkelip (hanya di langit atas bukit) */
  for(var i=0,n=m?46:95;i<n;i++){
    var e=document.createElement('i'),big=r()<.12,z=big?3.2:1+r()*1.6;
    e.className='st'+(big?' big':'');
    e.style.cssText='left:'+r()*100+'%;top:'+r()*68+'%;width:'+z+'px;height:'+z+'px;--d:'+(2+r()*4)+'s;animation-delay:-'+r()*6+'s';
    st.append(e);
  }

  /* kurangi keramaian: awan 4, sparkle 6-10, awan hanya di langit */
  bg.querySelectorAll('.cloud').forEach(function(c,k){if(k>3)c.remove();else{c.style.top=r()*42+'%';c.style.opacity=.25+r()*.25}});
  bg.querySelectorAll('.fl').forEach(function(f,k){if(k>(m?5:9))f.remove();else f.style.opacity=.55});
})();
;
(function(){
  var d=document,R=d.documentElement,calm=matchMedia('(prefers-reduced-motion:reduce)').matches,
      links=[].slice.call(d.querySelectorAll('.pill a'));

  /* progress bar scroll */
  var pb=d.createElement('div');pb.id='prog';d.body.append(pb);
  function pr(){var h=R.scrollHeight-innerHeight;pb.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')';if(scrollY<200)links.forEach(function(a){a.classList.remove('on')})}
  addEventListener('scroll',pr,{passive:true});addEventListener('resize',pr);pr();

  /* tombol tema terang/gelap */
  var SUN="<svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='12' cy='12' r='4'/><path d='M12 2v2M12 20v2M2 12h2M20 12h2m-15.07-7.07 1.41 1.41m11.32 11.32 1.41 1.41m0-14.14-1.41 1.41M6.34 17.66l-1.41 1.41'/></svg>",
      MOON="<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'/></svg>",
      tb=d.createElement('button');
  tb.type='button';tb.className='tg';tb.setAttribute('aria-label','Ganti tema terang/gelap');
  function isDark(){var t=R.dataset.theme;return t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches}
  function ic(){tb.innerHTML=isDark()?SUN:MOON}
  try{var sv=localStorage.getItem('theme');if(sv)R.dataset.theme=sv}catch(e){}
  ic();
  tb.onclick=function(){var n=isDark()?'light':'dark';R.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}ic()};
  d.querySelector('.pill').append(tb);

  if(!('IntersectionObserver' in window))return;

  /* menu aktif sesuai section */
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-40% 0px -55% 0px'});
  d.querySelectorAll('section[id]').forEach(function(s){so.observe(s)});

  /* muncul pelan-pelan saat di-scroll */
  var sp=function(el,n){if(calm||typeof spark!=='function')return;var b=el.getBoundingClientRect();for(var k=0;k<n;k++)spark(b.left+b.width/2,b.top+b.height/2,1)};
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);
    var h=t.matches('section h2'),a=h?t.querySelector('i'):t.querySelector(':scope>.badge');
    if(a)setTimeout(function(){sp(a,h?5:3)},400);
    setTimeout(function(){t.classList.remove('rv','in','fl','fr');t.style.transitionDelay=''},2400)})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  d.querySelectorAll('section h2,.lead,.cards2>*,.pi,.ex,.contact a').forEach(function(el){
    var k=[].indexOf.call(el.parentNode.children,el);
    el.style.transitionDelay=Math.min(k,4)*110+'ms';
    if(el.matches('.pi,.ex'))el.classList.add(k%2?'fr':'fl');
    el.classList.add('rv');io.observe(el);
  });
})();
;
/* sparkles placed around the photo, gently swaying (no orbit, no bubbles) */
(function(){
  var o=document.getElementById('orbits');if(!o)return;
  var S4='<svg viewBox="0 0 24 24"><path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5z"/></svg>',
      S5='<svg viewBox="0 0 24 24"><path d="m12 2.5 2.8 6 6.5.8-4.8 4.5 1.3 6.5L12 17l-5.8 3.3 1.3-6.5-4.8-4.5 6.5-.8z"/></svg>';
  var K='#ff5fa2',L='#b88cff',B='#3fbfe0',P='#ff9ccc',Y='#ffc94d';
  /* [angle deg, distance from center (x photo size), size px, color, shape] */
  [[-80,.6,26,K,4],[-52,.74,15,L,5],[-28,.62,20,Y,4],[-6,.78,14,B,4],[18,.6,24,L,4],[42,.76,16,K,5],
   [66,.62,20,B,4],[92,.74,26,P,4],[118,.6,15,Y,5],[142,.78,22,K,4],[166,.62,16,L,4],[190,.76,24,B,4],
   [214,.6,15,P,5],[238,.78,20,Y,4],[262,.64,16,K,4],[-100,.82,14,B,5]
  ].forEach(function(r,i){
    var d=document.createElement('i');d.className='pt';d.style.cssText='--a:'+r[0]+'deg;--k:'+r[1]+';--i:'+i;
    d.innerHTML='<i class="cnt"><i class="g" style="--z:'+r[2]+'px;--c:'+r[3]+';--d:'+(3.2+(i%5)*.7).toFixed(1)+'s;--dl:-'+((i*.9)%4).toFixed(1)+'s">'+(r[4]==5?S5:S4)+'</i></i>';
    o.append(d);
  });
})();