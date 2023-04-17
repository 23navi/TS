import { CharactersCollections } from "./CharactersCollection";
import {NumbersCollections} from "./NumbersCollection"


const stringData="Naviiii";
const numberArr=[3,5,6,7,1,2,34,64,22,34,53,13,52,53,63,1,3,5,6,7,8,9]

const numberCol= new NumbersCollections(numberArr);
numberCol.sort();
console.log(numberCol);

const charCol= new CharactersCollections(stringData);
charCol.sort();
console.log(charCol);


