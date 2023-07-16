import * as _m0 from "protobufjs/minimal";
export interface NFTInput {
    uri: string;
    uriHash: string;
    metadata: Uint8Array;
}
export interface NFTInputSDKType {
    uri: string;
    uri_hash: string;
    metadata: Uint8Array;
}
export declare const NFTInput: {
    encode(message: NFTInput, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NFTInput;
    fromPartial(object: Partial<NFTInput>): NFTInput;
};
