x ={
    "source": {
        "query": {
            "description": "Ok responses for jpg files",
            "filters": [
                {
                    "$state": {
                        "store": "appState"
                    },
                    "meta": {
                        "alias": null,
                        "disabled": false,
                        "index": "b15b1d40-a8bb-11e9-98cf-2bb06ef63e0b",
                        "key": "extension.raw",
                        "negate": false,
                        "params": {
                            "query": "jpg"
                        },
                        "type": "phrase",
                        "value": "jpg"
                    },
                    "query": {
                        "match": {
                            "extension.raw": {
                                "query": "jpg",
                                "type": "phrase"
                            }
                        }
                    }
                }
            ],
            "query": {
                "language": "kuery",
                "query": "response:200"
            },
            "title": "OKJpgs"
        },
        "references": [
        ],
        "type": "query",
        "updated_at": "2019-07-17T17:54:26.378Z"
    }
}
console.log(`\n### x: \n${JSON.parse(x, null, 2)}`);


o = { source:
        { query:
                { description: 'Ok responses for jpg files',
                    filters:
                        [ { '$state': { store: 'appState' },
                            meta:
                                { alias: null,
                                    disabled: false,
                                    index: 'b15b1d40-a8bb-11e9-98cf-2bb06ef63e0b',
                                    key: 'extension.raw',
                                    negate: false,
                                    params: [Object],
                                    type: 'phrase',
                                    value: 'jpg' },
                            query: { match: [Object] } } ],
                    query: { language: 'kuery', query: 'response:200' },
                    title: 'OKJpgs' },
            references: [],
            type: 'query',
            updated_at: '2019-07-17T17:54:26.378Z' } }
