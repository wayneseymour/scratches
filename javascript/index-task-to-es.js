const { Client, HttpConnection } = require("@elastic/elasticsearch");
const node = process.env.ES_HOST || "http://kibana_system:changeme@localhost:9220";
const client = new Client({
  node,
  maxRetries: 5,
  requestTimeout: 60000,
  Connection: HttpConnection,
});

async function run() {
  await client.index({
    index: ".kibana_task_manager_1",
    document: {
      id: "task:be7e1250-3322-11eb-94c1-db6995e84f6a",
      index: ".kibana_task_manager_1",
      source: {
        migrationVersion: {
          task: "7.16.0",
        },
        references: [],
        task: {
          attempts: 0,
          params:
            '{"spaceId":"user1","alertId":"0359d7fcc04da9878ee9aadbda38ba55"}',
          retryAt: "2020-11-30T15:43:39.626Z",
          runAt: "2020-11-30T15:43:08.277Z",
          scheduledAt: "2020-11-30T15:43:08.277Z",
          scope: ["testing"],
          startedAt: null,
          state: "{}",
          status: "idle",
          taskType: "alerting:0359d7fcc04da9878ee9aadbda38ba55",
        },
        type: "task",
        updated_at: "2020-11-30T15:43:08.277Z",
      },
    },
  });
}
run().catch(console.log);
