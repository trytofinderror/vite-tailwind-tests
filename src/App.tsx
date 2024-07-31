import {Icon, Rainbow, FileLink, Link} from "./components";

function App() {

    return (
        <div className={"container"}>

            <div className="p-4 text-eapo-blue-dark">
                <Icon icon={"gem"} size={"7x"} spin={false}/>
            </div>
            <div className="p-4 text-eapo-blue-dark">
                <Rainbow/>
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
                <Link href={"#"}>А это обычная ссылка, но она никуда не ведет</Link>
            </div>
            <div className="p-4">
                <h1>Заголовок 1</h1>
                <h2>Заголовок 2</h2>
                <h3>Заголовок 3</h3>
                <h4>Заголовок 4</h4>
                <h5>Заголовок 5</h5>
                <h6>Заголовок 6</h6>
            </div>

        </div>
    )
}

export default App
