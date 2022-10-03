import React from "react";
import { Button } from "reactstrap";
const Row1 = (datas) => {
  const handleClick = () => {
    datas.onMovie(datas.id);
  };
  const handleClick1 = () => {
    datas.onMovies(datas.id);
  };

  return (
    <tr>
      <th scope="row">{datas.id}</th>
      <td>{datas.title}</td>
      <td>{datas.description}</td>
      <td>{datas.createat}</td>
      <td>{datas.updateat}</td>
      <td>
        <Button color="primary" className="btn-edit" onClick={handleClick1}>
          Edit
        </Button>
        <Button color="danger" onClick={handleClick}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Row1;
