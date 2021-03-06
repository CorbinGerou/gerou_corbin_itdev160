html {
  background-color: black;
}

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  background-color: black;
}

main {
  display: flex;
  flex: 1;
}

#main-header {
  background-color: #23282D;
}

#main-header {
  color: #fff;
  font-size: 1em;
  text-align: center;
}

#sidebar ul {
  width: 225px;
  flex: 0 0 12em;
  background-color: #23282D;
}

#sidebar ul li {
  color: pointer;
  background-color: #32373C;
}

#post-container {
  flex: 1;
  background-color: #eee;
  padding: 20px;
}

#intro {
  display: none;
}

blockquote {
  font-style: italic;
  margin: 1em 1em 1em 0;
}

blockquote:before,
blockquote:after {
  content: '"';
}

.author:before {
  content: '-';
}
