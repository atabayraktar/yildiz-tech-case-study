const QuantitySelector = () => {
  return (
    <div className="quantity-selector">
      <div className="title-wrapper">
        <div className="title-start">
          <div>Toptan Fiyat (Adet)</div>
          <div>:</div>
        </div>
        <div className="info">
          <div className="info-box-active">
            <div>100-199</div>
            <div>1300 TL</div>
          </div>
          <div className="info-box">
            <div>100-199</div>
            <div>1300 TL</div>
          </div>
          <div className="info-box">
            <div>100-199</div>
            <div>1300 TL</div>
          </div>
          <div className="info-box">
            <div>100-199</div>
            <div>1300 TL</div>
          </div>
          <div className="info-box">
            <div>100-199</div>
            <div>1300 TL</div>
          </div>
        </div>
      </div>
      <div className="title-wrapper">
        <div className="title">
          <div>Adet</div>
          <div>:</div>
        </div>
        <div className="input">
          <input />
          <span>&nbsp;&nbsp;Adet</span>
          <div className="stock-info">Stok Adedi: 500</div>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
