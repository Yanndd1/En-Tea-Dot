
export async function getSettings(){
  return new Promise(r=>chrome.storage.sync.get({apiKey:'',model:'gpt-4o-mini'},r));
}
