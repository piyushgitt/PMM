import React from 'react'
import './DeletePost.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
const DeletePost = ({ handlePage }) => {
  return (
    <>
      <div className="udpmain">
        <FontAwesomeIcon
          icon={faXmark}
          className="pfXmark"
          style={{ position: "absolute", top: "3%", right: "1%" }}
          onClick={handlePage}
        />
        <div className="udpwarning"></div>
        <div className="udpwarningtext">
          Your accomplishment of the post will also be deleted.
          <b> Are you sure to delete?</b>
        </div>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          beatFade
          style={{
            color: "red",
            fontSize: "100px",
            marginTop: "3vh",
          }}
        />
        <div className="udpwarningbtns">
          <div className="udpwarningdelete">
            <button className="udpwarningdelete">Yes</button>
          </div>
          <div className="udpwarningcancel">
            <button className="udpwarningcancel" onClick={handlePage}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePost