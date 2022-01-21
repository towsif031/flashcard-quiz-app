import { useState } from 'react';

const Flashcard = ({ flashcard }) => {
	const [flip, setFlip] = useState(false);

	return (
		<div onClick={() => setFlip(!flip)}>
			{flip ? flashcard.answer : flashcard.question}
		</div>
	);
};

export default Flashcard;
