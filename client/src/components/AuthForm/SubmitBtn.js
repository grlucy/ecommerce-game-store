import React from "react";

function SubmitBtn(props) {

  return (
    <div className="field">
      <p className="control">
        <button className="button is-danger" onClick={props.onSubmit}>
          Submit
        </button>
      </p>
    </div>
  );
}

export default SubmitBtn;