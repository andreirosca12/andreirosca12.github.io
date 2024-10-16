let projects;
let cards2=document.querySelector(".cards2");
fetch("https://andreirosca12.github.io/myprojects.json")
    .then(r=>r.json())
    .then(json=>{
        console.log(json);
        projects=json;
        projects.forEach(project=> {
            cards2.innerHTML+=`
                        <div class="card2">
                            <img src="${project.url}" alt="">
                            <h3>${project.titlu}</h3>
                            <p>${project.descriere}</p>
                            <div class="buttons">
                                <a class="b1" href="${project.source}">Github</a>
                                <a class="b2" href="${project.demo}">Demo</a>
                            </div>
                        </div>   
            `;
        });
    })