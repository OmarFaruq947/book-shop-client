import BeatLoader from "react-spinners/BeatLoader";

export default function App() {
    return (
        <div className="sweet-loading flex justify-center h-[100vh]">
            <BeatLoader
                color={"#37be4e"}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}