function strFindAll(patterns, txt) {
	let M = patterns.length;
	let N = txt.length;
	let positions = [];
	for(let i = 0; i <= N - M; i++) {
		let count = 1;
		for(let j = 0; j < M; j++) {
			if(txt[i + j] !== patterns[j]) {
				break;
			} 
			count++;
			if(count === M) {
				positions.push(i);
			}
		}
	}
	return positions;
}

let txt = 'AABAACAADAABABBBAABAA';
let patterns = 'AABA';
let matches = strFindAll(patterns, txt);
if(matches) {
	for(let v = 0; v < matches.length; v++) {
		console.log('Pattern found at index: ' + matches[v]);
	}
}