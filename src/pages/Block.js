import React from 'react';
import IMG from "./../assets/ft2.png"
const Block = () => {
  return (
    <div>
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 6000" width="6000" height="6000">
	<title>ft2</title>
	<defs>
		<image width="6000" height="6000" id="img1" href={IMG}/>
	</defs>
	<style>
		.s0  
	</style>
	<g id="Layer 1">
		<use id="Background" href="#img1" transform="matrix(1,0,0,1,0,0)"/>
		<path style={{fill: '#ffffff', stroke: '#000000', strokeMiterlimit:'10'}}id="Shape 1" fill-rule="evenodd" class="s0" d="m1978 4817l4 125 1176-50 308 3 102 53 195 70 22-70-201-111-118-62-131-19-402 33-606 36z"/>
	</g>
</svg>
    </div>
  );
};

export default Block;
