import React from "react";
import {
  Button,
  Container,
  Row,
  Table,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Row1 from "./Row1";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [listMovie, setListMovie] = useState([
    {
      id: 1,
      title: "Avenger EndGame",
      description: "2019",
      createAt: "11-09-2000",
      updateAt: "11-09-2000",
    },
    {
      id: 2,
      title: "Avenger InfinityWar",
      description: "2018",
      createAt: "11-09-2000",
      updateAt: "11-09-2000",
    },
    {
      id: 3,
      title: "Batman Bad Blood",
      description: "2016",
      createAt: "11-09-2000",
      updateAt: "11-09-2000",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const [movieUpdate, setMovieUpdate] = useState({});
  const [dataSearch, setDataSearch] = useState("");
  const [dataMovie, setDataMovie] = useState([]);
  const handleChangInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangInputDes = (e) => {
    setDes(e.target.value);
  };
  const handleSubmit = () => {
    // const time = new Date();
    const arr = {
      id: Math.floor(Math.random() * 100) + 1,
      title: title,
      description: description,
      createAt: "12-09-2000",
      updateAt: "12-09-2000",
    };
    const listMovieTemp = [...listMovie];
    listMovieTemp.push(arr);
    setListMovie(listMovieTemp);
  };
  const handleRemoveMovie = (id) => {
    const listMovieTemp = [...listMovie];
    const movies = listMovieTemp.filter((element) => !(element.id === id));
    setListMovie(movies);
  };
  const handleEditMovie = (id) => {
    const movies = [...listMovie];
    const index = movies.findIndex((movie) => {
      return movie.id === id;
    });
    setTitle(movies[index].title);
    setDes(movies[index].description);
    setMovieUpdate(movies[index]);
  };
  const handleEdit = (e) => {
    const movies = [...listMovie];
    const index = movies.findIndex((movie) => {
      return movie.id === movieUpdate.id;
    });
    movies[index].title = title;
    movies[index].description = description;
    setListMovie([...listMovie]);
    setMovieUpdate({});
    setTitle("");
    setDes("");
  };
  const handleSearchInput = (e) => {
    if (e.target.value === "") {
      setDataMovie([]);
    } else {
      const dataInput = e.target.value;
      setDataSearch(dataInput);

      const newListMovie = listMovie.filter((movie) => {
        return movie.title.includes(dataInput);
      });
      setDataMovie(newListMovie);
    }
  };
  return (
    <div>
      <Container className="container-crud">
        <Row>
          <Button
            color="success"
            block="false"
            className="btn-create"
            onClick={handleSubmit}
          >
            Create
          </Button>
          {movieUpdate.id ? (
            <Button
              color="primary"
              block="false"
              className="btn-create"
              onClick={handleEdit}
            >
              Edit
            </Button>
          ) : (
            ""
          )}
        </Row>
        <Row>
          <FormGroup>
            <Label>Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your Title"
              type="text"
              value={title}
              onChange={handleChangInputTitle}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Enter your Description"
              type="text"
              value={description}
              onChange={handleChangInputDes}
            />
          </FormGroup>
        </Row>
        <Row>
          <h1>Movie Index</h1>
          <Input
            id="search"
            name="search"
            placeholder="Search..."
            type="text"
            value={dataSearch}
            onChange={handleSearchInput}
          />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Create At</th>
                <th>Update At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataMovie.length > 0
                ? dataMovie.map((movie) => {
                    return (
                      <Row1
                        id={movie.id}
                        title={movie.title}
                        description={movie.description}
                        createat={movie.createAt}
                        updateat={movie.updateAt}
                        onMovies={handleEditMovie}
                        onMovie={handleRemoveMovie}
                      ></Row1>
                    );
                  })
                : listMovie.map((movie) => {
                    return (
                      <Row1
                        id={movie.id}
                        title={movie.title}
                        description={movie.description}
                        createat={movie.createAt}
                        updateat={movie.updateAt}
                        onMovies={handleEditMovie}
                        onMovie={handleRemoveMovie}
                      ></Row1>
                    );
                  })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default App;
