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

#### Field Count

?

#### Doc Count

4634 + 4757 + 4614 (3 indices) = 14005

|                            | Current es-archiver (seconds) | Improvement POC (seconds) |
| -------------------------- | ----------------------------- | ------------------------- |
| Local avg / min / max      | 5565 / 5114 / 6579            | Cell                      |
| ESS avg / min / max        | 29.4 / 24.1 / 71.9            | Cell                      |
| Serverless avg / min / max | 29995 / 24091 / 183402        | Cell                      |

### test/functional/fixtures/es_archiver/many_fields

#### Field Count

?

#### Doc Count

5350

|                            | Current es-archiver (seconds) | Improvement POC (seconds) |
| -------------------------- | ----------------------------- | ------------------------- | --- |
| Local avg / min / max      | 933 / 861 / 1436              | Cell                      |
| ESS avg / min / max        | 4.0 / 3.3 / 12.6              | Cell                      |     |
| Serverless avg / min / max | 4379 / 3304 / 20180           | Cell                      |

### x-pack/test/functional/es_archives/ml/farequote

#### Field Count

6

#### Doc Count

86274

|                            | Current es-archiver (seconds) | Improvement POC (seconds) |
| -------------------------- | ----------------------------- | ------------------------- |
| Local avg / min / max      | 36275 / 8432 / 517495         | Cell                      |
| ESS avg / min / max        | 46161 / 42851 / 59567         | Cell                      |
| Serverless avg / min / max | 59139 / 49412 / 358432        | Cell                      |

<details><summary>Local Run Details</summary>
<p>

```
### r:
{
  "name": "x-pack/test/functional/es_archives/logstash_functional",
  "avg": 5565,
  "min": 5114,
  "max": 6579
}

### r:
{
  "name": "test/functional/fixtures/es_archiver/many_fields",
  "avg": 933,
  "min": 861,
  "max": 1436
}

### r:
{
  "name": "x-pack/test/functional/es_archives/ml/farequote",
  "avg": 36275,
  "min": 8432,
  "max": 517495
}
```

</p>
</details>

<details><summary>ESS Run Details</summary>
<p>

```
λλλ FINAL METRICS @ Jul 11, 2023, 2:16 PM

x-pack/test/functional/es_archives/logstash_functional
| ESS avg / min / max | 29.4 / 24.1 / 71.9 | Cell |


test/functional/fixtures/es_archiver/many_fields
| ESS avg / min / max | 4.0 / 3.3 / 12.6 | Cell |


x-pack/test/functional/es_archives/ml/farequote
| ESS avg / min / max | 76.1 / 47.6 / 612.8 | Cell |
```

</p>
</details>

<details><summary>Serverless Run Details</summary>
<p>

```
λλλ Avg, Min, and Max:
{
  "name": "x-pack/test/functional/es_archives/logstash_functional",
  "avg": 29995,
  "min": 24091,
  "max": 183402
}

λλλ Avg, Min, and Max:
{
  "name": "test/functional/fixtures/es_archiver/many_fields",
  "avg": 4379,
  "min": 3304,
  "max": 20180
}

λλλ Avg, Min, and Max:
{
  "name": "x-pack/test/functional/es_archives/ml/farequote",
  "avg": 59139,
  "min": 49412,
  "max": 358432
}
```

</p>
</details>
