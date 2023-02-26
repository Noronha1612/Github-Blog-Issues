import styled from "styled-components";

export const StyledPageCard = styled.div`
	width: 100%;
	padding: 2rem;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.baseProfile};

	display: flex;
`

export const StyledPageCardFooter = styled.footer`
	flex: 1;
	display: flex;
	align-items: flex-end;
	gap: 1.5rem;

	& > span {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: ${({ theme }) => theme.baseSubtitle};
		font-size: 1rem;

		& > svg {
			color: ${({ theme }) => theme.baseLabel};
		}
	}
`