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
  render();
})();
