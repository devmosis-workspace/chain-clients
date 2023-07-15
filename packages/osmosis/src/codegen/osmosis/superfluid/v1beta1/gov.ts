import { SuperfluidAsset, SuperfluidAssetSDKType } from "../superfluid";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
  title: string;
  description: string;
  assets: SuperfluidAsset[];
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalSDKType {
  title: string;
  description: string;
  assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
  title: string;
  description: string;
  superfluidAssetDenoms: string[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
  title: string;
  description: string;
  superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
  title: string;
  description: string;
  ids: Long[];
  isOverwrite: boolean;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
  title: string;
  description: string;
  ids: Long[];
  is_overwrite: boolean;
}
function createBaseSetSuperfluidAssetsProposal(): SetSuperfluidAssetsProposal {
  return {
    title: "",
    description: "",
    assets: []
  };
}
export const SetSuperfluidAssetsProposal = {
  encode(message: SetSuperfluidAssetsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRemoveSuperfluidAssetsProposal(): RemoveSuperfluidAssetsProposal {
  return {
    title: "",
    description: "",
    superfluidAssetDenoms: []
  };
}
export const RemoveSuperfluidAssetsProposal = {
  encode(message: RemoveSuperfluidAssetsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseUpdateUnpoolWhiteListProposal(): UpdateUnpoolWhiteListProposal {
  return {
    title: "",
    description: "",
    ids: [],
    isOverwrite: false
  };
}
export const UpdateUnpoolWhiteListProposal = {
  encode(message: UpdateUnpoolWhiteListProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : [],
      isOverwrite: isSet(object.isOverwrite) ? Boolean(object.isOverwrite) : false
    };
  },
  fromPartial(object: Partial<UpdateUnpoolWhiteListProposal>): UpdateUnpoolWhiteListProposal {
    const message = createBaseUpdateUnpoolWhiteListProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    message.isOverwrite = object.isOverwrite ?? false;
    return message;
  }
};