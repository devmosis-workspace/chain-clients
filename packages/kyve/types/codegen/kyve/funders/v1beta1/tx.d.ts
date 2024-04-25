import { BinaryWriter } from "../../../binary";
/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunder {
    /** creator ... */
    creator: string;
    /** moniker */
    moniker: string;
    /** identity is the 64 bit keybase.io identity string */
    identity: string;
    /** website */
    website: string;
    /** contact */
    contact: string;
    /** description are some additional notes the funder finds important */
    description: string;
}
export interface MsgCreateFunderProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder";
    value: Uint8Array;
}
/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunderAmino {
    /** creator ... */
    creator?: string;
    /** moniker */
    moniker?: string;
    /** identity is the 64 bit keybase.io identity string */
    identity?: string;
    /** website */
    website?: string;
    /** contact */
    contact?: string;
    /** description are some additional notes the funder finds important */
    description?: string;
}
export interface MsgCreateFunderAminoMsg {
    type: "/kyve.funders.v1beta1.MsgCreateFunder";
    value: MsgCreateFunderAmino;
}
/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunderSDKType {
    creator: string;
    moniker: string;
    identity: string;
    website: string;
    contact: string;
    description: string;
}
/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponse {
}
export interface MsgCreateFunderResponseProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgCreateFunderResponse";
    value: Uint8Array;
}
/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponseAmino {
}
export interface MsgCreateFunderResponseAminoMsg {
    type: "/kyve.funders.v1beta1.MsgCreateFunderResponse";
    value: MsgCreateFunderResponseAmino;
}
/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponseSDKType {
}
/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunder {
    /** creator ... */
    creator: string;
    /** moniker */
    moniker: string;
    /** identity is the 64 bit keybase.io identity string */
    identity: string;
    /** website */
    website: string;
    /** contact */
    contact: string;
    /** description are some additional notes the funder finds important */
    description: string;
}
export interface MsgUpdateFunderProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder";
    value: Uint8Array;
}
/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunderAmino {
    /** creator ... */
    creator?: string;
    /** moniker */
    moniker?: string;
    /** identity is the 64 bit keybase.io identity string */
    identity?: string;
    /** website */
    website?: string;
    /** contact */
    contact?: string;
    /** description are some additional notes the funder finds important */
    description?: string;
}
export interface MsgUpdateFunderAminoMsg {
    type: "/kyve.funders.v1beta1.MsgUpdateFunder";
    value: MsgUpdateFunderAmino;
}
/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunderSDKType {
    creator: string;
    moniker: string;
    identity: string;
    website: string;
    contact: string;
    description: string;
}
/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponse {
}
export interface MsgUpdateFunderResponseProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunderResponse";
    value: Uint8Array;
}
/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponseAmino {
}
export interface MsgUpdateFunderResponseAminoMsg {
    type: "/kyve.funders.v1beta1.MsgUpdateFunderResponse";
    value: MsgUpdateFunderResponseAmino;
}
/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponseSDKType {
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    poolId: bigint;
    /** amount is the total amount available for distribution */
    amount: bigint;
    /** amount_per_bundle defines the amount of tokens that are distributed per submitted bundle */
    amountPerBundle: bigint;
}
export interface MsgFundPoolProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgFundPool";
    value: Uint8Array;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolAmino {
    /** creator ... */
    creator?: string;
    /** id ... */
    pool_id?: string;
    /** amount is the total amount available for distribution */
    amount?: string;
    /** amount_per_bundle defines the amount of tokens that are distributed per submitted bundle */
    amount_per_bundle?: string;
}
export interface MsgFundPoolAminoMsg {
    type: "/kyve.funders.v1beta1.MsgFundPool";
    value: MsgFundPoolAmino;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolSDKType {
    creator: string;
    pool_id: bigint;
    amount: bigint;
    amount_per_bundle: bigint;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {
}
export interface MsgFundPoolResponseProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgFundPoolResponse";
    value: Uint8Array;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseAmino {
}
export interface MsgFundPoolResponseAminoMsg {
    type: "/kyve.funders.v1beta1.MsgFundPoolResponse";
    value: MsgFundPoolResponseAmino;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseSDKType {
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    poolId: bigint;
    /** amount ... */
    amount: bigint;
}
export interface MsgDefundPoolProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgDefundPool";
    value: Uint8Array;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolAmino {
    /** creator ... */
    creator?: string;
    /** id ... */
    pool_id?: string;
    /** amount ... */
    amount?: string;
}
export interface MsgDefundPoolAminoMsg {
    type: "/kyve.funders.v1beta1.MsgDefundPool";
    value: MsgDefundPoolAmino;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolSDKType {
    creator: string;
    pool_id: bigint;
    amount: bigint;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {
}
export interface MsgDefundPoolResponseProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgDefundPoolResponse";
    value: Uint8Array;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponseAmino {
}
export interface MsgDefundPoolResponseAminoMsg {
    type: "/kyve.funders.v1beta1.MsgDefundPoolResponse";
    value: MsgDefundPoolResponseAmino;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponseSDKType {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/delegation parameters to update. */
    payload: string;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** payload defines the x/delegation parameters to update. */
    payload?: string;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/kyve.funders.v1beta1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/kyve.funders.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateFunder: {
    typeUrl: string;
    encode(message: MsgCreateFunder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateFunder;
    fromPartial(object: Partial<MsgCreateFunder>): MsgCreateFunder;
    fromAmino(object: MsgCreateFunderAmino): MsgCreateFunder;
    toAmino(message: MsgCreateFunder): MsgCreateFunderAmino;
    fromAminoMsg(object: MsgCreateFunderAminoMsg): MsgCreateFunder;
    fromProtoMsg(message: MsgCreateFunderProtoMsg): MsgCreateFunder;
    toProto(message: MsgCreateFunder): Uint8Array;
    toProtoMsg(message: MsgCreateFunder): MsgCreateFunderProtoMsg;
};
export declare const MsgCreateFunderResponse: {
    typeUrl: string;
    encode(_: MsgCreateFunderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateFunderResponse;
    fromPartial(_: Partial<MsgCreateFunderResponse>): MsgCreateFunderResponse;
    fromAmino(_: MsgCreateFunderResponseAmino): MsgCreateFunderResponse;
    toAmino(_: MsgCreateFunderResponse): MsgCreateFunderResponseAmino;
    fromAminoMsg(object: MsgCreateFunderResponseAminoMsg): MsgCreateFunderResponse;
    fromProtoMsg(message: MsgCreateFunderResponseProtoMsg): MsgCreateFunderResponse;
    toProto(message: MsgCreateFunderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateFunderResponse): MsgCreateFunderResponseProtoMsg;
};
export declare const MsgUpdateFunder: {
    typeUrl: string;
    encode(message: MsgUpdateFunder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateFunder;
    fromPartial(object: Partial<MsgUpdateFunder>): MsgUpdateFunder;
    fromAmino(object: MsgUpdateFunderAmino): MsgUpdateFunder;
    toAmino(message: MsgUpdateFunder): MsgUpdateFunderAmino;
    fromAminoMsg(object: MsgUpdateFunderAminoMsg): MsgUpdateFunder;
    fromProtoMsg(message: MsgUpdateFunderProtoMsg): MsgUpdateFunder;
    toProto(message: MsgUpdateFunder): Uint8Array;
    toProtoMsg(message: MsgUpdateFunder): MsgUpdateFunderProtoMsg;
};
export declare const MsgUpdateFunderResponse: {
    typeUrl: string;
    encode(_: MsgUpdateFunderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateFunderResponse;
    fromPartial(_: Partial<MsgUpdateFunderResponse>): MsgUpdateFunderResponse;
    fromAmino(_: MsgUpdateFunderResponseAmino): MsgUpdateFunderResponse;
    toAmino(_: MsgUpdateFunderResponse): MsgUpdateFunderResponseAmino;
    fromAminoMsg(object: MsgUpdateFunderResponseAminoMsg): MsgUpdateFunderResponse;
    fromProtoMsg(message: MsgUpdateFunderResponseProtoMsg): MsgUpdateFunderResponse;
    toProto(message: MsgUpdateFunderResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateFunderResponse): MsgUpdateFunderResponseProtoMsg;
};
export declare const MsgFundPool: {
    typeUrl: string;
    encode(message: MsgFundPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFundPool;
    fromPartial(object: Partial<MsgFundPool>): MsgFundPool;
    fromAmino(object: MsgFundPoolAmino): MsgFundPool;
    toAmino(message: MsgFundPool): MsgFundPoolAmino;
    fromAminoMsg(object: MsgFundPoolAminoMsg): MsgFundPool;
    fromProtoMsg(message: MsgFundPoolProtoMsg): MsgFundPool;
    toProto(message: MsgFundPool): Uint8Array;
    toProtoMsg(message: MsgFundPool): MsgFundPoolProtoMsg;
};
export declare const MsgFundPoolResponse: {
    typeUrl: string;
    encode(_: MsgFundPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgFundPoolResponse;
    fromPartial(_: Partial<MsgFundPoolResponse>): MsgFundPoolResponse;
    fromAmino(_: MsgFundPoolResponseAmino): MsgFundPoolResponse;
    toAmino(_: MsgFundPoolResponse): MsgFundPoolResponseAmino;
    fromAminoMsg(object: MsgFundPoolResponseAminoMsg): MsgFundPoolResponse;
    fromProtoMsg(message: MsgFundPoolResponseProtoMsg): MsgFundPoolResponse;
    toProto(message: MsgFundPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundPoolResponse): MsgFundPoolResponseProtoMsg;
};
export declare const MsgDefundPool: {
    typeUrl: string;
    encode(message: MsgDefundPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDefundPool;
    fromPartial(object: Partial<MsgDefundPool>): MsgDefundPool;
    fromAmino(object: MsgDefundPoolAmino): MsgDefundPool;
    toAmino(message: MsgDefundPool): MsgDefundPoolAmino;
    fromAminoMsg(object: MsgDefundPoolAminoMsg): MsgDefundPool;
    fromProtoMsg(message: MsgDefundPoolProtoMsg): MsgDefundPool;
    toProto(message: MsgDefundPool): Uint8Array;
    toProtoMsg(message: MsgDefundPool): MsgDefundPoolProtoMsg;
};
export declare const MsgDefundPoolResponse: {
    typeUrl: string;
    encode(_: MsgDefundPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDefundPoolResponse;
    fromPartial(_: Partial<MsgDefundPoolResponse>): MsgDefundPoolResponse;
    fromAmino(_: MsgDefundPoolResponseAmino): MsgDefundPoolResponse;
    toAmino(_: MsgDefundPoolResponse): MsgDefundPoolResponseAmino;
    fromAminoMsg(object: MsgDefundPoolResponseAminoMsg): MsgDefundPoolResponse;
    fromProtoMsg(message: MsgDefundPoolResponseProtoMsg): MsgDefundPoolResponse;
    toProto(message: MsgDefundPoolResponse): Uint8Array;
    toProtoMsg(message: MsgDefundPoolResponse): MsgDefundPoolResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
