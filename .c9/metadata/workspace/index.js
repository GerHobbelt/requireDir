{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":19,"position":19,"stack":[[{"group":"doc","deltas":[{"start":{"row":35,"column":12},"end":{"row":35,"column":16},"action":"remove","lines":["exts"]},{"start":{"row":35,"column":12},"end":{"row":35,"column":15},"action":"insert","lines":["map"]},{"start":{"row":35,"column":20},"end":{"row":40,"column":36},"action":"remove","lines":["keys(require.extensions);","        var map = _.map(allFiles, function(f) { ","            return { ","                \"name\": f, ","                \"ext\": Path.extname(f),","                \"ord\": _.indexOf(ext"]},{"start":{"row":35,"column":20},"end":{"row":36,"column":42},"action":"insert","lines":["filter(allFiles, function(f) { ","            return _.has(require.extension"]},{"start":{"row":36,"column":61},"end":{"row":37,"column":4},"action":"remove","lines":["","    "]},{"start":{"row":36,"column":61},"end":{"row":37,"column":0},"action":"insert","lines":["; ",""]},{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"remove","lines":["}"]},{"start":{"row":38,"column":16},"end":{"row":38,"column":22},"action":"remove","lines":["filter"]},{"start":{"row":38,"column":16},"end":{"row":38,"column":23},"action":"insert","lines":["indexBy"]},{"start":{"row":38,"column":42},"end":{"row":38,"column":43},"action":"remove","lines":[" "]},{"start":{"row":39,"column":19},"end":{"row":39,"column":31},"action":"remove","lines":["f.ord >= 0; "]},{"start":{"row":39,"column":19},"end":{"row":39,"column":53},"action":"insert","lines":["Path.basename(f, Path.extname(f));"]},{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"insert","lines":["",""]},{"start":{"row":42,"column":8},"end":{"row":44,"column":9},"action":"remove","lines":["map = _.groupBy(map, function(f) {","            return Path.basename(f.name, f.ext);","        }"]},{"start":{"row":42,"column":8},"end":{"row":42,"column":63},"action":"insert","lines":["console.log('map:' + JSON.stringify(map) || 'undefined'"]},{"start":{"row":45,"column":24},"end":{"row":45,"column":25},"action":"insert","lines":[" "]},{"start":{"row":46,"column":41},"end":{"row":46,"column":84},"action":"remove","lines":["_.min(m, function(i) { return i.ord }).name"]},{"start":{"row":46,"column":41},"end":{"row":46,"column":42},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":23},"end":{"row":46,"column":24},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":24},"end":{"row":46,"column":25},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":25},"end":{"row":46,"column":27},"action":"insert","lines":["co"]},{"start":{"row":46,"column":27},"end":{"row":46,"column":32},"action":"insert","lines":["ntent"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":32},"end":{"row":46,"column":34},"action":"insert","lines":["s:"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":34},"end":{"row":46,"column":35},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":55},"end":{"row":46,"column":56},"action":"insert","lines":["}"]},{"start":{"row":46,"column":56},"end":{"row":46,"column":57},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":25},"end":{"row":46,"column":29},"action":"insert","lines":["file"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":29},"end":{"row":46,"column":31},"action":"insert","lines":[": "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":31},"end":{"row":46,"column":33},"action":"insert","lines":[", "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":31},"end":{"row":46,"column":32},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":25},"end":{"row":45,"column":26},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":25},"end":{"row":45,"column":26},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":25},"end":{"row":45,"column":26},"action":"insert","lines":["n"]},{"start":{"row":45,"column":25},"end":{"row":45,"column":26},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":23},"end":{"row":46,"column":44},"action":"remove","lines":["{ file: m, contents: "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":15},"end":{"row":46,"column":36},"action":"insert","lines":["{ file: m, contents: "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":64},"end":{"row":46,"column":66},"action":"remove","lines":["} "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":65},"end":{"row":46,"column":66},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":44,"column":0},"action":"remove","lines":["        console.log('map:' + JSON.stringify(map) || 'undefined');","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["        console.log('map:' + JSON.stringify(map) || 'undefined');","",""]}]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":420,"scrollleft":0,"selection":{"start":{"row":46,"column":62},"end":{"row":46,"column":62},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":29,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426129993000,"hash":"927350415c679ffdb0c240951a648486a6b1c33f"}