type LogoBase = {
    type: "shortname-vertical-outline" | "shortname-vertical" | "shortname-horizontal" | "shortname-horizontal-line" | "fullname-horizontal" | "fullname-vertical",
    lang: "en" | "ru"
}

type IconBase = {
    type: "icon",
    language?: never
}

type LogoWidth = {
    width: number
    height?: never
}

type LogoHeight = {
    height: number
    width?: never
}

export type LogosStore = {

    "shortname-vertical-outline" : {
        "en": LogoStore,
        "ru": LogoStore
    }
    "shortname-vertical" : {
        "en": LogoStore,
        "ru": LogoStore
    }
    "shortname-horizontal" : {
        "en": LogoStore,
        "ru": LogoStore
    }
    "shortname-horizontal-line" : {
        "en": LogoStore,
        "ru": LogoStore
    }
    "fullname-horizontal" : {
        "en": LogoStore,
        "ru": LogoStore
    }
    "fullname-vertical" : {
        "en": LogoStore,
        "ru": LogoStore
    }
    "icon" : LogoStore

}

type LogoStore = {
    "width": number,
    "height": number,
    "svg": JSX.Element
}

export type LogoType =  (IconBase | LogoBase) & (LogoWidth | LogoHeight)