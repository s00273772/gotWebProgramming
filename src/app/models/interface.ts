export interface Character{
    _id:string;
    url:string;
    name?:string;
    gender?:string;
    culture?:string;
    born?:string;
    playedBy?:string;
    tvSeries?:string;
    titles?:string;
    aliases?:string;
    father?:string;
    note?:string;
}

export interface SearchResults{
    Search: CharacterResults[];
    totalResults?: string;
    Response: string;
    Error?: string;
}

export interface CharacterResults{
    name: string;
    gender: string;
    culture: string;
    Response: string;
    
}

export interface House{
    url:string;
    name?:string;
    region?:string;
    coatOfArms?:string;
    words?:string;
    titles?:string[];
    seats?:string[];
    founded?:string[];
    ancestralWeapons?:string[];
    note?:string;

}