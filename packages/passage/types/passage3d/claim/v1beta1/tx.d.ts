import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaim {
    sender: string;
    claimAction: string;
}
export interface MsgClaimProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaim";
    value: Uint8Array;
}
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaimAmino {
    sender?: string;
    claim_action?: string;
}
export interface MsgClaimAminoMsg {
    type: "/passage3d.claim.v1beta1.MsgClaim";
    value: MsgClaimAmino;
}
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaimSDKType {
    sender: string;
    claim_action: string;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponse {
    /** total initial claimable amount for the user */
    claimedAmount: Coin;
}
export interface MsgClaimResponseProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse";
    value: Uint8Array;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponseAmino {
    /** total initial claimable amount for the user */
    claimed_amount?: CoinAmino;
}
export interface MsgClaimResponseAminoMsg {
    type: "/passage3d.claim.v1beta1.MsgClaimResponse";
    value: MsgClaimResponseAmino;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponseSDKType {
    claimed_amount: CoinSDKType;
}
export declare const MsgClaim: {
    typeUrl: string;
    encode(message: MsgClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaim;
    fromPartial(object: Partial<MsgClaim>): MsgClaim;
    fromAmino(object: MsgClaimAmino): MsgClaim;
    toAmino(message: MsgClaim): MsgClaimAmino;
    fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim;
    fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim;
    toProto(message: MsgClaim): Uint8Array;
    toProtoMsg(message: MsgClaim): MsgClaimProtoMsg;
};
export declare const MsgClaimResponse: {
    typeUrl: string;
    encode(message: MsgClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimResponse;
    fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse;
    fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse;
    toAmino(message: MsgClaimResponse): MsgClaimResponseAmino;
    fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse;
    fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse;
    toProto(message: MsgClaimResponse): Uint8Array;
    toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg;
};
