import styled, { css } from "styled-components";
import { ResetStyle, GlobalStyle } from "../src/components/globalStyle";
import Content from "./components";

const colorGrey = css`
	color: rgba(75, 85, 99, 1);
`;

const colorBlue = css`
	color: rgba(79, 70, 229, 1);
`;

const Main = styled.main`
	.text-blue {
		${colorBlue}
	}

	.bold {
		font-weight: 700;
	}

	> .title {
		${colorGrey}
		font-size: 16px;
		text-align: center;
		margin-top: 6rem;
	}
	margin-bottom: 50px;
`;

const HeaderDesc = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 8vw;

	> :first-child {
		width: 60%;
		padding: 1rem 2rem 1rem 0;
		h1 {
			display: grid;
			> span:first-child {
				${colorGrey}
				line-height: 1.8;
				font-size: 16px;
			}
			> span:last-child {
				line-height: 1.2;
				font-size: 3.75rem;
			}
		}

		P {
			${colorGrey}
			line-height:1.5;
			font-weight: 500;
			margin: 1.5rem 0;
			font-size: 16px;
		}

		@media (min-width: 1200px) {
			max-width: 600px;
		}
	}

	> :last-child {
		width: 40%;
		padding: 1rem 1rem;

		@media (max-width: 500px) {
			padding: 0;
		}

		@media (min-width: 1200px) {
			max-width: 400px;
		}
		.panel {
			background: #404040;
			width: 370px;
			height: 275px;
			border-radius: 10px;
			.header {
				display: flex;
				vertical-align: middle;
				height: 40px;
				border-bottom: 1px solid #535353;
				padding-left: 1rem;
				.circle {
					margin: auto 0 auto 10px;
					height: 12px;
					width: 12px;
					border-radius: 50%;
					border: 2px solid;
				}

				.border-green {
					border-color: rgba(74, 222, 128, 1);
				}

				.border-yellow {
					border-color: rgba(251, 191, 36, 1);
				}

				.border-red {
					border-color: rgba(239, 68, 68, 1);
				}
			}
			.content {
				display: flex;
				margin-top: 1rem;
				line-height: 1.8;
				code {
					white-space: pre-wrap;
					color: white;
					letter-spacing: 1px;
				}

				> :first-child {
					margin-left: 1rem;
					opacity: 0.5;
					color: #c0c0c0;
					width: 18px;
					text-align: right;
				}

				> :last-child {
					margin-left: 2rem;
					width: calc(100% - 18px);
				}

				.green {
					color: #a7e22e;
				}

				.red {
					color: #f92572;
				}

				.purple {
					color: #ae81ff;
				}

				.blue {
					color: #65d9ef;
				}

				.space-2 {
					margin-left: 2rem;
				}

				.space-4 {
					margin-left: 4rem;
				}
			}
		}
	}

	@media (max-width: 910px) {
		display: block;
		> :first-child,
		> :last-child {
			width: 100%;
		}

		> :first-child {
			padding: 1rem 5vw;
		}

		> :last-child {
			.panel {
				margin: 0 auto;
			}
		}
	}

	@media (max-width: 500px) {
		margin: 2rem 0;
	}
`;

function App() {
	return (
		<>
			<ResetStyle />
			<GlobalStyle />
			<Main>
				<HeaderDesc>
					<div>
						<h1>
							<span>Challenge 100</span>
							<span className="bold">
								What is <span className="text-blue">this?</span>
							</span>
						</h1>
						<p>
							I plan to write HTML and{" "}
							<span className="text-blue bold">
								Styled-Component
							</span>{" "}
							snippets as a creative learning process for myself.
						</p>
						<p>
							I'll use{" "}
							<span className="text-blue bold">VSCode</span> to
							write and save my code every day on this project.
						</p>
						<p>
							Currently, all ideas come from{" "}
							<a
								className="text-blue bold"
								href="https://100dayscss.com">
								100 DAYS CSS Challenge
							</a>
							.
						</p>
					</div>
					<div>
						<div className="panel">
							<div className="header">
								<div className="circle border-red"></div>
								<div className="circle border-yellow"></div>
								<div className="circle border-green"></div>
							</div>
							<div className="content">
								<div>{`
									1
									2
									3
									4
									5
									6
									7
									8
									9
									10
								`}</div>
								<code>
									<span className="red">for </span>
									<span className="purple">(</span>
									<span className="blue">let</span> work
									<span className="red">=</span>1; work
									<span className="red">{`<=`}</span>100; work
									<span className="red">++</span>
									<span className="purple">{`) {`}</span>
									<br />
									<span className="space-2 green">
										findAnIdea
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 green">
										writeHTML
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 green">
										writeStyledComponent
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 green">
										beHappy
									</span>
									<span className="blue">()</span>;
									<br />
									<br />
									<span className="space-2 red">if </span>
									<span className="blue">(</span>
									work
									<span className="red">===</span>
									<span className="purple">100</span>
									<span className="blue">{`) {`}</span>
									<br />
									<span className="space-4 green">
										celebrate
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 blue">{`}`}</span>
									<br />
									<span className="purple">{`}`}</span>
									<br />
								</code>
							</div>
						</div>
					</div>
				</HeaderDesc>
				<p className="title bold">My 100 challenge</p>
				<Content />
			</Main>
		</>
	);
}

export default App;
