var fs = require('fs');
var path = require('path');

function walk(root) {
	var fileList = []

	var rootFiles = fs.readdirSync(root);

	rootFiles.forEach(function(item) {
		
		var current_path = path.resolve(root, item)
		var temp = {};

		if(fs.statSync(current_path).isDirectory()) {
			// 目录
			var child_fileList = walk(current_path)
			fileList.push(
				{
					type: 'directory',
					name: current_path,
					children: child_fileList 
				}
			)
		}
		else {
			// 文件
			fileList.push({
				type: 'file',
				name: current_path,
			})
		}
	})

	return fileList
}

function exec(root) {
	var children = walk(root)

	return {
		type: 'root',
		name: root,
		children: children
	}
}

module.exports = exec


