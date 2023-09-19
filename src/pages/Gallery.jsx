import images from "../data/images.json";

const Gallery = () => {
  return (
    <div>
      <h2>Galerie</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        explicabo dolorum, est quis reiciendis eius aspernatur similique
        laboriosam veritatis voluptate, et magni! Eveniet quam laborum, beatae,
        animi pariatur nisi provident.
      </p>

      {/* Afficher la vue-enfant ici */}
      <div className="row">
        <ul>
          {images.map(({file, artist}, index) => (
          <li className="col-sm-4">
            <div className="panel panel-default thumb">
              <a href="">
                <img
                  title={artist}
                  src={"/img/thumb/" + file}
                  className="img-responsive"
                  alt={artist}
                />
              </a>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
