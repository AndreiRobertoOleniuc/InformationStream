import { ImageBlock } from "./Content/ImageBlock";
import { QuoteBlock } from "./Content/QuoteBlock";
import { TextBlock } from "./Content/TextBlock";
import { VideoBlock } from "./Content/VideoBlock";

export interface Section {
  id: number;
  name: string;
  contentBlocks: ContentBlock[];
}

export type ContentBlock = TextBlock | ImageBlock | VideoBlock | QuoteBlock;
