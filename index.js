///// TABS

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

///////// Picture text on hover

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

///// Form validation

let myForms = [document.forms[0], document.forms[1]];

myForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    let letters = /^[A-Za-zĄąČčĘęĖėĮįŠšŲųŪūŽž]*$/;
    let numbers = /^[0-9()+]*$/;

    let firstNameValue = form.elements.firstName.value;
    let lastNameValue = form.elements.lastName.value;
    let phoneNumValue = form.elements.phoneNum.value;

    console.log(numbers.test(phoneNumValue));

    if (
      firstNameValue.length === 0 ||
      lastNameValue.length === 0 ||
      phoneNumValue.length === 0
    ) {
      event.preventDefault();
      alert("Please enter all required information.");
    } else if (!letters.test(firstNameValue)) {
      event.preventDefault();
      form.elements.firstName.style.color = "red";
      alert("Please enter valid first name. Invalid symbols detected.");
    } else if (!letters.test(lastNameValue)) {
      event.preventDefault();
      form.elements.lastName.style.color = "red";
      alert("Please enter valid last name. Invalid symbols detected.");
    } else if (!numbers.test(phoneNumValue)) {
      event.preventDefault();
      form.elements.phoneNum.style.color = "red";
      alert("Please enter valid phone number. Invalid symbols detected.");
    } else {
      alert("Form submitted!");
    }
  });
});

let inputs1 = document.querySelectorAll("main form input:nth-of-type(-n+3)");
let inputs2 = document.querySelectorAll("form.inquiryForm > input");

console.log(inputs1);
console.log(inputs2);

let inputFields = [inputs1, inputs2];

inputFields.forEach((form) => {
  form.forEach((input) => {
    input.addEventListener("focus", (event) => {
      input.style.color = "#1c1c1c";
    });
  });
});
