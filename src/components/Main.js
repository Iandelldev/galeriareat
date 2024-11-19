const cardsData = [
  { id: 1, title: "Animais", image: "/img/animais.jpg" },
  { id: 2, title: "Arquitetura", image: "/img/arquitetura.jpg" },
  { id: 3, title: "Cidades", image: "/img/cidade.jpg" },
  { id: 4, title: "Decorações", image: "/img/decoracao.jpg" },
  { id: 5, title: "Esportes", image: "/img/esportes.jpg" },
  { id: 6, title: "Natureza", image: "/img/natureza.jpg" },
  { id: 7, title: "Paisagem", image: "/img/paisagem.jpg" },
  { id: 8, title: "Pessoas", image: "/img/pessoas.jpg" },
  { id: 9, title: "Refeições", image: "/img/refeicoes.jpg" },
];

export default function Main() {
  return (
    <main>
      <div className="gallery">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="gallery-card"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <h2 className="gallery-card-title">{card.title}</h2>
            <a href="#" className="gallery-card-btn">
              Mais fotos
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
