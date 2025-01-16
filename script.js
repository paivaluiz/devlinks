function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light-mode")
  // Imagem do perfil
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light-mode")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  // Texto da imagem do perfil
  const alt = img.getAttribute("alt")
  if (html.classList.contains("light-mode")) {
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuros e camiseta preta, sem barba e fundo azul.")
  } else {
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos transparente e camiseta preta, sem barba e fundo azul.")
  }
}
