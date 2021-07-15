(()=>{"use strict";var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{k:()=>H,d:()=>S});const e=()=>{let t=new Date,e=t.getDate(),n=t.getMonth()+1;const s=t.getFullYear();return e<10&&(e=`0${e}`),n<10&&(n=`0${n}`),t=`${s}-${n}-${e}`,t},n=t=>"1"===t?'<i class="fa fa-flag text-danger"></i>':"2"===t?'<i class="fa fa-flag text-warning"></i>':"3"===t?'<i class="fa fa-flag text-info"></i>':"4"===t?'<i class="fa fa-flag text-success"></i>':void 0,s=t=>t?"Finished":"Pending",a=document.getElementById("projectsContainer");function i(t,e){this.name=t,this.description=e}const l=t=>{for(let e=0;e<H.length;e+=1)if(H[e].name===t)return!0;return!1},o=t=>{const e=document.createElement("article");e.className="mt-3";const n=document.createElement("h3");n.className="text-center";const s=document.createTextNode(t.name);if(n.appendChild(s),e.appendChild(n),0!==t.description){const n=document.createElement("p");n.className="description text-center fst-italic";const s=document.createTextNode(t.description);n.appendChild(s),e.appendChild(n)}const i=document.createElement("button");i.className="delProjectBtn btn btn-light border-0 bg-secondary",i.innerHTML='<i class="delProjectBtn fa fa-times text-dark"></i>';const l=document.createElement("button");l.className="editProjectBtn btn btn-light border-0 bg-secondary",l.setAttribute("data-bs-toggle","modal"),l.setAttribute("data-bs-target","#exampleModal1"),l.innerHTML='<i class="editProjectBtn fa fa-align-right text-dark"></i>';const o=document.createElement("button");o.className="seeBtn btn btn-light border-0 bg-secondary",o.innerHTML='<i class="seeBtn fa fa-chevron-right text-dark">';const c=document.createElement("div");c.className="d-flex me-5 justify-content-around",c.appendChild(i),c.appendChild(l),c.appendChild(o),e.appendChild(c),a.appendChild(e)},c=()=>{if(0===H.length){const t=new i("My important project","My important project's description");o(t)}else H.forEach((t=>o(t)))};function r(t,e,n,s,a){this.title=t,this.projectsN=e,this.comment=n,this.priority=s,this.deadline=a,this.finished=!1}const d=document.querySelector("html"),m=document.getElementById("first"),p=document.getElementById("taskForm"),u=document.getElementById("editTaskForm"),f=document.getElementById("tableArticle"),h=document.getElementById("todayContainer"),y=document.getElementById("modalDiv");let b=!1;const g=t=>{const e=document.createElement("table");e.setAttribute("id","tasksTable"),e.classList="table",f.appendChild(e),e.innerHTML="\n  <thead class=\"table-dark\">\n          <tr>\n            <th class='col-1 ps-3'></th>\n            <th class='col-3 ps-3'>Title</th>\n            <th class='col-2'>Priority</th>\n            <th class='col-2'>Status</th>\n            <th class='col-2'>Details</th>\n            <th class='col-1'>Edit</th>\n            <th class='col-1 ps-3'>Delete</th>\n          </tr>\n        </thead>";const a=document.createElement("tbody");a.setAttribute("id","taskBody"),a.className="ps-5",f.appendChild(a),t.forEach((t=>{const e=S.indexOf(t);var i;a.innerHTML+=`\n          <tr class="my-2 p-4">\n            <th scope="row" class='col-1 text-light'>${e}</th>\n            <td class='col-3'>${t.title}</td>\n            <td class='col-2 ps-4'>${n(t.priority)}</td>\n            <td class='col-2 ps-3'><button type='button' class="statusBTN btn p-0 btn-light">${i=t.finished,i?'<i class="fa fa-check  text-dark statusBTN"></i>':'<i class="fa fa-spinner text-dark statusBTN"></i>'}</button></td>\n            <td class='col-2 ps-3'><button type='button' class="btn p-0 btn-light" data-bs-toggle="modal" data-bs-target="#Modal${e}">\n              Details</button><td>\n            <td class='col-1 ps-3'><button type='button' class='editTaskBtn btn p-0 btn-light'><i class="fa fa-wrench text-dark editTaskBtn"></i></button></td>\n            <td class='col-1 ps-3'><button type='button' class='deleteTaskBtn btn p-0 btn-light'><i class="fa fa-trash text-dark deleteTaskBtn"></i></button></td>\n\n          </tr>`,y.innerHTML+=`\n<div class="modal fade" id="Modal${e}" tabindex="-1" aria-labelledby="${e}Label" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title fw-bold " id="${e}Label">${t.title}</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <p class="modalComment">Comment: ${t.comment} </p>\n        <p class="modalPrjct">Project: ${t.projectsN} </p>\n        <p>Priority: ${n(t.priority)}</p>\n        <p>Status: ${s(t.finished)} </p>\n        <p>Deadline: ${t.deadline} </p>\n      </div>\n    </div>\n  </div>\n</div>`}))},v=(t,e)=>{if(b)m.innerHTML="",f.innerHTML="",b=!1;else{const n=document.createElement("div");n.className="p-3",n.innerHTML=`\n  <h2 class='prjct text-center mt-5'>Project: ${t}</h2>\n  <div class=" d-flex justify-content-center plus">\n    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Tasks</h4>\n    <button type="button" class="pb-2 text-dark btn btn-light plus">\n      <i class="fa fa-plus plus"></i>\n    </button>\n  </div>`,m.appendChild(n),g(e),b=!0}},x=(t,e)=>{m.innerHTML="",p.innerHTML="",f.innerHTML="";const n=document.createElement("div");n.className="p-3",n.innerHTML=`\n  <h2 class='prjct text-center'>Project: ${t}</h2>\n  <div class=" d-flex justify-content-center plus">\n    <h4 class="taskHeadline mt-1 me-5 mt-3 text-center">Tasks</h4>\n    <button type="button" class=" pb-2 text-dark btn btn-light plus">\n      <i class="fa fa-plus plus"></i>\n    </button>\n  </div>`,m.appendChild(n),g(e),b=!0},k=()=>{p.innerHTML=""},T=()=>{u.innerHTML=""},j=()=>{h.innerHTML="",S.filter((t=>t.deadline===e()&&!1===t.finished)).forEach((t=>{h.innerHTML+=`\n  <div class="card mx-auto mt-3 bg-light">\n            <div class="card-body bg-light">\n              <h5 class="card-title">${t.title}</h5>\n              <p class="card-text">${t.comment}</p>\n            </div>\n            <ul class="list-group  bg-light list-group-flush">\n              <li class="list-group-item bg-light">Project: ${t.projectsN}</li>\n              <li class="list-group-item bg-light">Priority: ${n(t.priority)}</li>\n              <li class="list-group-item bg-light">Status: ${s(t.finished)}</li>\n              <li class="list-group-item bg-light">Deadline: ${t.deadline}</li>\n            </ul>\n\n          </div>`}))},E=document.getElementById("addForm"),L=document.getElementById("nameInput"),P=document.getElementById("descriptionInput"),B=document.getElementById("first"),M=document.getElementById("projectsContainer"),N=document.getElementById("tableArticle"),$=document.getElementById("editForm"),C=document.getElementById("editTaskForm"),I=[{title:"My important project's very important task",projectsN:"My important project",comment:"No comment",priority:"1",deadline:"2021-07-15",finished:!1},{title:"My important project's important task",projectsN:"My important project",comment:"",priority:"2",deadline:"2021-07-14",finished:!1},{title:"My important project's less important task",projectsN:"My important project",comment:"",priority:"3",deadline:"2021-07-24",finished:!1},{title:"My important project's least important task",projectsN:"My important project",comment:"",priority:"4",deadline:"2021-07-31",finished:!1}];let H=[];function w(){window.localStorage.setItem("myProjects",JSON.stringify(H))}null!==localStorage.getItem("myProjects")&&(H=JSON.parse(window.localStorage.getItem("myProjects")));let D="",S=[];function A(){window.localStorage.setItem("myTasks",JSON.stringify(S))}null!==localStorage.getItem("myTasks")&&(S=JSON.parse(window.localStorage.getItem("myTasks"))),document.addEventListener("DOMContentLoaded",c(),j()),E.addEventListener("submit",(t=>{t.preventDefault();const e=E[0].value,n=E[1].value;let s=!0;if(e||(alert("Project's name can't be empty"),s=!1),l(e)&&(alert("Project with same name already exists"),s=!1),!s)return!1;const a=new i(e,n);H.push(a),w(),M.innerHTML="",c(),E.reset()})),document.getElementById("projectsContainer").addEventListener("click",(t=>{t.preventDefault();const e=t.target;D=e.closest("article").firstElementChild.textContent;const n=S.filter((t=>t.projectsN===D));if(e.classList.contains("delProjectBtn")&&(alert("No kidding?!"),e.closest("article").remove(),alert("Project deleted"),((t,e)=>{let n=[];for(let s=0;s<t.length;s+=1)t[s].name===e&&(n=t.splice(s,1))})(H,D),(t=>{const e=S.filter((e=>e.projectsN!==t));S=e,m.innerHTML="",f.innerHTML="",h.innerHTML=""})(D),w(),A(),j()),e.classList.contains("editProjectBtn")){const t=H.find((t=>t.name===D));L.value=t.name,P.value=t.description,$.addEventListener("submit",(e=>{e.preventDefault();const n=new i($[0].value,$[1].value);let s=!0;if(n.name||(alert("Project's name can't be empty"),s=!1),n.name===t.name&&n.description===t.description)return alert("You haven't change anything"),void(s=!1);const a=n.name;var o,c;l(a)&&n.name!==t.name&&(alert("Project with same name already exists"),s=!1),s&&(o=t.name,c=n.name,S.forEach((t=>{t.projectsN===o&&(t.projectsN=c)})),A(),t.name=n.name,t.description=n.description,w(),alert("Project is edited"),location.reload())}))}e.classList.contains("seeBtn")&&(0===H.length?v("My important project",I):v(D,n))})),B.addEventListener("click",(t=>{t.preventDefault(),t.target.classList.contains("plus")&&(p.innerHTML="\n    <input type='text' class='y my-2' name='taskName' id='task-name' placeholder='Add title here'>\n    <textarea  id='comment' class='y my-2' rows='3' maxlength='150' placeholder='Add comment here'></textarea>\n    <select class='y form-select me-4' id='selectPriority' aria-label='Default select example'>\n            <option class='y' selected value='1'>Select priority level</option>\n            <option class='y one' value='1'>&#xf024; Priority 1</option>\n            <option class='y two' value='2'>&#xf024; Priority 2</option>\n            <option class='y three' value='3'>&#xf024; Priority 3</option>\n            <option class='y four' value='4'>&#xf024; Priority 4</option>\n    </select>\n    <input class='y' type=\"date\" max='2110-13-13' id='datePicker'>\n    <button type='button' class='y confirmTask btn btn-secondary' id='confirmTask'>Create task</button>\n    <button type='button' class='y dismissTask btn btn-light m-3' id='dismissTask'>Dismiss</button>\n  ",document.getElementById("datePicker").setAttribute("min",e()),d.addEventListener("click",(t=>{t.target.classList.contains("y")||t.target.classList.contains("plus")||k()})))}));const O=document.getElementById("taskForm");O.addEventListener("click",(t=>{t.preventDefault();const n=t.target;if(n.classList.contains("dismissTask"))k();else if(n.classList.contains("confirmTask")){const t=O[0].value,n=O[1].value,s=O[2].value;let a=O[3].value,i=!0;if(!t)return alert("Title must not be empty"),void(i=!1);if(!1===i)return!1;a||(a=e());const l=new r(t,D,n,s,a);S.push(l),A();const o=S.filter((t=>t.projectsN===D));x(D,o),j(),O.reset()}})),N.addEventListener("click",(t=>{t.preventDefault();const s=t.target,a=parseInt(s.closest("tr").firstElementChild.textContent);s.classList.contains("deleteTaskBtn")&&(alert("Are you sure?"),s.closest("tr").remove(),S.splice(a,1),alert("Task deleted")),A();const i=S.filter((t=>t.projectsN===D));if(x(D,i),j(),s.classList.contains("statusBTN")){(t=>{S[t].finished?S[t].finished=!1:S[t].finished=!0})(a),A();const t=S.filter((t=>t.projectsN===D));x(D,t),j()}if(s.classList.contains("editTaskBtn")){const t=parseInt(s.closest("tr").firstElementChild.textContent);console.log("index",t);const a=S[t];console.log(a),l=a,u.innerHTML=`\n      <input type='text' class=' my-2 x' name='EdiTaskName' id='edit-task-name' value='${l.title}'>\n      <textarea  id='editComment' class='my-2 x' rows='3' maxlength='150'> ${l.comment}</textarea>\n      <select class='form-select me-4 x' id='selectPriority1' aria-label='Default select example'>\n              <option class='x' selected value='1'>Priority ${n(l.priority)}</option>\n              <option class='x one' value='1'>&#xf024; Priority 1</option>\n              <option class='x two' value='2'>&#xf024; Priority 2</option>\n              <option class='x three' value='3'>&#xf024; Priority 3</option>\n              <option class='x four' value='4'>&#xf024; Priority 4</option>\n      </select>\n      <input type="date" class='x' max='2110-13-13' id='datePicker1' value='${l.date}'>\n      <button type='submit' class='x confirmEditTask btn btn-secondary' id='confirmEditTask'>Edit task</button>\n      <button type='button' class='x dismissEditTask btn btn-light m-3' id='dismissEditTask'>Dismiss</button>\n    `,document.getElementById("datePicker1").setAttribute("min",e()),d.addEventListener("click",(t=>{t.target.classList.contains("x")||t.target.classList.contains("editTaskBtn")||T()})),C.addEventListener("click",(n=>{n.preventDefault();const s=n.target;if(s.classList.contains("dismissEditTask")&&T(),s.classList.contains("confirmEditTask")){console.log("second index",t);const n=C[0].value,s=C[1].value,i=C[2].value;let l=C[3].value;T(),console.log(n);let o=!0;if(!n)return alert("Title must not be empty"),void(o=!1);if(!1===o)return!1;l||(l=e()),console.log("second",t,a),a.title=n,a.projectsN=D,a.comment=s,a.priority=i,a.deadline=l,console.log(a,"final"),A(),alert("Task edited"),location.reload()}}))}var l}))})();