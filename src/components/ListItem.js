export default function ListItem(props) {
  return (
    <div class="gallery-card" id={props.cod}>
      <h2 class="gallery-card-title">{props.title}</h2>
      <a href="" class="gallery-card-btn">
        Mais fotos
      </a>
    </div>
  );
}
