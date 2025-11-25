const postsDiv = document.getElementById("posts");

// Your custom data
const myData = [
  {
    title: "My Skills",
    text: `
    • HTML5<br>
    • CSS3<br>
    • JavaScript<br>
    • Responsive Web Design<br>
    • Git & GitHub<br>
    • API Integration<br>
    • Node.js (Basics)<br>
    • Express.js (Basics)
    `
  },
  {
    title: " Amazon Clone",
    text: "I created a front-end Amazon clone using HTML & CSS with a fully responsive layout."
  },
  {
    title: " Responsive Landing Page",
    text: "A stylish landing page made using HTML, CSS, animations — deployed on Netlify."
  },
  {
    title: " API Fetch Project",
    text: "A dynamic website that displays data from APIs using the JavaScript Fetch API."
  },
  {
    title: " Node.js REST API",
    text: "CRUD API using Node.js & Express framework."
  }
];

// Display content
function displayContent() {
  postsDiv.innerHTML = "";

  myData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("post");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;

    postsDiv.appendChild(card);
  });
}

displayContent();
