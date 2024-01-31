let result;

ul = document.getElementById("task-list");

// // children, firstElementChild, lastElementChild

result = ul.children;
ul.children[0].children[0].children[0].checked = true;
ul.children[0].nextElementSibling.children[0].children[0].checked = true;
// result = ul.firstElementChild;
// result = ul.lastElementChild;

// // parentElement  // bir üst element
// result = document.getElementById("title").parentElement;

// // nextElementSibling // seçmiş olduğun element'in aynı hızasında olan sonraki element'e gidersin.

// result = document.querySelector(".task").nextElementSibling;

// // previousElementSibling // seçmiş olduğun element'in aynı hızasında olan bir önceki element'e gidersin.

// result =
//     document.querySelector(".task").nextElementSibling.previousElementSibling;

console.log(result);
