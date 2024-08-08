import React, { useState } from "react";
import "./BodyModal.scss";

function BodyModal({
  dataBody,
  onCheckboxChange,
  onDelete,
  onEdit,
  onSaveEdit,
  editingComment,
}) {
  const [editedComment, setEditedCommnet] = useState(dataBody.comment);

  const handleSaveEdit = () => {
    onSaveEdit(dataBody.id, editedComment);
  };
  return (
    <div className="body-modal">
      <div key={dataBody.index} className="image-card">
        {/* <input
          type="checkbox"
          className="checkbox"
          checked={dataBody.isSelected}
          onChange={onCheckboxChange}
        /> */}

        {dataBody.isSelected !== undefined && (
          <div className="checkbox-wrapper-23">
            <input
              type="checkbox"
              id={`check-${dataBody.id}`}
              checked={dataBody.isSelected}
              onChange={onCheckboxChange}
            />
            <label
              htmlFor={`check-${dataBody.id}`}
              style={{ "--size": "30px" }}
            >
              <svg viewBox="0,0,50,50">
                <path d="M5 30 L 20 45 L 45 5" />
              </svg>
            </label>
          </div>
        )}

        <div className="image-wrapper">
          <img src={dataBody.imageUrl} alt={dataBody.fileName} />
        </div>
        <div className="content">
          <h4>{dataBody.fileName}</h4>
          <div className="content_table">
            <p className="section">{dataBody.section}</p>
            {dataBody.id === editingComment ? (
              <input
                type="text"
                value={editedComment}
                className="editInput"
                onChange={(e) => setEditedCommnet(e.target.value)}
              />
            ) : (
              <p className="comment">{dataBody.comment}</p>
            )}
          </div>
        </div>
        <div className="actions">
          {dataBody.id === editingComment ? (
            <button onClick={handleSaveEdit}>
              <i className="fa-solid fa-save"></i>
            </button>
          ) : (
            <button onClick={onEdit} className="editButton">
              <i className="fa-solid fa-pen"></i>
            </button>
          )}
          <button onClick={onDelete} className="deleteButton">
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="shareButtom">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodyModal;
