import Spinner from "@/app/_components/Spinner";

export default function Loading(){
    return (
        <did className="grid items-center justify-center">
            <Spinner />
            <p className="text-xl text-primary-200">Loading Cabin Data ...</p>
        </did>
    );
}