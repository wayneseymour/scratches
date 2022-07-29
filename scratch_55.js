"{\"index\":\".kibana\",\"size\":0,\"body\":{\"aggs\":{\"savedobjs\":{\"terms\":{\"field\":\"type\"}}}}}"

let x = JSON.parse("{\"index\":\".kibana\",\"size\":0,\"body\":{\"aggs\":{\"savedobjs\":{\"terms\":{\"field\":\"type\"}}}}}") /*?*/

JSON.stringify(x) /*?*/
