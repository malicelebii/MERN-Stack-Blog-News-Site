import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function NewForm() {
  const classes = useStyles();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [number, setnumber] = useState(0);

  const onTitleChange = (e) => {
    const { name, value } = e.target;
    settitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    const { name, value } = e.target;
    setdescription(e.target.value);
  };

  const onEditorChange = (event, editor) => {
    const data = editor.getData();
    setdescription(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      description: ReactHtmlParser(description),
    };

    axios
      .post("http://localhost:5000/api/posts/new", post)
      .then((res) => console.log(res.data))
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
        desc:  <button onClick={()=>setnumber(!number)} > {number ? 'hide data' :'show data'}    </button>

        {number ? ReactHtmlParser(description) : ''}

        <Button type="submit">Send </Button>
      </div>
    </form>
  );
}
