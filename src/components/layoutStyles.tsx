"use client";
import styled from "styled-components";

export const PageSection = styled.section`
	width: 100%;
	max-width: 120rem;
	padding: 1rem;
	
	justify-self: center;
`;

export const PopupMenu = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;

	width: fit-content;
	height: fit-content;
	
	/* Background */
	&:before {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		
		width: 100%;
		height: 100%;

		background-color: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(5px);
	}
	
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
	
	pointer-events: none;
	
	&.open {
		opacity: 100%;
		pointer-events: all;
	}
`