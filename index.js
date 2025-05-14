import{a as y,S as m,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="50290691-d51719558e36c91c48babc26d",h="https://pixabay.com/api/";async function b(o){const s=`${h}?key=${g}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await y.get(s)).data}catch(t){throw console.error("Помилка під час виконання HTTP-запиту:",t.message),new Error("Помилка завантаження даних з Pixabay.")}}const u=document.querySelector(".gallery");let i=null;function w(o){const s=o.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:n,comments:f,downloads:p})=>`
    <li class="gallery-item">
      <a href="${a}" class="gallery-link">
        <img src="${t}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${n}</p>
        <p><b>Comments:</b> ${f}</p>
        <p><b>Downloads:</b> ${p}</p>
      </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",s)}i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250,enableKeyboard:!0,showCounter:!0,overlayOpacity:.9,close:!0,animationSpeed:300});function L(){u.innerHTML=""}function c(o){l.error({title:"Error",message:o})}function S(o){l.success({title:"Success",message:o})}const d=document.querySelector(".form"),$=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async o=>{o.preventDefault();const s=$.value.trim();if(!s){alert("Будь ласка, введіть пошуковий запит.");return}L();try{const t=await b(s);t.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(w(t.hits),S("Images loaded successfully!"))}catch(t){console.error(t),c("An error occurred while loading images.")}});
//# sourceMappingURL=index.js.map
