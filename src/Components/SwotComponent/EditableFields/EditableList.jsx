import { useContext, useState } from "react";
import EditableItem from "./EditableItem";
import Context from "../../../Context/Context";
import "./Edit.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { IconButton } from "@mui/material";

const EditableList = ({ items, name, color }) => {
  const { swot, setSwot } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const handleItemChange = (itemToUpdate, updateText) => {
    let updatedList;
    const index = swot[name].findIndex((arrItem) => arrItem === itemToUpdate);

    // Deleting list item
    if (updateText === "") {
      if (index !== -1) {
        updatedList = swot[name].filter((_, i) => i !== index);
      }
    } else {
      // Updating existing list item
      if (index !== -1) {
        updatedList = swot[name];
        updatedList[index] = updateText;
      }
    }

    // Update state using the callback function
    setSwot((prevSwot) => ({ ...prevSwot, [name]: updatedList }));
  };

  const addNewItem = (e) => {
    if (inputValue !== "") {
      if (e.key === "Enter" || e === "onClick") {
        let newSwot = { ...swot };
        newSwot[name] = [...newSwot[name], inputValue];
        setSwot(newSwot);
        setInputValue("");
      }
    }
  };

  return (
    <div className="editable_list_container" style={{ borderColor: color }}>
      <div className="editable_list_header" style={{ backgroundColor: color }}>
        <h5>{name}</h5>
      </div>
      <div className="editable_list">
        <ol>
          {items.map((item, index) => (
            <EditableItem
              key={item + index} // Ensure unique key based on `item.id` or a combination
              item={item}
              onItemChange={(updateText) => handleItemChange(item, updateText)}
            />
          ))}
        </ol>
      </div>
      <div className="addNew">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={addNewItem}
        />
        <IconButton aria-label="delete" size="large" onClick={() => addNewItem("onClick")}>
          <AddOutlinedIcon style={{ color: color }}/>
        </IconButton>
      </div>
    </div>
  );
};

export default EditableList;
