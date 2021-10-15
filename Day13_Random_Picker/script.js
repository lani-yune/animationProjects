const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (event) => {
  createTags(event.target.value);

  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsElement.innerHTML = '';
  tags.forEach((tag) => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
}

function randomSelect() {
  const times = 30;
  //Highlighting each choice
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  //Picking which tag to highlight after 30 times
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    });
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
