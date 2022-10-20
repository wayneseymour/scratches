 info [bazel_tools] installing Bazel tools
 succ [bazel_tools] all bazel tools are correctly installed
 info [bazel_tools] unable to read bazel remote cache key from vault, are you authenticated?
 info [bazel_tools] building packages will work, but will be slower in many cases.
 info [bazel_tools] reach out to Operations if you need assistance with this.
 info [bazel_tools] Error: Command failed with exit code 2: vault read -field=readonly-key secret/ui-team/kibana-bazel-remote-cache
      Error reading secret/ui-team/kibana-bazel-remote-cache: Error making API request.

      URL: GET https://secrets.elastic.co:8200/v1/secret/ui-team/kibana-bazel-remote-cache
      Code: 403. Errors:

      * permission denied
 info [bazel] Starting local Bazel server and connecting to it...
 info [bazel] INFO: Invocation ID: a6777937-b9be-482e-82c9-2fea1f521f9f
