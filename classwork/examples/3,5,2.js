function noOne(){
	function filteredArray(arr, elem) {
		let newArr = [];
		// change code below this line
		for(let i= arr.length; i>=0; i--){
			if(typeof arr[i]=="object"){
				for(let j= arr[i].length; j>=0; j--){
					if(arr[i][j]==elem){
						arr[i].splice(j,1);
					}
				}
			}
			else if(arr[i]==elem){
				arr.splice(i,1);
			}
		}
		newArr = arr;
		// change code above this line
		return newArr;
	}

	// change code here to test different cases:
	console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

}
noOne();
function noTwo(){
	let myNestedArray = [
	// change code below this line
		[
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			]
		],
		[
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			]
		],
		[
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			]
		],
		[
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			],
			[
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				'deep',
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				],
				[
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					'deeper',
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method'],
					['loop', 'shift', 6, 'deepest', 1000, 'method']
				]
			]
		]
	// change code above this line
	];
	console.log(myNestedArray);
	console.log("have fun with that Mack");
}
noTwo();
function noThree(){
	let foods = {
	apples: 25,
	oranges: 32,
	plums: 28
	};
	// change code below this line
	foods.bananas = 13;
	foods.grapes = 35;
	foods.strawberries = 27;
	console.log(foods);
}
noThree();
function noFour(){
	let userActivity = {
		id: 23894201352,
		date: 'January 1, 2017',
		data: {
			totalUsers: 51,
			online: 42
		}
	};

	// change code below this line
	userActivity.data.online = 45;
	// change code above this line

	console.log(userActivity);

}
noFour();
function noFive(){
	let foods = {
		apples: 25,
		oranges: 32,
		plums: 28,
		bananas: 13,
		grapes: 35,
		strawberries: 27
	};
	// do not change code above this line

	function checkInventory(scannedItem) {
		// change code below this line
		let checkKeys = Object.keys(foods)
		let checkValues = Object.values(foods);
		for(let i=0; i<checkKeys.length; i++){
			if(checkKeys[i] == scannedItem){
				return checkValues[i];
			}
		}
		
	}

	// change code below this line to test different cases:
	console.log(checkInventory("apples"));


}
noFive();
