function Item({item}) {
  return (
    <div key={item.id} className={`product ${item.isInBag ? "selected" : ""}`}>
      <div className="photo">
          <img src={"./img/" + item.photo} />
      </div>
      <div className="description">
          <span className="name">{item.name}</span>
          <span className="price">$ 99.99</span>
          {item.isInBag && (
            <div className="quantity-area">
              <button>-</button>
              <span className="quantity">1</span>
              <button>+</button>
            </div>
          )}
      </div>
  </div>
  )
}

export default Item