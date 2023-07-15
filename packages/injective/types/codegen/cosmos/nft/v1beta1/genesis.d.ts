import { Class, ClassSDKType, NFT, NFTSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    /** class defines the class of the nft type. */
    classes: Class[];
    /** entry defines all nft owned by a person. */
    entries: Entry[];
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
    classes: ClassSDKType[];
    entries: EntrySDKType[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFT[];
}
/** Entry Defines all nft owned by a person */
export interface EntrySDKType {
    owner: string;
    nfts: NFTSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Entry: {
    encode(message: Entry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Entry;
    fromPartial(object: Partial<Entry>): Entry;
};
