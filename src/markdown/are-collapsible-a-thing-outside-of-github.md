# Got this from a pr at work


As we are transitioning to the new framework it would be nice to be able to do the following with the QAF framework:

- Create certain roles for Cases. Specifically the following:

<details><summary>Roles</summary>

```
return [
    {
      name: "cases_all",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              observabilityCases: ["all"],
              siem: ["all"],
              securitySolutionCases: ["all"],
              actions: ["all"],
              generalCases: ["all"],
              ml: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "cases_obs_only",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              observabilityCases: ["all"],
              siem: ["all"],
              actions: ["all"],
              ml: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "cases_sec_only",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              siem: ["all"],
              securitySolutionCases: ["all"],
              actions: ["all"],
              ml: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "cases_read",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              observabilityCases: ["read"],
              siem: ["all"],
              securitySolutionCases: ["read"],
              actions: ["all"],
              generalCases: ["read"],
              ml: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "cases_none",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              siem: ["all"],
              actions: ["all"],
              ml: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "cases_no_delete",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              observabilityCases: ["minimal_all"],
              siem: ["all"],
              securitySolutionCases: ["minimal_all"],
              actions: ["all"],
              generalCases: ["minimal_all"],
              ml: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "cases_delete_only",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              observabilityCases: ["minimal_read", "cases_delete"],
              siem: ["all"],
              securitySolutionCases: ["minimal_read", "cases_delete"],
              actions: ["all"],
              generalCases: ["minimal_read", "cases_delete"],
              ml: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "cases_no_connectors",
      body: {
        elasticsearch,
        kibana: [
          {
            spaces: ["*"],
            base: [],
            feature: {
              siem: ["all"],
              securitySolutionCases: ["all"],
              logs: ["all"],
              infrastructure: ["all"],
              apm: ["all"],
              uptime: ["all"],
              observabilityCases: ["all"],
              generalCases: ["all"],
            },
          },
        ],
      },
    },
    {
      name: "alerts_none",
      body: {
        elasticsearch,
        kibana: [
          {
            base: [],
            feature: {
              observabilityCases: ["all"],
              securitySolutionCases: ["all"],
              generalCases: ["all"],
              actions: ["all"],
            },
            spaces: ["*"],
          },
        ],
      },
    },
    {
      name: "alerts_read_only",
      body: {
        elasticsearch,
        kibana: [
          {
            base: [],
            feature: {
              observabilityCases: ["all"],
              securitySolutionCases: ["all"],
              generalCases: ["all"],
              siem: ["read"],
              logs: ["read"],
              infrastructure: ["read"],
              apm: ["read"],
              uptime: ["read"],
            },
            spaces: ["*"],
          },
        ],
      },
    },
  ];
```
</details> 

- Be able to configure from the CLI how many cases with how many comments and user actions you can create
- Create a case (can be part of the RAC task) where it has all possible user actions. These are: edit the title, edit the description, change the status to all possible values, change the severity to all possible values,  assign and deassign a user, attach one alerts and multiple alerts, add some comments, add a lens embeddable and a timeline to a comment, add all ML embeddable, add an OsQuery, and an IoC, add a connector with some fields, push the connector (fake), attach a file, remove a file, delete a comment, delete some alerts
