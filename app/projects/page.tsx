import ProjectArchive from "@/components/ProjectArchivePage";
import { Projects } from "@/lib/data";

export default function page() {
  return (
    <div>
      <ProjectArchive projects={Projects} />
    </div>
  );
}
