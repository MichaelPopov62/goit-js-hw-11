import{a as m,S as y,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="50290691-d51719558e36c91c48babc26d",h="https://pixabay.com/api/";async function b(i){const o={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};try{return(await m.get(h,{params:o})).data}catch(t){throw t}}const u=document.querySelector(".gallery");let c=null;function L(i){const o=i.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:s,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${n}" class="gallery-link">
          <img src="${t}" alt="${e}" loading="lazy" />
        </a>
           <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
  
      </li>`).join("");u.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new y(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){u.innerHTML=""}function w(){document.body.classList.add("loading")}function S(){document.body.classList.remove("loading")}const p=document.querySelector(".form"),l=p.querySelector('input[name="search-text"]');p.addEventListener("submit",async i=>{i.preventDefault();const o=l.value.trim();if(!o){a.error({title:"Помилка",message:"Будь ласка, введіть пошуковий запит.",position:"topRight"});return}v(),w();try{const t=await b(o);if(!t.hits||t.hits.length===0){a.info({title:"Нічого не знайдено",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits),a.success({title:"Успіх",message:`Знайдено ${t.hits.length} зображень.`,position:"topRight",timeout:3e3})}catch(t){a.error({title:"Помилка",message:"Не вдалося завантажити зображення. Спробуйте пізніше.",position:"topRight"}),console.error(t)}finally{S(),l.value=""}});
//# sourceMappingURL=index.js.map
