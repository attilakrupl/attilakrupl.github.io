var storage = firebase.storage();
var storageRef = storage.ref();

function fillReferenceLink(category, referenceContainer) {

  category.forEach( page => {
    var referenceLink = document.createElement("a");
    var referenceImg = document.createElement("img");
    page.forEach( node => {
      if (node.key === "href")
      {
        referenceLink.setAttribute(node.key,  node.val());
      }
      else
      {
        referenceImg.setAttribute(node.key,  node.val());
      }
    });
    var imagePath = "references/" +  page.key + ".png";
    storageRef.child(imagePath).getDownloadURL().then( url => {
      referenceImg.setAttribute("src", url);
    }).catch( error => {
      console.log("An error has occured while retrieving image url data: " + error.message)
    });
    referenceLink.setAttribute("target", "_blank");
    referenceImg.className = "ref-img img-responsive link-image-effect";
    referenceLink.appendChild(referenceImg);
    referenceContainer.appendChild(referenceLink);
  });
};

var staticPageContainer = document.getElementById('static_pages');
var dynamicPageContainer = document.getElementById('dynamic_pages');
var otherProjectsContainer = document.getElementById('other_projects');

let dbReferencesRef =  firebase.database().ref().child('references');

var dbStatRef = firebase.database().ref().child('references/static');
var dbDynaRef = firebase.database().ref().child('references/dynamic');
var dbOtherRef = firebase.database().ref().child('references/other');

dbReferencesRef.on("value", references => {
  references.forEach( category => {
    var refHeader = document.createElement("h4");
    var headerText;
    switch (category.key)
    {
      case "static":
        headerText = document.createTextNode("Static Webpages");
        refHeader.appendChild(headerText);
        staticPageContainer.appendChild(refHeader);
        fillReferenceLink(category, staticPageContainer);
        break;
      case "dynamic":
        headerText = document.createTextNode("Dynamic Webpages");
        refHeader.appendChild(headerText);
        dynamicPageContainer.appendChild(refHeader);
        fillReferenceLink(category, dynamicPageContainer);
        break;
      case "other":
        headerText = document.createTextNode("My JS and C++ katas on GitHub");
        refHeader.appendChild(headerText);
        otherProjectsContainer.appendChild(refHeader);
        fillReferenceLink(category, otherProjectsContainer);
        break;
    }
  });
});
