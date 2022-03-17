window.addEventListener("DOMContentLoaded", () => {
  if (getParamTitreFilm() == null) {
    // injecter l'image et text 404 s'il y a un problème de récupération des données
    injecteDataDefilm("img", "", '/src/assets/images/err404.gif', "#imgFilm");
    injecteDataDefilm("h1", "",  "Désole, On ne peut pas traiter votre demande choisissez un autre film.", "#CaracteFilm");
  }else{
    getFilm().catch((e) => {
      console.log("propbleme server vous avez pas get le film " + e.message);
    });
  }
});

const getFilm = async () => {
  const apiFilm = `https://omdbapi.com/?t=${getParamTitreFilm()}&apikey=d821be33`;
  const response = await fetch(apiFilm);
  if (!response.ok ) {
    throw new Error(response.status);
  } else {
    const data = await response.json();
    injecteDataDefilm("img", "", data.Poster, "#imgFilm");
    injecteDataDefilm("h1", "", data.Title, "#CaracteFilm");
    injecteDataDefilm("p", `L'année de sortie : `, data.Year, "#CaracteFilm");
    injecteDataDefilm("p", `genre : `, data.Genre, "#CaracteFilm");
    injecteDataDefilm("p", `Actors : `, data.Actors, "#CaracteFilm");
    injecteDataDefilm("p", `résumé : `, data.Plot, "#CaracteFilm");
  }
};

// pour récupérer le nom de film de le parm de URL
function getParamTitreFilm() {
const getParamTitre = new URLSearchParams(window.location.search).get("t");
  if (getParamTitre == null) {
    return null;
  }
  return getParamTitre;
}

// Pour injecter les donnes vias de l'api dans le html
function injecteDataDefilm(tgeHtml, titreDeDonnees, donnees, positionInPage) {
  const insererData = document.querySelector(positionInPage);
  const HtmlTag = document.createElement(tgeHtml);
  HtmlTag.setAttribute("src", donnees);
  HtmlTag.innerText = ` ${titreDeDonnees}  ${donnees}`;
  insererData.appendChild(HtmlTag);
}
