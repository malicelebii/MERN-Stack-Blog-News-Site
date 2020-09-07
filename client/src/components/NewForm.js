import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  },
}));

export default function NewForm() {
  const classes = useStyles();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [number, setnumber] = useState(0);
  const [category, setcategory] = useState("");

  const onTitleChange = (e) => {
    const { name, value } = e.target;
    settitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    const { name, value } = e.target;
    setdescription(e.target.value);
  };

  const onCategoryChange = (e) => {
   
    setcategory(e.target.value);
  };

  const onEditorChange = (event, editor) => {
    const data = editor.getData();
    setdescription(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      description:description,
      category:category
    };

    axios
      .post("http://localhost:5000/api/posts/new", post)
      .then((post) => console.log(post.data))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <div>
        <TextField
          required
          name="title"
          id="outlined-required"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => onTitleChange(e)}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={(e) => onCategoryChange(e)}
          >
            <MenuItem value="Politics">Politics</MenuItem>
            <MenuItem value="Corona">Corona</MenuItem>
            <MenuItem value="Economy">Economy</MenuItem>
          </Select>
        </FormControl>
        {/* <TextareaAutosize
          name="description"
          rowsMax={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          value={description}
          onChange={(e) => onDescriptionChange(e)}
        /> */}
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={onEditorChange}
        />
        desc:{" "}
        <button onClick={() => setnumber(!number)}>
          {" "}
          {number ? "hide data" : "show data"}{" "}
        </button>
        {number ? ReactHtmlParser(description) : ""}
        <Button type="submit">Send </Button>
      </div>
    </form>
  );
}
