import React from 'react';
import Card from './Card';

export default ({index, items, children}) => 
	<article key={index} className="list">
		<header>
			<h2>{children}</h2>
		</header>
		{items.map((item, index) => <Card key={index} {...item} />)}
	</article>