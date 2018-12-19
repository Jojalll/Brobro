<?php
  if (isset($_POST["page-1-envoyer"])){
  	echo 'on passe dans le if'; 
    setcookie("age", $_POST['age'], time() + 3600);
  setcookie("prenom", $_POST['prenom'], time() + 3600);
  setcookie("nom", $_POST['nom'], time() + 3600);
  }
?>

<html>
<head>
  <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <title></title>
  <script src="ressource/js/contact.js"></script>
</head>
<body>
	<?php
		echo 'Valeur du coockie nom : ' .$_COOKIE['nom'];
	?>

  <style type="text/css">
  #container-formulaire-enquete-page-1{
    background-color: #050f4a45;
    padding: 0;
    margin: 0;
    max-width: 100%;
  }
   #formulaire-enquete{
    width: 100%
   }
   .titre-page{
    width: 100%;
    text-align: center;
        padding: 12px 12px;
   }
   .bg-light{
        background-color: rgb(40, 55, 130) !important;
   }
   .navbar {
    font-family: Times, Times New Roman, serif;
}
.row-page{
      background-color: rgb(222, 183, 111);
          margin: 12px 128px;
}
.row-input-formulaire{
    width: 100%;
    justify-content: center;
    background-color: rgb(40, 55, 130);
    padding: 12px;
    margin: 28px 46px;
}
 label{
      color: rgb(255, 191, 0);
}
.nav-link{
  color: rgb(255, 191, 0) !important;
}
.btn-connexion a {
          display:block;
          padding: 8px 30px;
          font-family: Times, Times New Roman, serif;
          text-decoration: none;
          color: rgb(255, 191, 0);
          background: url(ressource/image/boutonnoir.png) no-repeat;
          border-radius: 7px;
          text-align: center;
          
          
        }
  </style>

  <script type="text/javascript">
    function togglePage(div){
      var nbPage = 1
      $('#row-page-'+div).show(1000);

      while(nbPage <= 5){
        if (nbPage == div){
          nbPage ++;
        }
        else{
          $('#row-page-'+nbPage).hide();
          nbPage ++;
        }
      }
    }
    
  </script>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand nav-link" href="index.html">L'OCCAZ</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
        </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Accueil<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Rechercher par catégorie</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Déposer une annonce</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="enquete.html">Enquête</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="connexion.html">Connexion</a>
            </li>
          </ul>

      </nav> 

  </header>


<!-- Début de la page d'enquete 1 -->
<div class="container" id="container-formulaire-enquete-page-1">
  <div class="row row-formulaire">
   <form id="formulaire-enquete" method="post" action="enquetePage3.php">
      <div class="row row-page" id="page-1">
        <!-- ############################### Début page 2  ############################ -->

    
        <div class="row row-input-formulaire" id="row-page-2" >
          <div class="col-md-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="checkbox1" value="choix 1" id="checkbox1">
              <label class="form-check-label" for="checkbox1">Choix 1</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="checkbox2" value="choix 2" id="checkbox2">
              <label class="form-check-label" for="checkbox2">Choix 2</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="checkbox3" value="choix 3" id="checkbox3">
              <label class="form-check-label" for="checkbox3">Choix 3</label>
            </div>
          </div>
          <input type="submit" name="page-2-envoyer" class="btn-connexion" onclick="javascript:verification()">
      </div>
      <!-- ############################### Fin page 2  ############################ -->
      </div>
    </form>
  </div> 
</div>
<!-- Fin de la page d'enquete 1 -->


<!-- Début footer -->
<footer>
  <div class="col-md-12 bg-light">
      <div class="row">
        <div class="col-md-3 basdepage">
            <p> <a href="#"> A propos de nous </a> </p>
        </div>
        <div class="col-md-3 offset-md-6 basdepage">
            <p> <a href="#"> Revenir en haut </a> </p>
        </div>  
      </div>
  </div>
</footer>
<!-- Fin footer --> 
</body>
</html>
