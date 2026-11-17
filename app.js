(() => {
const buttons=[...document.querySelectorAll("[data-publish]")];
const toastEl=document.querySelector("#toast");
let toastTimer;
function toast(message){toastEl.textContent=message;toastEl.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.remove("show"),1500)}
function setState(button,state){
 button.dataset.state=state;
 button.classList.toggle("is-loading",state==="loading");
 button.classList.toggle("is-done",state==="done");
 const label=button.querySelector(".btn-label");
 label.textContent=state==="loading"?"Loading":state==="done"?"Done":"Publish";
 button.setAttribute("aria-label",state==="loading"?"Publishing":state==="done"?"Published. Click to replay":"Publish");
 button.disabled=state==="loading";
}
function publish(button){
 if(button.dataset.state==="loading")return;
 if(button.dataset.state==="done")setState(button,"idle");
 setState(button,"loading");
 toast("Publishing…");
 const duration=1450;
 window.setTimeout(()=>{
  setState(button,"done");
  toast("Published successfully");
 },duration);
}
buttons.forEach(button=>{
 button.dataset.state="idle";
 button.addEventListener("click",()=>publish(button));
 button.addEventListener("keydown",event=>{
  if(event.key==="Enter"||event.key===" "){event.preventDefault();publish(button)}
 });
});
})();