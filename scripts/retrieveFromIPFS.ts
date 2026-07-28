async function main() {
  const cid = "QmT4vDEhCK7DVCMMtWLKmGuTrwWfLUugqctzck7TYo8a7g";
  const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
 
  const response = await fetch(url);
  const text = await response.text();
 
  console.log("Retrieved content:", text);
}
 
main().catch(console.error);
