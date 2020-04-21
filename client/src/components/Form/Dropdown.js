import React from "react";

function Dropdown(props) {

  const { name, label, onChange, value, products } = props;

  return (
    <div className="field is-horizontal">
      <div className="field-label is-small">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control is-expanded">
            <div className="select is-small">
              <select
                name={name}
                onChange={onChange(name)}
                value={value}
              >
                <option>--Select a Product--</option>
                {products.map((product) => <option key={product._id}>{product.name}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;





