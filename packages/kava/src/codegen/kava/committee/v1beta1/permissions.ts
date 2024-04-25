import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermission {
  $typeUrl?: "/kava.committee.v1beta1.GodPermission";
}
export interface GodPermissionProtoMsg {
  typeUrl: "/kava.committee.v1beta1.GodPermission";
  value: Uint8Array;
}
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermissionAmino {}
export interface GodPermissionAminoMsg {
  type: "/kava.committee.v1beta1.GodPermission";
  value: GodPermissionAmino;
}
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermissionSDKType {
  $typeUrl?: "/kava.committee.v1beta1.GodPermission";
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermission {
  $typeUrl?: "/kava.committee.v1beta1.SoftwareUpgradePermission";
}
export interface SoftwareUpgradePermissionProtoMsg {
  typeUrl: "/kava.committee.v1beta1.SoftwareUpgradePermission";
  value: Uint8Array;
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermissionAmino {}
export interface SoftwareUpgradePermissionAminoMsg {
  type: "/kava.committee.v1beta1.SoftwareUpgradePermission";
  value: SoftwareUpgradePermissionAmino;
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermissionSDKType {
  $typeUrl?: "/kava.committee.v1beta1.SoftwareUpgradePermission";
}
/** TextPermission allows any text governance proposal. */
export interface TextPermission {
  $typeUrl?: "/kava.committee.v1beta1.TextPermission";
}
export interface TextPermissionProtoMsg {
  typeUrl: "/kava.committee.v1beta1.TextPermission";
  value: Uint8Array;
}
/** TextPermission allows any text governance proposal. */
export interface TextPermissionAmino {}
export interface TextPermissionAminoMsg {
  type: "/kava.committee.v1beta1.TextPermission";
  value: TextPermissionAmino;
}
/** TextPermission allows any text governance proposal. */
export interface TextPermissionSDKType {
  $typeUrl?: "/kava.committee.v1beta1.TextPermission";
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermission {
  $typeUrl?: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission";
}
export interface CommunityCDPRepayDebtPermissionProtoMsg {
  typeUrl: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission";
  value: Uint8Array;
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermissionAmino {}
export interface CommunityCDPRepayDebtPermissionAminoMsg {
  type: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission";
  value: CommunityCDPRepayDebtPermissionAmino;
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermissionSDKType {
  $typeUrl?: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission";
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermission {
  $typeUrl?: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission";
}
export interface CommunityCDPWithdrawCollateralPermissionProtoMsg {
  typeUrl: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission";
  value: Uint8Array;
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermissionAmino {}
export interface CommunityCDPWithdrawCollateralPermissionAminoMsg {
  type: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission";
  value: CommunityCDPWithdrawCollateralPermissionAmino;
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermissionSDKType {
  $typeUrl?: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission";
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermission {
  $typeUrl?: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission";
}
export interface CommunityPoolLendWithdrawPermissionProtoMsg {
  typeUrl: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission";
  value: Uint8Array;
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermissionAmino {}
export interface CommunityPoolLendWithdrawPermissionAminoMsg {
  type: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission";
  value: CommunityPoolLendWithdrawPermissionAmino;
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermissionSDKType {
  $typeUrl?: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission";
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermission {
  $typeUrl?: "/kava.committee.v1beta1.ParamsChangePermission";
  allowedParamsChanges: AllowedParamsChange[];
}
export interface ParamsChangePermissionProtoMsg {
  typeUrl: "/kava.committee.v1beta1.ParamsChangePermission";
  value: Uint8Array;
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermissionAmino {
  allowed_params_changes?: AllowedParamsChangeAmino[];
}
export interface ParamsChangePermissionAminoMsg {
  type: "/kava.committee.v1beta1.ParamsChangePermission";
  value: ParamsChangePermissionAmino;
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermissionSDKType {
  $typeUrl?: "/kava.committee.v1beta1.ParamsChangePermission";
  allowed_params_changes: AllowedParamsChangeSDKType[];
}
/** AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements. */
export interface AllowedParamsChange {
  subspace: string;
  key: string;
  /**
   * Requirements for when the subparam value is a single record. This contains list of allowed attribute keys that can
   * be changed on the subparam record.
   */
  singleSubparamAllowedAttrs: string[];
  /**
   * Requirements for when the subparam value is a list of records. The requirements contains requirements for each
   * record in the list.
   */
  multiSubparamsRequirements: SubparamRequirement[];
}
export interface AllowedParamsChangeProtoMsg {
  typeUrl: "/kava.committee.v1beta1.AllowedParamsChange";
  value: Uint8Array;
}
/** AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements. */
export interface AllowedParamsChangeAmino {
  subspace?: string;
  key?: string;
  /**
   * Requirements for when the subparam value is a single record. This contains list of allowed attribute keys that can
   * be changed on the subparam record.
   */
  single_subparam_allowed_attrs?: string[];
  /**
   * Requirements for when the subparam value is a list of records. The requirements contains requirements for each
   * record in the list.
   */
  multi_subparams_requirements?: SubparamRequirementAmino[];
}
export interface AllowedParamsChangeAminoMsg {
  type: "/kava.committee.v1beta1.AllowedParamsChange";
  value: AllowedParamsChangeAmino;
}
/** AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements. */
export interface AllowedParamsChangeSDKType {
  subspace: string;
  key: string;
  single_subparam_allowed_attrs: string[];
  multi_subparams_requirements: SubparamRequirementSDKType[];
}
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirement {
  /** The required attr key of the param record. */
  key: string;
  /** The required param value for the param record key. The key and value is used to match to the target param record. */
  val: string;
  /** The sub param attrs that are allowed to be changed. */
  allowedSubparamAttrChanges: string[];
}
export interface SubparamRequirementProtoMsg {
  typeUrl: "/kava.committee.v1beta1.SubparamRequirement";
  value: Uint8Array;
}
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirementAmino {
  /** The required attr key of the param record. */
  key?: string;
  /** The required param value for the param record key. The key and value is used to match to the target param record. */
  val?: string;
  /** The sub param attrs that are allowed to be changed. */
  allowed_subparam_attr_changes?: string[];
}
export interface SubparamRequirementAminoMsg {
  type: "/kava.committee.v1beta1.SubparamRequirement";
  value: SubparamRequirementAmino;
}
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirementSDKType {
  key: string;
  val: string;
  allowed_subparam_attr_changes: string[];
}
function createBaseGodPermission(): GodPermission {
  return {
    $typeUrl: "/kava.committee.v1beta1.GodPermission"
  };
}
export const GodPermission = {
  typeUrl: "/kava.committee.v1beta1.GodPermission",
  encode(_: GodPermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): GodPermission {
    return {};
  },
  fromPartial(_: Partial<GodPermission>): GodPermission {
    const message = createBaseGodPermission();
    return message;
  },
  fromAmino(_: GodPermissionAmino): GodPermission {
    const message = createBaseGodPermission();
    return message;
  },
  toAmino(_: GodPermission): GodPermissionAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GodPermissionAminoMsg): GodPermission {
    return GodPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: GodPermissionProtoMsg): GodPermission {
    return GodPermission.decode(message.value);
  },
  toProto(message: GodPermission): Uint8Array {
    return GodPermission.encode(message).finish();
  },
  toProtoMsg(message: GodPermission): GodPermissionProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.GodPermission",
      value: GodPermission.encode(message).finish()
    };
  }
};
function createBaseSoftwareUpgradePermission(): SoftwareUpgradePermission {
  return {
    $typeUrl: "/kava.committee.v1beta1.SoftwareUpgradePermission"
  };
}
export const SoftwareUpgradePermission = {
  typeUrl: "/kava.committee.v1beta1.SoftwareUpgradePermission",
  encode(_: SoftwareUpgradePermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SoftwareUpgradePermission {
    return {};
  },
  fromPartial(_: Partial<SoftwareUpgradePermission>): SoftwareUpgradePermission {
    const message = createBaseSoftwareUpgradePermission();
    return message;
  },
  fromAmino(_: SoftwareUpgradePermissionAmino): SoftwareUpgradePermission {
    const message = createBaseSoftwareUpgradePermission();
    return message;
  },
  toAmino(_: SoftwareUpgradePermission): SoftwareUpgradePermissionAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SoftwareUpgradePermissionAminoMsg): SoftwareUpgradePermission {
    return SoftwareUpgradePermission.fromAmino(object.value);
  },
  fromProtoMsg(message: SoftwareUpgradePermissionProtoMsg): SoftwareUpgradePermission {
    return SoftwareUpgradePermission.decode(message.value);
  },
  toProto(message: SoftwareUpgradePermission): Uint8Array {
    return SoftwareUpgradePermission.encode(message).finish();
  },
  toProtoMsg(message: SoftwareUpgradePermission): SoftwareUpgradePermissionProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.SoftwareUpgradePermission",
      value: SoftwareUpgradePermission.encode(message).finish()
    };
  }
};
function createBaseTextPermission(): TextPermission {
  return {
    $typeUrl: "/kava.committee.v1beta1.TextPermission"
  };
}
export const TextPermission = {
  typeUrl: "/kava.committee.v1beta1.TextPermission",
  encode(_: TextPermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): TextPermission {
    return {};
  },
  fromPartial(_: Partial<TextPermission>): TextPermission {
    const message = createBaseTextPermission();
    return message;
  },
  fromAmino(_: TextPermissionAmino): TextPermission {
    const message = createBaseTextPermission();
    return message;
  },
  toAmino(_: TextPermission): TextPermissionAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: TextPermissionAminoMsg): TextPermission {
    return TextPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: TextPermissionProtoMsg): TextPermission {
    return TextPermission.decode(message.value);
  },
  toProto(message: TextPermission): Uint8Array {
    return TextPermission.encode(message).finish();
  },
  toProtoMsg(message: TextPermission): TextPermissionProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.TextPermission",
      value: TextPermission.encode(message).finish()
    };
  }
};
function createBaseCommunityCDPRepayDebtPermission(): CommunityCDPRepayDebtPermission {
  return {
    $typeUrl: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission"
  };
}
export const CommunityCDPRepayDebtPermission = {
  typeUrl: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission",
  encode(_: CommunityCDPRepayDebtPermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CommunityCDPRepayDebtPermission {
    return {};
  },
  fromPartial(_: Partial<CommunityCDPRepayDebtPermission>): CommunityCDPRepayDebtPermission {
    const message = createBaseCommunityCDPRepayDebtPermission();
    return message;
  },
  fromAmino(_: CommunityCDPRepayDebtPermissionAmino): CommunityCDPRepayDebtPermission {
    const message = createBaseCommunityCDPRepayDebtPermission();
    return message;
  },
  toAmino(_: CommunityCDPRepayDebtPermission): CommunityCDPRepayDebtPermissionAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CommunityCDPRepayDebtPermissionAminoMsg): CommunityCDPRepayDebtPermission {
    return CommunityCDPRepayDebtPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityCDPRepayDebtPermissionProtoMsg): CommunityCDPRepayDebtPermission {
    return CommunityCDPRepayDebtPermission.decode(message.value);
  },
  toProto(message: CommunityCDPRepayDebtPermission): Uint8Array {
    return CommunityCDPRepayDebtPermission.encode(message).finish();
  },
  toProtoMsg(message: CommunityCDPRepayDebtPermission): CommunityCDPRepayDebtPermissionProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission",
      value: CommunityCDPRepayDebtPermission.encode(message).finish()
    };
  }
};
function createBaseCommunityCDPWithdrawCollateralPermission(): CommunityCDPWithdrawCollateralPermission {
  return {
    $typeUrl: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission"
  };
}
export const CommunityCDPWithdrawCollateralPermission = {
  typeUrl: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission",
  encode(_: CommunityCDPWithdrawCollateralPermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CommunityCDPWithdrawCollateralPermission {
    return {};
  },
  fromPartial(_: Partial<CommunityCDPWithdrawCollateralPermission>): CommunityCDPWithdrawCollateralPermission {
    const message = createBaseCommunityCDPWithdrawCollateralPermission();
    return message;
  },
  fromAmino(_: CommunityCDPWithdrawCollateralPermissionAmino): CommunityCDPWithdrawCollateralPermission {
    const message = createBaseCommunityCDPWithdrawCollateralPermission();
    return message;
  },
  toAmino(_: CommunityCDPWithdrawCollateralPermission): CommunityCDPWithdrawCollateralPermissionAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CommunityCDPWithdrawCollateralPermissionAminoMsg): CommunityCDPWithdrawCollateralPermission {
    return CommunityCDPWithdrawCollateralPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityCDPWithdrawCollateralPermissionProtoMsg): CommunityCDPWithdrawCollateralPermission {
    return CommunityCDPWithdrawCollateralPermission.decode(message.value);
  },
  toProto(message: CommunityCDPWithdrawCollateralPermission): Uint8Array {
    return CommunityCDPWithdrawCollateralPermission.encode(message).finish();
  },
  toProtoMsg(message: CommunityCDPWithdrawCollateralPermission): CommunityCDPWithdrawCollateralPermissionProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission",
      value: CommunityCDPWithdrawCollateralPermission.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolLendWithdrawPermission(): CommunityPoolLendWithdrawPermission {
  return {
    $typeUrl: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission"
  };
}
export const CommunityPoolLendWithdrawPermission = {
  typeUrl: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission",
  encode(_: CommunityPoolLendWithdrawPermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CommunityPoolLendWithdrawPermission {
    return {};
  },
  fromPartial(_: Partial<CommunityPoolLendWithdrawPermission>): CommunityPoolLendWithdrawPermission {
    const message = createBaseCommunityPoolLendWithdrawPermission();
    return message;
  },
  fromAmino(_: CommunityPoolLendWithdrawPermissionAmino): CommunityPoolLendWithdrawPermission {
    const message = createBaseCommunityPoolLendWithdrawPermission();
    return message;
  },
  toAmino(_: CommunityPoolLendWithdrawPermission): CommunityPoolLendWithdrawPermissionAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CommunityPoolLendWithdrawPermissionAminoMsg): CommunityPoolLendWithdrawPermission {
    return CommunityPoolLendWithdrawPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolLendWithdrawPermissionProtoMsg): CommunityPoolLendWithdrawPermission {
    return CommunityPoolLendWithdrawPermission.decode(message.value);
  },
  toProto(message: CommunityPoolLendWithdrawPermission): Uint8Array {
    return CommunityPoolLendWithdrawPermission.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolLendWithdrawPermission): CommunityPoolLendWithdrawPermissionProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission",
      value: CommunityPoolLendWithdrawPermission.encode(message).finish()
    };
  }
};
function createBaseParamsChangePermission(): ParamsChangePermission {
  return {
    $typeUrl: "/kava.committee.v1beta1.ParamsChangePermission",
    allowedParamsChanges: []
  };
}
export const ParamsChangePermission = {
  typeUrl: "/kava.committee.v1beta1.ParamsChangePermission",
  encode(message: ParamsChangePermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedParamsChanges) {
      AllowedParamsChange.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsChangePermission {
    return {
      allowedParamsChanges: Array.isArray(object?.allowedParamsChanges) ? object.allowedParamsChanges.map((e: any) => AllowedParamsChange.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ParamsChangePermission>): ParamsChangePermission {
    const message = createBaseParamsChangePermission();
    message.allowedParamsChanges = object.allowedParamsChanges?.map(e => AllowedParamsChange.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsChangePermissionAmino): ParamsChangePermission {
    const message = createBaseParamsChangePermission();
    message.allowedParamsChanges = object.allowed_params_changes?.map(e => AllowedParamsChange.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ParamsChangePermission): ParamsChangePermissionAmino {
    const obj: any = {};
    if (message.allowedParamsChanges) {
      obj.allowed_params_changes = message.allowedParamsChanges.map(e => e ? AllowedParamsChange.toAmino(e) : undefined);
    } else {
      obj.allowed_params_changes = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsChangePermissionAminoMsg): ParamsChangePermission {
    return ParamsChangePermission.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsChangePermissionProtoMsg): ParamsChangePermission {
    return ParamsChangePermission.decode(message.value);
  },
  toProto(message: ParamsChangePermission): Uint8Array {
    return ParamsChangePermission.encode(message).finish();
  },
  toProtoMsg(message: ParamsChangePermission): ParamsChangePermissionProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.ParamsChangePermission",
      value: ParamsChangePermission.encode(message).finish()
    };
  }
};
function createBaseAllowedParamsChange(): AllowedParamsChange {
  return {
    subspace: "",
    key: "",
    singleSubparamAllowedAttrs: [],
    multiSubparamsRequirements: []
  };
}
export const AllowedParamsChange = {
  typeUrl: "/kava.committee.v1beta1.AllowedParamsChange",
  encode(message: AllowedParamsChange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    for (const v of message.singleSubparamAllowedAttrs) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.multiSubparamsRequirements) {
      SubparamRequirement.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AllowedParamsChange {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : "",
      singleSubparamAllowedAttrs: Array.isArray(object?.singleSubparamAllowedAttrs) ? object.singleSubparamAllowedAttrs.map((e: any) => String(e)) : [],
      multiSubparamsRequirements: Array.isArray(object?.multiSubparamsRequirements) ? object.multiSubparamsRequirements.map((e: any) => SubparamRequirement.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AllowedParamsChange>): AllowedParamsChange {
    const message = createBaseAllowedParamsChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.singleSubparamAllowedAttrs = object.singleSubparamAllowedAttrs?.map(e => e) || [];
    message.multiSubparamsRequirements = object.multiSubparamsRequirements?.map(e => SubparamRequirement.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllowedParamsChangeAmino): AllowedParamsChange {
    const message = createBaseAllowedParamsChange();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    message.singleSubparamAllowedAttrs = object.single_subparam_allowed_attrs?.map(e => e) || [];
    message.multiSubparamsRequirements = object.multi_subparams_requirements?.map(e => SubparamRequirement.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllowedParamsChange): AllowedParamsChangeAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    if (message.singleSubparamAllowedAttrs) {
      obj.single_subparam_allowed_attrs = message.singleSubparamAllowedAttrs.map(e => e);
    } else {
      obj.single_subparam_allowed_attrs = [];
    }
    if (message.multiSubparamsRequirements) {
      obj.multi_subparams_requirements = message.multiSubparamsRequirements.map(e => e ? SubparamRequirement.toAmino(e) : undefined);
    } else {
      obj.multi_subparams_requirements = [];
    }
    return obj;
  },
  fromAminoMsg(object: AllowedParamsChangeAminoMsg): AllowedParamsChange {
    return AllowedParamsChange.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowedParamsChangeProtoMsg): AllowedParamsChange {
    return AllowedParamsChange.decode(message.value);
  },
  toProto(message: AllowedParamsChange): Uint8Array {
    return AllowedParamsChange.encode(message).finish();
  },
  toProtoMsg(message: AllowedParamsChange): AllowedParamsChangeProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.AllowedParamsChange",
      value: AllowedParamsChange.encode(message).finish()
    };
  }
};
function createBaseSubparamRequirement(): SubparamRequirement {
  return {
    key: "",
    val: "",
    allowedSubparamAttrChanges: []
  };
}
export const SubparamRequirement = {
  typeUrl: "/kava.committee.v1beta1.SubparamRequirement",
  encode(message: SubparamRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }
    for (const v of message.allowedSubparamAttrChanges) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): SubparamRequirement {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      val: isSet(object.val) ? String(object.val) : "",
      allowedSubparamAttrChanges: Array.isArray(object?.allowedSubparamAttrChanges) ? object.allowedSubparamAttrChanges.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<SubparamRequirement>): SubparamRequirement {
    const message = createBaseSubparamRequirement();
    message.key = object.key ?? "";
    message.val = object.val ?? "";
    message.allowedSubparamAttrChanges = object.allowedSubparamAttrChanges?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SubparamRequirementAmino): SubparamRequirement {
    const message = createBaseSubparamRequirement();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    }
    message.allowedSubparamAttrChanges = object.allowed_subparam_attr_changes?.map(e => e) || [];
    return message;
  },
  toAmino(message: SubparamRequirement): SubparamRequirementAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.val = message.val;
    if (message.allowedSubparamAttrChanges) {
      obj.allowed_subparam_attr_changes = message.allowedSubparamAttrChanges.map(e => e);
    } else {
      obj.allowed_subparam_attr_changes = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubparamRequirementAminoMsg): SubparamRequirement {
    return SubparamRequirement.fromAmino(object.value);
  },
  fromProtoMsg(message: SubparamRequirementProtoMsg): SubparamRequirement {
    return SubparamRequirement.decode(message.value);
  },
  toProto(message: SubparamRequirement): Uint8Array {
    return SubparamRequirement.encode(message).finish();
  },
  toProtoMsg(message: SubparamRequirement): SubparamRequirementProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.SubparamRequirement",
      value: SubparamRequirement.encode(message).finish()
    };
  }
};