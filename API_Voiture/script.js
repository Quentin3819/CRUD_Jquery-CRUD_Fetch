var liste_button = $("#ListeVoiture");
$(liste_button).on("click", List);

  function List() {
    $("tbody").empty();
    $.ajax({
      url: "http://jihane.fr/dwmg2/api/voiture/liste.php",
      type: "GET",
      success: function(list) {
        for (i = 0; i < list.length; i++) {
          var id = list[i].id;
          var marque = list[i].marque;
          var model = list[i].model;
          var prix = list[i].prix;

          var tr = $("<tr></tr>");
          $("tbody").append($(tr));

          var td = $("<td></td>").text(id);
          $(tr).append($(td));

          var td = $("<td></td>").text(marque);
          $(tr).append($(td));

          var td = $("<td></td>").text(model);
          $(tr).append($(td));

          var td = $("<td></td>").text(prix);
          $(tr).append($(td));

          var td = $("<td></td>").html(
            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="formulaire(' +
              id +
              ')">Voir</button>'
          );
          $(tr).append($(td));
        }
      },
      dataType: "json"
    });
  }

  function formulaire(id) {
    $.ajax({
      url: "http://jihane.fr/dwmg2/api/voiture/read.php",
      type: "GET",
      data: {
        id: id
      },
      success: function(list) {
        $("#id").val(list[4]);
        $("#marque").val(list[0]);
        $("#model").val(list[1]);
        $("#gamme").val(list[2]);
        $("#prix").val(list[3]);
      },
      dataType: "json"
    });
  }

  var supprimer = $("#supprimer");
  $(supprimer).on("click", suppr);
  function suppr() {
    $.ajax({
      url: "http://jihane.fr/dwmg2/api/voiture/delete.php",
      type: "GET",
      data: {
        id: $("#id").val()
      },
      success: function(list) {}
    });
    List();
  }

  var update = $("#modifier");
  $(update).on("click", up);
  function up() {
    $.ajax({
      url: "http://jihane.fr/dwmg2/api/voiture/update.php",
      type: "GET",
      data: {
        id: $("#id").val(),
        marque: $("#marque").val(),
        model: $("#model").val(),
        gamme: $("#gamme").val(),
        prix: $("#prix").val()
      },
      success: function(list) {
      },
      dataType: "json"
    });
    List();
  }

  var creat = $("#creat");
  $(creat).on("click", crea);
  function crea() {
    $.post({
      url: "http://jihane.fr/dwmg2/api/voiture/create.php",
      data: {   
        id: $("#id2").val(),
        marque: $("#marque2").val(),
        model: $("#model2").val(),
        gamme: $("#gamme2").val(),
        prix: $("#prix2").val()
      },
      success: function(list) {
      },
      dataType: "json"
    });
    List();
  }


  var tri = $("#tier");
  $(tri).on("click", trier);
  function trier() {
    $("tbody").empty();

    $.get({
      url: "http://jihane.fr/dwmg2/api/voiture/trie.php",
      data: {   
        id: $("#id3").val(),
        marque: $("#marque3").val(),
        model: $("#model3").val(),
        gamme: $("#gamme3").val(),
        prix: $("#prix3").val()
      },
      success: function(list) {
        for (i = 0; i < list.length; i++) {
          var id = list[i].id;
          var marque = list[i].marque;
          var model = list[i].model;
          var prix = list[i].prix;

          var tr = $("<tr></tr>");
          $("tbody").append($(tr));

          var td = $("<td></td>").text(id);
          $(tr).append($(td));

          var td = $("<td></td>").text(marque); 
          $(tr).append($(td));

          var td = $("<td></td>").text(model);
          $(tr).append($(td));

          var td = $("<td></td>").text(prix);
          $(tr).append($(td));

          var td = $("<td></td>").html(
            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="formulaire(' +
              id +
              ')">Voir</button>'
          );
          $(tr).append($(td));
        }
      
      },
      dataType: "json"
    });
  }

