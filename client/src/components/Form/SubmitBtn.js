import React from "react";

function SubmitBtn(props) {

  return (
    <div className="field">
      <p className="control">
        <button className="button is-danger is-small" onClick={props.onSubmit}>
          SUBMIT
        </button>
      </p>
    </div>
  );
}

export default SubmitBtn;