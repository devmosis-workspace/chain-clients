import { Role } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
export interface GovAccount {
    address: Uint8Array;
    role: Role;
}
export interface GovAccountSDKType {
    address: Uint8Array;
    role: Role;
}
export declare const GovAccount: {
    encode(message: GovAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GovAccount;
    fromPartial(object: Partial<GovAccount>): GovAccount;
};
