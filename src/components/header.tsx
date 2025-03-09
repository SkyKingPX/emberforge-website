"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.png";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	justify-content: space-between;

	margin: calc(var(--spacing) * 2) calc(var(--spacing) * 4);

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, auto);
	}

	@media (max-width: 700px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin: calc(var(--spacing) * 4);
		gap: calc(var(--spacing) * 2);
	}

	@media (max-width: 450px) {
		align-items: flex-start;

		margin: calc(var(--spacing) * 2) calc(var(--spacing) * 4);

		ul {
			display: none;
		}
	}
`;

const StyledLink = styled(Link)`
	width: fit-content;

	padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);

	transition: background-color var(--default-transition-duration) var(--default-transition-timing-function);

	border-radius: var(--radius-lg);

	&:hover {
		background-color: rgba(0, 0, 0, 0.3);

		@media (prefers-color-scheme: dark) {
			background-color: rgba(255, 255, 255, 0.3);
		}
	}

	&:active {
		background-color: rgba(0, 0, 0, 0.2);

		@media (prefers-color-scheme: dark) {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}
`;

export default function Header() {
	// TODO: Add a hamburger menu for mobile
	return (
		<header>
			<StyledNav>
				<StyledLink href={"/"}>
					<div className={"flex flex-row items-center"}>
						<Image src={logo} alt={"EmberForge Logo"} className={"size-12"}/>
						<h1 className={"text-2xl"}>EmberForge</h1>
					</div>
				</StyledLink>
				<ul className={"flex flex-row gap-8 items-center justify-self-center"}>
					<li><StyledLink href={"/"}>Home</StyledLink></li>
					<li><StyledLink href={"/team"}>Team</StyledLink></li>
					<li><StyledLink href={"#"}>Projects</StyledLink></li>
					<li><StyledLink href={"#"}>Contact</StyledLink></li>
				</ul>
			</StyledNav>
			<hr/>
		</header>
	);
}