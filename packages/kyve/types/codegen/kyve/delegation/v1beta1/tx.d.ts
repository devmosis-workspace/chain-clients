import { BinaryWriter } from "../../../binary";
/** MsgDelegate ... */
export interface MsgDelegate {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: bigint;
}
export interface MsgDelegateProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgDelegate";
    value: Uint8Array;
}
/** MsgDelegate ... */
export interface MsgDelegateAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: string;
}
export interface MsgDelegateAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgDelegate";
    value: MsgDelegateAmino;
}
/** MsgDelegate ... */
export interface MsgDelegateSDKType {
    creator: string;
    staker: string;
    amount: bigint;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponse {
}
export interface MsgDelegateResponseProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgDelegateResponse";
    value: Uint8Array;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponseAmino {
}
export interface MsgDelegateResponseAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgDelegateResponse";
    value: MsgDelegateResponseAmino;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponseSDKType {
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewards {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
}
export interface MsgWithdrawRewardsProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards";
    value: Uint8Array;
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewardsAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
}
export interface MsgWithdrawRewardsAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgWithdrawRewards";
    value: MsgWithdrawRewardsAmino;
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewardsSDKType {
    creator: string;
    staker: string;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponse {
}
export interface MsgWithdrawRewardsResponseProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewardsResponse";
    value: Uint8Array;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponseAmino {
}
export interface MsgWithdrawRewardsResponseAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgWithdrawRewardsResponse";
    value: MsgWithdrawRewardsResponseAmino;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponseSDKType {
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegate {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: bigint;
}
export interface MsgUndelegateProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate";
    value: Uint8Array;
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegateAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: string;
}
export interface MsgUndelegateAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgUndelegate";
    value: MsgUndelegateAmino;
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegateSDKType {
    creator: string;
    staker: string;
    amount: bigint;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponse {
}
export interface MsgUndelegateResponseProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgUndelegateResponse";
    value: Uint8Array;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponseAmino {
}
export interface MsgUndelegateResponseAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgUndelegateResponse";
    value: MsgUndelegateResponseAmino;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponseSDKType {
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegate {
    /** creator ... */
    creator: string;
    /** staker ... */
    fromStaker: string;
    /** staker ... */
    toStaker: string;
    /** amount ... */
    amount: bigint;
}
export interface MsgRedelegateProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate";
    value: Uint8Array;
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegateAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    from_staker: string;
    /** staker ... */
    to_staker: string;
    /** amount ... */
    amount: string;
}
export interface MsgRedelegateAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgRedelegate";
    value: MsgRedelegateAmino;
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegateSDKType {
    creator: string;
    from_staker: string;
    to_staker: string;
    amount: bigint;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponse {
}
export interface MsgRedelegateResponseProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgRedelegateResponse";
    value: Uint8Array;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponseAmino {
}
export interface MsgRedelegateResponseAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgRedelegateResponse";
    value: MsgRedelegateResponseAmino;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponseSDKType {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/delegation parameters to update. */
    payload: string;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/delegation parameters to update. */
    payload: string;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgUpdateParams";
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
    typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/kyve.delegation.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgDelegate: {
    typeUrl: string;
    encode(message: MsgDelegate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDelegate;
    fromPartial(object: Partial<MsgDelegate>): MsgDelegate;
    fromAmino(object: MsgDelegateAmino): MsgDelegate;
    toAmino(message: MsgDelegate): MsgDelegateAmino;
    fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate;
    fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate;
    toProto(message: MsgDelegate): Uint8Array;
    toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg;
};
export declare const MsgDelegateResponse: {
    typeUrl: string;
    encode(_: MsgDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDelegateResponse;
    fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse;
    fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse;
    toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino;
    fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse;
    fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse;
    toProto(message: MsgDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg;
};
export declare const MsgWithdrawRewards: {
    typeUrl: string;
    encode(message: MsgWithdrawRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawRewards;
    fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards;
    fromAmino(object: MsgWithdrawRewardsAmino): MsgWithdrawRewards;
    toAmino(message: MsgWithdrawRewards): MsgWithdrawRewardsAmino;
    fromAminoMsg(object: MsgWithdrawRewardsAminoMsg): MsgWithdrawRewards;
    fromProtoMsg(message: MsgWithdrawRewardsProtoMsg): MsgWithdrawRewards;
    toProto(message: MsgWithdrawRewards): Uint8Array;
    toProtoMsg(message: MsgWithdrawRewards): MsgWithdrawRewardsProtoMsg;
};
export declare const MsgWithdrawRewardsResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawRewardsResponse;
    fromPartial(_: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse;
    fromAmino(_: MsgWithdrawRewardsResponseAmino): MsgWithdrawRewardsResponse;
    toAmino(_: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseAmino;
    fromAminoMsg(object: MsgWithdrawRewardsResponseAminoMsg): MsgWithdrawRewardsResponse;
    fromProtoMsg(message: MsgWithdrawRewardsResponseProtoMsg): MsgWithdrawRewardsResponse;
    toProto(message: MsgWithdrawRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseProtoMsg;
};
export declare const MsgUndelegate: {
    typeUrl: string;
    encode(message: MsgUndelegate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUndelegate;
    fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate;
    fromAmino(object: MsgUndelegateAmino): MsgUndelegate;
    toAmino(message: MsgUndelegate): MsgUndelegateAmino;
    fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate;
    fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate;
    toProto(message: MsgUndelegate): Uint8Array;
    toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg;
};
export declare const MsgUndelegateResponse: {
    typeUrl: string;
    encode(_: MsgUndelegateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUndelegateResponse;
    fromPartial(_: Partial<MsgUndelegateResponse>): MsgUndelegateResponse;
    fromAmino(_: MsgUndelegateResponseAmino): MsgUndelegateResponse;
    toAmino(_: MsgUndelegateResponse): MsgUndelegateResponseAmino;
    fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse;
    fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse;
    toProto(message: MsgUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg;
};
export declare const MsgRedelegate: {
    typeUrl: string;
    encode(message: MsgRedelegate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRedelegate;
    fromPartial(object: Partial<MsgRedelegate>): MsgRedelegate;
    fromAmino(object: MsgRedelegateAmino): MsgRedelegate;
    toAmino(message: MsgRedelegate): MsgRedelegateAmino;
    fromAminoMsg(object: MsgRedelegateAminoMsg): MsgRedelegate;
    fromProtoMsg(message: MsgRedelegateProtoMsg): MsgRedelegate;
    toProto(message: MsgRedelegate): Uint8Array;
    toProtoMsg(message: MsgRedelegate): MsgRedelegateProtoMsg;
};
export declare const MsgRedelegateResponse: {
    typeUrl: string;
    encode(_: MsgRedelegateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRedelegateResponse;
    fromPartial(_: Partial<MsgRedelegateResponse>): MsgRedelegateResponse;
    fromAmino(_: MsgRedelegateResponseAmino): MsgRedelegateResponse;
    toAmino(_: MsgRedelegateResponse): MsgRedelegateResponseAmino;
    fromAminoMsg(object: MsgRedelegateResponseAminoMsg): MsgRedelegateResponse;
    fromProtoMsg(message: MsgRedelegateResponseProtoMsg): MsgRedelegateResponse;
    toProto(message: MsgRedelegateResponse): Uint8Array;
    toProtoMsg(message: MsgRedelegateResponse): MsgRedelegateResponseProtoMsg;
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
