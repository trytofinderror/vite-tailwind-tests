import {Icon, Rainbow, FileLink, Link} from "./components";

function App() {

    return (
        <div className={"container"}>

            <div className="p-4 text-eapo-blue-dark">
                <Icon icon={"gem"} size={"7x"} spin={false}/>
            </div>
            <div className="p-4 text-eapo-blue-dark">
                <Rainbow />
            </div>
            <div className="p-4 text-eapo-red">
                <Icon icon={"envelope-open"} size={"2xl"} spin={false}/>
            </div>
            <div className="p-4">
                <FileLink href={"#"} filetype={"txt"}/>
            </div>
            <div className="p-4">
                <FileLink href={"#"} filetype={"pptx"} disposition={"horizontal"}/>
            </div>
            <div className="p-4">
                <FileLink href={"#"} filetype={"zip"} disposition={"vertical"}/>
            </div>
            <div className="p-4">
                <FileLink href={"#"} filetype={"jpg"} disposition={"vertical"}/>
            </div>
            <div className="p-4">
                <FileLink href={"#"} filetype={"jpg"}>
                    Или не скачать
                </FileLink>
            </div>
            <div className="p-4">
                <Link href={"#"}>А это обычная ссылка</Link>
            </div>


        </div>
    )
}

export default App
