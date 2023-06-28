import { MouseEventHandler } from "react";

export interface HomeProps {
  searchParams: FilterProps;
}


export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchTaxonProps {
  name: string;
  setTaxon: (name: string) => void;
}

export interface BirdProps {
  taxon: string;
  url: string;
  origSiteName: string;
  origLocation: string;
  targetUrl: string;
}

export interface FilterProps {
  name?: string;
  limit?: number;
}


