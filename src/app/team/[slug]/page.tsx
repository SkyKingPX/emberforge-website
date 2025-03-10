import {team_members} from "@/constants";
import {notFound} from "next/navigation";
import {Fragment} from "react";
import Image from "next/image";
import styles from "@styles/pages/memberSite.module.scss"

interface Props {
	params: Promise<{
		slug: string;
	}>;
}

export default async function MemberPage({params}: Props) {
	const {slug} = await params;
	const member = team_members.find(member => member.slug === slug);
	if (!member) notFound();

	return (
		<Fragment>
			<div className={`${styles.profileSection} page-section-medium`}>
				<Image src={member.image} alt={member.name} width={128} height={128} style={{borderRadius: "100rem"}}/>
				<div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
					<h1>{member.name}</h1>
					<p><strong>Roles:</strong> {member.role.join(" | ")}</p>
				</div>
			</div>
			<hr/>
			<div className={`${styles.section} page-section-medium`}>
				<h2>About Me</h2>
				<p>{member.bio}</p>
			</div>
			<hr/>
			<div className={`${styles.section} page-section-medium`}>
				{/* TODO: Grab all projects this member has made from both CurseForge and Modrinth */}
				<h2>Projects (TBD)</h2>
			</div>
		</Fragment>
	);
}