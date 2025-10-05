(async function(){
  const box = document.getElementById("search-box");
  const results = document.getElementById("search-results");
  if (!box || !results) return;

  const idxData = await fetch("{{ '/search.json' | relative_url }}").then(r => r.json());
  const idx = lunr(function () {
    this.ref("url");
    this.field("title");
    this.field("content");
    idxData.forEach(doc => this.add(doc), this);
  });

  box.addEventListener("input", e => {
    const q = e.target.value.trim();
    if (!q) { results.innerHTML = ""; return; }
    const hits = idx.search(q).slice(0, 20);
    results.innerHTML = hits.map(h => {
      const doc = idxData.find(d => d.url === h.ref);
      return `<li><a href="${doc.url}">${doc.title}</a></li>`;
    }).join("");
  });
})();
