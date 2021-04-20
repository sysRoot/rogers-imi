import React from "react";
import { Container, Form, Label, Radio } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { BatteryContext } from "../contexts";
const QuestionItem = () => {
	const params = useParams();
	const id = params.id || 1;
	const { questionSet, setAnswers } = React.useContext(BatteryContext);

	return parseInt(id) >= 57 ? (
		<Container>
			<main>
				<p>Chuck Norris tried that once</p>
				<div className="quesiton-nav-btns">
					{parseInt(id) >= 57 && (
						<Link to={`/question/1`}>
							<p>Go back to start!</p>
						</Link>
					)}
				</div>
			</main>
		</Container>
	) : (
		<Container>
			<main>
				<p>{questionSet[id - 1].question}</p>
				<p>
					Rarely (1) Occasionally (2) Sometimes (3) Usually (4) Almost Always
					(5)
				</p>
				<Form className="question-scoring">
					<Form.Group className="question-radios">
						<Label for="select-score">Select A Score</Label>
						{questionSet[id - 1].radio.map((currentRadio, idx) => (
							<Form.Field>
								<Radio
									label={idx + 1}
									name="radio-score-question"
									checked={currentRadio}
									className="select-score"
									value={idx + 1}
									onChange={() =>
										setAnswers([
											...questionSet.map((cur, qIdx) => {
												return qIdx + 1 === parseInt(id)
													? {
															...cur,
															score: idx + 1,
															radio: cur.radio.map((option, radioIdx) =>
																idx === radioIdx ? !option : false
															),
													  }
													: cur;
											}),
										])
									}
								/>
							</Form.Field>
						))}
					</Form.Group>
				</Form>
				<div className="question-nav-btns">
					{parseInt(id) !== 1 && (
						<Link to={`/question/${parseInt(id) - 1}`}>
							<p>Go back</p>
						</Link>
					)}
					{parseInt(id) !== 56 && (
						<Link to={`/question/${parseInt(id) + 1}`}>
							<p>Go forward</p>
						</Link>
					)}
					{parseInt(id) === 56 && (
						<Link to={`/results`}>
							<p>Results</p>
						</Link>
					)}
				</div>
			</main>
		</Container>
	);
};

export default QuestionItem;
