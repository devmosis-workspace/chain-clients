import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: Long;
    /** amount ... */
    amount: Long;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolSDKType {
    creator: string;
    id: Long;
    amount: Long;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseSDKType {
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: Long;
    /** amount ... */
    amount: Long;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolSDKType {
    creator: string;
    id: Long;
    amount: Long;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponseSDKType {
}
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
    uploadInterval: Long;
    /** operating_cost ... */
    operatingCost: Long;
    /** min_delegation ... */
    minDelegation: Long;
    /** max_bundle_size ... */
    maxBundleSize: Long;
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** storage_provider_id ... */
    storageProviderId: number;
    /** compression_id ... */
    compressionId: number;
}
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePoolSDKType {
    authority: string;
    name: string;
    runtime: string;
    logo: string;
    config: string;
    start_key: string;
    upload_interval: Long;
    operating_cost: Long;
    min_delegation: Long;
    max_bundle_size: Long;
    version: string;
    binaries: string;
    storage_provider_id: number;
    compression_id: number;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: Long;
    /** payload ... */
    payload: string;
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePoolSDKType {
    authority: string;
    id: Long;
    payload: string;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponse {
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponseSDKType {
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: Long;
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePoolSDKType {
    authority: string;
    id: Long;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponse {
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponseSDKType {
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: Long;
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePoolSDKType {
    authority: string;
    id: Long;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponse {
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
    scheduledAt: Long;
    /** duration ... */
    duration: Long;
    /** binaries ... */
    binaries: string;
}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgradeSDKType {
    authority: string;
    runtime: string;
    version: string;
    scheduled_at: Long;
    duration: Long;
    binaries: string;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponse {
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
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgradeSDKType {
    authority: string;
    runtime: string;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponse {
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponseSDKType {
}
export declare const MsgFundPool: {
    encode(message: MsgFundPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgFundPool;
    fromPartial(object: Partial<MsgFundPool>): MsgFundPool;
};
export declare const MsgFundPoolResponse: {
    encode(_: MsgFundPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgFundPoolResponse;
    fromPartial(_: Partial<MsgFundPoolResponse>): MsgFundPoolResponse;
};
export declare const MsgDefundPool: {
    encode(message: MsgDefundPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDefundPool;
    fromPartial(object: Partial<MsgDefundPool>): MsgDefundPool;
};
export declare const MsgDefundPoolResponse: {
    encode(_: MsgDefundPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDefundPoolResponse;
    fromPartial(_: Partial<MsgDefundPoolResponse>): MsgDefundPoolResponse;
};
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreatePool;
    fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreatePoolResponse;
    fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgUpdatePool: {
    encode(message: MsgUpdatePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdatePool;
    fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool;
};
export declare const MsgUpdatePoolResponse: {
    encode(_: MsgUpdatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdatePoolResponse;
    fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse;
};
export declare const MsgDisablePool: {
    encode(message: MsgDisablePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDisablePool;
    fromPartial(object: Partial<MsgDisablePool>): MsgDisablePool;
};
export declare const MsgDisablePoolResponse: {
    encode(_: MsgDisablePoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDisablePoolResponse;
    fromPartial(_: Partial<MsgDisablePoolResponse>): MsgDisablePoolResponse;
};
export declare const MsgEnablePool: {
    encode(message: MsgEnablePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgEnablePool;
    fromPartial(object: Partial<MsgEnablePool>): MsgEnablePool;
};
export declare const MsgEnablePoolResponse: {
    encode(_: MsgEnablePoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgEnablePoolResponse;
    fromPartial(_: Partial<MsgEnablePoolResponse>): MsgEnablePoolResponse;
};
export declare const MsgScheduleRuntimeUpgrade: {
    encode(message: MsgScheduleRuntimeUpgrade, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgScheduleRuntimeUpgrade;
    fromPartial(object: Partial<MsgScheduleRuntimeUpgrade>): MsgScheduleRuntimeUpgrade;
};
export declare const MsgScheduleRuntimeUpgradeResponse: {
    encode(_: MsgScheduleRuntimeUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgScheduleRuntimeUpgradeResponse;
    fromPartial(_: Partial<MsgScheduleRuntimeUpgradeResponse>): MsgScheduleRuntimeUpgradeResponse;
};
export declare const MsgCancelRuntimeUpgrade: {
    encode(message: MsgCancelRuntimeUpgrade, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelRuntimeUpgrade;
    fromPartial(object: Partial<MsgCancelRuntimeUpgrade>): MsgCancelRuntimeUpgrade;
};
export declare const MsgCancelRuntimeUpgradeResponse: {
    encode(_: MsgCancelRuntimeUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelRuntimeUpgradeResponse;
    fromPartial(_: Partial<MsgCancelRuntimeUpgradeResponse>): MsgCancelRuntimeUpgradeResponse;
};
