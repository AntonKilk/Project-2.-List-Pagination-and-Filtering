/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global variables
const listItems = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;


/* 
function showPage hides all the students
except for the ten you want displayed on a given page.
*/
const showPage = (list, page) => {
 const startIndex = (page * itemsPerPage) - itemsPerPage;
 const endIndex = page * itemsPerPage - 1;


   for (let i = 0; i<listItems.length; i++){
      let li = listItems[i];
      if (i >= startIndex && i <= endIndex){
         li.style.display = '';
      }
      else {
         li.style.display = 'none';
         }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   // find number of pages depending on list length and items shown per page
   const numberOfPages = Math.ceil(list.length/itemsPerPage);

   // DOM elements for pagination links
   const divPage = document.querySelector('.page');

   const div= document.createElement('div');
   div.className = 'pagination';
   divPage.appendChild(div);

   const ul = document.createElement('ul');
   div.appendChild(ul);

   const li = ul.children;

//Loop to create page numbers
   for (let i = 1; i <= numberOfPages; i++){
      const li = document.createElement('li');
      ul.appendChild(li); 
      const a = document.createElement('a');
      li.appendChild(a);
      if (i === 1){
         a.className = 'active'; 
      }
      a.href = '#';
      a.textContent = i; 
   }  

// Event listener for switching pages
      ul.addEventListener('click', (e) => {
         for (let i = 0; i < ul.children.length; i++){
            const a = li[i].firstElementChild;
            if (a.className === 'active'){
             a.classList.remove('active');
            }
         }
         showPage(listItems, e.target.textContent);
         e.target.className = 'active';
      });
}

// Call functions. First page is active, when reload
showPage(listItems, 1);
appendPageLinks(listItems);
