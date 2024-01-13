export interface ImageBlock {
  type: "image";
  url: string;
  caption?: string;
  mode: "edit" | "view";
}
