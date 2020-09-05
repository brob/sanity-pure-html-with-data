const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: "qboik9dw",
  dataset: "production",
  useCdn: true 
})

module.exports = client;