window.addEventListener("DOMContentLoaded", () => {
  getFilm().catch((e) => {
    console.log("propbleme server vous avez pas get le film " + e.message);
  });
});

const getFilm = async () => {
  const apiFilm = `https://omdbapi.com/?t=${getParamTitreFilm()}&apikey=d821be33`;
  let response = await fetch(apiFilm);
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    let data = await response.json();
    const insererData = document.querySelector("#CaracteFilm");
    const insetrPoster = document.querySelector('#imgFilm');

    const poster = document.createElement("img");
    poster.setAttribute('src',data.Poster);
    insetrPoster.appendChild(poster)

    const TitleH1 = document.createElement("h1");
    TitleH1.innerText = data.Title;
    insererData.appendChild(TitleH1);


    const anneeFilme =  document.createElement("p");
    anneeFilme.innerText = `L'année de sortie : ${data.Year}`;
    insererData.appendChild(anneeFilme);

   
    const genre =  document.createElement("p");
    genre.innerText = `genre : ${data.Genre}`;
    insererData.appendChild(genre);

    const actors =  document.createElement("p");
    actors.innerText = `Actors : ${data.Actors}`;
    insererData.appendChild(actors);

    const resume =  document.createElement("p");
    resume.innerText = `résumé : ${data.Plot}`;
    insererData.appendChild(resume);
  }
};

// pour récupérer le nom de film de le parm de URL
function getParamTitreFilm(titreFime) {
  return new URLSearchParams(window.location.search).get("t");
}

