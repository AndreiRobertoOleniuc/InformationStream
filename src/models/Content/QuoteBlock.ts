export interface QuoteBlock {
  type: "quote";
  content: string;
  author?: string;
  mode: "edit" | "view";
}
