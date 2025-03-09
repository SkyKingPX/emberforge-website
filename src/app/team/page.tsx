import {PageSection} from "@components/layouts";

const team_members = [
	{
		name: "John Doe",
		role: "Founder",
		image: "/team/profiles/john_doe.jpg",
		bio: "John is the founder of EmberForge and has over 10 years of experience in the tech industry.",
	}
]

export default function Team() {
	return (
		<PageSection>
			<h1>Meet the team</h1>
			<p>Meet our amazing team!</p>
		</PageSection>
	);
}