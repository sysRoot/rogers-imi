import React from "react";
import { Container } from "semantic-ui-react";
import { BatteryContext } from "../contexts";
import * as V from "victory";
const Final = () => {
	const { questionSet } = React.useContext(BatteryContext);
	const [score] = React.useState([
		{
			x: "Ling.",
			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Linguistic" ? acc + question.score : acc + 0,
				0
			),
		},
		{
			x: "Musi.",
			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Musical" ? acc + question.score : acc + 0,
				0
			),
		},
		{
			x: "L & M.",
			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Logic and Math" ? acc + question.score : acc + 0,
				0
			),
		},
		{
			x: "Spa.",

			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Spatial" ? acc + question.score : acc + 0,
				0
			),
		},
		{
			x: "B & K.",
			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Bodily and Kinesthetic"
						? acc + question.score
						: acc + 0,
				0
			),
		},
		{
			x: "Intr.",
			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Intrapersonal" ? acc + question.score : acc + 0,
				0
			),
		},
		{
			x: "Inte.",
			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Interpersonal" ? acc + question.score : acc + 0,
				0
			),
		},
		{
			x: "Natu.",

			y: questionSet.reduce(
				(acc, question) =>
					question.type === "Naturalist" ? acc + question.score : acc + 0,
				0
			),
		},
	]);
	return (
		<Container>
			<section id="results-grid">
				<div id="results-title"><h3>Results</h3></div>
				<div id="results">
					<p>Linguistics - {score[0].y}</p>
					<p>Musical - {score[1].y}</p>
					<p>Logic & Math - {score[2].y}</p>
					<p>Spatial - {score[3].y}</p>
					<p>Bodily & Kinesthetic - {score[4].y}</p>
					<p>Intrapersonal - {score[5].y}</p>
					<p>Interpersonal - {score[6].y}</p>
					<p>Naturalist - {score[7].y}</p>
				</div>
				<div id="results-graph">
					<V.VictoryChart
						theme={V.VictoryTheme.material}
						domainPadding={{ y: 35 }}
					>

						<V.VictoryBar
							barWidth={8}
							alignment="middle"
							style={{
								data: { fill: "#007700" },
							}}
							data={score}
						/>
						<V.VictoryAxis
							tickFormat={(x) => x}
							style={{
								tickLabels: {
									fontSize: 8,
									angle: 0,
									padding: 5,
								},
							}}
						/>
					</V.VictoryChart>
				</div>
				<div id="results-aptitude">
					{score[0].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Linguistic category
							with a score of {score.ling}
						</p>
					)}
					{score[1].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Musical category with a
							score of {score.musi}
						</p>
					)}
					{score[2].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Logic and Math category
							with a score of {score.letm}
						</p>
					)}
					{score[3].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Spatial category with a
							score of {score.spat}
						</p>
					)}
					{score[4].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Bodily and Kinesthetic
							category with a score of {score.betk}
						</p>
					)}
					{score[5].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Intrapersonal category
							with a score of {score.intr}
						</p>
					)}
					{score[6].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Interpersonal category
							with a score of {score.inte}
						</p>
					)}
					{score[7].y >= 25 && (
						<p>
							You have shown a preferential aptitude in: Naturalist category
							with a score of {score.natu}
						</p>
					)}
				</div>
			</section>
		</Container>
	);
};

export default Final;
