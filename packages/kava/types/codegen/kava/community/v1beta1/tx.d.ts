import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgFundCommunityPool allows an account to directly fund the community module account. */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
export interface MsgFundCommunityPoolProtoMsg {
    typeUrl: "/kava.community.v1beta1.MsgFundCommunityPool";
    value: Uint8Array;
}
/** MsgFundCommunityPool allows an account to directly fund the community module account. */
export interface MsgFundCommunityPoolAmino {
    amount: CoinAmino[];
    depositor: string;
}
export interface MsgFundCommunityPoolAminoMsg {
    type: "/kava.community.v1beta1.MsgFundCommunityPool";
    value: MsgFundCommunityPoolAmino;
}
/** MsgFundCommunityPool allows an account to directly fund the community module account. */
export interface MsgFundCommunityPoolSDKType {
    amount: CoinSDKType[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
export interface MsgFundCommunityPoolResponseProtoMsg {
    typeUrl: "/kava.community.v1beta1.MsgFundCommunityPoolResponse";
    value: Uint8Array;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseAmino {
}
export interface MsgFundCommunityPoolResponseAminoMsg {
    type: "/kava.community.v1beta1.MsgFundCommunityPoolResponse";
    value: MsgFundCommunityPoolResponseAmino;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {
}
export declare const MsgFundCommunityPool: {
    typeUrl: string;
    encode(message: MsgFundCommunityPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFundCommunityPool;
    fromPartial(object: Partial<MsgFundCommunityPool>): MsgFundCommunityPool;
    fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool;
    toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino;
    fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool;
    fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool;
    toProto(message: MsgFundCommunityPool): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg;
};
export declare const MsgFundCommunityPoolResponse: {
    typeUrl: string;
    encode(_: MsgFundCommunityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgFundCommunityPoolResponse;
    fromPartial(_: Partial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
    fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse;
    toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino;
    fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse;
    fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse;
    toProto(message: MsgFundCommunityPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg;
};
