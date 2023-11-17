import { fetchAndCalculateChunks } from './utils.js';

export default async function downloadFileInChunks(fileUrl, numChunks) {
  let chunks = await fetchAndCalculateChunks(fileUrl, numChunks);

  let fetchPromises = [];
  for (let chunk of chunks) {
    let [startByte, endByte] = chunk;

    let headers = { Range: `bytes=${startByte}-${endByte}` };
    let chunkRequest = fetch(fileUrl, { headers });

    fetchPromises.push(chunkRequest);
  }

  let responses = await Promise.all(fetchPromises);
  let blobChunks = await Promise.all(
    responses.map(response => response.blob())
  );

  return new Blob(blobChunks);
}
