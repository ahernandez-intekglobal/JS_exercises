// 'use strict'
// Create a simple Single Page Application (SPA) that will have two types of templates. Specifications:
//    [a]Template 1: should display an image on the left with a title and snippet of text on the right. 
//    [b]Template 2: should display the image on the top left, and the title and text should wrap around the image. 
//    [c]Templates should be created on custom script tags or template tags
//       fragments should be used where applicable 
//    [d]The landing page should be template 1
//    [e]From template 1, clicking on an image or the text associated with that image should result in navigating to template 2.
//    [f]From template 2, clicking on a link should return the view to template 1
//    [g]Items from template 1 should be numbered using CSS rules
//    [h]The data that will populate the templates should be read from a JSON file
//    [j]The current view (template 1 or template 2) should be maintained even if the browser is refreshed. 
//    [k]The user should be able to directly navigate to any of the page’s views

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem('currentPage')) {
        localStorage.setItem('currentPage', 'home');
    }

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let app = document.querySelector('#app');
        let fragment = document.createDocumentFragment();
        
        // Populate Template 1
        const template1 = document.querySelector('#template');
        for (let article in data) {
            const clone = template1.content.cloneNode(true);
            let articleElement = clone.querySelector("article");
            articleElement.id = article;
            articleElement.className = "card";
            let img = clone.querySelector('img');
            img.src = data[article].image;
            let h2 = clone.querySelector('h2');
            h2.textContent = data[article].title;
            let p = clone.querySelector('p');
            p.textContent = data[article].text;
            fragment.appendChild(clone);
        }

        let backButton = document.createElement('button');
        backButton.textContent = "back";
        backButton.onclick = templateHandler;
        fragment.appendChild(backButton);
        app.appendChild(fragment);
        app.addEventListener("click", templateHandler);
        showTemplate(localStorage.getItem('currentPage'));
    });

    function templateHandler(event){
        if (event.target.parentNode.nodeName === 'ARTICLE'){
            showTemplate(event.target.parentNode.id);
        }
        if (event.target.nodeName === 'BUTTON'){
            showTemplate('home');
        }
    }

    function showTemplate(articleID) {
        if (articleID !== 'home'){
            const articles = document.querySelectorAll('article');
            articles.forEach(article => article.className = 'hidden');
            let article = document.querySelector(`#${articleID}`);
            article.className = "focus";
            localStorage.setItem('currentPage', articleID);
        }
        else{
            const articles = document.querySelectorAll('article');
            articles.forEach(article => article.className = 'card');
            localStorage.setItem('currentPage', 'home');
        }
    }
});