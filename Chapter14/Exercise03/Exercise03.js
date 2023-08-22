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
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Populate Template 1
            const template1 = document.getElementById('template1');
            template1.innerHTML = `
                <img src="${data.template1.image}" alt="${data.template1.title}">
                <div>
                    <h2>${data.template1.title}</h2>
                    <p>${data.template1.text}</p>
                </div>
                <a href="#template2">Go to Template 2</a>
            `;

            // Populate Template 2
            const template2 = document.getElementById('template2');
            template2.innerHTML = `
                <img src="${data.template2.image}" alt="${data.template2.title}">
                <p>${data.template2.title} ${data.template2.text}</p>
                <a href="#template1">Go to Template 1</a>
            `;
        });

    // Handle direct navigation to templates
    const hash = window.location.hash;
    if (hash === '#template2') {
        showTemplate('template2');
    } else {
        showTemplate('template1');
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash === '#template2') {
            showTemplate('template2');
        } else {
            showTemplate('template1');
        }
    });

    function showTemplate(templateId) {
        const templates = document.querySelectorAll('section');
        templates.forEach(template => template.style.display = 'none');
        document.getElementById(templateId).style.display = 'block';
    }
});