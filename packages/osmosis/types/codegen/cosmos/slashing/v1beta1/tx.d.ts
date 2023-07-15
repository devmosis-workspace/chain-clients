import * as _m0 from "protobufjs/minimal";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
    validatorAddr: string;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
    validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {
}
export declare const MsgUnjail: {
    encode(message: MsgUnjail, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnjail;
    fromPartial(object: Partial<MsgUnjail>): MsgUnjail;
};
export declare const MsgUnjailResponse: {
    encode(_: MsgUnjailResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUnjailResponse;
    fromPartial(_: Partial<MsgUnjailResponse>): MsgUnjailResponse;
};
