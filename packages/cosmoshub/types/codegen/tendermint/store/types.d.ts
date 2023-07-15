import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BlockStoreState {
    base: Long;
    height: Long;
}
export interface BlockStoreStateSDKType {
    base: Long;
    height: Long;
}
export declare const BlockStoreState: {
    encode(message: BlockStoreState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BlockStoreState;
    fromPartial(object: Partial<BlockStoreState>): BlockStoreState;
};
