import React from "react";


export type FileLinkType = {
    href: string
    disposition?: "horizontal" | "vertical"
    filetype: "doc" | "docx" | "html" | "jpg" | "pdf" | "ppt" | "pptx" | "tif" | "txt" | "xls" | "xlsx" | "xml" | "zip"
    iconClassName?: React.HTMLAttributes<HTMLElement>["className"]
} & {
    [x: string] : any
}