/*
 * Copyright (c) 2018, Arm Limited and affiliates.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var run = function(){
	var n = 0;
	setInterval(function(){
		console.log("**TEST " + n + "**");
		n++;
	},1000)	

	setTimeout(function(){
		console.log("Exiting!");
		process.exit(101);
	},5000)

}

setTimeout(function(){
	console.log("!!OK!!") // send OK string to maestro waiting for success message
	run()
},2000)

