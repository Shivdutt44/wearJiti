// Bellow are custom code custom Disable Right Click On Shopify Store



// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// console.warn('Right-click is disabled on this site.')

// });


// How To Add Hover Effect On Header Navigation Menu In Shopify

let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
  console.log(items)
  items.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.setAttribute("open", true);
      item.querySelector("ul").addEventListener("mouseleave", () => {
        item.removeAttribute("open");
      });
    item.addEventListener("mouseleave", () => {
      item.removeAttribute("open");
    });
  });
  
  });


/*////////////////////////////custom  productpage description //////////////////////////////////////////////////////////////////////////*/

