const $=s=>document.querySelector(s),brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function toast(m){const t=$('#t');t.textContent=m;t.classList.add('show');clearTimeout(toast.i);toast.i=setTimeout(()=>t.classList.remove('show'),3200)}
$('#bg').onclick=()=>$('#menu').classList.toggle('open');
document.querySelectorAll('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
document.querySelectorAll('[data-toast]').forEach(a=>a.onclick=e=>{e.preventDefault();toast(a.dataset.toast)});
const dlg=$('#lg');document.querySelectorAll('[data-login]').forEach(b=>b.onclick=()=>dlg.showModal());
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};$('#lgb').onclick=()=>{dlg.close();toast('Login ainda não conectado. Integre seu sistema de contas aqui.')};
const G=['assets/img/garrafa-1.jpg','assets/img/garrafa-2.jpg','assets/img/garrafa-3.jpg'],gm=$('#gm'),th=$('#th');gm.src=G[0];
G.forEach((s,i)=>{const im=new Image();im.src=s;im.alt='Foto '+(i+1)+' da Garrafa da Padroeira';if(!i)im.className='on';im.onclick=()=>{gm.src=s;[...th.children].forEach(c=>c.classList.remove('on'));im.className='on'};th.appendChild(im)});
function sim(){const p=+$('#sp').value||0,q=Math.max(0,Math.floor(+$('#sq').value||0));const u=q>=100?9.90:q>=50?499.90/50:q>=10?129.90/10:12.99;const r=p*q,c=u*q,m=r-c;$('#o1').textContent=brl(r);$('#o2').textContent=brl(c);$('#o3').textContent=brl(m)+(r>0?' ('+Math.round(m/r*100)+'%)':'')}
$('#sp').oninput=$('#sq').oninput=sim;sim();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
