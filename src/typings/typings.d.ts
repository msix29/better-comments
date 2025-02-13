interface CommentTag {
    tag: string;
    escapedTag: string;
    decoration: any;
    ranges: Array<any>;
}

interface Contributions {
    multilineComments: boolean;
    useJSDocStyle: boolean;
    highlightPlainText: boolean;
    tags: [{
        tag: string;
        color: string;
        lightModeColor: string;
        darkModeColor: string;
        strikethrough: boolean;
        underline: boolean;
        bold: boolean;
        italic: boolean;
        lightModeBackgroundColor: string;
        darkModeBackgroundColor: string;
    }];
}

interface CommentConfig {
    lineComment?: string;
    blockComment?: [string, string];
}