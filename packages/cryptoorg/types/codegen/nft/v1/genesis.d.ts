import { Collection, CollectionSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the NFT module's genesis state */
export interface GenesisState {
    collections: Collection[];
}
/** GenesisState defines the NFT module's genesis state */
export interface GenesisStateSDKType {
    collections: CollectionSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
