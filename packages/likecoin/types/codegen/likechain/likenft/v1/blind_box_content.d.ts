import { NFTInput, NFTInputSDKType } from "./nft_input";
import * as _m0 from "protobufjs/minimal";
export interface BlindBoxContent {
    classId: string;
    id: string;
    input?: NFTInput;
}
export interface BlindBoxContentSDKType {
    class_id: string;
    id: string;
    input?: NFTInputSDKType;
}
export declare const BlindBoxContent: {
    encode(message: BlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BlindBoxContent;
    fromPartial(object: Partial<BlindBoxContent>): BlindBoxContent;
};
