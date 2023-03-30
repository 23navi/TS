/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap-bad";
// import { CustomMap } from "./CustomMap";


const customMap=new CustomMap("map");

customMap.addUserMarker(new User())
customMap.addCompanyMarker(new Company())



