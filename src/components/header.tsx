"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.png";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	justify-content: space-between;
	align-items: center;

	margin: .5rem 1rem;

	.logo {
		display: flex;
		flex-direction: row;

		align-items: center;

		img {
			height: 4em;
			aspect-ratio: 1/1;
		}

		h1 {
			font-size: 2em;
		}
	}
	
	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		
		font-size: 1.2em;
	}
	
	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, auto);
	}

	@media (max-width: 750px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		
		gap: 1rem;
	}

	@media (max-width: 450px) {
		align-items: flex-start;

		ul {
			display: none;
		}
	}
`;

export default function Header() {
	// TODO: Add a hamburger menu for mobile
	return (
		<header>
			<StyledNav>
				<Link href={"/"} className={"btn"}>
					<div className={"logo"}>
						<Image src={logo} alt={"EmberForge Logo"}/>
						<h1>EmberForge</h1>
					</div>
				</Link>
				<ul>
					<li><Link href={"/"} className={"btn"}>Home</Link></li>
					<li><Link href={"/team"} className={"btn"}>Team</Link></li>
					<li><Link href={"#"} className={"btn"}>Projects</Link></li>
					<li><Link href={"#"} className={"btn"}>Contact</Link></li>
				</ul>
			</StyledNav>
			<hr/>
		</header>
	);
}