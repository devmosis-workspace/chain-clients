import { Cork, CorkSDKType } from "./cork";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequest {
    /** the cork to send across the bridge */
    cork?: Cork;
    /** signer account address */
    signer: string;
}
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequestSDKType {
    cork?: CorkSDKType;
    signer: string;
}
export interface MsgSubmitCorkResponse {
}
export interface MsgSubmitCorkResponseSDKType {
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
    /** the scheduled cork */
    cork?: Cork;
    /** the block height that must be reached */
    blockHeight: Long;
    /** signer account address */
    signer: string;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestSDKType {
    cork?: CorkSDKType;
    block_height: Long;
    signer: string;
}
export interface MsgScheduleCorkResponse {
}
export interface MsgScheduleCorkResponseSDKType {
}
export declare const MsgSubmitCorkRequest: {
    encode(message: MsgSubmitCorkRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitCorkRequest;
    fromPartial(object: Partial<MsgSubmitCorkRequest>): MsgSubmitCorkRequest;
};
export declare const MsgSubmitCorkResponse: {
    encode(_: MsgSubmitCorkResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSubmitCorkResponse;
    fromPartial(_: Partial<MsgSubmitCorkResponse>): MsgSubmitCorkResponse;
};
export declare const MsgScheduleCorkRequest: {
    encode(message: MsgScheduleCorkRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgScheduleCorkRequest;
    fromPartial(object: Partial<MsgScheduleCorkRequest>): MsgScheduleCorkRequest;
};
export declare const MsgScheduleCorkResponse: {
    encode(_: MsgScheduleCorkResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgScheduleCorkResponse;
    fromPartial(_: Partial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse;
};
