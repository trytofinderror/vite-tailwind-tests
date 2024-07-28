import {Icon, Rainbow} from "./components";
import {FileLink} from "./components/htmlelements/links/filelink/filelink.tsx";

function App() {

    return (
        <div className={"container"}>

            <div className="p-4 text-eapo-blue-dark">
                <Icon icon={"envelope-"} size={"2xl"} spin={false}/>
            </div>

            <div className="p-4 text-eapo-blue-dark">
                <Icon icon={"gem"} size={"7x"} spin={false} />
            </div>

            <div className="p-4 text-eapo-blue-dark">
                <Icon icon={"envelope-open"} size={"2xl"} spin={false}/>
            </div>

            <Rainbow/>
            <FileLink href={"#"} filetype={"txt"}/>
            <FileLink href={"#"} filetype={"pptx"} disposition={"horizontal"}/>
            <FileLink href={"#"} filetype={"zip"} disposition={"vertical"}/>
            <FileLink href={"#"} filetype={"jpg"} disposition={"vertical"}/>

            <FileLink href={"#"} filetype={"jpg"}>
                Или не скачать
            </FileLink>

            <FileLink href={"#"} filetype={"jpg"} disposition={"vertical"}>
                Или не скачать
            </FileLink>

        </div>
    )
}

export default App
