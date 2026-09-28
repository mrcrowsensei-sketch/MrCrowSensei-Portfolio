(function(){
  const l=document.getElementById("loader");
  if(!l)return;
  setTimeout(()=>l.classList.add("hide"),1900);
})();
document.querySelectorAll(".faq-item").forEach(item=>{
  item.addEventListener("click",()=>item.classList.toggle("open"));
});
const revealItems=document.querySelectorAll(".work-card,.about-card,.creator-card,.faq-item");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
revealItems.forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(18px)";
  el.style.transition="opacity .6s ease, transform .6s ease";
  observer.observe(el);
});
const loadMore=document.querySelector(".load-more");
const cards=[...document.querySelectorAll(".work-card")];
if(loadMore){
  cards.slice(4).forEach(c=>c.style.display="none");
  loadMore.addEventListener("click",()=>{
    cards.forEach(c=>c.style.display="block");
    loadMore.style.display="none";
  });
}
