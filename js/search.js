let myInput = document.querySelector('#my-input');
myInput.addEventListener('keyup', mySearchFunction);
let item = document.querySelectorAll("h4");

function mySearchFunction() {
  // Filter, makes search not case sensitive
  let filter = myInput.value.toLowerCase();

  // Treats lists items like an array, where each item can be accessed through it's index
  for (let i = 0; i < item.length; i++) {
    // Iterate over each list item to see if the value of the input, ignoring case, matches the inner text or inner html of the item.
    let title = item[i];
    let newTitle = title.innerHTML.toLowerCase();
    
    if (!filter){
      let parent = $(title).parent().parent();
      $(parent).css("display", "flex")
    }
    
    if (!newTitle.includes(filter)){
      let parent = $(title).parent().parent();
      $(parent).css("display", "none")
      
    } else {
      let parent = $(title).parent().parent();
      $(parent).css("display", "flex")
    }
  }
}