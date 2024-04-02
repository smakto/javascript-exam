let tabButtons = document.querySelectorAll("article div.tabs button");

function buttonsBlur() {
  tabButtons.forEach((button) => (button.style.backgroundColor = "#A37169"));
}

tabButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    buttonsBlur();
    button.style.backgroundColor = "#E27866";
  })
);

let tabsHeader = document.querySelector("div.tabsTextField h2");
let tabsText = document.querySelector("div.tabsTextField p");

tabButtons[0].addEventListener("click", (event) => {
  tabsHeader.innerText =
    "Tabs with soft transitioning effect. Explained propriety of out perpetual his you.";

  tabsText.innerHTML = `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
      bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
      justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      et magnis dis parturient montes.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
      bibendum laoreet.
    </p>`;
});

tabButtons[1].addEventListener("click", (event) => {
  tabsHeader.innerText =
    "Jau seniai žinoma, kad vertinant dizainą ir kompoziciją, blaško skaitomas tekstas. ";

  tabsText.innerHTML = `<p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      <br />
      <br />
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </p>`;
});

tabButtons[2].addEventListener("click", (event) => {
  tabsHeader.innerText =
    "Daug kas galvoja, kad Lorem Ipsum - tai vien tik atsitiktinai surinktas tekstas, bet taip nėra.";

  tabsText.innerHTML = `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>`;
});

/////////

let textToHide = document.querySelectorAll("div.tabsImages p");
let hoveredDivs = document.querySelectorAll("div.tabsImages div");

function hideText() {
  textToHide.forEach((elem) => (elem.hidden = true));
}

hoveredDivs.forEach((item) =>
  item.addEventListener("mouseenter", (event) => {
    item.children[0].hidden = false;
    item.style.opacity = "80%";
  })
);

hoveredDivs.forEach((item) =>
  item.addEventListener("mouseleave", (event) => {
    item.children[0].hidden = true;
    item.style.opacity = "100%";
  })
);

hideText();
