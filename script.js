(function(){
  const root=document.documentElement;
  const langButton=document.querySelector('#language');
  const menuButton=document.querySelector('#menu');
  const nav=document.querySelector('#nav');
  let lang='zh';
  function render(){
    root.lang=lang==='zh'?'zh-Hant':'en';
    document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
      const value=el.dataset[lang];
      if(el.tagName==='H1') el.innerHTML=value.replace(/\n/g,'<br>');
      else el.textContent=value;
    });
    langButton.textContent=lang==='zh'?'◎ EN':'◎ 中';
  }
  langButton.addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';render()});
  menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu')});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
  const caseLinks=["https://lnkd.in/p/gZBPjHHY","https://www.hongkongstorage.com/premium-move-for-you-advantage/","https://www.instagram.com/bushywork/"];
  document.querySelectorAll('.card').forEach((card,index)=>{
    const url=caseLinks[index];
    if(!url)return;
    card.setAttribute('role','link');
    card.setAttribute('tabindex','0');
    card.addEventListener('click',event=>{if(event.target.closest('a'))return;window.open(url,'_blank','noopener,noreferrer')});
    card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();window.open(url,'_blank','noopener,noreferrer')}});
  });
  render();
})();
