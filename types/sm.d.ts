export interface ISlice<P, I> {
  id: string;
  name: string;
  docURL: string;
  version: string;
  description: string;
  primary: P;
  items: I[];
  slice_type: string;
}

export interface IPrismicImage {
  dimensions: {
    width: number;
    height: number;
  };
  alt?: string;
  copyright?: string | null;
  url: string;
};
