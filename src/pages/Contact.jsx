const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        explicabo dolorum, est quis reiciendis eius aspernatur similique
        laboriosam veritatis voluptate, et magni! Eveniet quam laborum, beatae,
        animi pariatur nisi provident.
      </p>
      <p>
        Aspernatur commodi omnis, quos cupiditate, tenetur neque fugit
        repellendus eius unde nemo modi, molestiae accusamus. Autem perspiciatis
        ex dicta possimus officiis, aliquam necessitatibus debitis tempore eos
        quasi quas, quidem? Sint?
      </p>
      <form>
        <div className="form-group">
          <label>Courriel</label>
          <input
            className="form-control"
            type="text"
            placeholder="Votre courriel"
          />
        </div>
        <div className="form-group">
          <label>Nom</label>
          <input className="form-control" type="text" placeholder="Votre nom" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control"></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-success">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
