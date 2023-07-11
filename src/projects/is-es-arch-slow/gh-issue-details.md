Document es archiver load speed.

Metrics are needed for local, ess and serverless.

<details><summary>Systems Characteristics</summary>
<p>

50 executions per archive

### Instance Details

**Local**

- Mac OS X 13.4.1 (Ventura)

**ESS (cloud)**

- Version 8.8.1
- AWS - Paris (eu-west-3)
- 3 instances across 3 zones (eu-west-3a, eu-west-3b, eu-west-3c)
- KBN:
  - 1GB RAM

**Serverless (cloud)**

- Version 8.9.0
- AWS - Europe Central 1 (Frankfurt)
- 3 instances across 3 zones (eu-central-1a, eu-central-1b, eu-central-1c)
- KBN:
  - 1GB RAM

</p>
</details>

### x-pack/test/functional/es_archives/logstash_functional

|                            | Current es-archiver (seconds) | Improvement POC (seconds) |
| -------------------------- | ----------------------------- | ------------------------- |
| Local avg / min / max      | 5565 / 5114 / 6579            | Cell                      |
| ESS avg / min / max        | 29.4 / 24.1 / 71.9            | Cell                      |
| Serverless avg / min / max | 29995 / 24091 / 183402        | Cell                      |

#### `logstash_functional` Meta

<details><summary>Archive Info</summary>
<p>
Field Count: ?

Doc Count: 4634 + 4757 + 4614 (3 indices) = 14_005

</p>
</details>

### test/functional/fixtures/es_archiver/many_fields

|                            | Current es-archiver (seconds) | Improvement POC (seconds) |
| -------------------------- | ----------------------------- | ------------------------- |
| Local avg / min / max      | 933 / 861 / 1436              | Cell                      |
| ESS avg / min / max        | 4.0 / 3.3 / 12.6              | Cell                      |
| Serverless avg / min / max | 4379 / 3304 / 20180           | Cell                      |

#### `many_fields` Meta

<details><summary>Archive Info</summary>
<p>
Field Count: ?

Doc Count: 5_350

</p>
</details>

### x-pack/test/functional/es_archives/ml/farequote

|                            | Current es-archiver (seconds) | Improvement POC (seconds) |
| -------------------------- | ----------------------------- | ------------------------- |
| Local avg / min / max      | 36275 / 8432 / 517495         | Cell                      |
| ESS avg / min / max        | 76.1 / 47.6 / 612.8           | Cell                      |
| Serverless avg / min / max | 59139 / 49412 / 358432        | Cell                      |

#### `farequote` Meta

<details><summary>Archive Info</summary>
<p>
Field Count: 6

Doc Count: 86_274

</p>
</details>
