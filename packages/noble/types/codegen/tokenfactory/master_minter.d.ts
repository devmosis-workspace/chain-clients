import * as _m0 from "protobufjs/minimal";
export interface MasterMinter {
    address: string;
}
export interface MasterMinterSDKType {
    address: string;
}
export declare const MasterMinter: {
    encode(message: MasterMinter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MasterMinter;
    fromPartial(object: Partial<MasterMinter>): MasterMinter;
};
