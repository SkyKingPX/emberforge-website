"use client";
import {PageSection} from "@components/layoutStyles";
import styled from "styled-components";
import Link from "next/link";
import {Fragment, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

type member = {
	name: string;
	role: string;
	image: string;
	bio: string;
}

const team_members: member[] = [
	{
		name: "SkyKing_PX",
		role: "Team Lead",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Banikula",
		role: "Organization Manager",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Fox",
		role: "Community Manager",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Mikeland",
		role: "Accountant",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "The Panda Oliver",
		role: "Developer",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Kobalt",
		role: "Developer",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Kalarian",
		role: "Developer",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	},
	{
		name: "Gentra",
		role: "Lead of Content Creation",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	}
];

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
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
	
	gap: 4px;
	
	img {
		border-radius: 100rem;
	}
	
	.member-name {
		font-weight: bold;
		font-size: 1.5em;
		text-align: center;
	}
	
	.member-role {
		
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
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={member.image} alt={member.name}/>
				<p className={"member-name"}>{member.name}</p>
				<p className={"member-role"}>{member.role}</p>
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
		</Fragment>
	);
}