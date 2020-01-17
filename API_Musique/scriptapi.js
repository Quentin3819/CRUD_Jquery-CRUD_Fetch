var bouton = document.getElementById("list")
bouton.addEventListener("click", function() {list()} )
var visible = document.getElementById("infos");
var nextlink = " "
var previouslink = " "

function list(){

    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            nextlink = data.next
            previouslink = data.previous

            var parent =  document.getElementById('liste')
            parent.innerText = ""
            
            for (let i = 0; i <= 19; i++) {
            var div = document.createElement("div")
            var div2 = document.createElement("div")
            var text = document.createElement("p")

            text.innerHTML = data.results[i].name
            div.appendChild(text, div.firstChild)
            parent.appendChild(div)
            div.appendChild(div2)
            div.setAttribute("class", "divlist")
            var infof = document.createElement("p");
            infof.innerHTML= "voir les stats";
            infof.addEventListener("click", function(){infopoke(data.results[i].name)})
            div2.appendChild(infof);
            }
    }
    )
}
function infopoke(name){
    visible.className= "vue"
    visible.className = "visible"
    fetch ('https://pokeapi.co/api/v2/pokemon/' + name)
        .then (
            function(response){
                return response.json()
            }
        )
        .then (
            function(data){
                var parent = document.getElementById("infos");
                parent.innerHTML= "";

                var idt = document.createElement("h3");
                idt.innerHTML= "Id";
                
                parent.appendChild(idt);
                var id = document.createElement("p");
                id.innerHTML= data.id;
                
                parent.appendChild(id);
                var nomt = document.createElement("h3");
                nomt.innerHTML= "Nom";
                
                parent.appendChild(nomt);
                var nom = document.createElement("p");
                nom.innerHTML= data.name;
                
                parent.appendChild(nom);
                var hauteurt = document.createElement("h3");
                hauteurt.innerHTML= "Hauteur";
                
                parent.appendChild(hauteurt);
                var hauteur = document.createElement("p");
                hauteur.innerHTML= data.height;
                
                parent.appendChild(hauteur);
                var imaget = document.createElement("h3");
                imaget.innerHTML= "Image";
                
                parent.appendChild(imaget);
                var image = document.createElement("img");
                image.setAttribute("src", data.sprites.front_default);
                
                parent.appendChild(image);
            }
        )
}

var suiv = document.getElementById("suivant")
suiv.addEventListener("click", function() {suivant()} )

function suivant(){
    visible.className = "invisible"
    fetch(nextlink)
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            nextlink = data.next
            previouslink = data.previous

            var parent =  document.getElementById('liste')
            parent.innerText = ""
            
            for (let i = 0; i <= 19; i++) {
            var div = document.createElement("div")
            var div2 = document.createElement("div")
            var text = document.createElement("p")

            text.innerHTML = data.results[i].name
            div.appendChild(text, div.firstChild)
            parent.appendChild(div)
            div.appendChild(div2)
            div.setAttribute("class", "divlist")
            var infof = document.createElement("p");
            infof.innerHTML= "voir les stats";
            infof.addEventListener("click", function(){infopoke(data.results[i].name)})
            div2.appendChild(infof);
            }
    }
    )
}

var prece = document.getElementById("precedent")
prece.addEventListener("click", function() {precedent()} )

function precedent(){
    visible.className = "invisible"
    fetch(previouslink)
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            nextlink = data.next
            previouslink = data.previous

            var parent =  document.getElementById('liste')
            parent.innerText = ""
            
            for (let i = 0; i <= 19; i++) {
            var div = document.createElement("div")
            var div2 = document.createElement("div")
            var text = document.createElement("p")

            text.innerHTML = data.results[i].name
            div.appendChild(text, div.firstChild)
            parent.appendChild(div)
            div.appendChild(div2)
            div.setAttribute("class", "divlist")
            var infof = document.createElement("p");
            infof.innerHTML= "voir les stats";
            infof.addEventListener("click", function(){infopoke(data.results[i].name)})
            div2.appendChild(infof);
            }
    }
    )
}