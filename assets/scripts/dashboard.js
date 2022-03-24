const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
let count = 0;

// Show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
  closeBtn.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Fill locations in table

for (let i = 0; i < 6; i++) {
  const tr = document.createElement("tr");
  const trContent = `
                    <td>${Locations[i].lat}</td>
                    <td>${Locations[i].lon}</td>
                    <td>${Locations[i].precipitation}</td>
                    <td class="${
                      Locations[i].status === "Risky"
                        ? "danger"
                        : Locations[i].status === "Safe"
                        ? "success"
                        : none
                    }">${Locations[i].status}</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
}

function showAll() {
  Locations.forEach((location) => {
    const tr = document.createElement("tr");
    const trContent = `
                        <td>${location.lat}</td>
                        <td>${location.lon}</td>
                        <td>${location.precipitation}</td>
                        <td class="${
                          location.status === "Risky"
                            ? "danger"
                            : location.status === "Safe"
                            ? "success"
                            : none
                        }">${location.status}</td>`;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
  });
}
