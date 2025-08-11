function scrollProjects(direction) {
  const container = document.getElementById('projectSlider');
  const scrollAmount = 320;

  container.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}
