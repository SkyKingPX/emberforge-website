"use client";
import {PageSection} from "@components/layoutStyles";
import styled from "styled-components";
import Link from "next/link";
import {Fragment} from "react";
import Image from "next/image";
import {MemberModel} from "@/models/memberModel";
import {team_members} from "@/constants";

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
`;

export default function TeamPage() {
	function Member({member}: {member: MemberModel}) {
		return (
			<MemberButton href={`team/${member.slug}`} className={"btn"}>
				<Image src={member.image} alt={member.name} width={128} height={128} style={{borderRadius: "100rem", objectFit: "cover", width: "128px", aspectRatio: 1}}/>
				<p style={{fontWeight: "bold", fontSize: "1.5em"}}>{member.name}</p>
				<p>{member.role[0]}</p>
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