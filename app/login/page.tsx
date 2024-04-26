import { Button, Input, Link } from "@nextui-org/react";

export default function Login() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="flex flex-col rounded gap-y-4 border p-4 w-64 items-center">
				<h1 className="text-lg font-bold">Welcome back!</h1>
				<Input
					type="email"
					label="Email"
					className="max-w-xs"
					size="sm"
				/>
				<Input
					type="password"
					label="Password"
					className="max-w-xs"
					size="sm"
				/>
				<Button color="success" className="w-full">
					Sign in
				</Button>
				<Link color="foreground" href="/register">
					Im new here
				</Link>
			</div>
		</section>
	);
}
