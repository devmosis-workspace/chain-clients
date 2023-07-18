import * as _m0 from "protobufjs/minimal";
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermission {
}
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermissionSDKType {
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermission {
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermissionSDKType {
}
/** TextPermission allows any text governance proposal. */
export interface TextPermission {
}
/** TextPermission allows any text governance proposal. */
export interface TextPermissionSDKType {
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermission {
}
/** CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal */
export interface CommunityCDPRepayDebtPermissionSDKType {
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermission {
}
/** CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal */
export interface CommunityCDPWithdrawCollateralPermissionSDKType {
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermission {
}
/** CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal */
export interface CommunityPoolLendWithdrawPermissionSDKType {
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermission {
    allowedParamsChanges: AllowedParamsChange[];
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermissionSDKType {
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
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirementSDKType {
    key: string;
    val: string;
    allowed_subparam_attr_changes: string[];
}
export declare const GodPermission: {
    encode(_: GodPermission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): GodPermission;
    fromPartial(_: Partial<GodPermission>): GodPermission;
};
export declare const SoftwareUpgradePermission: {
    encode(_: SoftwareUpgradePermission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SoftwareUpgradePermission;
    fromPartial(_: Partial<SoftwareUpgradePermission>): SoftwareUpgradePermission;
};
export declare const TextPermission: {
    encode(_: TextPermission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): TextPermission;
    fromPartial(_: Partial<TextPermission>): TextPermission;
};
export declare const CommunityCDPRepayDebtPermission: {
    encode(_: CommunityCDPRepayDebtPermission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CommunityCDPRepayDebtPermission;
    fromPartial(_: Partial<CommunityCDPRepayDebtPermission>): CommunityCDPRepayDebtPermission;
};
export declare const CommunityCDPWithdrawCollateralPermission: {
    encode(_: CommunityCDPWithdrawCollateralPermission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CommunityCDPWithdrawCollateralPermission;
    fromPartial(_: Partial<CommunityCDPWithdrawCollateralPermission>): CommunityCDPWithdrawCollateralPermission;
};
export declare const CommunityPoolLendWithdrawPermission: {
    encode(_: CommunityPoolLendWithdrawPermission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CommunityPoolLendWithdrawPermission;
    fromPartial(_: Partial<CommunityPoolLendWithdrawPermission>): CommunityPoolLendWithdrawPermission;
};
export declare const ParamsChangePermission: {
    encode(message: ParamsChangePermission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParamsChangePermission;
    fromPartial(object: Partial<ParamsChangePermission>): ParamsChangePermission;
};
export declare const AllowedParamsChange: {
    encode(message: AllowedParamsChange, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AllowedParamsChange;
    fromPartial(object: Partial<AllowedParamsChange>): AllowedParamsChange;
};
export declare const SubparamRequirement: {
    encode(message: SubparamRequirement, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SubparamRequirement;
    fromPartial(object: Partial<SubparamRequirement>): SubparamRequirement;
};
