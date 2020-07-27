const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
