
import { getSettings } from './utils/settings.js';
const keyEl=document.getElementById('key'), modelEl=document.getElementById('model');
getSettings().then(s=>{keyEl.value=s.apiKey;modelEl.value=s.model;});
document.getElementById('save').onclick=()=>chrome.storage.sync.set({apiKey:keyEl.value,model:modelEl.value},()=>alert('Paramètres enregistrés'));
