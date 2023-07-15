import { Header, HeaderSDKType, Data, DataSDKType, Commit, CommitSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
export interface Block {
    header?: Header;
    data?: Data;
    lastCommit?: Commit;
}
export interface BlockSDKType {
    header?: HeaderSDKType;
    data?: DataSDKType;
    last_commit?: CommitSDKType;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Block;
    fromPartial(object: Partial<Block>): Block;
};
