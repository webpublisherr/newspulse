const container = document.getElementById("post-container");

function displayPosts(list) {
  container.innerHTML = "";
  list.forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <h3>${post.title}</h3>
      <p><strong>${post.date}</strong></p>
      <p>${post.summary}</p>
    `;
    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = posts.filter(p => p.title.toLowerCase().includes(query));
  displayPosts(filtered);
});

displayPosts(posts);
