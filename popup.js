
const btn=document.getElementById('corriger');
const copyBtn=document.getElementById('copier');
btn.onclick=()=>{
  const txt=document.getElementById('input').value.trim();
  if(!txt){alert('Veuillez saisir un texte.');return;}
  btn.disabled=true;btn.textContent='En cours...';
  chrome.runtime.sendMessage({type:'REWRITE_TEXT',payload:{text:txt}},res=>{
    btn.disabled=false;btn.textContent='Corriger';
    const out=document.getElementById('output');
    if(!res.ok){out.value='Erreur : '+res.error;copyBtn.style.display='none';return;}
    out.value=res.text;copyBtn.style.display='inline-block';
  });
};
copyBtn.onclick=()=>{
  const text=document.getElementById('output').value;
  navigator.clipboard.writeText(text).then(()=>{copyBtn.textContent='Copié !';setTimeout(()=>copyBtn.textContent='Copier',1500);});
};
