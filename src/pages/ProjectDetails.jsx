import { useParams } from "react-router-dom";

function ProjectDetails() {
    const { id } = useParams();

    return <h2 className="p-6">Project ID: {id}</h2>;
}

export default ProjectDetails;