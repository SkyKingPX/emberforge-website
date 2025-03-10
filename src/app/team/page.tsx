"use client";
import {PageSection} from "@components/layoutStyles";
import styled from "styled-components";
import Link from "next/link";
import {Fragment, useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";

type member = {
	name: string;
	role: string[];
	image: string;
	bio: string;
}

const team_members: member[] = [
	{
		name: "SkyKing_PX",
		role: ["Team Lead", "Community Manager", "Lead Plugin Developer", "Mod Developer", "Documentation Writer", "Artist"],
		image: "https://cdn.discordapp.com/avatars/900313715583373312/21c8c9cd50768f5d66e9f218d25d0abd?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Banikula",
		role: ["Organization Manager", "Mod Developer", "Tester", "Support Team"],
		image: "https://cdn.discordapp.com/avatars/497828126366367764/95baa23bb66c77cf49d6d821b678092b?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Fox",
		role: ["Community Manager", "Lead Mod Developer"],
		image: "https://cdn.discordapp.com/avatars/1035289437275443242/f4c220595bda4d5be02c9ab75489a17b?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Mikeland",
		role: ["Accountant", "Mod Developer", "Modpack Developer", "Tester"],
		image: "https://cdn.discordapp.com/avatars/544582614837886976/10dee9e4a33d7f5dd7e7d175eacdcb4d?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "The Panda Oliver",
		role: ["Full-stack Maintainer", "Mod Developer"],
		image: "https://cdn.discordapp.com/avatars/371721537868398594/9c51c99fe6634b57da1f9eeb4f04c513?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Kobalt",
		role: ["Mod Developer", "Modpack Developer", "Artist"],
		image: "https://cdn.discordapp.com/avatars/995040689576497162/e3dc3c26f8abb1338e1d5f02dad8dd12?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Kalarian",
		role: ["Mod Developer", "Content Creator"],
		image: "https://cdn.discordapp.com/avatars/1324419835391901748/b63147a5ccc200b344fb5cdc509508f9?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Gentra",
		role: ["Lead of Content Creation"],
		image: "https://cdn.discordapp.com/avatars/857426011725758476/d6f5f6b3fb9197c8f58382a615d149d2?size=1024",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	}
];

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	gap: 1rem;

	justify-content: center;
	justify-self: center;

	padding: 2rem;
	width: 100%;
	max-width: 80rem;

	& > * {
		flex: 0 0 14rem;
	}
`;

const MemberButton = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	width: 100%;
	height: 100%;
	
	gap: 4px;
	
	.member-name {
		font-weight: bold;
		font-size: 1.5em;
		text-align: center;
	}
`;

export default function Team() {
	const [selectedMember, setSelectedMember] = useState<member>(team_members[0]);
	const searchParams = useSearchParams();
	const memberParam = searchParams.get("member");

	useEffect(() => {
		if (memberParam !== null && !isNaN(parseInt(memberParam)))
			setSelectedMember(team_members[parseInt(memberParam)]);
	}, [memberParam]);

	function Member({member}: {member: member}) {
		return (
			<MemberButton href={`?member=${team_members.indexOf(member)}`} className={"btn"}>
				<Image src={member.image} alt={member.name} width={128} height={128} style={{borderRadius: "100rem"}}/>
				<p className={"member-name"}>{member.name}</p>
				<p className={"member-role"}>{member.role[0]}</p>
			</MemberButton>
		);
	}

	return (
		<Fragment>
			<PageSection>
				<h1 style={{justifySelf: "center"}}>Meet the team</h1>
				<Grid>
					{
						team_members.map((value, index) => (<Member member={value} key={index}/>))
					}
				</Grid>
			</PageSection>
			<MemberDialog member={selectedMember} open={memberParam !== null}/>
		</Fragment>
	);
}

/* Dialog */

const Dialog = styled.div`
	display: block;
	
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	
	width: 100%;
	height: 100%;
	
	justify-items: center;
	align-content: center;
	
	pointer-events: none;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
	&.open {
		pointer-events: all;
		opacity: 100%;
	}
	
	.background {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		
		background-color: rgba(0, 0, 0, 0.5);
	}
`

const DialogContent = styled.div`
	background-color: var(--clr-bg-primary);
	
	border-radius: 1rem;
	border: 2px solid var(--clr-bg-secondary);
	
	padding: 1rem;
	
	z-index: 1;
`

function MemberDialog({member, open}: {member: member, open: boolean}) {
	const router = useRouter();

	function close() {
		router.push("?")
	}

	return (
		<Dialog className={open ? "open" : ""}>
			<div className={"background"} onClick={close}/>
			<DialogContent>
				<div style={{display: "flex", justifyContent: "center"}}>
					<Image src={member.image} alt={member.name} width={128} height={128} style={{borderRadius: "100rem"}}/>
					<div style={{display: "flex", flexDirection: "column", gap: "1rem", marginLeft: "1rem"}}>
						<h2>{member.name}</h2>
						<p>Roles: {member.role.join(" | ")}</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}