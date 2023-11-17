import downloadFileInChunks from './downloadFileInChunks.js';
import { getDownloadLinkForFile, extractFileName } from './utils.js';

let fileUrl = './random-100.txt';
let numChunks = 3;
let completeFileBlob = await downloadFileInChunks(fileUrl, numChunks);

let fileName = extractFileName(fileUrl);
let downloadLink = getDownloadLinkForFile(completeFileBlob, fileName);
document.body.appendChild(downloadLink);
