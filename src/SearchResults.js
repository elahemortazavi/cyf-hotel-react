
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = (props) => {
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDat,
    nights,
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleClick = () => {
    setSelectedCustomerId(id);
    setShowProfile(true);
  };

  return (
    <tr
      style={
        isSelected
          ? { backgroundColor: "#3450a1" }
          : { backgroundColor: " rgb(12, 14, 114)" }
      }
      onClick={() => setIsSelected(!isSelected)}
    >
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDat}</td>
      <td>{nights}</td>
      <td>
        <button onClick={handleClick}>Show profile</button>
      </td>
      {showProfile && <CustomerProfile id={selectedCustomerId} />}
    </tr>
  );
};

export default SearchResults;