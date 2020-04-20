import * as React from "react";
import { GenerateMarkdownPreview } from "../types";
import { ClassValue } from "../util/ClassNames";
export interface PreviewProps {
    classes?: ClassValue;
    previewRef?: (ref: Preview) => void;
    loadingPreview?: React.ReactNode;
    minHeight: number;
    generateMarkdownPreview: GenerateMarkdownPreview;
    markdown: string;
}
export interface ReactMdePreviewState {
    loading: boolean;
    preview?: React.ReactNode;
}
export declare class Preview extends React.Component<PreviewProps, ReactMdePreviewState> {
    previewRef: HTMLDivElement;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
