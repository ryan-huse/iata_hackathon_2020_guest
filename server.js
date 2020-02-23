const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const {
  BlobServiceClient,
  StorageSharedKeyCredential
} = require("@azure/storage-blob");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// [Node.js only] A helper method used to read a Node.js readable stream into string
async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", data => {
      chunks.push(data.toString());
    });
    readableStream.on("end", () => {
      resolve(chunks.join(""));
    });
    readableStream.on("error", reject);
  });
}

// API calls
app.get("/api/hello", async (req, res) => {
  const account = "iatahackathonstorage";
  const accountKey =
    "tDmDvkKhrTDPIf3WuM40GfVuDefqc3YC41mcU39UkHn2GZrDZ09bLRV4fIpDLTylK5dWeNiESKY58DfmZU2bAg==";
  const sharedKeyCredential = new StorageSharedKeyCredential(
    account,
    accountKey
  );

  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential
  );

  const containerName = "requests";

  const containerClient = blobServiceClient.getContainerClient(containerName);
  i = 1;
  var imageNames = [];
  for await (const blob of containerClient.listBlobsFlat()) {
    if (blob.name.startsWith(req.query.barcodeID + "/")) {
      imageNames.push(blob.name);
      console.log(`Blob ${i++}: ${blob.name}`);
    }
  }
  var promises = imageNames.map(async element => {
    let blobClient = containerClient.getBlobClient(element);
    // Get blob content from position 0 to the end
    // In Node.js, get downloaded data by accessing downloadBlockBlobResponse.readableStreamBody
    let downloadBlockBlobResponse = await blobClient.download();
    let metadata = downloadBlockBlobResponse.metadata;
    let downloaded = await streamToString(
      downloadBlockBlobResponse.readableStreamBody
    );
    return {
      data: downloaded,
      date: element.replace(req.query.barcodeID + "/", ""),
      metadata: {
        airline: metadata.airline,
        airport: metadata.airport
      }
    };
  });
  const images = await Promise.all(promises);
  res.send(images);
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
