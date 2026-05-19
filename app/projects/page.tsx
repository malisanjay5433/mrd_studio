import { redirect } from "next/navigation";

/** Legacy route — collection lives at `/collection`. */
export default function ProjectsRedirectPage() {
	redirect("/collection");
}
