import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType } from "../superfluid";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  assets: SuperfluidAsset[];
}
export interface SetSuperfluidAssetsProposalProtoMsg {
  typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
  value: Uint8Array;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalAmino {
  title: string;
  description: string;
  assets: SuperfluidAssetAmino[];
}
export interface SetSuperfluidAssetsProposalAminoMsg {
  type: "osmosis/set-superfluid-assets-proposal";
  value: SetSuperfluidAssetsProposalAmino;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  superfluidAssetDenoms: string[];
}
export interface RemoveSuperfluidAssetsProposalProtoMsg {
  typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
  value: Uint8Array;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalAmino {
  title: string;
  description: string;
  superfluid_asset_denoms: string[];
}
export interface RemoveSuperfluidAssetsProposalAminoMsg {
  type: "osmosis/del-superfluid-assets-proposal";
  value: RemoveSuperfluidAssetsProposalAmino;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  ids: bigint[];
  isOverwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalProtoMsg {
  typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
  value: Uint8Array;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalAmino {
  title: string;
  description: string;
  ids: string[];
  is_overwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalAminoMsg {
  type: "osmosis/update-unpool-whitelist";
  value: UpdateUnpoolWhiteListProposalAmino;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  ids: bigint[];
  is_overwrite: boolean;
}
function createBaseSetSuperfluidAssetsProposal(): SetSuperfluidAssetsProposal {
  return {
    $typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
    title: "",
    description: "",
    assets: []
  };
}
export const SetSuperfluidAssetsProposal = {
  typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
  encode(message: SetSuperfluidAssetsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SetSuperfluidAssetsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SetSuperfluidAssetsProposal>): SetSuperfluidAssetsProposal {
    const message = createBaseSetSuperfluidAssetsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SetSuperfluidAssetsProposalAmino): SetSuperfluidAssetsProposal {
    return {
      title: object.title,
      description: object.description,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromAmino(e)) : []
    };
  },
  toAmino(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromAminoMsg(object: SetSuperfluidAssetsProposalAminoMsg): SetSuperfluidAssetsProposal {
    return SetSuperfluidAssetsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalAminoMsg {
    return {
      type: "osmosis/set-superfluid-assets-proposal",
      value: SetSuperfluidAssetsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SetSuperfluidAssetsProposalProtoMsg): SetSuperfluidAssetsProposal {
    return SetSuperfluidAssetsProposal.decode(message.value);
  },
  toProto(message: SetSuperfluidAssetsProposal): Uint8Array {
    return SetSuperfluidAssetsProposal.encode(message).finish();
  },
  toProtoMsg(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
      value: SetSuperfluidAssetsProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveSuperfluidAssetsProposal(): RemoveSuperfluidAssetsProposal {
  return {
    $typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
    title: "",
    description: "",
    superfluidAssetDenoms: []
  };
}
export const RemoveSuperfluidAssetsProposal = {
  typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
  encode(message: RemoveSuperfluidAssetsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.superfluidAssetDenoms) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RemoveSuperfluidAssetsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      superfluidAssetDenoms: Array.isArray(object?.superfluidAssetDenoms) ? object.superfluidAssetDenoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RemoveSuperfluidAssetsProposal>): RemoveSuperfluidAssetsProposal {
    const message = createBaseRemoveSuperfluidAssetsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.superfluidAssetDenoms = object.superfluidAssetDenoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RemoveSuperfluidAssetsProposalAmino): RemoveSuperfluidAssetsProposal {
    return {
      title: object.title,
      description: object.description,
      superfluidAssetDenoms: Array.isArray(object?.superfluid_asset_denoms) ? object.superfluid_asset_denoms.map((e: any) => e) : []
    };
  },
  toAmino(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.superfluidAssetDenoms) {
      obj.superfluid_asset_denoms = message.superfluidAssetDenoms.map(e => e);
    } else {
      obj.superfluid_asset_denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: RemoveSuperfluidAssetsProposalAminoMsg): RemoveSuperfluidAssetsProposal {
    return RemoveSuperfluidAssetsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalAminoMsg {
    return {
      type: "osmosis/del-superfluid-assets-proposal",
      value: RemoveSuperfluidAssetsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RemoveSuperfluidAssetsProposalProtoMsg): RemoveSuperfluidAssetsProposal {
    return RemoveSuperfluidAssetsProposal.decode(message.value);
  },
  toProto(message: RemoveSuperfluidAssetsProposal): Uint8Array {
    return RemoveSuperfluidAssetsProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
      value: RemoveSuperfluidAssetsProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateUnpoolWhiteListProposal(): UpdateUnpoolWhiteListProposal {
  return {
    $typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
    title: "",
    description: "",
    ids: [],
    isOverwrite: false
  };
}
export const UpdateUnpoolWhiteListProposal = {
  typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
  encode(message: UpdateUnpoolWhiteListProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.isOverwrite === true) {
      writer.uint32(32).bool(message.isOverwrite);
    }
    return writer;
  },
  fromJSON(object: any): UpdateUnpoolWhiteListProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e.toString())) : [],
      isOverwrite: isSet(object.isOverwrite) ? Boolean(object.isOverwrite) : false
    };
  },
  fromPartial(object: Partial<UpdateUnpoolWhiteListProposal>): UpdateUnpoolWhiteListProposal {
    const message = createBaseUpdateUnpoolWhiteListProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    message.isOverwrite = object.isOverwrite ?? false;
    return message;
  },
  fromAmino(object: UpdateUnpoolWhiteListProposalAmino): UpdateUnpoolWhiteListProposal {
    return {
      title: object.title,
      description: object.description,
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e)) : [],
      isOverwrite: object.is_overwrite
    };
  },
  toAmino(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = [];
    }
    obj.is_overwrite = message.isOverwrite;
    return obj;
  },
  fromAminoMsg(object: UpdateUnpoolWhiteListProposalAminoMsg): UpdateUnpoolWhiteListProposal {
    return UpdateUnpoolWhiteListProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalAminoMsg {
    return {
      type: "osmosis/update-unpool-whitelist",
      value: UpdateUnpoolWhiteListProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateUnpoolWhiteListProposalProtoMsg): UpdateUnpoolWhiteListProposal {
    return UpdateUnpoolWhiteListProposal.decode(message.value);
  },
  toProto(message: UpdateUnpoolWhiteListProposal): Uint8Array {
    return UpdateUnpoolWhiteListProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
      value: UpdateUnpoolWhiteListProposal.encode(message).finish()
    };
  }
};