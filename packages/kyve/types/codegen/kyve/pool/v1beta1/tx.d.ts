import { BinaryWriter } from "../../../binary";
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** name ... */
    name: string;
    /** runtime ... */
    runtime: string;
    /** logo ... */
    logo: string;
    /** config ... */
    config: string;
    /** start_key ... */
    startKey: string;
    /** upload_interval ... */
    uploadInterval: bigint;
    /** inflation_share_weight ... */
    inflationShareWeight: bigint;
    /** min_delegation ... */
    minDelegation: bigint;
    /** max_bundle_size ... */
    maxBundleSize: bigint;
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** storage_provider_id ... */
    storageProviderId: number;
    /** compression_id ... */
    compressionId: number;
}
export interface MsgCreatePoolProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgCreatePool";
    value: Uint8Array;
}
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePoolAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** name ... */
    name?: string;
    /** runtime ... */
    runtime?: string;
    /** logo ... */
    logo?: string;
    /** config ... */
    config?: string;
    /** start_key ... */
    start_key?: string;
    /** upload_interval ... */
    upload_interval?: string;
    /** inflation_share_weight ... */
    inflation_share_weight?: string;
    /** min_delegation ... */
    min_delegation?: string;
    /** max_bundle_size ... */
    max_bundle_size?: string;
    /** version ... */
    version?: string;
    /** binaries ... */
    binaries?: string;
    /** storage_provider_id ... */
    storage_provider_id?: number;
    /** compression_id ... */
    compression_id?: number;
}
export interface MsgCreatePoolAminoMsg {
    type: "/kyve.pool.v1beta1.MsgCreatePool";
    value: MsgCreatePoolAmino;
}
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePoolSDKType {
    authority: string;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    start_key: string;
    upload_interval: bigint;
    inflation_share_weight: bigint;
    min_delegation: bigint;
    max_bundle_size: bigint;
    version: string;
    binaries: string;
    storage_provider_id: number;
    compression_id: number;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {
}
export interface MsgCreatePoolResponseProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgCreatePoolResponse";
    value: Uint8Array;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseAmino {
}
export interface MsgCreatePoolResponseAminoMsg {
    type: "/kyve.pool.v1beta1.MsgCreatePoolResponse";
    value: MsgCreatePoolResponseAmino;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: bigint;
    /** payload ... */
    payload: string;
}
export interface MsgUpdatePoolProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool";
    value: Uint8Array;
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePoolAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** id ... */
    id?: string;
    /** payload ... */
    payload?: string;
}
export interface MsgUpdatePoolAminoMsg {
    type: "/kyve.pool.v1beta1.MsgUpdatePool";
    value: MsgUpdatePoolAmino;
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePoolSDKType {
    authority: string;
    id: bigint;
    payload: string;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponse {
}
export interface MsgUpdatePoolResponseProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgUpdatePoolResponse";
    value: Uint8Array;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponseAmino {
}
export interface MsgUpdatePoolResponseAminoMsg {
    type: "/kyve.pool.v1beta1.MsgUpdatePoolResponse";
    value: MsgUpdatePoolResponseAmino;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponseSDKType {
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: bigint;
}
export interface MsgDisablePoolProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgDisablePool";
    value: Uint8Array;
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePoolAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** id ... */
    id?: string;
}
export interface MsgDisablePoolAminoMsg {
    type: "/kyve.pool.v1beta1.MsgDisablePool";
    value: MsgDisablePoolAmino;
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePoolSDKType {
    authority: string;
    id: bigint;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponse {
}
export interface MsgDisablePoolResponseProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgDisablePoolResponse";
    value: Uint8Array;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponseAmino {
}
export interface MsgDisablePoolResponseAminoMsg {
    type: "/kyve.pool.v1beta1.MsgDisablePoolResponse";
    value: MsgDisablePoolResponseAmino;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponseSDKType {
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: bigint;
}
export interface MsgEnablePoolProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgEnablePool";
    value: Uint8Array;
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePoolAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** id ... */
    id?: string;
}
export interface MsgEnablePoolAminoMsg {
    type: "/kyve.pool.v1beta1.MsgEnablePool";
    value: MsgEnablePoolAmino;
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePoolSDKType {
    authority: string;
    id: bigint;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponse {
}
export interface MsgEnablePoolResponseProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgEnablePoolResponse";
    value: Uint8Array;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponseAmino {
}
export interface MsgEnablePoolResponseAminoMsg {
    type: "/kyve.pool.v1beta1.MsgEnablePoolResponse";
    value: MsgEnablePoolResponseAmino;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponseSDKType {
}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** runtime ... */
    runtime: string;
    /** version ... */
    version: string;
    /** scheduled_at ... */
    scheduledAt: bigint;
    /** duration ... */
    duration: bigint;
    /** binaries ... */
    binaries: string;
}
export interface MsgScheduleRuntimeUpgradeProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade";
    value: Uint8Array;
}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgradeAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** runtime ... */
    runtime?: string;
    /** version ... */
    version?: string;
    /** scheduled_at ... */
    scheduled_at?: string;
    /** duration ... */
    duration?: string;
    /** binaries ... */
    binaries?: string;
}
export interface MsgScheduleRuntimeUpgradeAminoMsg {
    type: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade";
    value: MsgScheduleRuntimeUpgradeAmino;
}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgradeSDKType {
    authority: string;
    runtime: string;
    version: string;
    scheduled_at: bigint;
    duration: bigint;
    binaries: string;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponse {
}
export interface MsgScheduleRuntimeUpgradeResponseProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgradeResponse";
    value: Uint8Array;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponseAmino {
}
export interface MsgScheduleRuntimeUpgradeResponseAminoMsg {
    type: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgradeResponse";
    value: MsgScheduleRuntimeUpgradeResponseAmino;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponseSDKType {
}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** runtime ... */
    runtime: string;
}
export interface MsgCancelRuntimeUpgradeProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade";
    value: Uint8Array;
}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgradeAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** runtime ... */
    runtime?: string;
}
export interface MsgCancelRuntimeUpgradeAminoMsg {
    type: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade";
    value: MsgCancelRuntimeUpgradeAmino;
}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgradeSDKType {
    authority: string;
    runtime: string;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponse {
}
export interface MsgCancelRuntimeUpgradeResponseProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgradeResponse";
    value: Uint8Array;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponseAmino {
}
export interface MsgCancelRuntimeUpgradeResponseAminoMsg {
    type: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgradeResponse";
    value: MsgCancelRuntimeUpgradeResponseAmino;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponseSDKType {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/stakers parameters to update. */
    payload: string;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams";
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
    type: "/kyve.pool.v1beta1.MsgUpdateParams";
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
    typeUrl: "/kyve.pool.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/kyve.pool.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreatePool: {
    typeUrl: string;
    encode(message: MsgCreatePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePool;
    fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool;
    fromAmino(object: MsgCreatePoolAmino): MsgCreatePool;
    toAmino(message: MsgCreatePool): MsgCreatePoolAmino;
    fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool;
    fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool;
    toProto(message: MsgCreatePool): Uint8Array;
    toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg;
};
export declare const MsgCreatePoolResponse: {
    typeUrl: string;
    encode(_: MsgCreatePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreatePoolResponse;
    fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
    fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse;
    toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino;
    fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse;
    fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse;
    toProto(message: MsgCreatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg;
};
export declare const MsgUpdatePool: {
    typeUrl: string;
    encode(message: MsgUpdatePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdatePool;
    fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool;
    fromAmino(object: MsgUpdatePoolAmino): MsgUpdatePool;
    toAmino(message: MsgUpdatePool): MsgUpdatePoolAmino;
    fromAminoMsg(object: MsgUpdatePoolAminoMsg): MsgUpdatePool;
    fromProtoMsg(message: MsgUpdatePoolProtoMsg): MsgUpdatePool;
    toProto(message: MsgUpdatePool): Uint8Array;
    toProtoMsg(message: MsgUpdatePool): MsgUpdatePoolProtoMsg;
};
export declare const MsgUpdatePoolResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdatePoolResponse;
    fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse;
    fromAmino(_: MsgUpdatePoolResponseAmino): MsgUpdatePoolResponse;
    toAmino(_: MsgUpdatePoolResponse): MsgUpdatePoolResponseAmino;
    fromAminoMsg(object: MsgUpdatePoolResponseAminoMsg): MsgUpdatePoolResponse;
    fromProtoMsg(message: MsgUpdatePoolResponseProtoMsg): MsgUpdatePoolResponse;
    toProto(message: MsgUpdatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePoolResponse): MsgUpdatePoolResponseProtoMsg;
};
export declare const MsgDisablePool: {
    typeUrl: string;
    encode(message: MsgDisablePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDisablePool;
    fromPartial(object: Partial<MsgDisablePool>): MsgDisablePool;
    fromAmino(object: MsgDisablePoolAmino): MsgDisablePool;
    toAmino(message: MsgDisablePool): MsgDisablePoolAmino;
    fromAminoMsg(object: MsgDisablePoolAminoMsg): MsgDisablePool;
    fromProtoMsg(message: MsgDisablePoolProtoMsg): MsgDisablePool;
    toProto(message: MsgDisablePool): Uint8Array;
    toProtoMsg(message: MsgDisablePool): MsgDisablePoolProtoMsg;
};
export declare const MsgDisablePoolResponse: {
    typeUrl: string;
    encode(_: MsgDisablePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDisablePoolResponse;
    fromPartial(_: Partial<MsgDisablePoolResponse>): MsgDisablePoolResponse;
    fromAmino(_: MsgDisablePoolResponseAmino): MsgDisablePoolResponse;
    toAmino(_: MsgDisablePoolResponse): MsgDisablePoolResponseAmino;
    fromAminoMsg(object: MsgDisablePoolResponseAminoMsg): MsgDisablePoolResponse;
    fromProtoMsg(message: MsgDisablePoolResponseProtoMsg): MsgDisablePoolResponse;
    toProto(message: MsgDisablePoolResponse): Uint8Array;
    toProtoMsg(message: MsgDisablePoolResponse): MsgDisablePoolResponseProtoMsg;
};
export declare const MsgEnablePool: {
    typeUrl: string;
    encode(message: MsgEnablePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEnablePool;
    fromPartial(object: Partial<MsgEnablePool>): MsgEnablePool;
    fromAmino(object: MsgEnablePoolAmino): MsgEnablePool;
    toAmino(message: MsgEnablePool): MsgEnablePoolAmino;
    fromAminoMsg(object: MsgEnablePoolAminoMsg): MsgEnablePool;
    fromProtoMsg(message: MsgEnablePoolProtoMsg): MsgEnablePool;
    toProto(message: MsgEnablePool): Uint8Array;
    toProtoMsg(message: MsgEnablePool): MsgEnablePoolProtoMsg;
};
export declare const MsgEnablePoolResponse: {
    typeUrl: string;
    encode(_: MsgEnablePoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEnablePoolResponse;
    fromPartial(_: Partial<MsgEnablePoolResponse>): MsgEnablePoolResponse;
    fromAmino(_: MsgEnablePoolResponseAmino): MsgEnablePoolResponse;
    toAmino(_: MsgEnablePoolResponse): MsgEnablePoolResponseAmino;
    fromAminoMsg(object: MsgEnablePoolResponseAminoMsg): MsgEnablePoolResponse;
    fromProtoMsg(message: MsgEnablePoolResponseProtoMsg): MsgEnablePoolResponse;
    toProto(message: MsgEnablePoolResponse): Uint8Array;
    toProtoMsg(message: MsgEnablePoolResponse): MsgEnablePoolResponseProtoMsg;
};
export declare const MsgScheduleRuntimeUpgrade: {
    typeUrl: string;
    encode(message: MsgScheduleRuntimeUpgrade, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgScheduleRuntimeUpgrade;
    fromPartial(object: Partial<MsgScheduleRuntimeUpgrade>): MsgScheduleRuntimeUpgrade;
    fromAmino(object: MsgScheduleRuntimeUpgradeAmino): MsgScheduleRuntimeUpgrade;
    toAmino(message: MsgScheduleRuntimeUpgrade): MsgScheduleRuntimeUpgradeAmino;
    fromAminoMsg(object: MsgScheduleRuntimeUpgradeAminoMsg): MsgScheduleRuntimeUpgrade;
    fromProtoMsg(message: MsgScheduleRuntimeUpgradeProtoMsg): MsgScheduleRuntimeUpgrade;
    toProto(message: MsgScheduleRuntimeUpgrade): Uint8Array;
    toProtoMsg(message: MsgScheduleRuntimeUpgrade): MsgScheduleRuntimeUpgradeProtoMsg;
};
export declare const MsgScheduleRuntimeUpgradeResponse: {
    typeUrl: string;
    encode(_: MsgScheduleRuntimeUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgScheduleRuntimeUpgradeResponse;
    fromPartial(_: Partial<MsgScheduleRuntimeUpgradeResponse>): MsgScheduleRuntimeUpgradeResponse;
    fromAmino(_: MsgScheduleRuntimeUpgradeResponseAmino): MsgScheduleRuntimeUpgradeResponse;
    toAmino(_: MsgScheduleRuntimeUpgradeResponse): MsgScheduleRuntimeUpgradeResponseAmino;
    fromAminoMsg(object: MsgScheduleRuntimeUpgradeResponseAminoMsg): MsgScheduleRuntimeUpgradeResponse;
    fromProtoMsg(message: MsgScheduleRuntimeUpgradeResponseProtoMsg): MsgScheduleRuntimeUpgradeResponse;
    toProto(message: MsgScheduleRuntimeUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgScheduleRuntimeUpgradeResponse): MsgScheduleRuntimeUpgradeResponseProtoMsg;
};
export declare const MsgCancelRuntimeUpgrade: {
    typeUrl: string;
    encode(message: MsgCancelRuntimeUpgrade, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelRuntimeUpgrade;
    fromPartial(object: Partial<MsgCancelRuntimeUpgrade>): MsgCancelRuntimeUpgrade;
    fromAmino(object: MsgCancelRuntimeUpgradeAmino): MsgCancelRuntimeUpgrade;
    toAmino(message: MsgCancelRuntimeUpgrade): MsgCancelRuntimeUpgradeAmino;
    fromAminoMsg(object: MsgCancelRuntimeUpgradeAminoMsg): MsgCancelRuntimeUpgrade;
    fromProtoMsg(message: MsgCancelRuntimeUpgradeProtoMsg): MsgCancelRuntimeUpgrade;
    toProto(message: MsgCancelRuntimeUpgrade): Uint8Array;
    toProtoMsg(message: MsgCancelRuntimeUpgrade): MsgCancelRuntimeUpgradeProtoMsg;
};
export declare const MsgCancelRuntimeUpgradeResponse: {
    typeUrl: string;
    encode(_: MsgCancelRuntimeUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelRuntimeUpgradeResponse;
    fromPartial(_: Partial<MsgCancelRuntimeUpgradeResponse>): MsgCancelRuntimeUpgradeResponse;
    fromAmino(_: MsgCancelRuntimeUpgradeResponseAmino): MsgCancelRuntimeUpgradeResponse;
    toAmino(_: MsgCancelRuntimeUpgradeResponse): MsgCancelRuntimeUpgradeResponseAmino;
    fromAminoMsg(object: MsgCancelRuntimeUpgradeResponseAminoMsg): MsgCancelRuntimeUpgradeResponse;
    fromProtoMsg(message: MsgCancelRuntimeUpgradeResponseProtoMsg): MsgCancelRuntimeUpgradeResponse;
    toProto(message: MsgCancelRuntimeUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgCancelRuntimeUpgradeResponse): MsgCancelRuntimeUpgradeResponseProtoMsg;
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
