import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { GodPermission, GodPermissionProtoMsg, GodPermissionSDKType, SoftwareUpgradePermission, SoftwareUpgradePermissionProtoMsg, SoftwareUpgradePermissionSDKType, TextPermission, TextPermissionProtoMsg, TextPermissionSDKType, CommunityCDPRepayDebtPermission, CommunityCDPRepayDebtPermissionProtoMsg, CommunityCDPRepayDebtPermissionSDKType, CommunityCDPWithdrawCollateralPermission, CommunityCDPWithdrawCollateralPermissionProtoMsg, CommunityCDPWithdrawCollateralPermissionSDKType, CommunityPoolLendWithdrawPermission, CommunityPoolLendWithdrawPermissionProtoMsg, CommunityPoolLendWithdrawPermissionSDKType, ParamsChangePermission, ParamsChangePermissionProtoMsg, ParamsChangePermissionSDKType } from "./permissions";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TallyOption enumerates the valid types of a tally. */
export declare enum TallyOption {
    /** TALLY_OPTION_UNSPECIFIED - TALLY_OPTION_UNSPECIFIED defines a null tally option. */
    TALLY_OPTION_UNSPECIFIED = 0,
    /** TALLY_OPTION_FIRST_PAST_THE_POST - Votes are tallied each block and the proposal passes as soon as the vote threshold is reached */
    TALLY_OPTION_FIRST_PAST_THE_POST = 1,
    /** TALLY_OPTION_DEADLINE - Votes are tallied exactly once, when the deadline time is reached */
    TALLY_OPTION_DEADLINE = 2,
    UNRECOGNIZED = -1
}
export declare const TallyOptionSDKType: typeof TallyOption;
export declare const TallyOptionAmino: typeof TallyOption;
export declare function tallyOptionFromJSON(object: any): TallyOption;
export declare function tallyOptionToJSON(object: TallyOption): string;
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommittee {
    $typeUrl?: "/kava.committee.v1beta1.BaseCommittee";
    id: bigint;
    description: string;
    members: Uint8Array[];
    permissions: (GodPermission & SoftwareUpgradePermission & TextPermission & CommunityCDPRepayDebtPermission & CommunityCDPWithdrawCollateralPermission & CommunityPoolLendWithdrawPermission & ParamsChangePermission & Any)[] | Any[];
    /** Smallest percentage that must vote for a proposal to pass */
    voteThreshold: string;
    /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */
    proposalDuration: Duration;
    tallyOption: TallyOption;
}
export interface BaseCommitteeProtoMsg {
    typeUrl: "/kava.committee.v1beta1.BaseCommittee";
    value: Uint8Array;
}
export type BaseCommitteeEncoded = Omit<BaseCommittee, "permissions"> & {
    permissions: (GodPermissionProtoMsg | SoftwareUpgradePermissionProtoMsg | TextPermissionProtoMsg | CommunityCDPRepayDebtPermissionProtoMsg | CommunityCDPWithdrawCollateralPermissionProtoMsg | CommunityPoolLendWithdrawPermissionProtoMsg | ParamsChangePermissionProtoMsg | AnyProtoMsg)[];
};
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommitteeAmino {
    id?: string;
    description?: string;
    members?: string[];
    permissions?: AnyAmino[];
    /** Smallest percentage that must vote for a proposal to pass */
    vote_threshold?: string;
    /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */
    proposal_duration?: DurationAmino;
    tally_option?: TallyOption;
}
export interface BaseCommitteeAminoMsg {
    type: "/kava.committee.v1beta1.BaseCommittee";
    value: BaseCommitteeAmino;
}
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommitteeSDKType {
    $typeUrl?: "/kava.committee.v1beta1.BaseCommittee";
    id: bigint;
    description: string;
    members: Uint8Array[];
    permissions: (GodPermissionSDKType | SoftwareUpgradePermissionSDKType | TextPermissionSDKType | CommunityCDPRepayDebtPermissionSDKType | CommunityCDPWithdrawCollateralPermissionSDKType | CommunityPoolLendWithdrawPermissionSDKType | ParamsChangePermissionSDKType | AnySDKType)[];
    vote_threshold: string;
    proposal_duration: DurationSDKType;
    tally_option: TallyOption;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommittee {
    $typeUrl?: "/kava.committee.v1beta1.MemberCommittee";
    baseCommittee?: BaseCommittee;
}
export interface MemberCommitteeProtoMsg {
    typeUrl: "/kava.committee.v1beta1.MemberCommittee";
    value: Uint8Array;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommitteeAmino {
    base_committee?: BaseCommitteeAmino;
}
export interface MemberCommitteeAminoMsg {
    type: "/kava.committee.v1beta1.MemberCommittee";
    value: MemberCommitteeAmino;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommitteeSDKType {
    $typeUrl?: "/kava.committee.v1beta1.MemberCommittee";
    base_committee?: BaseCommitteeSDKType;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommittee {
    $typeUrl?: "/kava.committee.v1beta1.TokenCommittee";
    baseCommittee?: BaseCommittee;
    quorum: string;
    tallyDenom: string;
}
export interface TokenCommitteeProtoMsg {
    typeUrl: "/kava.committee.v1beta1.TokenCommittee";
    value: Uint8Array;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommitteeAmino {
    base_committee?: BaseCommitteeAmino;
    quorum?: string;
    tally_denom?: string;
}
export interface TokenCommitteeAminoMsg {
    type: "/kava.committee.v1beta1.TokenCommittee";
    value: TokenCommitteeAmino;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommitteeSDKType {
    $typeUrl?: "/kava.committee.v1beta1.TokenCommittee";
    base_committee?: BaseCommitteeSDKType;
    quorum: string;
    tally_denom: string;
}
export declare const BaseCommittee: {
    typeUrl: string;
    encode(message: BaseCommittee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseCommittee;
    fromPartial(object: Partial<BaseCommittee>): BaseCommittee;
    fromAmino(object: BaseCommitteeAmino): BaseCommittee;
    toAmino(message: BaseCommittee): BaseCommitteeAmino;
    fromAminoMsg(object: BaseCommitteeAminoMsg): BaseCommittee;
    fromProtoMsg(message: BaseCommitteeProtoMsg): BaseCommittee;
    toProto(message: BaseCommittee): Uint8Array;
    toProtoMsg(message: BaseCommittee): BaseCommitteeProtoMsg;
};
export declare const MemberCommittee: {
    typeUrl: string;
    encode(message: MemberCommittee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MemberCommittee;
    fromPartial(object: Partial<MemberCommittee>): MemberCommittee;
    fromAmino(object: MemberCommitteeAmino): MemberCommittee;
    toAmino(message: MemberCommittee): MemberCommitteeAmino;
    fromAminoMsg(object: MemberCommitteeAminoMsg): MemberCommittee;
    fromProtoMsg(message: MemberCommitteeProtoMsg): MemberCommittee;
    toProto(message: MemberCommittee): Uint8Array;
    toProtoMsg(message: MemberCommittee): MemberCommitteeProtoMsg;
};
export declare const TokenCommittee: {
    typeUrl: string;
    encode(message: TokenCommittee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenCommittee;
    fromPartial(object: Partial<TokenCommittee>): TokenCommittee;
    fromAmino(object: TokenCommitteeAmino): TokenCommittee;
    toAmino(message: TokenCommittee): TokenCommitteeAmino;
    fromAminoMsg(object: TokenCommitteeAminoMsg): TokenCommittee;
    fromProtoMsg(message: TokenCommitteeProtoMsg): TokenCommittee;
    toProto(message: TokenCommittee): Uint8Array;
    toProtoMsg(message: TokenCommittee): TokenCommitteeProtoMsg;
};
export declare const Permission_InterfaceDecoder: (input: BinaryReader | Uint8Array) => GodPermission | SoftwareUpgradePermission | TextPermission | CommunityCDPRepayDebtPermission | CommunityCDPWithdrawCollateralPermission | CommunityPoolLendWithdrawPermission | ParamsChangePermission | Any;
export declare const Permission_FromAmino: (content: AnyAmino) => Any;
export declare const Permission_ToAmino: (content: Any) => AnyAmino;
