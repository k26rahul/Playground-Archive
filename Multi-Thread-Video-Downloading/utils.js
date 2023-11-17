function splitFileSizeIntoChunks(totalSizeBytes, numChunks) {
  let remainder = totalSizeBytes % numChunks;
  let chunkSize = (totalSizeBytes - remainder) / numChunks;

  let startByte = 0;
  let chunks = [];
  for (let i = 0; i < numChunks; i++) {
    let endByte = startByte + chunkSize - 1;

    if (i === numChunks - 1) {
      endByte += remainder;
    }

    chunks.push([startByte, endByte]);
    startByte = endByte + 1;
  }

  return chunks;
}

export async function fetchAndCalculateChunks(fileUrl, numChunks) {
  let response = await fetch(fileUrl, { method: 'HEAD' });
  let totalSizeBytes = parseInt(response.headers.get('Content-Length'));

  return splitFileSizeIntoChunks(totalSizeBytes, numChunks);
}

export function extractFileName(fileUrl) {
  let urlObject = new URL(fileUrl, location.href);
  let pathname = urlObject.pathname;

  return pathname.substring(pathname.lastIndexOf('/') + 1);
}

export function getDownloadLinkForFile(completeFileBlob, fileName) {
  let downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(completeFileBlob);
  downloadLink.download = fileName;
  downloadLink.textContent = 'Download Complete File';

  return downloadLink;
}
