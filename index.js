// const buenos_aires = require('./data/n/AR//Buenos Aires.json')

const path = require('path');
const fs = require('fs');

data = {}

function getallN(){

	const directoryPath = path.join('./data', '/n');

	fs.readdirSync(directoryPath).forEach(ct => {
		const cit = path.join(directoryPath, ct);

		if (data[ct] == undefined)
			data[ct] = {}


		fs.readdirSync(cit).forEach(c => {
			file = c.split('.')[0]

			const fl = path.join(cit, c)
			dt = JSON.parse(fs.readFileSync(fl))

			data[ct][file] = dt
		});
	});

	return data
}

// getallN()

// fs.writeFileSync('./data/parsed/n/data.js', JSON.stringify(data))

// console.log(data.AR['Buenos Aires']['o3_median']['1577836800000'])


// console.log(buenos_aires.o3_median[1577836800000])


// ct_data = {}

// const ct = require('./data/cities.json')

// for (let x in ct){

// 	if (ct_data[ct[x].name + ct[x].country] == undefined)
// 		ct_data[ct[x].name + ct[x].country] = {}
// 	ct_data[ct[x].name + ct[x].country].lat = ct[x].lat
// 	ct_data[ct[x].name + ct[x].country].lng = ct[x].lng
// 	ct_data[ct[x].name + ct[x].country].country = ct[x].country
// }


// fs.writeFileSync('./data/ct_data.js', JSON.stringify(ct_data))

const d = require('./data/parsed/n.json')

data = {}

function getall(){

	for (var c in d){
		for(var ct in d[c]){
			if(data[c] == undefined)
				data[c] = {}
			const fl = './data/datasets/' + c + '/' + ct + '.json'
			dt = fs.readFileSync(fl)

			data[c][ct] = JSON.parse(dt)
		}
	}

}

getall()
fs.writeFileSync('./data/parsed/all.js', JSON.stringify(data))