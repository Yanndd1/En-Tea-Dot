
import { getSettings } from './utils/settings.js';

chrome.runtime.onInstalled.addListener(()=>chrome.alarms.create('ka',{periodInMinutes:0.4}));
chrome.alarms.onAlarm.addListener(a=>a.name==='ka'&&true);

chrome.runtime.onMessage.addListener((msg, sender, send)=>{
  if(msg.type==='REWRITE_TEXT'){rewrite(msg.payload).then(send);return true;}
});

async function rewrite({text}){
  const {apiKey,model}=await getSettings();
  if(!apiKey) return {ok:false,error:'Clé API manquante'};
  const messages=[
    {role:'system',content:'You are a professional French proof‑reader. Return ONLY the corrected version of the user text, preserving meaning and formatting.'},
    {role:'user',content:text}
  ];
  try{
    const res=await fetch('https://api.openai.com/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${apiKey}`},
      body:JSON.stringify({model,temperature:0,messages})
    });
    if(!res.ok) return {ok:false,error:`HTTP ${res.status}`};
    const data=await res.json();
    const corrected=data.choices?.[0]?.message?.content||'';
    return {ok:true,text:corrected.trim()};
  }catch(e){
    return {ok:false,error:e.message};
  }
}
