/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "Machine Learning Engineer", "Data Scientist", "Data Analyst"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* ============================== Open Resume in New Window ============================ */
document.getElementById('my-resume-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    window.open('files/My_Resume.pdf', '_blank');
});

/* ============================== Modal Elements in Projects ========================== */

// Get modal elements
var modal = document.getElementById("project-modal");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var closeBtn = document.getElementsByClassName("close-btn")[0];
var showMoreBtn = document.getElementById("show-more-btn");
var currentProjectUrl = ""; // Variable to hold the current project's URL

// Open modal function
function openModal(title, description, url) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  currentProjectUrl = url; // Set the current project's URL
  modal.style.display = "block";
}

// Close modal function
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Show More button click event
showMoreBtn.onclick = function() {
  window.open(currentProjectUrl, "_blank"); // Open the GitHub link in a new tab
}

// Add event listeners to project images
document.querySelectorAll('.projects-item').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const title = item.querySelector('a').getAttribute('title');
    const description = item.querySelector('.projects-summary p').textContent;
    const url = item.querySelector('a').getAttribute('href'); // Get the GitHub link
    openModal(title, description, url);
  });
});


/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* Function to toggle night mode */
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

/* Event listener for night mode toggle button */
document.getElementById('night-mode-btn').addEventListener('click', toggleNightMode);

