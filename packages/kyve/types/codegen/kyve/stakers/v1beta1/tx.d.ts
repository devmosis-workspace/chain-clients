import { BinaryWriter } from "../../../binary";
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStaker {
    /** creator is the address of the staker. */
    creator: string;
    /** amount is the initial self-stake of the staker. */
    amount: bigint;
    /**
     * commission is the percentage that is deducted from rewards before
     * distributing the staker's delegators.
     */
    commission: string;
}
export interface MsgCreateStakerProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker";
    value: Uint8Array;
}
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStakerAmino {
    /** creator is the address of the staker. */
    creator?: string;
    /** amount is the initial self-stake of the staker. */
    amount?: string;
    /**
     * commission is the percentage that is deducted from rewards before
     * distributing the staker's delegators.
     */
    commission?: string;
}
export interface MsgCreateStakerAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgCreateStaker";
    value: MsgCreateStakerAmino;
}
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStakerSDKType {
    creator: string;
    amount: bigint;
    commission: string;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponse {
}
export interface MsgCreateStakerResponseProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgCreateStakerResponse";
    value: Uint8Array;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponseAmino {
}
export interface MsgCreateStakerResponseAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgCreateStakerResponse";
    value: MsgCreateStakerResponseAmino;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponseSDKType {
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
    /** creator ... */
    creator: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** identity from keybase.io */
    identity: string;
    /** security_contact ... */
    securityContact: string;
    /** details ... */
    details: string;
}
export interface MsgUpdateMetadataProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata";
    value: Uint8Array;
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadataAmino {
    /** creator ... */
    creator?: string;
    /** moniker ... */
    moniker?: string;
    /** website ... */
    website?: string;
    /** identity from keybase.io */
    identity?: string;
    /** security_contact ... */
    security_contact?: string;
    /** details ... */
    details?: string;
}
export interface MsgUpdateMetadataAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateMetadata";
    value: MsgUpdateMetadataAmino;
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadataSDKType {
    creator: string;
    moniker: string;
    website: string;
    identity: string;
    security_contact: string;
    details: string;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {
}
export interface MsgUpdateMetadataResponseProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadataResponse";
    value: Uint8Array;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponseAmino {
}
export interface MsgUpdateMetadataResponseAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateMetadataResponse";
    value: MsgUpdateMetadataResponseAmino;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponseSDKType {
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommission {
    /** creator ... */
    creator: string;
    /** commission ... */
    commission: string;
}
export interface MsgUpdateCommissionProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission";
    value: Uint8Array;
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommissionAmino {
    /** creator ... */
    creator?: string;
    /** commission ... */
    commission?: string;
}
export interface MsgUpdateCommissionAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateCommission";
    value: MsgUpdateCommissionAmino;
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommissionSDKType {
    creator: string;
    commission: string;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponse {
}
export interface MsgUpdateCommissionResponseProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommissionResponse";
    value: Uint8Array;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponseAmino {
}
export interface MsgUpdateCommissionResponseAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateCommissionResponse";
    value: MsgUpdateCommissionResponseAmino;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponseSDKType {
}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewards {
    /** creator ... */
    creator: string;
    /** amount ... */
    amount: bigint;
}
export interface MsgClaimCommissionRewardsProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards";
    value: Uint8Array;
}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewardsAmino {
    /** creator ... */
    creator?: string;
    /** amount ... */
    amount?: string;
}
export interface MsgClaimCommissionRewardsAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards";
    value: MsgClaimCommissionRewardsAmino;
}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewardsSDKType {
    creator: string;
    amount: bigint;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponse {
}
export interface MsgClaimCommissionRewardsResponseProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewardsResponse";
    value: Uint8Array;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponseAmino {
}
export interface MsgClaimCommissionRewardsResponseAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgClaimCommissionRewardsResponse";
    value: MsgClaimCommissionRewardsResponseAmino;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponseSDKType {
}
/** MsgJoinPool ... */
export interface MsgJoinPool {
    /** creator ... */
    creator: string;
    /** pool_id ... */
    poolId: bigint;
    /** valaddress ... */
    valaddress: string;
    /** amount ... */
    amount: bigint;
}
export interface MsgJoinPoolProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool";
    value: Uint8Array;
}
/** MsgJoinPool ... */
export interface MsgJoinPoolAmino {
    /** creator ... */
    creator?: string;
    /** pool_id ... */
    pool_id?: string;
    /** valaddress ... */
    valaddress?: string;
    /** amount ... */
    amount?: string;
}
export interface MsgJoinPoolAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgJoinPool";
    value: MsgJoinPoolAmino;
}
/** MsgJoinPool ... */
export interface MsgJoinPoolSDKType {
    creator: string;
    pool_id: bigint;
    valaddress: string;
    amount: bigint;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponse {
}
export interface MsgJoinPoolResponseProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgJoinPoolResponse";
    value: Uint8Array;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponseAmino {
}
export interface MsgJoinPoolResponseAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgJoinPoolResponse";
    value: MsgJoinPoolResponseAmino;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponseSDKType {
}
/** MsgLeavePool ... */
export interface MsgLeavePool {
    /** creator ... */
    creator: string;
    /** pool_id ... */
    poolId: bigint;
}
export interface MsgLeavePoolProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool";
    value: Uint8Array;
}
/** MsgLeavePool ... */
export interface MsgLeavePoolAmino {
    /** creator ... */
    creator?: string;
    /** pool_id ... */
    pool_id?: string;
}
export interface MsgLeavePoolAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgLeavePool";
    value: MsgLeavePoolAmino;
}
/** MsgLeavePool ... */
export interface MsgLeavePoolSDKType {
    creator: string;
    pool_id: bigint;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponse {
}
export interface MsgLeavePoolResponseProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgLeavePoolResponse";
    value: Uint8Array;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponseAmino {
}
export interface MsgLeavePoolResponseAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgLeavePoolResponse";
    value: MsgLeavePoolResponseAmino;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponseSDKType {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/stakers parameters to update. */
    payload: string;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** payload defines the x/stakers parameters to update. */
    payload?: string;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateParams";
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
    typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateStaker: {
    typeUrl: string;
    encode(message: MsgCreateStaker, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateStaker;
    fromPartial(object: Partial<MsgCreateStaker>): MsgCreateStaker;
    fromAmino(object: MsgCreateStakerAmino): MsgCreateStaker;
    toAmino(message: MsgCreateStaker): MsgCreateStakerAmino;
    fromAminoMsg(object: MsgCreateStakerAminoMsg): MsgCreateStaker;
    fromProtoMsg(message: MsgCreateStakerProtoMsg): MsgCreateStaker;
    toProto(message: MsgCreateStaker): Uint8Array;
    toProtoMsg(message: MsgCreateStaker): MsgCreateStakerProtoMsg;
};
export declare const MsgCreateStakerResponse: {
    typeUrl: string;
    encode(_: MsgCreateStakerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateStakerResponse;
    fromPartial(_: Partial<MsgCreateStakerResponse>): MsgCreateStakerResponse;
    fromAmino(_: MsgCreateStakerResponseAmino): MsgCreateStakerResponse;
    toAmino(_: MsgCreateStakerResponse): MsgCreateStakerResponseAmino;
    fromAminoMsg(object: MsgCreateStakerResponseAminoMsg): MsgCreateStakerResponse;
    fromProtoMsg(message: MsgCreateStakerResponseProtoMsg): MsgCreateStakerResponse;
    toProto(message: MsgCreateStakerResponse): Uint8Array;
    toProtoMsg(message: MsgCreateStakerResponse): MsgCreateStakerResponseProtoMsg;
};
export declare const MsgUpdateMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateMetadata;
    fromPartial(object: Partial<MsgUpdateMetadata>): MsgUpdateMetadata;
    fromAmino(object: MsgUpdateMetadataAmino): MsgUpdateMetadata;
    toAmino(message: MsgUpdateMetadata): MsgUpdateMetadataAmino;
    fromAminoMsg(object: MsgUpdateMetadataAminoMsg): MsgUpdateMetadata;
    fromProtoMsg(message: MsgUpdateMetadataProtoMsg): MsgUpdateMetadata;
    toProto(message: MsgUpdateMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateMetadata): MsgUpdateMetadataProtoMsg;
};
export declare const MsgUpdateMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateMetadataResponse;
    fromPartial(_: Partial<MsgUpdateMetadataResponse>): MsgUpdateMetadataResponse;
    fromAmino(_: MsgUpdateMetadataResponseAmino): MsgUpdateMetadataResponse;
    toAmino(_: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateMetadataResponseAminoMsg): MsgUpdateMetadataResponse;
    fromProtoMsg(message: MsgUpdateMetadataResponseProtoMsg): MsgUpdateMetadataResponse;
    toProto(message: MsgUpdateMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseProtoMsg;
};
export declare const MsgUpdateCommission: {
    typeUrl: string;
    encode(message: MsgUpdateCommission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateCommission;
    fromPartial(object: Partial<MsgUpdateCommission>): MsgUpdateCommission;
    fromAmino(object: MsgUpdateCommissionAmino): MsgUpdateCommission;
    toAmino(message: MsgUpdateCommission): MsgUpdateCommissionAmino;
    fromAminoMsg(object: MsgUpdateCommissionAminoMsg): MsgUpdateCommission;
    fromProtoMsg(message: MsgUpdateCommissionProtoMsg): MsgUpdateCommission;
    toProto(message: MsgUpdateCommission): Uint8Array;
    toProtoMsg(message: MsgUpdateCommission): MsgUpdateCommissionProtoMsg;
};
export declare const MsgUpdateCommissionResponse: {
    typeUrl: string;
    encode(_: MsgUpdateCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateCommissionResponse;
    fromPartial(_: Partial<MsgUpdateCommissionResponse>): MsgUpdateCommissionResponse;
    fromAmino(_: MsgUpdateCommissionResponseAmino): MsgUpdateCommissionResponse;
    toAmino(_: MsgUpdateCommissionResponse): MsgUpdateCommissionResponseAmino;
    fromAminoMsg(object: MsgUpdateCommissionResponseAminoMsg): MsgUpdateCommissionResponse;
    fromProtoMsg(message: MsgUpdateCommissionResponseProtoMsg): MsgUpdateCommissionResponse;
    toProto(message: MsgUpdateCommissionResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateCommissionResponse): MsgUpdateCommissionResponseProtoMsg;
};
export declare const MsgClaimCommissionRewards: {
    typeUrl: string;
    encode(message: MsgClaimCommissionRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimCommissionRewards;
    fromPartial(object: Partial<MsgClaimCommissionRewards>): MsgClaimCommissionRewards;
    fromAmino(object: MsgClaimCommissionRewardsAmino): MsgClaimCommissionRewards;
    toAmino(message: MsgClaimCommissionRewards): MsgClaimCommissionRewardsAmino;
    fromAminoMsg(object: MsgClaimCommissionRewardsAminoMsg): MsgClaimCommissionRewards;
    fromProtoMsg(message: MsgClaimCommissionRewardsProtoMsg): MsgClaimCommissionRewards;
    toProto(message: MsgClaimCommissionRewards): Uint8Array;
    toProtoMsg(message: MsgClaimCommissionRewards): MsgClaimCommissionRewardsProtoMsg;
};
export declare const MsgClaimCommissionRewardsResponse: {
    typeUrl: string;
    encode(_: MsgClaimCommissionRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimCommissionRewardsResponse;
    fromPartial(_: Partial<MsgClaimCommissionRewardsResponse>): MsgClaimCommissionRewardsResponse;
    fromAmino(_: MsgClaimCommissionRewardsResponseAmino): MsgClaimCommissionRewardsResponse;
    toAmino(_: MsgClaimCommissionRewardsResponse): MsgClaimCommissionRewardsResponseAmino;
    fromAminoMsg(object: MsgClaimCommissionRewardsResponseAminoMsg): MsgClaimCommissionRewardsResponse;
    fromProtoMsg(message: MsgClaimCommissionRewardsResponseProtoMsg): MsgClaimCommissionRewardsResponse;
    toProto(message: MsgClaimCommissionRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgClaimCommissionRewardsResponse): MsgClaimCommissionRewardsResponseProtoMsg;
};
export declare const MsgJoinPool: {
    typeUrl: string;
    encode(message: MsgJoinPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgJoinPool;
    fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool;
    fromAmino(object: MsgJoinPoolAmino): MsgJoinPool;
    toAmino(message: MsgJoinPool): MsgJoinPoolAmino;
    fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool;
    fromProtoMsg(message: MsgJoinPoolProtoMsg): MsgJoinPool;
    toProto(message: MsgJoinPool): Uint8Array;
    toProtoMsg(message: MsgJoinPool): MsgJoinPoolProtoMsg;
};
export declare const MsgJoinPoolResponse: {
    typeUrl: string;
    encode(_: MsgJoinPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgJoinPoolResponse;
    fromPartial(_: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
    fromAmino(_: MsgJoinPoolResponseAmino): MsgJoinPoolResponse;
    toAmino(_: MsgJoinPoolResponse): MsgJoinPoolResponseAmino;
    fromAminoMsg(object: MsgJoinPoolResponseAminoMsg): MsgJoinPoolResponse;
    fromProtoMsg(message: MsgJoinPoolResponseProtoMsg): MsgJoinPoolResponse;
    toProto(message: MsgJoinPoolResponse): Uint8Array;
    toProtoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseProtoMsg;
};
export declare const MsgLeavePool: {
    typeUrl: string;
    encode(message: MsgLeavePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLeavePool;
    fromPartial(object: Partial<MsgLeavePool>): MsgLeavePool;
    fromAmino(object: MsgLeavePoolAmino): MsgLeavePool;
    toAmino(message: MsgLeavePool): MsgLeavePoolAmino;
    fromAminoMsg(object: MsgLeavePoolAminoMsg): MsgLeavePool;
    fromProtoMsg(message: MsgLeavePoolProtoMsg): MsgLeavePool;
    toProto(message: MsgLeavePool): Uint8Array;
    toProtoMsg(message: MsgLeavePool): MsgLeavePoolProtoMsg;
};
export declare const MsgLeavePoolResponse: {
    typeUrl: string;
    encode(_: MsgLeavePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLeavePoolResponse;
    fromPartial(_: Partial<MsgLeavePoolResponse>): MsgLeavePoolResponse;
    fromAmino(_: MsgLeavePoolResponseAmino): MsgLeavePoolResponse;
    toAmino(_: MsgLeavePoolResponse): MsgLeavePoolResponseAmino;
    fromAminoMsg(object: MsgLeavePoolResponseAminoMsg): MsgLeavePoolResponse;
    fromProtoMsg(message: MsgLeavePoolResponseProtoMsg): MsgLeavePoolResponse;
    toProto(message: MsgLeavePoolResponse): Uint8Array;
    toProtoMsg(message: MsgLeavePoolResponse): MsgLeavePoolResponseProtoMsg;
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
