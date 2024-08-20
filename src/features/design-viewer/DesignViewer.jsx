import Toolbar from "./components/Toolbar"
import DesignCanvas from "./components/DesignCanvas"

function DesignViewer() {
    return (
        <div>
            <Toolbar />
            <div style={{ position: "relative" }}>
                <DesignCanvas />
            </div>
        </div>
    )
}

export default DesignViewer
