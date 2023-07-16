import * as _m0 from "protobufjs/minimal";
export interface Pauser {
    address: string;
}
export interface PauserSDKType {
    address: string;
}
export declare const Pauser: {
    encode(message: Pauser, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pauser;
    fromPartial(object: Partial<Pauser>): Pauser;
};
