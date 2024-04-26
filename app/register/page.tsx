import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

export default function AboutPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="flex flex-col rounded gap-y-4 border p-4 w-80">
				<h1 className="text-lg font-bold">Login</h1>
				<Input
					type="email"
					label="Email"
					className="max-w-xs"
					size="sm"
				/>
				<Input
					type="text"
					label="Nickname"
					className="max-w-xs"
					size="sm"
				/>
				<Input
					type="password"
					label="Password"
					className="max-w-xs"
					size="sm"
				/>
				<Input
					type="password"
					label="Password again"
					className="max-w-xs"
					size="sm"
				/>
				<div className="flex gap-x-4 justify-end">
					<Link color="foreground" href="/login">
						Back
					</Link>
					<Button color="success">
						Sign up
					</Button>
				</div>
			</div>
		</section>
	);
}
