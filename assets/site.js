(() => {
 const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
 menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){menu.click();menu.focus()}});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(!reduced.matches){
  const observer=new IntersectionObserver(items=>items.forEach((item,i)=>{if(item.isIntersecting){item.target.style.animationDelay=Math.min(i*80,240)+'ms';item.target.classList.add('enter');observer.unobserve(item.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  if(matchMedia('(hover:hover) and (min-width:900px)').matches){document.querySelectorAll('.category-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) translateY(-6px) rotateX(${-y*4}deg) rotateY(${x*4}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')});let scheduled=false;const word=document.querySelector('.floating-word');if(word)window.addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(()=>{word.style.translate=`0 ${Math.min(scrollY*.06,35)}px`;scheduled=false});scheduled=true}},{passive:true})}
  document.querySelectorAll('a[href$=".html"]').forEach(a=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button!==0||a.target==='_blank')return;e.preventDefault();document.body.classList.add('page-exit');setTimeout(()=>location.href=a.href,160)}));
 }
 document.querySelector('#copy-address')?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('New Stylish Tailors Boutique, 391/128, Prince Anwar Shah Road, Jadavpur, Kolkata');status.textContent='Address copied.'}catch{status.textContent='391/128, Prince Anwar Shah Road, Jadavpur, Kolkata. Select this address to copy it.'}});
})();
