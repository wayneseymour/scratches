const { Client, HttpConnection } = require('@elastic/elasticsearch');
const node = process.env.ES_HOST || 'http://elastic:changeme@localhost:9220';
const client = new Client({
  node,
  maxRetries: 5,
  requestTimeout: 60000,
  Connection: HttpConnection,
});

async function run () {
  await client.index({
    index: 'game-of-thrones',
    document: {
      character: 'Ned Stark',
      quote: 'Winter is coming.'
    }
  })
}
run().catch(console.log)
