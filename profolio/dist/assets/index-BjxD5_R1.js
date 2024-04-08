function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DZLa6z6S.js","assets/index-DkRC89-Q.js","assets/index-DWnyyBjG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DkRC89-Q.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DZLa6z6S.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
