import { AminoMsg } from "@cosmjs/amino";
import { MsgFundPool, MsgDefundPool, MsgCreatePool, MsgUpdatePool, MsgDisablePool, MsgEnablePool, MsgScheduleRuntimeUpgrade, MsgCancelRuntimeUpgrade } from "./tx";
export interface MsgFundPoolAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgFundPool";
    value: {
        creator: string;
        id: string;
        amount: string;
    };
}
export interface MsgDefundPoolAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgDefundPool";
    value: {
        creator: string;
        id: string;
        amount: string;
    };
}
export interface MsgCreatePoolAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgCreatePool";
    value: {
        authority: string;
        name: string;
        runtime: string;
        logo: string;
        config: string;
        start_key: string;
        upload_interval: string;
        operating_cost: string;
        min_delegation: string;
        max_bundle_size: string;
        version: string;
        binaries: string;
        storage_provider_id: number;
        compression_id: number;
    };
}
export interface MsgUpdatePoolAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgUpdatePool";
    value: {
        authority: string;
        id: string;
        payload: string;
    };
}
export interface MsgDisablePoolAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgDisablePool";
    value: {
        authority: string;
        id: string;
    };
}
export interface MsgEnablePoolAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgEnablePool";
    value: {
        authority: string;
        id: string;
    };
}
export interface MsgScheduleRuntimeUpgradeAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade";
    value: {
        authority: string;
        runtime: string;
        version: string;
        scheduled_at: string;
        duration: string;
        binaries: string;
    };
}
export interface MsgCancelRuntimeUpgradeAminoType extends AminoMsg {
    type: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade";
    value: {
        authority: string;
        runtime: string;
    };
}
export declare const AminoConverter: {
    "/kyve.pool.v1beta1.MsgFundPool": {
        aminoType: string;
        toAmino: ({ creator, id, amount }: MsgFundPool) => MsgFundPoolAminoType["value"];
        fromAmino: ({ creator, id, amount }: MsgFundPoolAminoType["value"]) => MsgFundPool;
    };
    "/kyve.pool.v1beta1.MsgDefundPool": {
        aminoType: string;
        toAmino: ({ creator, id, amount }: MsgDefundPool) => MsgDefundPoolAminoType["value"];
        fromAmino: ({ creator, id, amount }: MsgDefundPoolAminoType["value"]) => MsgDefundPool;
    };
    "/kyve.pool.v1beta1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ authority, name, runtime, logo, config, startKey, uploadInterval, operatingCost, minDelegation, maxBundleSize, version, binaries, storageProviderId, compressionId }: MsgCreatePool) => MsgCreatePoolAminoType["value"];
        fromAmino: ({ authority, name, runtime, logo, config, start_key, upload_interval, operating_cost, min_delegation, max_bundle_size, version, binaries, storage_provider_id, compression_id }: MsgCreatePoolAminoType["value"]) => MsgCreatePool;
    };
    "/kyve.pool.v1beta1.MsgUpdatePool": {
        aminoType: string;
        toAmino: ({ authority, id, payload }: MsgUpdatePool) => MsgUpdatePoolAminoType["value"];
        fromAmino: ({ authority, id, payload }: MsgUpdatePoolAminoType["value"]) => MsgUpdatePool;
    };
    "/kyve.pool.v1beta1.MsgDisablePool": {
        aminoType: string;
        toAmino: ({ authority, id }: MsgDisablePool) => MsgDisablePoolAminoType["value"];
        fromAmino: ({ authority, id }: MsgDisablePoolAminoType["value"]) => MsgDisablePool;
    };
    "/kyve.pool.v1beta1.MsgEnablePool": {
        aminoType: string;
        toAmino: ({ authority, id }: MsgEnablePool) => MsgEnablePoolAminoType["value"];
        fromAmino: ({ authority, id }: MsgEnablePoolAminoType["value"]) => MsgEnablePool;
    };
    "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
        aminoType: string;
        toAmino: ({ authority, runtime, version, scheduledAt, duration, binaries }: MsgScheduleRuntimeUpgrade) => MsgScheduleRuntimeUpgradeAminoType["value"];
        fromAmino: ({ authority, runtime, version, scheduled_at, duration, binaries }: MsgScheduleRuntimeUpgradeAminoType["value"]) => MsgScheduleRuntimeUpgrade;
    };
    "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
        aminoType: string;
        toAmino: ({ authority, runtime }: MsgCancelRuntimeUpgrade) => MsgCancelRuntimeUpgradeAminoType["value"];
        fromAmino: ({ authority, runtime }: MsgCancelRuntimeUpgradeAminoType["value"]) => MsgCancelRuntimeUpgrade;
    };
};
