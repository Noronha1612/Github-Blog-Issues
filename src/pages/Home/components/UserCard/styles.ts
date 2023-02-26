import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 2rem;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.baseProfile};

	display: flex;
`

export const AvatarImage = styled.img`
	max-height: 150px;
	height: 100%;
	aspect-ratio: 1;
	border-radius: 10px;

	margin: 0 2rem 0 0.5rem;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	.flex-sp-btw {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& > div {
		margin-bottom: 0.5rem;

		a {
			text-decoration: none;
			text-transform: uppercase;
			color: ${({ theme }) => theme.primary};
			font-size: 0.75rem;
			font-weight: 700;
			line-height: 160%;

			display: flex;
			gap: 0.5rem;
			align-items: center;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	footer {
		flex: 1;
		display: flex;
		align-items: flex-end;
		gap: 1.5rem;
	}

	h1 {
		color: ${({ theme }) => theme.baseTitle};
		font-size: 1.5rem;
		font-weight: 700;
	}
	p {
		color: ${({ theme }) => theme.baseText};
		font-size: 1rem;
	}
	span {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: ${({ theme }) => theme.baseSubtitle};
		font-size: 1rem;

		svg {
			color: ${({ theme }) => theme.baseLabel};
		}
	}
`