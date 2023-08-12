import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");


  box-sizing: border-box;
  margin: 0;
  padding:0;
  
  :root{
   --blah-light: #7adfff;
   --blah-color: #7adfff;
   --blah-light: #ccffff;
   --blah-dark: #0196fd;
   --positive-default: #53D769;
   --positive-dark: #46C263;
   --negative-default: #FC3D39;
   --negative-dark: E33437;
   --light-default: #F8F8F8;
   --light-dark: #E6E6E6;
   --dark-default: #262626;
   --dark-dark: #000000;

  }

/* GLOBAL STYLES */

body,
.app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 16px;
  background: url(https://www.toptal.com/designers/subtlepatterns/patterns/lightpaperfibers.png);
}
h1 img{
  width: 40px;
  height: 40px;
display:inline-block;
}
button {
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  color:var(--blah-default);
}
button:hover {
  color: var(--blah-light);
}

.App {
  display: flex;
}



/* NOTE EDITOR/PREVIEW (MAIN) STYLES */

.app-main {
  width: 70%;
  height: 100vh;
}
.app-main-note-edit,
.app-main-note-preview {
  height: 50vh;
}

.no-active-note {
  width: 70%;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  font-size: 2rem;
  color: #999;
}

/* Editing */
.app-main-note-edit {
  padding: 25px;
}

.app-main-note-edit input,
textarea {
  display: block;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 100%;
  height: calc(50vh - 130px);
  padding: 10px;
  resize: none;
  font-size: inherit;
  font-family: inherit;
}
.app-main-note-edit input {
  height: 50px;
  font-size: 2rem;
}

/* Preview */
.app-main-note-preview {
  border-top: 1px solid #ddd;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.02);
}

.preview-title {
  padding: 25px 25px 0 25px;
  margin: 0;
}

.markdown-preview {
  padding: 0 25px 25px 25px;
  font-size: 1rem;
  line-height: 2rem;
}`

export default GlobalStyle