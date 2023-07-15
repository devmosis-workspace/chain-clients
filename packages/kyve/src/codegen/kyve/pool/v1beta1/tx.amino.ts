import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/kyve.pool.v1beta1.MsgFundPool": {
    aminoType: "/kyve.pool.v1beta1.MsgFundPool",
    toAmino: ({
      creator,
      id,
      amount
    }: MsgFundPool): MsgFundPoolAminoType["value"] => {
      return {
        creator,
        id: id.toString(),
        amount: amount.toString()
      };
    },
    fromAmino: ({
      creator,
      id,
      amount
    }: MsgFundPoolAminoType["value"]): MsgFundPool => {
      return {
        creator,
        id: Long.fromString(id),
        amount: Long.fromString(amount)
      };
    }
  },
  "/kyve.pool.v1beta1.MsgDefundPool": {
    aminoType: "/kyve.pool.v1beta1.MsgDefundPool",
    toAmino: ({
      creator,
      id,
      amount
    }: MsgDefundPool): MsgDefundPoolAminoType["value"] => {
      return {
        creator,
        id: id.toString(),
        amount: amount.toString()
      };
    },
    fromAmino: ({
      creator,
      id,
      amount
    }: MsgDefundPoolAminoType["value"]): MsgDefundPool => {
      return {
        creator,
        id: Long.fromString(id),
        amount: Long.fromString(amount)
      };
    }
  },
  "/kyve.pool.v1beta1.MsgCreatePool": {
    aminoType: "/kyve.pool.v1beta1.MsgCreatePool",
    toAmino: ({
      authority,
      name,
      runtime,
      logo,
      config,
      startKey,
      uploadInterval,
      operatingCost,
      minDelegation,
      maxBundleSize,
      version,
      binaries,
      storageProviderId,
      compressionId
    }: MsgCreatePool): MsgCreatePoolAminoType["value"] => {
      return {
        authority,
        name,
        runtime,
        logo,
        config,
        start_key: startKey,
        upload_interval: uploadInterval.toString(),
        operating_cost: operatingCost.toString(),
        min_delegation: minDelegation.toString(),
        max_bundle_size: maxBundleSize.toString(),
        version,
        binaries,
        storage_provider_id: storageProviderId,
        compression_id: compressionId
      };
    },
    fromAmino: ({
      authority,
      name,
      runtime,
      logo,
      config,
      start_key,
      upload_interval,
      operating_cost,
      min_delegation,
      max_bundle_size,
      version,
      binaries,
      storage_provider_id,
      compression_id
    }: MsgCreatePoolAminoType["value"]): MsgCreatePool => {
      return {
        authority,
        name,
        runtime,
        logo,
        config,
        startKey: start_key,
        uploadInterval: Long.fromString(upload_interval),
        operatingCost: Long.fromString(operating_cost),
        minDelegation: Long.fromString(min_delegation),
        maxBundleSize: Long.fromString(max_bundle_size),
        version,
        binaries,
        storageProviderId: storage_provider_id,
        compressionId: compression_id
      };
    }
  },
  "/kyve.pool.v1beta1.MsgUpdatePool": {
    aminoType: "/kyve.pool.v1beta1.MsgUpdatePool",
    toAmino: ({
      authority,
      id,
      payload
    }: MsgUpdatePool): MsgUpdatePoolAminoType["value"] => {
      return {
        authority,
        id: id.toString(),
        payload
      };
    },
    fromAmino: ({
      authority,
      id,
      payload
    }: MsgUpdatePoolAminoType["value"]): MsgUpdatePool => {
      return {
        authority,
        id: Long.fromString(id),
        payload
      };
    }
  },
  "/kyve.pool.v1beta1.MsgDisablePool": {
    aminoType: "/kyve.pool.v1beta1.MsgDisablePool",
    toAmino: ({
      authority,
      id
    }: MsgDisablePool): MsgDisablePoolAminoType["value"] => {
      return {
        authority,
        id: id.toString()
      };
    },
    fromAmino: ({
      authority,
      id
    }: MsgDisablePoolAminoType["value"]): MsgDisablePool => {
      return {
        authority,
        id: Long.fromString(id)
      };
    }
  },
  "/kyve.pool.v1beta1.MsgEnablePool": {
    aminoType: "/kyve.pool.v1beta1.MsgEnablePool",
    toAmino: ({
      authority,
      id
    }: MsgEnablePool): MsgEnablePoolAminoType["value"] => {
      return {
        authority,
        id: id.toString()
      };
    },
    fromAmino: ({
      authority,
      id
    }: MsgEnablePoolAminoType["value"]): MsgEnablePool => {
      return {
        authority,
        id: Long.fromString(id)
      };
    }
  },
  "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
    aminoType: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
    toAmino: ({
      authority,
      runtime,
      version,
      scheduledAt,
      duration,
      binaries
    }: MsgScheduleRuntimeUpgrade): MsgScheduleRuntimeUpgradeAminoType["value"] => {
      return {
        authority,
        runtime,
        version,
        scheduled_at: scheduledAt.toString(),
        duration: duration.toString(),
        binaries
      };
    },
    fromAmino: ({
      authority,
      runtime,
      version,
      scheduled_at,
      duration,
      binaries
    }: MsgScheduleRuntimeUpgradeAminoType["value"]): MsgScheduleRuntimeUpgrade => {
      return {
        authority,
        runtime,
        version,
        scheduledAt: Long.fromString(scheduled_at),
        duration: Long.fromString(duration),
        binaries
      };
    }
  },
  "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
    aminoType: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
    toAmino: ({
      authority,
      runtime
    }: MsgCancelRuntimeUpgrade): MsgCancelRuntimeUpgradeAminoType["value"] => {
      return {
        authority,
        runtime
      };
    },
    fromAmino: ({
      authority,
      runtime
    }: MsgCancelRuntimeUpgradeAminoType["value"]): MsgCancelRuntimeUpgrade => {
      return {
        authority,
        runtime
      };
    }
  }
};