import React, { useState } from "react";
import "./Modal.scss";
import ToggleSwitch from "./ToogleSwitch/ToggleSwitch";
import BodyModal from "./BodyModal/BodyModal";

function Modal(props) {
  const userCmts = "All User";
  const [data, setData] = useState([
    {
      id: 1,
      imageUrl: "https://picsum.photos/id/870/400/600?grayscale&blur=2",
      fileName: "ELV-Obed01-01.jpg",
      section: "General",
      comment: "This is a rejection comment for the first image",
      status: "default",
      isSelected: false,
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/id/871/400/600?grayscale&blur=2",
      fileName: "ELV-Obed01-02.jpg",
      section: "General",
      comment: "This is a rejection comment for second image",
      status: "default",
      isSelected: false,
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/id/872/400/600?grayscale&blur=2",
      fileName: "ELV-Obed01-03.jpg",
      section: "General",
      comment: "General comment value!",
      status: "remove",
      isSelected: false,
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/id/877/400/600?grayscale&blur=2",
      fileName: "ELV-Obed01-04.jpg",
      section: "General",
      comment: "Pixelz, please hire me!",
      status: "default",
      isSelected: true,
    },

    {
      id: 5,
      imageUrl: "https://picsum.photos/id/866/400/600?grayscale&blur=2",
      fileName: "ELV-Obed01-05.jpg",
      section: "General",
      comment: "Pixelz, please hire me!",
      status: "default",
      isSelected: true,
    },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleCancelChange = () => {
    if (editingComment !== null) {
      setEditingComment(null);
    }
    setData(data.map((item) => ({ ...item, isSelected: false })));
    setIsAllChecked(false);
  };

  const deleteAll = () => {
    setData([]);
  };

  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleToggleAll = () => {
    setIsAllChecked(!isAllChecked);
    if (isAllChecked) {
      setData(data.map((item) => ({ ...item, isSelected: false })));
    } else {
      setData(data.map((item) => ({ ...item, isSelected: true })));
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const [editingComment, setEditingComment] = useState(null);

  const handleEdit = (id) => {
    setEditingComment(id);
  };

  const handleSaveEdit = (id, newComment) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          comment: newComment,
        };
      }
      return item;
    });
    setData(updatedData);
    setEditingComment(null);
  };

  return (
    <div className="modalRoot">
      <div className="modalBackground">
        <div className="header_modal">
          <h2>Sent Comments</h2>
          <button
            className="closeBtn"
            onClick={() => props.setShowModal(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="title">
          <h3>
            Saved Comments <span className="numberClass">{data.length}</span>
          </h3>

          <ToggleSwitch
            userCmt={userCmts}
            checkAllUser={handleToggleAll}
            id={data.id}
            isAllChecked={isAllChecked}
          />
        </div>
        <div className="body">
          {data.length === 0 ? (
            <p className="noComments">No comments found</p>
          ) : (
            data.map((item) => (
              <BodyModal
                key={item.id}
                dataBody={item}
                onCheckboxChange={() => handleCheckboxChange(item.id)}
                onDelete={() => handleDelete(item.id)}
                onEdit={() => handleEdit(item.id)}
                onSaveEdit={handleSaveEdit}
                editingComment={editingComment}
              />
            ))
          )}
        </div>
        <div className="footer">
          <div className="footer_left">
            <button onClick={() => deleteAll()}>Delete All</button>
          </div>
          <div className="footer_right">
            <button
              className="cancelButtom"
              onClick={() => handleCancelChange()}
            >
              Cancel
            </button>
            <button
              className="SendAllButtom"
              onClick={() => props.setShowModal(false)}
            >
              Send All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
