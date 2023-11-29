const blogButton = document.getElementById("blogButton");
const popupMenu = document.getElementById("popupMenu");

let isMenuOpen = false;

const toggleMenu = () => {
  if (isMenuOpen) {
    popupMenu.style.display = "none";
    isMenuOpen = false;
  } else {
    popupMenu.style.display = "block";
    isMenuOpen = true;
  }
};

const menuItemFunctions = {
  "Menu Item 1": () => {
    alert("Menu Item 1 clicked!");
    // Add specific functionality for Menu Item 1
  },
  "Menu Item 2": () => {
    alert("Menu Item 2 clicked!");
    // Add specific functionality for Menu Item 2
  },
  "Menu Item 3": () => {
    alert("Menu Item 3 clicked!");
    // Add specific functionality for Menu Item 3
  },
  "Menu Item 4": () => {
    alert("Menu Item 4 clicked!");
    // Add specific functionality for Menu Item 4
  },
};

const handleMenuItemClick = (menuItem) => {
  const clickedFunction = menuItemFunctions[menuItem];
  if (clickedFunction) {
    clickedFunction();
  }
  toggleMenu();
};

const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    const clickedMenuItem = event.target.textContent;
    handleMenuItemClick(clickedMenuItem);
  });
});

blogButton.addEventListener("click", toggleMenu);

window.addEventListener("click", (event) => {
  if (
    isMenuOpen &&
    event.target !== blogButton &&
    !popupMenu.contains(event.target)
  ) {
    toggleMenu();
  }
});
