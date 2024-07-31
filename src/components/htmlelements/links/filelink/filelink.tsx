import React, {LinkHTMLAttributes} from "react";
import {Doc, Docx, Html, Jpg, Pdf, Ppt, Pptx, Tif, Txt, Xls, Xlsx, Xml, Zip} from "../../fileicon/icons";
import {FileLinkType} from "../../../../types/htmlelements";

export const FileLink = (props: FileLinkType & LinkHTMLAttributes<HTMLElement>) => {

    const icons: { [x: string]: () => JSX.Element } = {
        doc: Doc,
        docx: Docx,
        html: Html,
        jpg: Jpg,
        pdf: Pdf,
        ppt: Ppt,
        pptx: Pptx,
        tif: Tif,
        txt: Txt,
        xls: Xls,
        xlsx: Xlsx,
        xml: Xml,
        zip: Zip
    }

    const className = props.disposition === "vertical" ?
        "transition text-center w-fit inline-block p-2 col cursor-pointer text-eapo-blue-dark hover:text-eapo-red underline items-center" :
        "transition w-fit p-2 inline-flex cursor-pointer text-eapo-blue-dark hover:text-eapo-red underline items-center";

    return <a className={props.className ?? className} {...props}>
        <span className={props.iconClassName ?? props.disposition === "vertical" ? "w-8 block m-auto" : "w-8"}>
            {
                React.createElement(
                    icons[props.filetype]
                )
            }
        </span>
        <span className={props.disposition !== "vertical" ? "ml-2" : "mt-2 text-center"}>
            {
                props.children ?? "Скачать"
            }
        </span>
    </a>

}