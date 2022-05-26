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
                    <td>${Locations[i].X}</td>
                    <td>${Locations[i].Y}</td>
                    <td>${Locations[i].target_2019}</td>
                     <td class="${
                     Locations[i].status === "High Risk"
                        ? "danger"
                        : Locations[i].status === "Risk"
                        ? "danger"
                        : Locations[i].status === "Take Precautions"
                        ? "warning"
                        :Locations[i].status === "Be on alert"
                        ? "warning"
                        :Locations[i].status === "Safe Zone"
                        ? "success"
                        :"none"    
                     }">${Locations[i].status}</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
}

function showAll() {
  Locations.forEach((location) => {
    const tr = document.createElement("tr");
    const trContent = `
                        <td>${location.X}</td>
                        <td>${location.Y}</td>
                        <td>${location.target_2019}</td>
                        <td class="${
                          location.status === "High Risk"
                        ? "danger"
                        : location.status === "Risk"
                        ? "danger"
                        : location.status === "Take Precautions"
                        ? "warning"
                        :location.status === "Be on alert"
                        ? "warning"
                        :location.status === "Safe Zone"
                        ? "success"
                        :"none"    
                        }">${location.status}</td>`;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
  });
}
