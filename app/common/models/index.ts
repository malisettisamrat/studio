import { TemplateNode } from './element/templateNode';

export interface StyleCodeDiff {
    original: string;
    generated: string;
    param: StyleChangeParam;
}

export interface StyleChangeParam {
    selector: string;
    templateNode: TemplateNode;
    tailwind: string;
    codeBlock: string;
}
