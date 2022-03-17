//pour etre sur que tous les elemnets de la page bien telecharger
const lengthMax = 40;
const inseteErr = document.querySelector(".form-input");
let condtionErrEmail;
// pour insérer dedans les inputs de from
const persone = {
  nom: "",
  prenom: "",
  email: "",
  dateDeNaissance: "",
  address: {
    nomRue: "",
    numeroRue: "",
    cp: "",
    ville: "",
  },
};

window.addEventListener("DOMContentLoaded", () => {
  main();
});

function main() {
  const btnSubmit = document.querySelector("#btnSubmit");
  // on cliqe on test les input de la from et on les recuperer
  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
     getNom();
    getPrenom();
     getDate();
     getmEmail();
    getNomRue();
    getNumeroRue();
    getCp();
    getVille();
  });
}

// get le nom apers le tester
const getNom = () => {
  const nom = document.querySelector("#nom");
  if (
    !(nom.value.charAt(0).toUpperCase() == nom.value.charAt(0)) ||
    !(lengthMax > nom.value.length) ||
    !nom.value.trim()
  ) {
    const element = document.querySelector(`#nomErr span`);
    if(element == null){
      injecteMsgErrHtml(
        "le nom doit etre de 2 caractères minimum et 40 maximum",
        nom,
        "#nomErr"
      );
      return false;
    }
  } else {
    persone.nom = nom.value;
    return true;
  }
};

// get le nom apers le tester
const getPrenom = () => {
  const prenom = document.querySelector("#prenom");
  if (
    !(prenom.value.length > 2) ||
    !(lengthMax > prenom.value.length) ||
    !prenom.value.trim()
  ) {
    const element = document.querySelector(`#prenomErr span`);
    if(element == null){
      injecteMsgErrHtml(
        "le prenom doit etre de 2 caractères minimum et 40 maximum",
        prenom,
        "#prenomErr"
      );
      return false;
    }
  } else {
    prenom.setCustomValidity("");
    persone.prenom = prenom.value;
    return true;
  }
};

// get le nom apers le tester

function getDate() {
  const dateDeNaissance = document.querySelector("#date_de_naissance");
  const dateDeNaissanceFromat = new Date(dateDeNaissance.value);
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
  if (dateDeNaissanceFromat <= date18YrsAgo) {
    persone.dateDeNaissance = dateDeNaissanceFromat.toString();
    return true;
  } else {
    const element = document.querySelector(`#dateErr span`);
    if(element == null){
      injecteMsgErrHtml(
        "vous devez être majeur au jour de linscription",
        dateDeNaissance,
        "#dateErr"
      );
      return false;
    }
    return false;
  }
}

// get le nom apers le tester

const getmEmail = () => {
  const email = document.querySelector("#email");
  const emailCon = document.querySelector("#emailCon");
  const fromBorderErr = document.querySelector("#borderErrEmail");
  const element = document.querySelector(`#borderErrEmail span`);
  let msgErrEmail = "";
  if (email.value !== emailCon.value) {
    msgErrEmail = " vous deovez ecreir la  meme e-mail ";
    if(element == null){
      injecteMsgErrHtml(msgErrEmail, fromBorderErr, "#email", true);
    }
    return false;
  }else if (regExEmail(email.value)) {
    persone.email = email.value;
    condtionErrEmail = false;
    return true;
  } else {
    msgErrEmail = " Vous devez écrire un bon format d'email comme ee@ee.eee ";
    if(element == null){
      injecteMsgErrHtml(msgErrEmail, fromBorderErr, "#email", true);
    }
    return false;
  }
  
};

// regex test s'il ya un point et @ dans le e-email
const regExEmail = (email) => {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
};

// functions de l'address pour ne pas etre vide our null
const getNomRue = () => {
  
  const nomRue = document.querySelector("#nomRue");
  if (nomRue.value == null || !nomRue.value.trim()) {
    const element = document.querySelector(`#nomRueErr span`);
    if(element == null){
      injecteMsgErrHtml(
        "Ce champ est obligatoire, vous devez le remplir.",
        nomRue,
        "#nomRueErr"
      );  
      return false;
    }
    
    return false;
  } else {
    persone.address.nomRue = nomRue.value;
    return true;
  }
};

const getNumeroRue = () => {
  const numeroRue = document.querySelector("#numeroRue");
  if (numeroRue.value == null || !numeroRue.value.trim()) {
    const element = document.querySelector(`#numeroRue span`);
    if(element == null){
      injecteMsgErrHtml(
        "Ce champ est obligatoire, vous devez le remplir.",
        numeroRue,
        "#numeroRue"
      );
      return false;
    }
  } else {
    persone.address.numeroRue = numeroRue.value;
    return true;
  }
};

const getCp = () => {
  const cp = document.querySelector("#cp");
  if (cp.value == null || !cp.value.trim()) {
    const element = document.querySelector(`#cpErr span`);
    if(element == null){
      injecteMsgErrHtml(
        "Ce champ est obligatoire, vous devez le remplir.",
        cp,
        "#cpErr"
      );
      return false;
    }
  } else {
    persone.address.cp = cp.value;
    return true;
  }
};

const getVille = () => {
  const ville = document.querySelector("#ville");
  if (ville.value == null || !ville.value.trim()) {
    const element = document.querySelector(`#villeErr span`);
    if(element == null){
      const villeErr = document.querySelector("#villeErr");
      injecteMsgErrHtml(
        "Ce champ est obligatoire, vous devez le remplir.",
        ville,
        "#villeErr"
      );
      return false;
    }
  } else {
    persone.address.ville = ville.value;
    return true;
  }
};

//supprimer msg de err lorsque on focus sur l'input
function supprimeMsgErr(inputTag, sepanErrElmenet) {
   inputTag.addEventListener("focus", (event) => {
    inputTag.classList.remove("fromBorderErr");
    sepanErrElmenet.remove();
  });
}

//Pour injecter les mssages dans le html
function injecteMsgErrHtml(msgErr, inputTag, inputErrPosition, isEmail) {
  const inputErr = document.querySelector(inputErrPosition);
  const spanErr = document.createElement("span");
  spanErr.innerText = msgErr;
  inputErr.appendChild(spanErr);
  inputTag.className += " fromBorderErr";
  if (isEmail) {
    inputTag.appendChild(spanErr);
    inputTag.className += " margBoxEmail";
    suprimeMsgErrEmail(spanErr, inputTag, inputErr);
  }
  supprimeMsgErr(inputTag, spanErr);
}

// pour supprimer msg err lorsque on focus sur un de les deux input de l'e-mail
function suprimeMsgErrEmail(sepanErrElmenet,inputTag,inputErr ) {
  inputErr.addEventListener("focus", (event) => {
    inputTag.classList.remove("fromBorderErr");
    inputTag.classList.remove("margBoxEmail");
    sepanErrElmenet.remove();
  });
  const emailCon = document.querySelector("#emailCon");
  emailCon.addEventListener("focus", (event) => {
    inputTag.classList.remove("fromBorderErr");
    inputTag.classList.remove("margBoxEmail");
    sepanErrElmenet.remove();
  });
}
