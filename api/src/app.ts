// eslint-disable-next-line
require("dotenv").config()
import express from "express"
import { readdir, statSync } from "fs";
import { extname, join } from "path";
import { FileResult } from "./types/FileResult";


const app = express()
const dir = process.cwd();
const port = 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from, usually 4200
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


/**
 * Retrieve directory listing
 * 
 * @path /api/files
 * @param {String} path directory name
 * @returns {FileResult[]}
 */
app.get('/api/files', (req, res) => {
  let currentDir = dir;
  const query = req.query.path || ''

  if (query) currentDir = join(dir, `${query}`)

  console.log("browsing ", currentDir)

  readdir(currentDir, (err, files) => {
    if (err) {
      const errMessage = err.errno == -2 ? `file not found: '${err.path}'` : err.message
      res.send(errMessage)
    } else {
      const data: FileResult[] = []

      files.forEach(file => {
        try {
          const fileStats = statSync(join(currentDir, file))
          const isDirectory = fileStats.isDirectory();

          const path: FileResult = {
            name: file,
            path: join(`${query}`, file),
            isDirectory: false,
            size: fileStats.size,
            creationDate: fileStats.ctime,
            permissions: '0' + (fileStats.mode & parseInt('777', 8)).toString(8)
          }

          if (isDirectory) {
            path.isDirectory = true
          } else {
            path.ext = extname(file);
          }

          data.push(path);
        } catch (e) {
          console.log(e)
          res.send(e)
        }
      })

      res.json(data)
    }
  })
})


app.get("/", (_, res) => res.send(`Application running on port ${port}.`))

app.listen(port, () => console.log(`Application running on port ${port}.`))
