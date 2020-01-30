import React from 'react';
import {Button} from 'react-bootstrap';

function Result({ result, saveMovie}) {
	return (
		<div className="result">
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
			<Button variant="danger" onClick={() => saveMovie(result.Title, result.Poster)}>Save To Profile</Button>
		</div>
	)
}

export default Result
