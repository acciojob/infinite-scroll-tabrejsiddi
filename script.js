const list = document.getElementById("infi-list");

let count = 0;

function addItems(num) {
  for (let i = 0; i < num; i++) {
    count++;
    const li = document.createElement("li");
    li.textContent = `List Item ${count}`;
    list.appendChild(li);
  }
}

addItems(10);
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 5) {
    addItems(2);
  }
});