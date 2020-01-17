

var list_bouton = document.getElementById("ListeMusique")
list_bouton.addEventListener("click", function() {list_func()} )

  function list_func() {
    $("tbody").empty();
    
    fetch("http://jihane.fr/dwmg2/api/music/liste.php")
    .then (
      function(response){
          return response.json()
        }
      )
      .then (
        function (musiques){

          var parent_tbody = document.getElementById('tbody')

        for (i = 0; i < musiques.length; i++) {

          var create_tr = document.createElement("tr")
          var create_td = document.createElement("td")

          create_td.innerHTML = musiques[i].id
          create_tr.setAttribute("id", "id_"+i)
          create_tr.appendChild(create_td, create_tr.firstChild)
          parent_tbody.appendChild(create_tr)
          create_td = document.createElement("td")

          create_td.innerHTML = musiques[i].Titres
          create_tr.appendChild(create_td, create_tr.firstChild)
          parent_tbody.appendChild(create_tr)
          var create_td = document.createElement("td")
          // create_td.innerHTML = musiques[i].Genre
          // create_tr.appendChild(create_td, create_tr.firstChild)
          // parent_tbody.appendChild(create_tr)
          // var create_td = document.createElement("td")
          create_td.innerHTML = musiques[i].Artistes
          create_tr.appendChild(create_td, create_tr.firstChild)
          parent_tbody.appendChild(create_tr)
          var create_td = document.createElement("td")
          // create_td.innerHTML = musiques[i].Dates
          // create_tr.appendChild(create_td, create_tr.firstChild)
          // parent_tbody.appendChild(create_tr)
          // var create_td = document.createElement("td")
          create_td.innerHTML = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="info_func('+musiques[i].id+')">Voir</button>'
          create_tr.appendChild(create_td, create_tr.firstChild)
          parent_tbody.appendChild(create_tr)
          var create_td = document.createElement("td")
        }
      }
      )
  }
  
    function info_func(id) {
      // $("tbody").empty();
      // console.log(id)
      fetch("http://jihane.fr/dwmg2/api/music/read.php?id="+id)
      .then (
        function(response){
            return response.json()
          }
        )
        .then (
          function (musiques){
            document.getElementById("titre2").value = musiques.Titres
            document.getElementById("genre2").value = musiques.Genres
            document.getElementById("artiste2").value = musiques.Artistes
            document.getElementById("date2").value = musiques.Dates
            document.getElementById("temps2").value = musiques.Temps

            
        }
        )
    }

  // var supprimer = $("#supprimer");
  // $(supprimer).on("click", suppr);
  // function suppr() {
  //   $.ajax({
  //     url: "http://jihane.fr/dwmg2/api/voiture/delete.php",
  //     type: "GET",
  //     data: {
  //       id: $("#id").val()
  //     },
  //     success: function(list) {}
  //   });
  //   List();
  // }

  // var update = $("#modifier");
  // $(update).on("click", up);
  // function up() {
  //   $.ajax({
  //     url: "http://jihane.fr/dwmg2/api/voiture/update.php",
  //     type: "GET",
  //     data: {
  //       id: $("#id").val(),
  //       marque: $("#marque").val(),
  //       model: $("#model").val(),
  //       gamme: $("#gamme").val(),
  //       prix: $("#prix").val()
  //     },
  //     success: function(list) {
  //     },
  //     dataType: "json"
  //   });
  //   List();
  // }



  function create_func() {
      fetch("http://jihane.fr/dwmg2/api/music/create.php",
  {
      headers: {
      },
      method: "POST",
      body: "Titres="+titre_test
  })
      .then (
        function(response){
            return response.json()
          }
        )
        .then (
          function (musiques){
            var titre_test = document.getElementById("titre").value = musiques.Titres
            // var genre = document.getElementById("genre").value = musiques.Genres
            // var artiste_test =document.getElementById("artiste").value = musiques.Artistes
            // var date_test = document.getElementById("date").value = musiques.Dates
            // var temps_test = document.getElementById("temps").value = musiques.Temps
        }
        )
  }





  // var creat = $("#creat");
  // $(creat).on("click", crea);
  // function crea() {
  //   $.post({
  //     url: "http://jihane.fr/dwmg2/api/voiture/create.php",
  //     data: {   
  //       id: $("#id2").val(),
  //       marque: $("#marque2").val(),
  //       model: $("#model2").val(),
  //       gamme: $("#gamme2").val(),
  //       prix: $("#prix2").val()
  //     },
  //     success: function(list) {
  //     },
  //     dataType: "json"
  //   });
  //   List();
  // }


  // var tri = $("#tier");
  // $(tri).on("click", trier);
  // function trier() {
  //   $("tbody").empty();

  //   $.get({
  //     url: "http://jihane.fr/dwmg2/api/voiture/trie.php",
  //     data: {   
  //       id: $("#id3").val(),
  //       marque: $("#marque3").val(),
  //       model: $("#model3").val(),
  //       gamme: $("#gamme3").val(),
  //       prix: $("#prix3").val()
  //     },
  //     success: function(list) {
  //       for (i = 0; i < list.length; i++) {
  //         var id = list[i].id;
  //         var marque = list[i].marque;
  //         var model = list[i].model;
  //         var prix = list[i].prix;

  //         var tr = $("<tr></tr>");
  //         $("tbody").append($(tr));

  //         var td = $("<td></td>").text(id);
  //         $(tr).append($(td));

  //         var td = $("<td></td>").text(marque); 
  //         $(tr).append($(td));

  //         var td = $("<td></td>").text(model);
  //         $(tr).append($(td));

  //         var td = $("<td></td>").text(prix);
  //         $(tr).append($(td));

  //         var td = $("<td></td>").html(
  //           '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="formulaire(' +
  //             id +
  //             ')">Voir</button>'
  //         );
  //         $(tr).append($(td));
  //       }
      
  //     },
  //     dataType: "json"
  //   });
  // }

