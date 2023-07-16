import { ClassParent, ClassParentSDKType } from "./class_data";
import * as _m0 from "protobufjs/minimal";
export interface NFTData {
    metadata: Uint8Array;
    classParent?: ClassParent;
    toBeRevealed: boolean;
}
export interface NFTDataSDKType {
    metadata: Uint8Array;
    class_parent?: ClassParentSDKType;
    to_be_revealed: boolean;
}
export declare const NFTData: {
    encode(message: NFTData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NFTData;
    fromPartial(object: Partial<NFTData>): NFTData;
};
