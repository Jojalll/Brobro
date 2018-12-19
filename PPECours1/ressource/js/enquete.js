function creerCookie(nom,valeur,jour){
                //Si les jours ont bien été définis
                if (jour){
                    //On crée un objet date stockant la date actuelle
                    var date = new Date();
                    /*On définit la date d'expiration du cookie -
                     *Pour cela, on calcule dans combien de millisecondes
                     *le cookie va expirer et on utilise setTime()*/
                    date.setTime(date.getTime()+(jour*24*60*60*1000));
                    //On met la date au "bon" format pour un cookie
                    var exp = '; expires='+date.toGMTString();
                }
                //Si les jours n'ont pas été définis, pas besoin de calcul
                else var exp = '';
                document.cookie = nom+'='+valeur+exp+'; path=/';
            }

            function lireCookie(nom){
                //On récupère le nom du cookie et le signe "="
                var nomEtEgal = nom + '=';
                //Récupère tous les cookies dans un tableau
                var cTableau = document.cookie.split(';');
                //Parcourt le tableau créé
                for(var i=0;i<cTableau.length;i++){
                    //On récupère tous les noms et valeurs des cookies
                    var c = cTableau[i];
                    /*On supprime les espaces potentiels contenus dans c jusqu'à
                     *tomber sur le nom d'un cookie*/
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    /*Maintenant, on cherche le nom correspondant au cookie voulu.
                     *Dès qu'on l'a trouvé, on n'a plus qu'à récupérer la valeur
                     *correspondante qui se situe juste après le nom*/
                    if (c.indexOf(nomEtEgal) == 0) return c.substring(nomEtEgal.length,c.length);
                }
                //Si nous n'avons pas trouvé le nom du cookie, c'est qu'il n'existe pas
                return null;
            }

            function supprimerCookie(nom){
                /*On donne le nom du cookie à supprimer, puis on utilise creerCookie()
                 *pour indiquer une date d'expiration passée pour notre cookie*/
                creerCookie(nom,'',-1);
            }
function UpStar(divId, note){
    switch(note){
        case 1:
            $('#'+divId).removeClass("far fa-star").addClass("fas fa-star");
            break;
        case 2:
            $('#note-1').removeClass("far fa-star").addClass("fas fa-star");
            $('#'+divId).removeClass("far fa-star").addClass("fas fa-star");
            break;
        case 3:
            $('#note-1').removeClass("far fa-star").addClass("fas fa-star");
            $('#note-2').removeClass("far fa-star").addClass("fas fa-star");
            $('#'+divId).removeClass("far fa-star").addClass("fas fa-star");
            break;
        case 4:
            $('#note-1').removeClass("far fa-star").addClass("fas fa-star");
            $('#note-2').removeClass("far fa-star").addClass("fas fa-star");
            $('#note-3').removeClass("far fa-star").addClass("fas fa-star");
            $('#'+divId).removeClass("far fa-star").addClass("fas fa-star");
            break;
        case 5:
            $('#note-1').removeClass("far fa-star").addClass("fas fa-star");
            $('#note-2').removeClass("far fa-star").addClass("fas fa-star");
            $('#note-3').removeClass("far fa-star").addClass("fas fa-star");
            $('#note-4').removeClass("far fa-star").addClass("fas fa-star");
            $('#'+divId).removeClass("far fa-star").addClass("fas fa-star");
            break;
    }

}
function DownStar(divId, note){
        switch(note){
        case 1:
            $('#'+divId).removeClass("fas fa-star").addClass("far fa-star");
            break;
        case 2:
            $('#note-1').removeClass("fas fa-star").addClass("far fa-star");
            $('#'+divId).removeClass("fas fa-star").addClass("far fa-star");
            break;
        case 3:
            $('#note-1').removeClass("fas fa-star").addClass("far fa-star");
            $('#note-2').removeClass("fas fa-star").addClass("far fa-star");
            $('#'+divId).removeClass("fas fa-star").addClass("far fa-star");
            break;
        case 4:
            $('#note-1').removeClass("fas fa-star").addClass("far fa-star");
            $('#note-2').removeClass("fas fa-star").addClass("far fa-star");
            $('#note-3').removeClass("fas fa-star").addClass("far fa-star");
            $('#'+divId).removeClass("fas fa-star").addClass("far fa-star");
            break;
        case 5:
            $('#note-1').removeClass("fas fa-star").addClass("far fa-star");
            $('#note-2').removeClass("fas fa-star").addClass("far fa-star");
            $('#note-3').removeClass("fas fa-star").addClass("far fa-star");
            $('#note-4').removeClass("fas fa-star").addClass("far fa-star");
            $('#'+divId).removeClass("fas fa-star").addClass("far fa-star");
            break;
    }
}

            function RemplireEnquete(div){
                switch(div){
                    case "page-1":
                        creerCookie('nom', $('#inputNom').val(), 7);
                        creerCookie('prenom', $('#inputPrenom').val(), 7);
                        creerCookie('age', $('input[name=radioAge]:checked').val(), 7);


                        var affiche = document.getElementById('cook');
                        affiche.innerHTML = 'Nom : ' + lireCookie('nom')+'<br> Prenom : '+lireCookie('prenom')+'<br> Age : '+lireCookie('age');

                        window.location.href = "http://localhost/dees/Brocante/PPECours1/enquete/enquetePage2.html";

                        break;

                    case "page-2":
                        creerCookie('choix1', $('input[name=checkbox1]:checked').val(), 7);
                        creerCookie('choix2', $('input[name=checkbox2]:checked').val(), 7);
                        creerCookie('choix3', $('input[name=checkbox3]:checked').val(), 7);

                        var affiche = document.getElementById('cook');
                        affiche.innerHTML = 'Nom : ' + lireCookie('nom')+'<br> Prenom : '+lireCookie('prenom')+'<br> Age : '+lireCookie('age')+'<br> Choix 1 : ' + lireCookie('choix1')+'<br> Choix 2 : '+lireCookie('choix2')+'<br> Choix 3 : '+lireCookie('choix3');

                        window.location.href = "http://localhost/dees/Brocante/PPECours1/enquete/enquetePage3.html";
                        break;

                    case "page-3":
                        creerCookie('radioChoix', $('input[name=radioChoix]:checked').val(), 7);

                        var affiche = document.getElementById('cook');
                        affiche.innerHTML = 'Nom : ' + lireCookie('nom')+'<br> Prenom : '+lireCookie('prenom')+'<br> Age : '+lireCookie('age')+'<br> Choix 1 : ' + lireCookie('choix1')+'<br> Choix 2 : '+lireCookie('choix2')+'<br> Choix 3 : '+lireCookie('choix3')+'<br> Radio choix : '+lireCookie('radioChoix');

                        window.location.href = "http://localhost/dees/Brocante/PPECours1/enquete/enquetePage4.html";
                        break;
                    case "page-4":
                        creerCookie('testArea', $('#textAreaCommentaire').val(), 7);

                        var affiche = document.getElementById('cook');
                        affiche.innerHTML = 'Nom : ' + lireCookie('nom')+'<br> Prenom : '+lireCookie('prenom')+'<br> Age : '+lireCookie('age')+'<br> Choix 1 : ' + lireCookie('choix1')+'<br> Choix 2 : '+lireCookie('choix2')+'<br> Choix 3 : '+lireCookie('choix3')+'<br> Radio choix : '+lireCookie('radioChoix')+'<br> Commentaire : '+lireCookie('testArea');

                        window.location.href = "http://localhost/dees/Brocante/PPECours1/enquete/enquetePage5.html";
                        break;
                    case "page-5":
                        creerCookie('radioNote', $('input[name=radioNote]:checked').val(), 7);

                        var affiche = document.getElementById('cook');
                        affiche.innerHTML = 'Nom : ' + lireCookie('nom')+'<br> Prenom : '+lireCookie('prenom')+'<br> Age : '+lireCookie('age')+'<br> Choix 1 : ' + lireCookie('choix1')+'<br> Choix 2 : '+lireCookie('choix2')+'<br> Choix 3 : '+lireCookie('choix3')+'<br> Radio choix : '+lireCookie('radioChoix')+'<br> Commentaire : '+lireCookie('testArea')+'<br> Note : '+lireCookie('radioNote');

                        window.location.href = "http://localhost/dees/Brocante/PPECours1/enquete/resultatEnquete.html";
                        break;
                }

            }


            function setNote(note, div){
                $('#inputNote').val(note);
                UpStar(div, note);
                creerCookie('radioNote', $('#inputNote').val(), 7);
                AfficheNote();

            }
            function AfficheNote(){

                        var affiche = document.getElementById('cook');
                        affiche.innerHTML = 'Nom : ' + lireCookie('nom')+'<br> Prenom : '+lireCookie('prenom')+'<br> Age : '+lireCookie('age')+'<br> Choix 1 : ' + lireCookie('choix1')+'<br> Choix 2 : '+lireCookie('choix2')+'<br> Choix 3 : '+lireCookie('choix3')+'<br> Radio choix : '+lireCookie('radioChoix')+'<br> Commentaire : '+lireCookie('testArea')+'<br> Note : '+lireCookie('radioNote');

                        window.location.href = "http://localhost/dees/Brocante/PPECours1/enquete/resultatEnquete.html";
            }
             var affiche = document.getElementById('cook');
                        affiche.innerHTML = 'Nom : ' + lireCookie('nom')+'<br> Prenom : '+lireCookie('prenom')+'<br> Age : '+lireCookie('age')+'<br> Choix 1 : ' + lireCookie('choix1')+'<br> Choix 2 : '+lireCookie('choix2')+'<br> Choix 3 : '+lireCookie('choix3')+'<br> Radio choix : '+lireCookie('radioChoix')+'<br> Commentaire : '+lireCookie('testArea')+'<br> Note : '+lireCookie('radioNote');            
            
