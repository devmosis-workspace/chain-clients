import { BinaryWriter } from "../../../binary";
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermission {
    $typeUrl?: string;
}
export interface GodPermissionProtoMsg {
    typeUrl: "/kava.committee.v1beta1.GodPermission";
    value: Uint8Array;
}
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermissionAmino {
}
export interface GodPermissionAminoMsg {
    type: "/kava.committee.v1beta1.GodPermission";
    value: GodPermissionAmino;
}
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermissionSDKType {
    $typeUrl?: string;
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermission {
    $typeUrl?: string;
}
export interface SoftwareUpgradePermissionProtoMsg {
    typeUrl: "/kava.committee.v1beta1.SoftwareUpgradePermission";
    value: Uint8Array;
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermissionAmino {
}
export interface SoftwareUpgradePermissionAminoMsg {
    type: "/kava.committee.v1beta1.SoftwareUpgradePermission";
    value: SoftwareUpgradePermissionAmino;
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermissionSDKType {
    $typeUrl?: string;
}
/** TextPermission allows any text governance proposal. */
export interface TextPermission {
    $typeUrl?: string;
}
export interface TextPermissionProtoMsg {
    typeUrl: "/kava.committee.v1beta1.TextPermission";
    value: Uint8Array;
}
/** TextPermission allows any text governance proposal. */
export interface TextPermissionAmino {
}
export interface TextPermissionAminoMsg {
    type: "/kava.committee.v1beta1.TextPermission";
    value: TextPermissionAmino;
}
/** TextPermission allows any text governance proposal. */
export interface TextPermissionSDKType {
    $typeUrl?: string;
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermission {
    $typeUrl?: string;
}
export interface CommunityCDPRepayDebtPermissionProtoMsg {
    typeUrl: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission";
    value: Uint8Array;
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermissionAmino {
}
export interface CommunityCDPRepayDebtPermissionAminoMsg {
    type: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission";
    value: CommunityCDPRepayDebtPermissionAmino;
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermissionSDKType {
    $typeUrl?: string;
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermission {
    $typeUrl?: string;
}
export interface CommunityCDPWithdrawCollateralPermissionProtoMsg {
    typeUrl: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission";
    value: Uint8Array;
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermissionAmino {
}
export interface CommunityCDPWithdrawCollateralPermissionAminoMsg {
    type: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission";
    value: CommunityCDPWithdrawCollateralPermissionAmino;
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermissionSDKType {
    $typeUrl?: string;
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermission {
    $typeUrl?: string;
}
export interface CommunityPoolLendWithdrawPermissionProtoMsg {
    typeUrl: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission";
    value: Uint8Array;
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermissionAmino {
}
export interface CommunityPoolLendWithdrawPermissionAminoMsg {
    type: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission";
    value: CommunityPoolLendWithdrawPermissionAmino;
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermissionSDKType {
    $typeUrl?: string;
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermission {
    $typeUrl?: string;
    allowedParamsChanges: AllowedParamsChange[];
}
export interface ParamsChangePermissionProtoMsg {
    typeUrl: "/kava.committee.v1beta1.ParamsChangePermission";
    value: Uint8Array;
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermissionAmino {
    allowed_params_changes: AllowedParamsChangeAmino[];
}
export interface ParamsChangePermissionAminoMsg {
    type: "/kava.committee.v1beta1.ParamsChangePermission";
    value: ParamsChangePermissionAmino;
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermissionSDKType {
    $typeUrl?: string;
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
    subspace: string;
    key: string;
    /**
     * Requirements for when the subparam value is a single record. This contains list of allowed attribute keys that can
     * be changed on the subparam record.
     */
    single_subparam_allowed_attrs: string[];
    /**
     * Requirements for when the subparam value is a list of records. The requirements contains requirements for each
     * record in the list.
     */
    multi_subparams_requirements: SubparamRequirementAmino[];
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
    key: string;
    /** The required param value for the param record key. The key and value is used to match to the target param record. */
    val: string;
    /** The sub param attrs that are allowed to be changed. */
    allowed_subparam_attr_changes: string[];
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
export declare const GodPermission: {
    typeUrl: string;
    encode(_: GodPermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): GodPermission;
    fromPartial(_: Partial<GodPermission>): GodPermission;
    fromAmino(_: GodPermissionAmino): GodPermission;
    toAmino(_: GodPermission): GodPermissionAmino;
    fromAminoMsg(object: GodPermissionAminoMsg): GodPermission;
    fromProtoMsg(message: GodPermissionProtoMsg): GodPermission;
    toProto(message: GodPermission): Uint8Array;
    toProtoMsg(message: GodPermission): GodPermissionProtoMsg;
};
export declare const SoftwareUpgradePermission: {
    typeUrl: string;
    encode(_: SoftwareUpgradePermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SoftwareUpgradePermission;
    fromPartial(_: Partial<SoftwareUpgradePermission>): SoftwareUpgradePermission;
    fromAmino(_: SoftwareUpgradePermissionAmino): SoftwareUpgradePermission;
    toAmino(_: SoftwareUpgradePermission): SoftwareUpgradePermissionAmino;
    fromAminoMsg(object: SoftwareUpgradePermissionAminoMsg): SoftwareUpgradePermission;
    fromProtoMsg(message: SoftwareUpgradePermissionProtoMsg): SoftwareUpgradePermission;
    toProto(message: SoftwareUpgradePermission): Uint8Array;
    toProtoMsg(message: SoftwareUpgradePermission): SoftwareUpgradePermissionProtoMsg;
};
export declare const TextPermission: {
    typeUrl: string;
    encode(_: TextPermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): TextPermission;
    fromPartial(_: Partial<TextPermission>): TextPermission;
    fromAmino(_: TextPermissionAmino): TextPermission;
    toAmino(_: TextPermission): TextPermissionAmino;
    fromAminoMsg(object: TextPermissionAminoMsg): TextPermission;
    fromProtoMsg(message: TextPermissionProtoMsg): TextPermission;
    toProto(message: TextPermission): Uint8Array;
    toProtoMsg(message: TextPermission): TextPermissionProtoMsg;
};
export declare const CommunityCDPRepayDebtPermission: {
    typeUrl: string;
    encode(_: CommunityCDPRepayDebtPermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CommunityCDPRepayDebtPermission;
    fromPartial(_: Partial<CommunityCDPRepayDebtPermission>): CommunityCDPRepayDebtPermission;
    fromAmino(_: CommunityCDPRepayDebtPermissionAmino): CommunityCDPRepayDebtPermission;
    toAmino(_: CommunityCDPRepayDebtPermission): CommunityCDPRepayDebtPermissionAmino;
    fromAminoMsg(object: CommunityCDPRepayDebtPermissionAminoMsg): CommunityCDPRepayDebtPermission;
    fromProtoMsg(message: CommunityCDPRepayDebtPermissionProtoMsg): CommunityCDPRepayDebtPermission;
    toProto(message: CommunityCDPRepayDebtPermission): Uint8Array;
    toProtoMsg(message: CommunityCDPRepayDebtPermission): CommunityCDPRepayDebtPermissionProtoMsg;
};
export declare const CommunityCDPWithdrawCollateralPermission: {
    typeUrl: string;
    encode(_: CommunityCDPWithdrawCollateralPermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CommunityCDPWithdrawCollateralPermission;
    fromPartial(_: Partial<CommunityCDPWithdrawCollateralPermission>): CommunityCDPWithdrawCollateralPermission;
    fromAmino(_: CommunityCDPWithdrawCollateralPermissionAmino): CommunityCDPWithdrawCollateralPermission;
    toAmino(_: CommunityCDPWithdrawCollateralPermission): CommunityCDPWithdrawCollateralPermissionAmino;
    fromAminoMsg(object: CommunityCDPWithdrawCollateralPermissionAminoMsg): CommunityCDPWithdrawCollateralPermission;
    fromProtoMsg(message: CommunityCDPWithdrawCollateralPermissionProtoMsg): CommunityCDPWithdrawCollateralPermission;
    toProto(message: CommunityCDPWithdrawCollateralPermission): Uint8Array;
    toProtoMsg(message: CommunityCDPWithdrawCollateralPermission): CommunityCDPWithdrawCollateralPermissionProtoMsg;
};
export declare const CommunityPoolLendWithdrawPermission: {
    typeUrl: string;
    encode(_: CommunityPoolLendWithdrawPermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CommunityPoolLendWithdrawPermission;
    fromPartial(_: Partial<CommunityPoolLendWithdrawPermission>): CommunityPoolLendWithdrawPermission;
    fromAmino(_: CommunityPoolLendWithdrawPermissionAmino): CommunityPoolLendWithdrawPermission;
    toAmino(_: CommunityPoolLendWithdrawPermission): CommunityPoolLendWithdrawPermissionAmino;
    fromAminoMsg(object: CommunityPoolLendWithdrawPermissionAminoMsg): CommunityPoolLendWithdrawPermission;
    fromProtoMsg(message: CommunityPoolLendWithdrawPermissionProtoMsg): CommunityPoolLendWithdrawPermission;
    toProto(message: CommunityPoolLendWithdrawPermission): Uint8Array;
    toProtoMsg(message: CommunityPoolLendWithdrawPermission): CommunityPoolLendWithdrawPermissionProtoMsg;
};
export declare const ParamsChangePermission: {
    typeUrl: string;
    encode(message: ParamsChangePermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsChangePermission;
    fromPartial(object: Partial<ParamsChangePermission>): ParamsChangePermission;
    fromAmino(object: ParamsChangePermissionAmino): ParamsChangePermission;
    toAmino(message: ParamsChangePermission): ParamsChangePermissionAmino;
    fromAminoMsg(object: ParamsChangePermissionAminoMsg): ParamsChangePermission;
    fromProtoMsg(message: ParamsChangePermissionProtoMsg): ParamsChangePermission;
    toProto(message: ParamsChangePermission): Uint8Array;
    toProtoMsg(message: ParamsChangePermission): ParamsChangePermissionProtoMsg;
};
export declare const AllowedParamsChange: {
    typeUrl: string;
    encode(message: AllowedParamsChange, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllowedParamsChange;
    fromPartial(object: Partial<AllowedParamsChange>): AllowedParamsChange;
    fromAmino(object: AllowedParamsChangeAmino): AllowedParamsChange;
    toAmino(message: AllowedParamsChange): AllowedParamsChangeAmino;
    fromAminoMsg(object: AllowedParamsChangeAminoMsg): AllowedParamsChange;
    fromProtoMsg(message: AllowedParamsChangeProtoMsg): AllowedParamsChange;
    toProto(message: AllowedParamsChange): Uint8Array;
    toProtoMsg(message: AllowedParamsChange): AllowedParamsChangeProtoMsg;
};
export declare const SubparamRequirement: {
    typeUrl: string;
    encode(message: SubparamRequirement, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubparamRequirement;
    fromPartial(object: Partial<SubparamRequirement>): SubparamRequirement;
    fromAmino(object: SubparamRequirementAmino): SubparamRequirement;
    toAmino(message: SubparamRequirement): SubparamRequirementAmino;
    fromAminoMsg(object: SubparamRequirementAminoMsg): SubparamRequirement;
    fromProtoMsg(message: SubparamRequirementProtoMsg): SubparamRequirement;
    toProto(message: SubparamRequirement): Uint8Array;
    toProtoMsg(message: SubparamRequirement): SubparamRequirementProtoMsg;
};
